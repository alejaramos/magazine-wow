import ArticleHeader from "./Article/ArticleHeader";
import Paragraph from "../Common/Article/Paragraph";
import Quote from "../Common/Article/Quote";
import IMG from "../Common/Article/IMG";
import React from "react";
import OList from "../Common/Article/OList"
import SectionTitle from "../Common/Article/SectionTitle"
import Iframe from "../Common/Article/Iframe";
import UList from "../Common/Article/UList";

const Components = {
  Paragraph: Paragraph,
  Quote: Quote,
  IMG: IMG,
  OList:OList,
  SectionTitle:SectionTitle,
  Iframe:Iframe,
  UList:UList,
};

export default (block) => {
  return React.createElement(Components[block.type], {
    news: block.content,
  });
};
