import { MinusIcon } from "@chakra-ui/icons";
import {Heading, Text, Box} from '@chakra-ui/react'

const ArticleHeader = ({news}) => {
  return (
      <Box   
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      >
    <Heading
    fontWeight="500"
    fontFamily='PP Eiko'
    fontSize={["36px",'40px','52px','60px']}
    lineHeight="1em"
    letterSpacing="0.2px"
    >
    {news.title}
  </Heading>
  <Text p="1em" px="3.5em" pt='1.25em'fontSize={["18px",'24px','30px','32px']} lineHeight="1.25em">
    {news.subtitle}
  </Text>
  <MinusIcon width="24px" />
  <Text pt="1em">
    Por <strong>{news.field_credits}</strong>
  </Text>
  <Text pb="1em" color="#757575">
  {news.publication_date?.slice(2,10)||"28 de noviembre de 2021"}
  </Text>
      </Box>
  )
}

export default ArticleHeader