const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", getUserName);

function getUserName() {
  let username = document.getElementById("text1").value;
  console.log(username);
  document.getElementById("name").innerHTML = username;
}
