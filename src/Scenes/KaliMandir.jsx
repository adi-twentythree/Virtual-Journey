import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

import kaliMandirC from '../assets/Models/KaliMandirC.glb';
import kaliMandirModel from '../assets/Models/KaliMandir.glb';
import kaliMandirMotif from '../assets/Models/KaliMandirMotif.glb';

import CustomLoader from '../components/Loader.jsx';
import Scene from '../components/Scene.jsx';

import { KM } from '../assets/Images/Images';

const Info = [
    {
        title: "Kali Mandir",
        description: "The Dimasa Kali Mandir, dedicated to Goddess Kali, is located in Khaspur, Cachar (Assam). This historic temple was built in 1743 by the Dimasa Kachari king Ramchandra Narayan Hasnu. Reflecting the rich cultural and religious heritage of the Dimasa kingdom, the temple stands as a testament to their devotion and architectural craftsmanship.",
        imgSrc: KM,
    }
];


const Model = ({ url, ...props }) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene.clone()} {...props} />;
};

const KaliMandir = () => {

    useGLTF.preload(kaliMandirC);
    useGLTF.preload(kaliMandirModel);
    useGLTF.preload(kaliMandirMotif);

    return (
        <Suspense fallback={<CustomLoader />}>
            <Scene
                Collider={<Model url={kaliMandirC} visible={false} />}
                Model={<Model url={kaliMandirModel} />}
                Motif={<Model url={kaliMandirMotif} />}
                scale={1}
                position={[0, 0, 0]}
                Info={Info} />
        </Suspense>
    );
}

export default KaliMandir;