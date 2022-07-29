import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import {Box, useMediaQuery} from '@chakra-ui/react'


const socialNetworkDesktop = () => {
    const [isMobile] = useMediaQuery("(max-width: 62em)");
  return (
    <div>
      {!isMobile && (
        <Box
          color="#757575"
          pr="0.5em"
          display="flex"
          alignItems="left"
          flexDir="column"
          fontSize="25px"
          justifyContent="space-between"
          pt="0.1em"
          borderRight="1px"
          borderColor="#757575"
          mr='1em'
        >
          <FiFacebook /> <FiInstagram />
          <FiTwitter />
        </Box>
      )}
    </div>
  );
};

export default socialNetworkDesktop;
