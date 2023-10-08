import { ethers } from 'ethers';
import { ABI } from './Abi';
async function contractInstance() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const contractAddress = '0x5DC5C9A4A529899Dae832F3bcCfF9FAa6722d4eB';
  const contractAddress = '0x31F2CAFe072DBa50Ff66B27489c2128e21Bdb8a9';
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();
  const network = await provider.getNetwork();
  const networkId = network.chainId;
  const contract = new ethers.Contract(contractAddress, ABI, signer);
  localStorage.setItem('nid', networkId);
  return { contract, networkId, signerAddress };
}

export default contractInstance;
