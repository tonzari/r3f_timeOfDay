import { Html, OrbitControls } from "@react-three/drei"
import { useContext } from "react"
import { TimeOfDayContext } from "./TimeOfDayProvider"
import { format } from 'date-fns'

export default function Experience() {

    const { currentTime } = useContext(TimeOfDayContext)

    return (
        <>    
            <OrbitControls />
            <mesh
                castShadow
                receiveShadow
                scale={100} 
                rotation={[-Math.PI/2,0,0]}
            >
                <planeGeometry />
                <meshStandardMaterial />
            </mesh>
            <mesh
                castShadow
                receiveShadow
            >
                <Html>{currentTime.getHours() > 12 ? "I already ate lunch. Dinner next!" : "I'm looking forward to lunch"}</Html>
                <sphereGeometry />
                <meshStandardMaterial />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                scale={2} 
                position={[-3,0,0]}
            >
                <Html>{currentTime.getSeconds() % 10 === 0 ? "Divisible by ten!" : format(currentTime,'hh:mm:ss a')}</Html>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                position={[3,0,0]}
            >
                <Html>{currentTime.getMonth() >= 0 && currentTime.getMonth() <= 3 ? "Q1 is such a drag. Too cold!" : `Yay, it's ${new Intl.DateTimeFormat("en-US", {month:"long"}).format(currentTime)}`}</Html>
                <torusGeometry />
                <meshStandardMaterial />
            </mesh>

            <directionalLight castShadow color={currentTime.getSeconds() % 2 === 0 ? 'white' : 'red'}/>
            <pointLight castShadow color={'red'}/>
            <spotLight castShadow color={'blue'}/>
            <ambientLight color={currentTime.getHours() >= 17 ? 'blue' : 'yellow'}/>
        </>    
    )
}