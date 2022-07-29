import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";
import Link from "next/link";

const LateralNewsCard = ({ news }) => {
  return (
    <Grid height={[null, "100%"]} templateColumns={[null, '30% 70%']} gridTemplateRows={["7.5em 7.5em", "1fr"]} border="1px solid #D2D2D2">
      <GridItem border="1px solid #D2D2D2">
        <Image objectFit='cover' src={news.field_img_primary}/>
      </GridItem>
      <GridItem bg="white" border="1px solid #D2D2D2" fontFamily="PP Eiko" textAlign={"center"} display='flex' flexDirection='column' justifyContent='center'>
        <Link href={`/article/${news.url}`}>
          <Text>{news.title}</Text>
        </Link>
      </GridItem>
    </Grid>
    
  );
};
export default LateralNewsCard;