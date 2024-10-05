import { Billboard, Text } from '@react-three/drei'

function LabelObject({children, ...props }) {
    const fontProps = { fontSize: 0.1, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    return (
        <Billboard {...props}>
            <Text {...fontProps} children={children} />
        </Billboard>

    )
}

export default LabelObject