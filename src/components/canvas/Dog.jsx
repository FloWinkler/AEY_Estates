import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
// import { DirectionalLight } from "three";

const Dog = () => {
  const dog = useGLTF("./dog/scene.gltf");

  return (
    <mesh>
    {/* <hemisphereLight intensity={0.15} groundColor='black' /> */}
      <pointLight 
        castShadow
        shadowMapSizeWidth={1024}
        shadowMapSizeHeight={1024}
        intensity={10} position={[-20, 50, 10]}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={dog.scene} scale={0.2} position-y={0} rotation-y={0.2} rotation-x={0.5} rotation-z={0.1}/>
    </mesh>
  );
};

const DogCanvas = () => {

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
        
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Dog />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default DogCanvas;