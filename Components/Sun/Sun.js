import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useState, Suspense, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import {
  OrbitControls,
  useTexture,
  Html,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Box } from "@chakra-ui/react";
import { useMediaQuery, Heading } from "@chakra-ui/react";
import CenterSun from "./CenterSun";
import { useRouter } from "next/router";

//

export default function Sun({ css, newses }) {
  const [hidden, setVisible] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 775px)");
  const router = useRouter();

  const handleClick = (e) => {
    const emotionSelected = e.object.model;
    const news = newses[emotionSelected][Math.floor(Math.random() * 3)];
    router.push(`/${news.emotion}/${news.url}`);
  };

  return (
    <Box id="containerSunContent" position="relative">
      <h1 className={isMobile ? css.responsiveTitle : css.tittle}>
        ¿Cómo te <br />
        <span style={{ fontSize: "0.5em" }}>sientes</span>
        <br />
        <span>hoy ?</span>
      </h1>

      <div className={css.scene}>
        <Canvas
          shadows={true}
          className={css.canvas}
          camera={{
            position: [-6, 7, 7],
          }}
        >
          {/* opcion autoRotate */}
          <OrbitControls autoRotate />

          <mesh position={[-3.5, 0, -3]} onClick={handleClick} model={1}>
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#936c5d" />
            <Html distanceFactor={25} position={[0, 0, -1]}>
              <h1 className={css.emotion}>Tristeza </h1>
            </Html>
          </mesh>

          <mesh position={[-4.5, 0, 0]} onClick={handleClick} model={2}>
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#2c91bf" />
            <Html
              style={{
                width: "100px",
              }}
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>Misterio </h1>
            </Html>
          </mesh>

          <mesh position={[-3.5, 0, 3]} onClick={handleClick} model={0}>
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#ffe32f" />
            <Html
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>Alegria </h1>
            </Html>
          </mesh>
          <mesh position={[-1.2, 0, 4.5]} onClick={handleClick} model={8}>
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#c8292d" />
            <Html
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>Pasion </h1>
            </Html>
          </mesh>
          <mesh position={[1.2, 0, 4.5]} onClick={handleClick} model={5}>
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#ff7012" />
            <Html
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>Diversion </h1>
            </Html>
          </mesh>
          <mesh position={[3.5, 0, 3]} onClick={handleClick} model={7}>
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#f1729b" />
            <Html
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>Amor </h1>
            </Html>
          </mesh>
          <mesh position={[4.5, 0, 0]} onClick={handleClick} model={4}>
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#66a463" />
            <Html
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>Naturaleza </h1>
            </Html>
          </mesh>
          <mesh position={[3.5, 0, -3]} onClick={handleClick} model={3}>
            <sphereBufferGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#5d2876" />
            <Html distanceFactor={25} position={[0, 0, -1]}>
              <h1 className={css.emotion}>Reflexion </h1>
            </Html>
          </mesh>
          <mesh position={[1.2, 0, -4.5]} onClick={handleClick} model={9}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#ff0094" />
            <Html
              style={{
                opacity: 10,
              }}
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>Accion </h1>
            </Html>
          </mesh>
          <mesh position={[-1.2, 0, -4.5]} onClick={handleClick} model={6}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#ffffff" />
            <Html
              distanceFactor={25}
              position={[0, 0, -1]}
              occlude
              onOcclude={setVisible}
            >
              <h1 className={css.emotion}>Paz </h1>
            </Html>
          </mesh>
          <CenterSun />
          <ambientLight intensity={0.1} />
          <directionalLight />
        </Canvas>
      </div>
    </Box>
  );
}
// "Alegria 0",
// "Tristeza 1",
// "Misterio 2",
// "Reflexion 3",
// "Naturaleza 4",
// "Diversion 5",
// "Paz 6",
// "Amor 7",
// "Pasion 8",
// "Accion 9",
