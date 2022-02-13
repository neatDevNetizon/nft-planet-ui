import React                    from "react";
import { Box }                  from "@chakra-ui/react";
import { Outlet }               from "react-router-dom";
import { LoadWeb3 }             from "../utils/loadContract";

function Layout() {

  const [contract, setContract] = React.useState();
  React.useEffect(() => {
    (async() => {
      let _contract;
      _contract = await LoadWeb3();
      setContract(_contract)
    })();
  }, []);

  console.log(contract);

  return (
    <Box
      bgImage="url('/images/background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="100% 100%"
      bgAttachment="fixed"
      minHeight="100%"
      height="100vh"
    >
      <Outlet />
    </Box>
  );
}

export default Layout;

