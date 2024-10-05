import { useRef } from 'react'
import { Line } from '@react-three/drei'
import { Vector3 } from 'three'
/**
* @param {number} smA semiEje mayor de la elipse (a)
* @param {number} oE  exentricidad (e)
* @param {number} oI  inclinacion angulo con respecto x-y plano de la elipse (i)  
* @param {number} aN  (node) longitud de asenso de nodo
* @param {number} aP  argumento de perihelio (peri)
**/
function Orbit(
    { 
        smA = 1,
        oE = 0.01671022, 
        oI = 0.00005, 
        aP = 102.94719, 
        aN = 0,
        colorP, ...props }) {
    
    const ref = useRef()
    oI = oI * 0.01745329
    aP = aP * 0.01745329
    aN = aN * 0.01745329
    var sLR = smA * (1 - (oE ^ 2));
    var points = []
    let i = 0.0
    var j = 0
    var point = []
    while (i < Math.PI * 2) {
        var r = sLR / (1 + (oE * Math.cos(i)))

        point[0] = r * (Math.cos(aP + i) * Math.cos(aN) - Math.cos(oI) * Math.sin(aP + i) * Math.sin(aN))
        point[1] = r * (Math.cos(aP + i) * Math.sin(aN) + Math.cos(oI) * Math.sin(aP + i) * Math.cos(aN));
        point[2] = r * (Math.sin(aP + i) * Math.sin(oI));
        var position = new Vector3(point[0], point[1],point[2])
        points[j] = position
        i = i + 0.0785;
        j++
    }
    colorP[0] = colorP[0]*2;
    colorP[1] = colorP[1]*2;
    colorP[2] = colorP[2]*2;
    //console.log(points)
    return (
        <group>
            <Line worldUnits points={points} color={colorP} lineWidth={0.002}>
            </Line>
        </group>

    )
}

export default Orbit
