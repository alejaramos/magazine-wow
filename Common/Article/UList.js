import { ListItem, UnorderedList } from "@chakra-ui/react";

const UList = ({ news }) => {
  const items = news.split("-/-");
  return (
    <UnorderedList
      spacing={3}
      fontWeight="500"
      fontSize="18px"
      lineHeight="2em"
      color="#343434"
      my="1em"
    >
      {items.map((item) => {
        return <ListItem>{item}</ListItem>;
      })}
    </UnorderedList>
  );
};

export default UList;
