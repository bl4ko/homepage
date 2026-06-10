"use client";
/**
 * Canvas for our main 3D Model.
 */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";

import CanvasLoader from "../CanvasLoader";

function Earth() {
  const earth = useGLTF("/models/planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  );
}

export default function EarthCanvas() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="h-[180px] md:h-[180px] lg:h-[250px]">
      <Canvas
        shadows
        frameloop={reducedMotion ? "demand" : "always"}
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={!reducedMotion}
            autoRotateSpeed={0.75}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
