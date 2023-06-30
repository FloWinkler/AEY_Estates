import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  PresentationControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const handleMouseDown = () => {
    setTarget([0.1, 0, 0]);
  };

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} 
        onClick={handleMouseDown}
        onPointerDown={handleMouseDown}
      >
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color='#fff8eb'
          visible={false}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          enableZoom={false}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>

        <PresentationControls
            global
            rotation={[ 0.13, 0.1, 0 ]}
            polar={[ -0.4, 0.2 ]}
            azimuth={[ -1.0, 0.75 ]}
            config={{ mass: 2, tension: 200 }}
            snap={{ mass: 4, tension: 400 }}
            enableZoom={false}
        >
        <Ball imgUrl={icon} />

        </PresentationControls>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;