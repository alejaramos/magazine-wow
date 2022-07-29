import { Text, Box } from "@chakra-ui/react";

const Paragraph = ({news}) => {
  return (
    <Box>
      <Text
        fontWeight="500"
        fontSize="18px"
        lineHeight="1.5em"
        color="#343434"
        textAlign="left"
        my='1em'
      >
        {news}
      
      </Text>
      <Text fontSize="400px"> </Text>
    </Box>
  );
};

export default Paragraph;
