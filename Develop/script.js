
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
var timeDisplay = $('#currentDay');
var btnEl = $('button');
var textEl = $('textarea');


var day = moment().format('dddd, MMMM Do');
timeDisplay.text(day);


textEl.each(function(){
    var rowTime = $(this).attr('id');
    console.log(rowTime)
    var currentTime = moment().hour();
    console.log(currentTime)
    
    if (rowTime < currentTime){
        $(this).addClass('past');
    }else if (rowTime > currentTime){
        $(this).addClass('future')
    }else{
         $(this).addClass('present')
       
    }
})

    btnEl.on("click",function(){
        var value = ($(this).parent().siblings('textarea').val())
        var idEl = ($(this).parent().siblings('textarea').attr('id'))
        localStorage.setItem(idEl, value)
    });

    function getTime(){
        var input = localStorage.getItem('9')
        $('#9').text(input)
        $('#10').text(localStorage.getItem('10'))
        $('#11').text(localStorage.getItem('11'))
        $('#12').text(localStorage.getItem('12'))
        $('#1').text(localStorage.getItem('1'))
        $('#2').text(localStorage.getItem('2'))
        $('#3').text(localStorage.getItem('3'))
        $('#4').text(localStorage.getItem('4'))
        $('#5').text(localStorage.getItem('5'))
    }
getTime()


