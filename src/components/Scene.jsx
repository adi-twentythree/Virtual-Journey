import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { createXRStore, XR } from '@react-three/xr';
import { interactionGroups, Physics, RigidBody } from '@react-three/rapier';
import { PointerLockControls, KeyboardControls, OrbitControls } from '@react-three/drei';

import { Ground } from '../components/Ground.jsx';
import { Light } from '../components/Light.jsx';
import Player from '../components/Player.jsx';

import Overlay from '../components/Overlay.jsx';

const store = createXRStore();

const Scene = ({ Collider, Model, Motif, scale, position, Info }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="relative h-screen">
            <KeyboardControls
                map={[
                    { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
                    { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
                    { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
                    { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
                    { name: 'jump', keys: ['Space'] },
                    { name: 'run', keys: ['ShiftLeft'] },
                ]}
            >
                <Canvas dpr={[1, 1.5]} shadows camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 1.6, 3] }}>
                    <XR store={store}>
                        <Light />
                        <Physics gravity={[0, -30, 0]}>
                            <Ground collisionGroups={interactionGroups([0, 1], [0])} />

                            {!isMobile && <Player />}

                            <RigidBody mass={1} type="fixed" scale={scale} position={position}>
                                    {Collider}
                                    {Model}
                                    {Motif}
                            </RigidBody>
                        </Physics>

                        {!isMobile ? (
                            <PointerLockControls />
                        ) : (
                            <OrbitControls maxPolarAngle={Math.PI / 2.1} minDistance={15} maxDistance={40} />
                        )}
                    </XR>
                </Canvas>
            </KeyboardControls>

            <Overlay store={store} isMobile={isMobile} Info={Info}/>
        </section>
    );
};

export default Scene;
