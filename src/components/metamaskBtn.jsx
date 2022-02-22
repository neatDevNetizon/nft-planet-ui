import { useState, useEffect } 	from "react";
import { useMetaMask }      	  from "metamask-react";
import { ethers }               from "ethers";
import { AiOutlineLogout, 
		 		 AiOutlineLogin }       from "react-icons/ai";
import { Btn }					        from "./btn";
import { btnIconSize }          from "./componentSize";
import { SetIsConnected,
				 GetIsConnected }   	  from "../utils/useIsConnected";


const switchNetwork = async () => {
	if (window.ethereum) {
		try {
			window.ethereum.request({
				method: "wallet_addEthereumChain",
				params: [{
					chainId: process.env.REACT_APP_CHAIN_ID,
					rpcUrls: [process.env.REACT_APP_CHAIN_RPC_URL],
					chainName: process.env.REACT_APP_CHAIN_NAME,
					nativeCurrency: {
				  		name: process.env.REACT_APP_CURRENCY_NAME,
				  		symbol: process.env.REACT_APP_CURRENCY_SYMBOL,
				  		decimals: process.env.REACT_APP_CURRENCY_DECIMAL
					},
					blockExplorerUrls: [process.env.REACT_APP_BLOCK_EXPLORER_URL]
				}]
			});
		} catch (error) {
			console.error(error);
		}
	}
};

function MetamaskBtn () {

	const supportedChainId = process.env.REACT_APP_CHAIN_ID;

	const supportedChainName = process.env.REACT_APP_CHAIN_NAME;

	const [ btnTitle, setBtnTitle ] = useState();

	const [ btnBg, setBtnBg ] = useState();

	const [ isConnected, setIsConnected ] = useState(GetIsConnected());

	const { status, connect, account, chainId } = useMetaMask();

	const connectMetaMask = () => {
    	if (status === "initializing")
      		alert("Wallet Initializing...");
    	else if(status === "unavailable")
      		alert("Please install Metamask. https://metamask.io");
    	else if(status === "connecting")
      		alert("Wallet Connecting...");
    	else if(chainId !== supportedChainId) {
      		alert("Wrong chain! Please select "+supportedChainName+" in your metamask.");
      		(async () => {
          		await window.ethereum.enable();
          		await switchNetwork();
      		})();
    	}	
    	else {
      		if (!isConnected) {
        		if (status === "notConnected") {
          			(async () => {
            			try {
              				await connect(ethers.providers.Web3Provider, "any");
           		 		} catch (error) {
              				console.log(error);
            			}
          			})();
        		}
	        	setIsConnected(true);
	        	SetIsConnected(true);
		    } else {
		    	setIsConnected(false);
		        SetIsConnected(false);
		    }
    	}
  	}

  	useEffect(() => {
	    if (status === "initializing") {
	      setBtnTitle("WALLET ONGOING...");
	      setBtnBg("rgba(0, 0, 0, 0.2)");
	    }
	    if (status === "unavailable") {
	      setBtnTitle("NOT INSTALLED");
	      setBtnBg("rgba(255, 0, 0, 0.6)");
	    }
	    if (status === "connecting") {
	      setBtnTitle("CONNECTING...");
	      setBtnBg("rgba(0, 0, 0, 0.2)");
	    }
	    if (status === "notConnected") {
	      setBtnTitle("CONNECT WALLET");
	      setBtnBg("rgba(0, 0, 0, 0.6)");
	      setIsConnected(false);
	      SetIsConnected(false);
	    }
	    if (status === "connected") {
	      if (isConnected) {
	        setBtnTitle(String(account).substr(0, 7)+ "..."+ String(account).substr(-7));
	        setBtnBg("rgba(0, 255, 0, 0.6)");
	      } else {
	        setBtnTitle("CONNECT WALLET");
	        setBtnBg("rgba(0, 0, 0, 0.6)");
	      }
	    }
	    if (status !== "unavailable" && chainId !== supportedChainId){
	      setBtnTitle("WRONG CHAIN");
	      setBtnBg("rgba(255, 0, 0, 0.6)");
	      setIsConnected(false);
	      SetIsConnected(false);
        (async () => {
        		await window.ethereum.enable();
        		await switchNetwork();
    		})();
	    } 
  	}, [status, isConnected, account, chainId, supportedChainId]);

  	return(
		<Btn 
            onClick={connectMetaMask} 
            text={btnTitle} 
            bg={btnBg}
            width={{base:"200px", sm:"200px", md:"220px", lg:"240px", xl:"260px", "2xl":"280px"}}
            rightIcon={
              isConnected
                ? <AiOutlineLogout color="white" size={btnIconSize} />
                : <AiOutlineLogin color="white" size={btnIconSize} />
              }
        />
  	)
}

export default MetamaskBtn;