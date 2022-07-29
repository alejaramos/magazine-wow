import { Heading } from "@chakra-ui/react";

const Quote = ({ news }) => {
  return (
    <Heading
      fontFamily="PP Eiko"
      fontWeight="900"
      fontSize={["18px", "20px", "22px", "24px"]}
      lineHeight="1.5em"
      textAlign="left"
      my="2em"
      px="1.5em"
      borderLeftWidth="3px"
      borderColor="#ED2D6E"
      pr="3em"
    >
      {"“ " + news + " ”"}
    </Heading>
  );
};

export default Quote;
