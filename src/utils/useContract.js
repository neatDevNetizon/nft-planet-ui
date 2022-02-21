import Web3                   from "web3";
import contract               from "../config/Emp.json";
import { GetIsConnected }     from "./useIsConnected";

const address = process.env.REACT_APP_EMP_CONTRACT_ADDRESS;
const price = [
  process.env.REACT_APP_NATIONAL_EMPEROR_PRICE,
  process.env.REACT_APP_CONTINENT_EMPEROR_PRICE,
  process.env.REACT_APP_WORLD_EMPEROR_PRICE
];

const contractABI = () => {
  return contract.abi;
}

async function StartWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  } else {
    window.alert("Metamask not detected!");
  }
}

async function LoadContract() {
  try {
    const result = await new window.web3.eth.Contract(contractABI(),address);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function LoadWeb3() {
  await StartWeb3();
  window.contract = await LoadContract();
}

export async function Symbol() {
  await LoadWeb3();
  const symbol = await window.contract.methods.symbol().call();
  return symbol;
}

async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export async function Mint(emperorTier) {
  const isConnected = GetIsConnected();
  if (isConnected) {
    await LoadWeb3();
    const account = await getCurrentAccount();
    await window.contract.methods.mint(emperorTier).send({ 
      from: account, 
      value: window.web3.utils.toWei(String(price[Number(emperorTier) - 1]), 'ether') 
    });
  } else {
    alert("Connect your wallet!");
  }
}

export async function WalletOfOwner() {
  const isConnected = GetIsConnected();
  if (isConnected) {
    await LoadWeb3();
    const account = await getCurrentAccount();
    const wallet = await window.contract.methods.walletOfOwner(account).call();
    return wallet;
  } else {
    alert("Connect your wallet!");
    return [];
  }
}
