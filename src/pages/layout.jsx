import React                    from "react";
import { Box }                  from "@chakra-ui/react";
import { Outlet }               from "react-router-dom";
import { LoadWeb3, symbol }             from "../utils/loadContract";

function Layout() {

  const [contract, setContract] = React.useState();
  const [sym, setSym] = React.useState();

  React.useEffect(() => {
    (async() => {
      let _contract;
      _contract = await LoadWeb3();
      setContract(_contract);
      let _sym;
      _sym = await symbol();
      setSym(_sym);
    })();
  }, []);

  console.log(contract);
  console.log(sym);

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

