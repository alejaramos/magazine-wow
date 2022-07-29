import { ListItem, OrderedList } from "@chakra-ui/react";

const OList = ({ news }) => {
  console.log(news);
  const items = news.split("-/-");

  return (
    <OrderedList
      spacing={3}
      fontWeight="500"
      fontSize="18px"
      lineHeight="2em"
      color="#343434"
      my="1em"
    >
      {items.map((item, i) => {
        return <ListItem>{item}</ListItem>;
      })}
    </OrderedList>
  );
};

export default OList;
