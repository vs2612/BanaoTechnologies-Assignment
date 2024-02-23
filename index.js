function showSignup() {
  document.querySelector(".signup").style.display = "block";
  document.querySelector(".loginpage").style.display = "none";
  console.log(document.querySelector(".login").style.display);
}

function showLogin() {
  document.querySelector(".signup").style.display = "none";
  document.querySelector(".loginpage").style.display = "block";
  // document.querySelector(".login").style.display = "block";
  console.log(document.querySelector(".login").style.display);
}
document
  .getElementById("auth_closelogin")
  .addEventListener("click", function () {
    document.querySelector(".loginpage").style.display = "none";
  });
document
  .getElementById("auth_closesignup")
  .addEventListener("click", function () {
    document.querySelector(".signup").style.display = "none";
  });
// Toggle function for the dropdown button
// function toggleAuthPages() {
//   var authPages = document.getElementById("authpages");
//   authPages.style.display =
//     authPages.style.display === "none" || authPages.style.display === ""
//       ? "block"
//       : "none";
// }
