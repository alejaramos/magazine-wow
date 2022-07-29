import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export const XLargeNewsCard = ({ news }) => {
  return (
    <Box position={[null,"relative"]}>
      <Box height={["7.5em", "100%"]} width="100%">
        <Image src={news.field_img_primary} objectFit="contain" width="100%"/>
      </Box>
      <Box height={["7.5em", null]} position={["relative", null]} bg="white" border="1px solid #D2D2D2" fontFamily="PP Eiko" textAlign={"center"} display='flex' flexDirection='column' justifyContent='center'>
        <Link href={`/article/${news.url}`}>
          <Text fontFamily="PP Eiko">
            {news.title}
          </Text>
        </Link>
      </Box>
    </Box>
  );
};