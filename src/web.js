let web3;
let accounts;
let contract;

const fun = async () => {
  if (typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);
    accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  } else {
    localStorage.removeItem("isloggedin");
    document.body.innerHTML = "<div>Kindly Login<div>";
    window.location.reload();
    console.error("MetaMask is not installed.");
  }
  const abi = "ProvideAbi"
  const contractAddress ='/* address here */'; 

  contract = new web3.eth.Contract(abi, contractAddress);
};
