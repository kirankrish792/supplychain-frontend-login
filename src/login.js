const button = document.getElementById("button");

const fn = async () => {
  await fun();
  const users = ["farmer", "processor", "retailer"];
  users.forEach(async (user) => {
    const data = await contract.methods[user]().call();
    if (accounts[0].toLowerCase()  === data.toLowerCase()) {
      localStorage.setItem("isloggedin", true);
      window.location.href = `/${user}.html`;
    }
  });
  window.location.href = `/public.html`;
};
button.addEventListener("click", fn);
  