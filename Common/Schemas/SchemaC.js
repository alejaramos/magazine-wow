
import {Box, VStack, Grid, GridItem} from '@chakra-ui/react'
import LateralNewsCard from '../LateralNewsCard'
import { XLargeNewsCard } from '../XLargeNewsCard'

const SchemaC = ({newses}) => {
  
  return (
    <Grid width={["70%", "50%"]}>
      <GridItem>
        <XLargeNewsCard news={newses[0]}/>
      </GridItem>
      <GridItem>
        <Box mt='1em'>
          <LateralNewsCard news={newses[1]}/>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default SchemaC