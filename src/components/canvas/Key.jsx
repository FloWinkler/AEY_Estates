import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import CanvasLoader from "../Loader";

const Key = () => {
  const ref = useRef();
  const key = useGLTF("./key/scene.glb");

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.3; // slow tilt
      ref.current.rotation.y += delta * 0.3; // slow spin
      ref.current.rotation.z += delta * 0.3; // slight roll
    }
  });

  return (
    <>
      <pointLight intensity={5} position={[0, 0, 10]}  />
      <pointLight intensity={2} position={[10, 0, 0]}  />
      <pointLight intensity={5} position={[-10, 0, 0]}  />
      <pointLight intensity={2} position={[0, 10, 0]}  />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={12}  />

      <mesh ref={ref}>
        <primitive object={key.scene} scale={4} position={[0, -1, 1.5]} />
      </mesh>
    </>
  );
};

const KeyCanvas = () => {

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableZoom={false} 
        />
        <Key/>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default KeyCanvas;