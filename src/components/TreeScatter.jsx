import * as THREE from 'three';
import { useMemo } from 'react';
import { Instances, Instance } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

import treemodel from '../assets/Models/Tree.glb';

function TreeScatter({ count = 10 }) {
    const { nodes, materials } = useGLTF(treemodel); // Load tree model
    const positions = useMemo(() => {
        return Array.from({ length: count }).map(() => [
            Math.random() * 500 - 250, // X position
            0, 
            Math.random() * 500 - 250, // Z position
        ]);
    }, [count]);

    return (
        <group>
        <Instances limit={count} geometry={nodes.Tree_1.geometry} material={materials.Leaf}>
          {positions.map((pos, i) => (
            <Instance key={`leaf-${i}`} position={pos} scale={[2, 2, 2]} />
          ))}
        </Instances>
        
        <Instances limit={count} geometry={nodes.Tree_2.geometry} material={materials.Trunk}>
          {positions.map((pos, i) => (
            <Instance key={`trunk-${i}`} position={pos}scale={[2, 2, 2]} />
          ))}
        </Instances>
  
        <Instances limit={count} geometry={nodes.Tree_3.geometry} material={materials.Branch}>
          {positions.map((pos, i) => (
            <Instance key={`branch-${i}`} position={pos} scale={[2, 2, 2]} />
          ))}
        </Instances>
      </group>
    );
}

export default TreeScatter;
