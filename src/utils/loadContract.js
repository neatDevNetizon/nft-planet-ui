import Web3 from "web3";
import contract from "../contracts/artifacts/Emp.json";

const address = process.env.EMP_CONTRACT_ADDRESS;
console.log(address);

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

export async function symbol() {
    const contract = await LoadWeb3();
    const symbol = await contract.methods.symbol().call();
    return symbol;
}