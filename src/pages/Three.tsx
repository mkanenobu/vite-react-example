import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box: React.VFC<{ position: [number, number, number] }> = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) {
      // @ts-ignore
      ref.current.rotation.x += 0.01;
      if (!clicked) {
        // @ts-ignore
        ref.current.rotation.y += 0.03;
      }
    }
  });

  return (
    <mesh
      position={props.position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export const Three: React.VFC = () => {
  return (
    <div>
      <p>Three.js</p>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-3, 0, 0]} />
        <Box position={[3, 0, 0]} />
      </Canvas>
    </div>
  );
};
