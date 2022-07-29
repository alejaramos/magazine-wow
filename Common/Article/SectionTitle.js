import { Heading } from "@chakra-ui/react";

const SectionTitle = ({ news }) => {
  return (
    <Heading
      fontFamily="PP Eiko"
      fontWeight="600"
      fontSize="24px"
      lineHeight="1.5em"
      textAlign="left"
      py='1em'
      px="0.5em"
      my='1em'
    >{news}</Heading>
  );
};

export default SectionTitle;
