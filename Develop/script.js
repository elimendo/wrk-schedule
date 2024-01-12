const timeBlockTemplate = document.getElementById("time-block");
const timeBlockHolder = document.querySelector(".container-fluid");

const time = [9, 10, 11, 12, 13, 14, 15, 16, 17,]
for (let i = 0; i < time.length; i++) {
  const element = time[i];
  var timeBlockClone =(timeBlockTemplate.content.cloneNode(true));
  timeBlockHolder.append(timeBlockClone)
}

