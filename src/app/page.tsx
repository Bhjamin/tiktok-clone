"use client";
import Viewbox from "./components/Viewbox";
import { Canvas } from "@react-three/fiber";
import Floor from "./components/Floor";
import Controls from "./components/OrbitControls";

export default function Home() {
  return (
    // <main className="w-full h-auto flex justify-center">
    //   <Viewbox />
    // </main>
    <main className="w-screen h-screen">
      <Canvas
        shadows
        className="bg-gradient-to-br from-purple-400 to-pink-500"
        camera={{
          position: [7, 3, 7],
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight castShadow position={[0, 5, 0]} intensity={0.3} />
        <Controls />
        <mesh castShadow receiveShadow position={[0, 3, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="pink" />
        </mesh>
        <Floor castShadow receiveShadow />
      </Canvas>
    </main>
  );
}
