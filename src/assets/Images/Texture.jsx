import { TextureLoader, NearestFilter, RepeatWrapping  } from 'three'

import {
    groundBC,
    groundN,
    groundR


} from './Images'

const groundTexBC = new TextureLoader().load(groundBC)
const groundTexN = new TextureLoader().load(groundN)
const groundTexR = new TextureLoader().load(groundR)

groundTexBC.magFilter = NearestFilter;
groundTexN.magFilter = NearestFilter;
groundTexR.magFilter = NearestFilter;

groundTexBC.wrapS = RepeatWrapping
groundTexBC.wrapT = RepeatWrapping

groundTexN.wrapS = RepeatWrapping
groundTexN.wrapT = RepeatWrapping

groundTexR.wrapS = RepeatWrapping
groundTexR.wrapT = RepeatWrapping

export {
    groundTexBC,
    groundTexN,
    groundTexR
}