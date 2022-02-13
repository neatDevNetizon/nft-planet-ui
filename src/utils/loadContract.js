import Web3 from "web3";
import contract from "../contracts/artifacts/Emp.json";
const address = "0xe5989284f5Ca47EDDCb87F2e316b3a8f041901C9";

// let web3 = new Web3(Web3.givenProvider);

const contractABI = () => {
  const abi = contract.abi;
  return abi;
};

const startWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  } else {
    window.alert("Metamask not detected!");
  }
};

export const loadContract = async () => {
  try {
    const result = await new window.web3.eth.Contract(contractABI(),address);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const LoadWeb3 = async () => {
  await startWeb3();
  window.contract = await loadContract();
  return window.contract;
};
