
import { Box, Grid, GridItem ,Flex} from '@chakra-ui/react'
import SideNewsCard from '../SideNewsCard'
import SmallNewsCard from '../SmallNewsCard'



const SchemaD = ({newses}) => {
  return (
      <Grid
        templateRows={['repeat(5, 1fr)','repeat(2, 15em)']}
        templateColumns={['repeat(1, 1fr)','repeat(7, 1fr)']}
        gap={[2,4]}
        py="2em"  width={["70%", "50%"]}
        >
        <GridItem  rowSpan={[1, 2]} colSpan={[1, 3]}  ><SideNewsCard news={newses[0]}/></GridItem>
        <GridItem colSpan={[1, 2]} ><SmallNewsCard news={newses[1]}/></GridItem>
        <GridItem  colSpan={[1, 2]} ><SmallNewsCard news={newses[2]}/></GridItem>
        <GridItem  colSpan={[1, 2]} ><SmallNewsCard news={newses[0]}/></GridItem>
        <GridItem colSpan={[1, 2]} ><SmallNewsCard news={newses[1]}/></GridItem>
      </Grid>
  )
}

export default SchemaD