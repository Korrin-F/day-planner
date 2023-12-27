
// todays date time
let today = dayjs();
// update the currentDay id with todays date in format Tue, Jan 01st 2024
$("#currentDay").text(today.format("ddd, Do MMMM YYYY"))
