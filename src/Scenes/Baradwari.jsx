import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

import baradwariC from '../assets/Models/BaradwariC.glb';
import baradwariModel from '../assets/Models/Baradwari.glb';
import baradwariMotif from '../assets/Models/BaradwariMotif.glb';

import CustomLoader from '../components/Loader.jsx';
import Scene from '../components/Scene.jsx';
import { CR } from '../assets/Images/Images';

const Info = [
    {
        title: "Baradwari",
        description: "The unfinished two-storied residential building of the Cachar kings. The last king of the dynasty, Gobinda Chandra, was killed in 1830 without an heir and the British rulers took over. The specialty of the remaining buildings of the Cachar area from that era was the use of bricks for buildings, whereas the usual construction material used in Assam was wood and other natural materials. The site is at Khaspore near Silchar and is maintained by the Archaeological Survey of India.",
        imgSrc: CR,
        //   link: "/baradwari",
    }
];

const Model = ({ url, ...props }) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene.clone()} {...props} />;
};

const Baradwari = () => {

    useGLTF.preload(baradwariC);
    useGLTF.preload(baradwariModel);
    useGLTF.preload(baradwariMotif);

    return (
        <Suspense fallback={<CustomLoader />}>
            <Scene
                Collider={<Model url={baradwariC} visible={false} />}
                Model={<Model url={baradwariModel} />}
                Motif={<Model url={baradwariMotif} />}
                scale={1}
                position={[0, 0, 0]}
                Info={Info} />
        </Suspense>
    );
}

export default Baradwari;