import { Box, Text } from "@chakra-ui/react";

const Iframe = ({ news }) => {
  console.log(news);
  return (
    <Box px="1em" pt="2em" pb="1em" alignText="center" width="100%" my='1em'>
      <iframe
        width="560"
        height="315"
        src={news}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* <Text textAlign="left" fontSize="12px" color="#757575">
        {news.title}
      </Text> */}
    </Box>
  );
};

export default Iframe;
