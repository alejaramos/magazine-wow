import { Heading, Flex, Box, Image, VStack, Grid, GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";

const SmallNewsCard = ({news}) => {
  return (
    <Grid gridTemplateRows="7.5em 7.5em">
      <GridItem>
          <Image
          width="100%" height="100%"
          src={news.field_img_primary}
          ></Image>
      </GridItem>
      <GridItem bg="white" border="1px solid #D2D2D2" fontFamily="PP Eiko" textAlign={"center"} display='flex' flexDirection='column' justifyContent='center'>
        <Link href={`/article/${news.url}`}>
            <Text>
              {news.title}
            </Text>
        </Link> 
      </GridItem>
    </Grid>
  );
};

export default SmallNewsCard;
