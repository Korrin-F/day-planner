
// todays date time
let today = dayjs();
// update the currentDay id with todays date in format Tue, Jan 01st 2024
$("#currentDay").text(today.format("ddd, Do MMMM YYYY"))


    
    
// function to create a row for each hour of the working day 9-5
function createCalendar() {
    const container = $("#container-main")
        .addClass("py-4");
    let workHours = [9,10,11,12,13,14,15,16,17];


    for(let hour of workHours){
        // add a FORM ROW to container main
        let timeBlock = $("<form class='row'></form>")
            .attr("id", hour);

        container.append(timeBlock);

    // add three columns to the row

        // first column has text HOUR in format 9AM
        let formattedHour = dayjs().hour(hour).format("hA"); //9AM
        let hourCol = $("<div class='hour col-1 text-end p-3'></div>")
            .text(formattedHour); //<- change text to a different hour in the workday

        timeBlock.append(hourCol);

        // second column is a TEXT BOX
        let textArea = $("<textarea class='col-9'></textarea>")
            .attr("id", hour); 
            // update the color settings depending on the current time
        let currentHour = today.hour();
        if (currentHour === hour){
            textArea.addClass("present");
        }else if (currentHour > hour){
            textArea.addClass("past");
        }else if (currentHour < hour) {
            textArea.addClass("future");
        }
            
        timeBlock.append(textArea); 

        // third column is a BUTTON
        let saveIcon = $("<i class='fa-solid fa-floppy-disk fa-lg'></i>");
        let button = $("<button type='submit'>")
            .addClass("col-1 btn saveBtn")
            .append(saveIcon);

        timeBlock.append(button)
    };
   
}

createCalendar();