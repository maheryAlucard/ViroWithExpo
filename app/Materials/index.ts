import { ViroMaterials } from "../ViroComponentsImporter";


export const creteMaterial = (name: string, texture: NodeRequire) => ViroMaterials.createMaterials({
    [name]: {
        diffuseTexture: texture
    }
})