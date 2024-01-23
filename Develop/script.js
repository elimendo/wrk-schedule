const timeBlockTemplate = document.getElementById("time-block");
const timeBlockHolder = document.querySelector(".container-fluid");
const todaysDate = new Date();
// const currentHour = todaysDate.getHours();
const currentHour = todaysDate.getHours();
const currentDayEl = document.querySelector("#currentDay");

console.log(currentHour);
const dateText = todaysDate.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

currentDayEl.textContent = dateText;
const time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (let i = 0; i < time.length; i++) {
  var timeBlockClone = timeBlockTemplate.content.cloneNode(true);
  var hourDiv = timeBlockClone.querySelector(".hour")
  var desc = timeBlockClone.querySelector(".description");
  desc.classList.add(getColor(time[i]))
  hourDiv.textContent = getTimeString(time[i])
console.log(timeBlockClone)
  console.log(JSON.parse(localStorage.getItem("scheduleData")))
  
  

  timeBlockHolder.append(timeBlockClone);

}
for (let index = 0; index < 9; index++) {
  let data = JSON.parse(localStorage.getItem("scheduleData")) ||{
    "9AM":"",
    "10AM":"",
    "11AM":"",
    "12AM":"",
    "1PM":"",
    "2PM":"",
    "3PM":"",
    "4PM":"",
    "5PM":"",
    //add the rest
  };
  if (data){


    if (time[index]== 9){
      
      console.log(data["9AM"])
      document.querySelectorAll(".description")[index].value= data["9AM"]
    }
    if (time[index]== 10){
      
      console.log(data["10AM"])
      document.querySelectorAll(".description")[index].value= data["10AM"]
    }
    if (time[index]== 11){
      
      console.log(data["11AM"])
      document.querySelectorAll(".description")[index].value= data["11AM"]
    }
    if (time[index]== 12){
      
      console.log(data["12AM"])
      document.querySelectorAll(".description")[index].value= data["12AM"]
    }
    if (time[index]== 13){
      
      console.log(data["1PM"])
      document.querySelectorAll(".description")[index].value= data["1PM"]
    }
    if (time[index]== 14){
      
      console.log(data["2PM"])
      document.querySelectorAll(".description")[index].value= data["2PM"]
    }
    if (time[index]== 15){
      
      console.log(data["3PM"])
      document.querySelectorAll(".description")[index].value= data["3PM"]
    }
    if (time[index]== 16){
      
      console.log(data["4PM"])
      document.querySelectorAll(".description")[index].value= data["4PM"]
    }
    if (time[index]== 17){
      
      console.log(data["5PM"])
      document.querySelectorAll(".description")[index].value= data["5PM"]
    }
  }
}

timeBlockHolder.addEventListener("click", function (event) {
 // console.log(desc)
  let thisHour =(event.target.parentNode.childNodes[1].innerText)
  let description =""
 if (event.target.parentNode.childNodes[3].value){
  description = event.target.parentNode.childNodes[3].value
 }
  console.log(thisHour)
  console.log(description)
 saveToLocalStorage(thisHour, description);
});
// Existing functions...

// Function to save data to localStorage
function saveToLocalStorage(hour, description) {
  const scheduleData = JSON.parse(localStorage.getItem('scheduleData')) || {};
  scheduleData[hour] = description;
  localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
}


function getColor(hour) { 

  if (hour === currentHour){
    return "present"
  }
  else if(hour > currentHour){
    return "future"
  }
  else if ( hour < currentHour) {
    return 'past'
  }
}

function getTimeString(hour) {
  switch (hour) {
    case 9:
      return "9AM";
    case 10:
      return "10AM";
    case 11:
      return "11AM";
    case 12: 
      return "12PM"
    case 13:
      return "1PM"
    case 14:
      return "2PM"
    case 15:
      return "3PM"
    case 16:
      return "4PM"
    case 17: 
      return "5PM"


    default:
      break;
  }
}

// January 11, 2024
