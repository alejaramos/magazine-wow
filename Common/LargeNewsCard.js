import { Grid, GridItem, Text, Flex, Box, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";

const LargeNewsCard = ({ news }) => {
  return (
        <Box position={[null, 'relative']} width='100%' height='100%' border="1px solid #D2D2D2">
          <Image height={["7.5em", "100%"]} width='100%' src={news.field_img_primary}/>
          <Box bottom={[null, '10%']} height={["7.5em", null]}  position={["relative", 'absolute']}  fontFamily="PP Eiko" textAlign={"center"} color={["black", "white"]} display={['flex', null]} flexDirection={['column', null]} justifyContent={['center', null]}>
            <Link href={`/article/${news.url}`}>
              <Text fontSize={['15px', '30px']} fontFamily="PP Eiko">{news.title}</Text>
            </Link>
          </Box>
        </Box>

  );
};

export default LargeNewsCard;