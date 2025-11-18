import { Sky, Environment } from '@react-three/drei';
import {
    SkyHDRI,
    RoseHDRI,
    MeadowHDRI,
    EmeadowHDRI,
    RestingHDRI,
} from '../assets/Hdri/Hdri'

export const Light = () => {

    return (
        <>
            <Environment files={RoseHDRI} background />
{/* 
            <directionalLight
                shadow-normalBias={0.06}
                position={[20, 30, 10]}
                color="#ffffff"
                intensity={2}
                castShadow
            /> */}

            <directionalLight castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

        </>
    )

}