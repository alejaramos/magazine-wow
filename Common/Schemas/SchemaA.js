import { GridItem, Grid, Box} from "@chakra-ui/react";
import LargeNewsCard from "../LargeNewsCard";
import SmallNewsCard from "../SmallNewsCard";

const SchemaA = ({newses}) => {
  return (
    <Grid
      width={["70%", "50%"]} pt="2em" 
      templateRows={["repeat(3, 1fr)","45em 15em"]}
      templateColumns={['repeat(1, 1fr)','repeat(7, 1fr)']}
      gap={[3,4]}
      >
        <GridItem rowSpan={1} colSpan={[1, 7]} ><LargeNewsCard news={newses[2]}/></GridItem>
        <GridItem rowSpan={[1, 2]} colSpan={[1, 3]}><SmallNewsCard news={newses[1]}/></GridItem>
        <GridItem rowSpan={[1, 2]} colSpan={[1, 4]}><SmallNewsCard news={newses[2]}/></GridItem>
    </Grid>
    );
  };
  
  export default SchemaA;
  
