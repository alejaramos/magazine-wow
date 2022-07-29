import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import sun from "../../public/purpleSun.png";
import Link from "next/link";
import { useMediaQuery, Box } from "@chakra-ui/react";

function Main() {
  const [isMobile] = useMediaQuery("(max-width: 775px)");
  const [style, setStyle] = useState({});

  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scroll = this.scrollY;
      setStyle({ transform: "rotate(" + scroll / 15 + "deg)" });
    });
  });

  return (
    <div>
      <Box zIndex="1" right={["-8%","-6%",'0%',"0%"]} top={["0.75em","5em","7em","7.5em"]} position="fixed">
        <Link href="#theSun" scroll={false}>
          <a>
            <Image
              id="sol"
              src={sun}
              alt="sun"
              width={isMobile ? 150 : 200}
              height={isMobile ? 150 : 200}
              style={style}
            />
          </a>
        </Link>
      </Box>
    </div>
  );
}

export default Main;
