import { Image, Text, Box } from "@chakra-ui/react";

const IMG = ({ news }) => {


 
  return news.field_img_primary ? (
    <Box pt="2em" pb="1em" alignText="center" my='1em'>

      <Image width="100%" src={news.field_img_primary || news} />
      <Text textAlign="left" fontSize="12px" color="#757575">
        {news.title}
      </Text>
    </Box>
  ) : (
    <Box></Box>
  );
};

export default IMG;
