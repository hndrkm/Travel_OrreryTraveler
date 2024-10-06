import { Canvas } from "@react-three/fiber"
import Anvorguesa from "./Anvorguesa"
import { Stars} from '@react-three/drei'
import Cat from "./Cat"
import CubeSat from "./CubeSat"

function Scene2D() {

    return (
        <div className="w-full h-full">
            <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 400], far: 500, near: 100 }}>
                <Anvorguesa/>
                <Cat></Cat>
                <CubeSat></CubeSat>
                <Stars saturation={0} count={400} speed={1.5} radius={220} />
            </Canvas>
        </div>
    )
}
export default Scene2D