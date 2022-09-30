
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
var timeDisplay = $('#currentDay');
var btnEl = $('#btn');
var textEl = $('#text');


var day = moment().format('dddd, MMMM Do');
timeDisplay.text(day);


    btnEl.on("click",function(){
          localStorage.setItem("input", textEl.val);
        var value = (textEl.val(localStorage.getItem('input')));
    });



