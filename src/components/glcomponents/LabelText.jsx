import { Billboard, Text } from '@react-three/drei'
import { useRef ,useState} from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useNavigate } from "react-router-dom";
function LabelText({ link='/',children, ...props }) {
    const navigate = useNavigate();
    const color = new THREE.Color()
    const fontProps = { fontSize: 30, letterSpacing: -0.05, lineHeight: 5, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    function Re(){
        navigate(link);

        console.log("ss")
    }
    useFrame(({ camera }) => {
        ref.current.material.color.lerp(color.set(hovered ? 'white' : '#bf612a'), 0.1)
    })
    return (
        <Billboard {...props}>
            <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => Re()} {...fontProps} children={children} />
        </Billboard>

    )
}

export default LabelText