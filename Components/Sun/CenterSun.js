import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { useTexture } from "@react-three/drei";

export default function CenterSun() {
  const colorMap = useTexture("purpleSun.png");
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? 2.5 : 1.5,
    config: config.wobbly,
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.z = a;
  });

  return (
    <animated.mesh
      scale={scale}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <sphereBufferGeometry />
      <meshStandardMaterial color="#eda22f" />
    </animated.mesh>
  );
}
