import { Box }        from "@chakra-ui/react";
import { Outlet }     from "react-router-dom";

function Layout() {  

  return (
    <Box
      bgImage="url('/images/background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="100% 100%"
      bgAttachment="fixed"
      minHeight="100vh"
      // width={window.innerWidth}
    >
      <Outlet />
    </Box>
  );
}

export default Layout;

