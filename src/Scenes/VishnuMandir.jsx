import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

import vishnuMandirC from '../assets/Models/VishnuMandirC.glb';
import vishnuMandirModel from '../assets/Models/VishnuMandir.glb';
import vishnuMandirMotif from '../assets/Models/VishnuMandirMotif.glb';


import CustomLoader from '../components/Loader.jsx';
import Scene from '../components/Scene.jsx';

import { VM } from '../assets/Images/Images';

const Info = [
    {
        title: "Vishnu Mandir",
        description: "The Vishnu Temple, dedicated to Lord Vishnu, was built during the reign of the Dimasa Kachari king Krishnachandra Narayan Hasnu. Located within the historic Kaspur Rajbari in Cachar, Assam, this temple stands as a testament to the rich cultural and architectural heritage of the Dimasa kingdom.",
        imgSrc: VM,
    }
];


const Model = ({ url, ...props }) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene.clone()} {...props} />;
};

const VishnuMandir = () => {

    useGLTF.preload(vishnuMandirC);
    useGLTF.preload(vishnuMandirModel);
    useGLTF.preload(vishnuMandirMotif);

    return (
        <Suspense fallback={<CustomLoader />}>
            <Scene
                Collider={<Model url={vishnuMandirC} visible={false} />}
                Model={<Model url={vishnuMandirModel} />}
                Motif={<Model url={vishnuMandirMotif} />}
                scale={1}
                position={[0, 0.1, 0]}
                Info={Info} />
        </Suspense>
    );
}

export default VishnuMandir;