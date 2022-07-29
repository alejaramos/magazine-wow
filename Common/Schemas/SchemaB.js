import SmallNewsCard from "../SmallNewsCard";
import LateralNewsCard from "../LateralNewsCard";
import { Box, Flex, Stack, Grid, GridItem } from "@chakra-ui/react";

const SchemaB = ({newses}) => {
  return (
      <Grid 
      width={["70%", "50%"]} 
      templateRows={['repeat(3, 1fr)','repeat(2, 1fr)']} 
      templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)']} 
      gap={4}
      >
          <GridItem rowSpan={1} colSpan={[1,2]}><LateralNewsCard news={newses[0]}/></GridItem>
          <GridItem rowSpan={1}><SmallNewsCard  news={newses[1]}/></GridItem>
          <GridItem rowSpan={1}><SmallNewsCard  news={newses[2]}/></GridItem>
      </Grid>
  );
};

export default SchemaB;
