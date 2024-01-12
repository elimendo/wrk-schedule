const timeBlockTemplate = document.getElementById("time-block");
const timeBlockHolder = document.querySelector(".container-fluid");
const todaysDate = new Date();
// const currentHour = todaysDate.getHours();
const currentHour = 10;
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
  var hourDiv =timeBlockClone.querySelector(".hour")
  var desc = timeBlockClone.querySelector(".description");
  desc.classList.add(getColor(time[i]))
  hourDiv.textContent = getTimeString(time[i])
  timeBlockHolder.append(timeBlockClone);

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
