//---------------------------------------------------------
//Logging in
const userName = document.querySelector("#userID");
const passWord = document.querySelector("#userPW");
const loginBtn = document.querySelector("#login-btn");
const signUpBtn = document.querySelector("#signUp-btn");

/*loginBtn.addEventListener("click", function () {
  const user = userName.value;
  const passkey = passWord.value;

  if (user == "shikaidos" && passkey == "bigchungus") {
    window.location.href = "home.html";
  } else if (user != "shikaidos" || passkey != "bigchungus") {
    errorFields();
  } else if (user == "" || passkey == "") {
    emptyFields();
  }
  console.log(userName + " " + passWord);
});*/

//popup for when there are empty fields on login
async function emptyFields() {
  const alert = await alertController.create({
    header: "Empty Fields",
    message: "There are empty fields that need to be filled",
    buttons: ["Ok"],
  });

  await alert.present();
}

//popup for when there are wrong fields on login
async function errorFields() {
  const alert = await alertController.create({
    header: "Wrong Password",
    message: "You have entered a wrong username or password. Please try again.",
    buttons: ["Ok"],
  });

  await alert.present();
}
//------------------------------------------------------------------------------------
//Main menu redirect functions
function homePage() {
  window.location.replace("home.html");
}
function newHabitPage() {
  window.location.replace("newhabit.html");
}
function profilePage() {
  window.location.replace("profile.html");
}
function statsPage() {
  window.location.replace("stats-page.html");
}
//------------------------------------------------------------------------------------
//Adding new habit
const habitName = document.querySelector("#habitName");
const daysList = document.querySelector("#multiple");
const timeLog = document.querySelector("#timeSelect");
const habitBtn = document.querySelector("#createHabit");

//Array for containing all habits created
var habitsArrList = [];

//generates a unique ID for array items based on MS
var uniqueID = new Date().getUTCMilliseconds();

//adds array into HTMl
function freshArray() {
  $("#habitsList").children().remove();
  $("#habitsList").append(JSON.parse(localStorage.getItem("list")));
  setItemStorage();
  console.log(habitsArrList.length);
}

habitBtn.addEventListener("click", function () {
  const thisHabitName = habitName.value;
  const daysSelect = daysList.value;
  const timeSelect = timeLog.value;

  /*async function addList(){
    $("#list-append").append("<ion-item><ion-label>"+ thisHabitName +"</ion-label><ion-item>");
    console.log("addlist");
    return;
  }
  
  async function loadHome(){
    await addList();
    window.location.replace("home.html");
  }*/

  if (thisHabitName == "" || daysSelect == "" || timeSelect == "") {
    emptyFields();
  } else {
    habitsArrList.push(
      `<ion-item-sliding onclick="test()"><ion-item><ion-label> ${thisHabitName} </ion-label></ion-item><ion-item-options side='end'><ion-item-option class="delBtn" id = "${uniqueID}" color='danger'>Delete</ion-item-option></ion-item-options></ion-item-sliding>`
    );
    freshArray();
  }
});

$(document).on("click", ".delBtn", function () {
  console.log("test");
  habitsArrList.splice(habitsArrList.indexOf($(this).attr("id")), 1);

  freshArray();
});

//stores habit array list into user's local storage
function setItemStorage(){
  localStorage.setItem("list", JSON.stringify(habitsArrList));
}

function editList(){
  console.log("test");
}

//push and pull list in array
//userListArray.push(newItemName);
//localStorage.setItem("userList", JSON.stringify(userListArray));
//let userList = JSON.parse(localStorage.getItem("userList"));
