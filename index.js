$(document).ready(function(){
var count=1;
var redCirle="<div class='redCircle'></div>";
var blueCirle="<div class='blueCircle'></div>";
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height= (window.innerHeight > 0) ? window.innerHeight : screen.height;
$("#area").css({"width":width,"height":height});
$(document).on('mouseover','.redCircle',function(){
  var audio=new Audio("wrong.mp3");
  audio.play();
  var currentcount=Number($(".count").text());
  $(".count").text(""+(--currentcount));
});
$(document).on('mouseover','.blueCircle',function(){
  var audio=new Audio("green.mp3");
  audio.play();
  $(this).remove();
  var currentcount=Number($(".count").text());
  $(".count").text(""+(++currentcount));
});
function start(){
var arrOfRed=[];
for(var i=0;i<10;i++){
  var newItemRed=redCirle;
  var newItemBlue=blueCirle;
  newItemRed=$(newItemRed).css("left",Math.random()*width+"px");
  newItemBlue=$(newItemBlue).css("left",Math.random()*width+"px");
  arrOfRed.push(newItemRed);
  arrOfRed.push(newItemBlue);
}
$("#area").append(arrOfRed);
arrOfRed.forEach(function(item,index){
  $(item).animate({
    top:height,
    opacity:"0",
  },Math.random()*3000+1000,function (){
    if(index===arrOfRed.length-1){
      ++count;
      if(count%10==0){
        $("#area").empty();
      }
       start();
     }
  });
});
}
start();

});
