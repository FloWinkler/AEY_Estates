import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float, useGLTF, Html } from "@react-three/drei";

import CanvasLoader from "../Loader";
import "../../index.css";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./models/laptop.gltf");
  return (
    <mesh
    rotation-y={5}
    >
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} position={[-20, 50, 10]}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1 }
        position={isMobile ? [0, -3, -2.2] : [0, -1.5, -1.5]}
      />
        <Html
          transform
          wrapperClass="html-screen"
          distanceFactor={ 1.17 }
          scale={isMobile ? 0.7 : 3.4}
          position={[ 0, 0.05, -2.9 ]}
          rotation-x={ - 0.256 }
        >
          <iframe src="https://chess-game-inky.vercel.app/"/>
        </Html>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas 
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{
        fov: isMobile ? 60 : 45,
        near: 0.1,
        far: 2000,
        position: [ -3, 1.5, 4 ]
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          config={{ mass: 2, tension: 200 }}
          snap={{ mass: 4, tension: 400 }}
          enablePan={false}
          minAzimuthAngle={-Math.PI / 1.7} // Adjust the minimum azimuth angle
          maxAzimuthAngle={Math.PI / 100} // Adjust the maximum azimuth angle
        />
        {/* Allow Model to slightly hover */}
        {/* <Laptop isMobile={isMobile} position-y={ 0.25 } /> */}
        
        <Computers />
      </Suspense>
      
        <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;