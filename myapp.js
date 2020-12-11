//---------------------------------------------------------
//Logging in
const userName = document.querySelector("#userID");
const passWord = document.querySelector("#userPW");
const loginBtn = document.querySelector("#login-btn");
const signUpBtn = document.querySelector("#signUp-btn");

loginBtn.addEventListener("click", function () {
  const user = userName.value;
  const passkey = passWord.value;

  if (user == "shikaidos" && passkey == "bigchungus") {
    window.location.href = "home.html";
  } else if (user != "shikaidos" || passkey != "bigchungus") {
    errorFields();
  } else if (user === "" || passkey === "") {
    emptyFields();
  }
  console.log(userName + " " + passWord);
});

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
//Adding new habit
const habitName = document.querySelector("#habitName");
const daysList = document.querySelector("#multiple");
const timeLog = document.querySelector("#timeSelect");
const habitBtn = document.querySelector("#createHabit");

//Array for containing all habits created
var habitsArrList = [];

//generates a unique ID for array items based on MS
var uniqueID = new Date().getUTCMilliseconds();

habitBtn.addEventListener("click", function(){
  const thisHabitName = habitName.value;
  const daysSelect = daysList.value;
  const timeSelect = timeLog.value;

  if(thisHabitName.length == 0 || daysSelect.length == 0 || timeSelect.length == 0){
    emptyFields();
  }
  else{
    //creates new habit
    //pushes item to array
    habitsArrList.push(thisHabitName);
    //add new list to home page
    
    //update html and array by deleting and adding agai
  }
})


//push and pull list in array
//userListArray.push(newItemName);
//localStorage.setItem("userList", JSON.stringify(userListArray));
//let userList = JSON.parse(localStorage.getItem("userList"));
