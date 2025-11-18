import { useFrame } from '@react-three/fiber'
import { useXRControllerLocomotion, useXRInputSourceState } from '@react-three/xr'
import { useRef } from 'react'

const SNAP_TURN_ANGLE = Math.PI / 6; 
const SNAP_THRESHOLD = 0.7;

export function VRPlayerControl({ playerJump, playerMove, playerRotate }) {
  const controllerRight = useXRInputSourceState('controller', 'right')
  const canTurn = useRef(true);

  const physicsMove = (velocity) => {
    playerMove({ newVelocity: velocity })
  }

  useXRControllerLocomotion(physicsMove, { speed: 5, stick: 'left' })

  useFrame(() => {
    if (!controllerRight?.gamepad?.buttons || !controllerRight?.gamepad?.axes) {
      return;
    }

    const { buttons, axes } = controllerRight.gamepad

    if (buttons[0]?.pressed) {
      playerJump?.()
    }

    const stickX = axes[2] || 0;

    if (Math.abs(stickX) > SNAP_THRESHOLD) {
      if (canTurn.current) {
        const direction = Math.sign(stickX);
        playerRotate(-direction * SNAP_TURN_ANGLE);
        canTurn.current = false;
      }
    } else {
      canTurn.current = true;
    }
  })

  return null
}



// import { useFrame } from '@react-three/fiber'
// import { useXRControllerLocomotion, useXRInputSourceState, XROrigin } from '@react-three/xr'
// import * as THREE from 'three'

// export function VRPlayerControl({ playerJump, playerMove }) {
//   const controllerRight = useXRInputSourceState('controller', 'right')
//   const physicsMove = (velocity, rotationYVelocity) => {

//     playerMove({
//       forward: false,
//       backward: false,
//       left: false,
//       right: false,
//       rotationYVelocity,
//       velocity: undefined,
//       newVelocity: velocity,
//     })
//   }

//   useXRControllerLocomotion(physicsMove, { speed: 5 })

//   useFrame(() => {
//     if (controllerRight?.gamepad?.['a-button']?.state === 'pressed') {
//       playerJump?.()
//     }
//   })

//   return <XROrigin position={[0, 0, 0]} />
// }

