
// todays date time
let today = dayjs();
// update the currentDay id with todays date in format Tue, Jan 01st 2024
$("#currentDay").text(today.format("ddd, Do MMMM YYYY"))

const container = $("#container-main");

// add a row to container main
container.append("<form class='row'></form>");
let timeBlock = $(".row");
// add three columns to the row

    // first column has text HOUR in format 9AM
    let hour = $("<div class='hour col-1 text-end p-3'></div>")
        .text("9AM"); //<- change text to a different hour in the workday

    timeBlock.append(hour)
    
    // second column is a TEXT BOX
    let textArea = $("<textarea class='col-9'></textarea>")
        .attr("id", "9AM") // change to equal a different hour 
        .addClass("past"); //change to reflect the current hour

    timeBlock.append(textArea); 

    // third column is a BUTTON
    let saveIcon = $("<i class='fa-solid fa-floppy-disk fa-lg'></i>");
    let button = $("<button type='submit'>")
        .addClass("col-1 btn saveBtn")
        .append(saveIcon);

    timeBlock.append(button)
    
    

