const isloggedin = async () => {
  let flag;
  const users = ["farmer", "processor", "retailer"];
  await fun();
  for (const user of users) {
    const data = await contract.methods[user]().call();
    if (accounts[0].toLowerCase() === data.toLowerCase()) {
      if (window.location.pathname === `/${user}.html`) {
        flag = true;
      }
    }
  }
  const data = localStorage.getItem("isloggedin");
  if (data !== "true" || !flag) {
    document.body.innerHTML =
      "<div>Kindly Login or you Can't access this page<div>";
  }
};
isloggedin();

window.ethereum.on("accountsChanged", async (accounts) => {
  let flag;
  const users = ["farmer", "processor", "retailer"];
  for (const user of users) {
    const data = await contract.methods[user]().call();
    if (accounts[0].toLowerCase() === data.toLowerCase()) {
      if (window.location.pathname === `/${user}.html`) {
        flag = true;
        localStorage.setItem("isloggedin", true);
      }
    }
  }
  if (!flag) {
    localStorage.removeItem("isloggedin");
  }
  window.location.reload();
});
