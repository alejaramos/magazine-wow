// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// route http://localhost:3000/[emotion]/[articleName]

import { useRouter } from "next/router";
import Head from "next/head";
import ArticleComponent from "../../Components/Article/ArticleComponent";

export default function Article({ news }) {
  const router = useRouter();
  const { articleName } = router.query;
 
  

  return (
    <>
      <Head>
        <title>{articleName}</title>
      </Head>

      <ArticleComponent news={news} />
    </>
  );
}

export async function getServerSideProps({ params }) {

  const req = await fetch(`https://rito-mono.herokuapp.com/api/news/${params.articleName}`);
  const data = await req.json();
  return { props: { news: data[0] } };
}
