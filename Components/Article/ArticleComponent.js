import { Box, Text, Button } from "@chakra-ui/react";
import ArticleFooter from "./ArticleFooter";
import ArticleHeader from "./ArticleHeader";
import IMG from "../../Common/Article/IMG";
import ArticleBreadCrum from "./ArticleBreadCrum";
import SocialNetworkDesktop from "./SocialNetworkDesktop";
import Paragraph from "../../Common/Article/Paragraph";
import SectionTitle from "../../Common/Article/SectionTitle";
import Quote from "../../Common/Article/Quote";
import UList from "../../Common/Article/UList";
import OList from "../../Common/Article/OList";
import Iframe from "../../Common/Article/Iframe";
import Generator from "../Generator";


const ArticleComponent = ({ news }) => {
  console.log("SOY NEWS", news);

  const content = news.content;

  return (
    <>
      <Box display="-ms-flexbox" flexDir="column" p="1em" px="1em">
        <ArticleBreadCrum news={news} />
        <ArticleHeader news={news} />
        <IMG news={news} />
{/* 
         <SectionTitle news={news} />
        <UList news={news} />  */}
          {content.map((item) => Generator(item))}   
        {console.log("🚀 ~ file: ArticleComponent.js ~ line 31 ~ ArticleComponent ~ content", news)}

        {/*<Quote />
         <Box
          display="flex"
          alignItems="left"
          flexDir={["column", "column", "row", "row"]}
          pt="1em"
        >
          <SocialNetworkDesktop />
          <Paragraph news={news} />
       n
        </Box> */}

        <Box
          display="flex"
          textAlign="left"
          alignItems="center"
          flexDir={["column", "column", "row", "row"]}
          pt="2em"
          spacing="8px"
        >
          <Text pl="0.5em" textAlign="left" color="#757575" fontSize="18px">
            En esta nota:
          </Text>
          <Button
            variant="outline"
            border="2px"
            backgroundColor="white"
            borderColor="#E32B6C"
            borderRadius="439px"
            fontWeight="600"
            fontSize="14px"
            color="#343434"
            width="160px"
          >
            {news.field_category}
          </Button>
        </Box>
      </Box>
      <ArticleFooter />
    </>
  );
};

export default ArticleComponent;
