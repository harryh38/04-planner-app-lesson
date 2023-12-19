
$(document).ready(function(){
    var currentDay = $("#currentDay")
    var todaysDate = dayjs().format("DD/MM/YYYY") 
    console.log (todaysDate)
var currentHour=dayjs().hour()
console.log(currentHour)
$(".row").each(function(){
    var rowhour=parseInt($(this).attr("id").split("-")[1])
    /* var rowhour=10 */
   
    if(rowhour<currentHour){
        $(this).removeClass("present")
        $(this).removeClass("future")
        $(this).addClass("past")
    } 
   else if(rowhour===currentHour){
        $(this).removeClass("past")
        $(this).removeClass("future")
        $(this).addClass("present")
    }
    else{
        $(this).removeClass("present")
        $(this).removeClass("past")
        $(this).addClass("future")
    } 
})
    //Display the current date inside the paragraph of ID currentDay
    currentDay.text(todaysDate)
    $(".save-btn").on("click",function(){
     var hourKey = $(this).parent().parent().attr("id")
     var activity = $(this).parent().siblings(".description").val()
     
    
      localStorage.setItem(hourKey,activity)
     console.log (localStorage)
    })
    for(var i=9;i<18;i++){
        console.log (`hour-${i}`)
        $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
    }
    
    
    
})
