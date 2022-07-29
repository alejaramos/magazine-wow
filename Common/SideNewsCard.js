import {Box, Image, Text, Grid, GridItem} from '@chakra-ui/react'
import Link from 'next/link'

const SideNewsCard = ({news}) => {
  return (
      <Grid gridTemplateRows={["7.5em 7.5em", "16em 15em"]} gap={0}>
        <GridItem>
          <Image width="100%" height="100%"  src={news.field_img_primary}/>
        </GridItem>
        <GridItem bg="white" border="1px solid #D2D2D2" fontFamily="PP Eiko" textAlign={"center"} display='flex' flexDirection='column' justifyContent='center'>
          <Link href={`/article/${news.url}`} >
          <Text fontFamily="PP Eiko">
            {news.title}
          </Text>
          </Link>
        </GridItem>
      </Grid>
  )
}

export default SideNewsCard