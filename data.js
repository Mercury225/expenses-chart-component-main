import data from "./expenses-chart-component-main/data.json" assert { type: "json" };

const Monday = document.getElementsByClassName("chart-col-1")[0];
const Tuesday = document.getElementsByClassName("chart-col-2")[0];
const Wednesday = document.getElementsByClassName("chart-col-3")[0];
const Thursday = document.getElementsByClassName("chart-col-4")[0];
const Friday = document.getElementsByClassName("chart-col-5")[0];
const Saturday = document.getElementsByClassName("chart-col-6")[0];
const Sunday = document.getElementsByClassName("chart-col-7")[0];
const mondayLabel = document.getElementsByClassName("chart-col-1-label")[0];
const tuesdayLabel = document.getElementsByClassName("chart-col-2-label")[0];
const wednesdayLabel = document.getElementsByClassName("chart-col-3-label")[0];
const thursdayLabel = document.getElementsByClassName("chart-col-4-label")[0];
const fridayLabel = document.getElementsByClassName("chart-col-5-label")[0];
const saturdayLabel = document.getElementsByClassName("chart-col-6-label")[0];
const sundayLabel = document.getElementsByClassName("chart-col-7-label")[0];
const getDay = () => {
  let day = new Date();
  return day.getDay();
};

/* changes bar column blue depending on the day */
switch (getDay()) {
  case 0:
    Sunday.style.background = "var(--Cyan)";
    break;
  case 1:
    Monday.style.background = "var(--Cyan)";
    break;
  case 2:
    Tuesday.style.background = "var(--Cyan)";
    break;
  case 3:
    Wednesday.style.background = "var(--Cyan)";
    break;
  case 4:
    Thursday.style.background = "var(--Cyan)";
    break;
  case 5:
    Friday.style.background = "var(--Cyan)";
    break;
  case 6:
    Saturday.style.background = "var(--Cyan)";
    break;
}
/*stores the JSON file from monday (i=0) to friday (i=6) */
const dayArray = [];
for (let i = 0; i < 7; i++) {
  dayArray.push(data[i].amount);
}

/*changing the bar heights on the HTML */

const findBiggestNumber = Math.max(...dayArray);
Monday.style.height = `${(dayArray[0] / findBiggestNumber) * 4}rem`;
Tuesday.style.height = `${(dayArray[1] / findBiggestNumber) * 4}rem`;
Wednesday.style.height = `${(dayArray[2] / findBiggestNumber) * 4}rem`;
Thursday.style.height = `${(dayArray[3] / findBiggestNumber) * 4}rem`;
Friday.style.height = `${(dayArray[4] / findBiggestNumber) * 4}rem`;
Saturday.style.height = `${(dayArray[5] / findBiggestNumber) * 4}rem`;
Sunday.style.height = `${(dayArray[6] / findBiggestNumber) * 4}rem`;

/*adding in the amounts for each day upon hover */

mondayLabel.innerHTML = `$${dayArray[0]}`;
tuesdayLabel.innerHTML = `$${dayArray[1]}`;
wednesdayLabel.innerHTML = `$${dayArray[2]}`;
thursdayLabel.innerHTML = `$${dayArray[3]}`;
fridayLabel.innerHTML = `$${dayArray[4]}`;
saturdayLabel.innerHTML = `$${dayArray[5]}`;
sundayLabel.innerHTML = `$${dayArray[6]}`;
