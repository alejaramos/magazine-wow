import {
  Box,
  Heading,
  Button,
  IconButton,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";

export const ArticleWideScreen = () => {
  const [isMobile] = useMediaQuery("(max-width: 775px)");

  return (
      <Box 
      position="relative"
      >
        <Text
          fontFamily="PP Eiko"
          fontSize={isMobile ? "18" : "38px"}
          color="#FFFFFF"
          textAlign={["left", "left", "right", "right"]}
          zIndex="2"
          letter-spacing="0.2px"
          fontWeight="bold"
          position="absolute"
          left="5.41%"
          right=" 12.04%"
          top="64.95%"
          bottom="18.33%"
        >
          ¿Por qué el movimiento de la positividad <br />
          del cuerpo es fundamental? 5 Claves para sumarte
        </Text>
        <Image
          src="/ArticleWideScreen.webp"
          alt="Article"
          width="100%"
          height="30 em"
        />
      </Box>
  );
};
