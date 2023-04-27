
//global variables
var saveBtn = $('.saveBtn')

$(function () {
// Display current date
var today = dayjs().format('MMMM DD ,YYYY');
$('#currentDay').text(today)


// Save textarea to local storage
$('.saveBtn').on('click', function(){

  var hourKey = $(this).parent().attr('id')
  console.log('hour key: ', hourKey);

  var text = $(this).siblings('textarea').val()
  console.log('text: ', text)

  localStorage.setItem(hourKey,text)
});


$('#hour-9 textarea').val(localStorage.getItem('hour-9'));
$('#hour-10 textarea').val(localStorage.getItem('hour-10'));
$('#hour-11 textarea').val(localStorage.getItem('hour-11'));
$('#hour-12 textarea').val(localStorage.getItem('hour-12'));
$('#hour-13 textarea').val(localStorage.getItem('hour-13'));
$('#hour-14 textarea').val(localStorage.getItem('hour-14'));
$('#hour-15 textarea').val(localStorage.getItem('hour-15'));
$('#hour-16 textarea').val(localStorage.getItem('hour-16'));
$('#hour-17 textarea').val(localStorage.getItem('hour-17'));

// Add timeblock color for past and present,future
function colorCode(){
  var actualHour = dayjs().hour();
  // console.log('Actual Hour: ', actualHour);

  $('.time-block').each(function() {
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
    // console.log('Time Block Hour: ', timeBlockHour)

    if(timeBlockHour<actualHour){
      $(this).addClass('past')
    } 
    else if(timeBlockHour===actualHour){
      $(this).addClass('present')
      $(this).removeClass('past')
    } 
    else {
      $(this).addClass('future')
      $(this).removeClass('present')
      $(this).removeClass('past')
    }

  })
}

  colorCode()
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// TODO: Add code to display the current date in the header of the page.
