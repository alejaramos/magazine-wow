import css from "../styles/Home.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { OrbitControls, useTexture, Text, Box } from "@react-three/drei";
import Sun from "../Components/Sun/Sun";
import Head from "next/head";
import Main from "../Components/Main/MainComponent";
import LatestNews from "../Components/LatestNews/LatestNews";
import { useRouter } from "next/router";
import { ArticleWideScreen } from "../Components/ArticleWideScreen/ArticleWideScreen";

export default function Home({ newses, sections }) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>WOW! MAG</title>
      </Head>
      <ArticleWideScreen />
      {sections.map((section, i) => (
        <LatestNews newses={newses[i]} section={section} color={section.color} indice={i}/>
        ))}
      <Main />
      <Box id="theSun">
        <Sun newses={newses} css={css} />
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const [newsesReq, sectionsReq] = await Promise.all([
    fetch(`https://rito-mono.herokuapp.com/api/news/`),
    fetch(`https://rito-mono.herokuapp.com/api/section/`),
  ]);
const [newses, sections]=await Promise.all([
  newsesReq.json(),
  sectionsReq.json()
])
  return { props: { newses, sections } };
}
