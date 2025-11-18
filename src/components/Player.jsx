import React, { useRef } from 'react';
import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CapsuleCollider, interactionGroups, RigidBody, useRapier } from '@react-three/rapier';
import * as THREE from 'three';
import { IfInSessionMode } from '@react-three/xr'

import { VRPlayerControl } from '../components/VRPlayerControl.jsx';

const SPEED = 5;
const RUN_MULTIPLIER = 2;
const JUMP_VELOCITY = 7.5;

const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

const Player = () => {
  const rigidBodyRef = useRef(null);
  const { rapier, world } = useRapier();
  const [, getKeys] = useKeyboardControls();

  const playerMove = ({ forward, backward, left, right, velocity, camera, isRunning, newVelocity }) => {
    if (!rigidBodyRef.current) return;
    const movementSpeed = isRunning ? SPEED * RUN_MULTIPLIER : SPEED;
    if (!velocity) velocity = rigidBodyRef.current?.linvel();

    if (newVelocity) {
      rigidBodyRef.current.setLinvel({ x: newVelocity.x, y: velocity?.y ?? 0, z: newVelocity.z }, true);
      return;
    }

    frontVector.set(0, 0, (backward ? 1 : 0) - (forward ? 1 : 0));
    sideVector.set((left ? 1 : 0) - (right ? 1 : 0), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .applyQuaternion(camera.quaternion)
      .multiplyScalar(movementSpeed);

    rigidBodyRef.current.setLinvel({ x: direction.x, y: velocity?.y ?? 0, z: direction.z }, true);
  };

  const playerJump = () => {
    if (!rigidBodyRef.current) return;
    const playerCollider = rigidBodyRef.current.collider(0);

    const ray = world.castRay(
      new rapier.Ray(rigidBodyRef.current.translation(), { x: 0, y: -1, z: 0 }),
      10,
      true,
      undefined,
      interactionGroups([1, 0], [1]),

      playerCollider
    );
    const grounded = ray !== null && ray.timeOfImpact <= 1.25;

    if (grounded) {
      const velocity = rigidBodyRef.current.linvel();

      rigidBodyRef.current.setLinvel({ x: velocity.x, y: JUMP_VELOCITY, z: velocity.z }, true);
    }
  };

  const playerRotate = (rotationAngle) => {
    if (!rigidBodyRef.current) return;

    const currentRotation = new THREE.Quaternion().copy(rigidBodyRef.current.rotation());

    const rotationDelta = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 1, 0),
      rotationAngle
    );

    currentRotation.multiply(rotationDelta);

    rigidBodyRef.current.setRotation(currentRotation, true);
  };

  useFrame((state) => {
    if (!rigidBodyRef.current) return;
    const { forward, backward, left, right, jump, run } = getKeys();
    const velocity = rigidBodyRef.current.linvel();


    const { x, y, z } = rigidBodyRef.current.translation();
    state.camera.position.set(x, y + 0.8, z);


    playerMove({
      forward,
      backward,
      left,
      right,
      velocity,
      camera: state.camera,
      isRunning: run,
    });

    if (jump) playerJump();
  });

  return (
    <RigidBody
      ref={rigidBodyRef}
      mass={1}
      type="dynamic"
      position={[0, 10, 40]}
      enabledRotations={[false, false, false]}
      canSleep={false}
      collisionGroups={interactionGroups([0], [0, 1])}
    >
      <CapsuleCollider args={[0.75, 0.5]} />
      <IfInSessionMode allow={['immersive-ar', 'immersive-vr']}>
        <VRPlayerControl
          playerJump={playerJump}
          playerMove={playerMove}
          playerRotate={playerRotate}
        />
      </IfInSessionMode>
    </RigidBody>
  );
};

export default React.memo(Player);

