import { Box }        from "@chakra-ui/react";
import { Outlet }     from "react-router-dom";
import background     from "../images/background.png";

function Layout() {

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: `center center`,
    backgroundSize: `100% 100%`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `fixed`,
    position: 'absolute',
    minHeight: `100%`,
    width: `100%`,
    left: "0",
    top: "0",
  };

  return (
    <>
      <Box style={backgroundStyle}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;

