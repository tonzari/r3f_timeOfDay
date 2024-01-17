import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import TimeOfDayProvider from './TimeOfDayProvider'

function App() {

  return <>
    <TimeOfDayProvider>
      <Canvas
        camera={{near:0.01, far:100}}
        shadows
        gl={{ preserveDrawingBuffer: true }}
        eventSource={document.getElementById('root')}
        eventPrefix="client"
      >
        <Experience />
      </Canvas>
    </TimeOfDayProvider>
  </>
}

export default App
