let höhe
let maxHöhe = 1
let maxHöhe2
let name
let name2
let name3
let name4
let name5 
let name6
let height
let height2
let height3
let height4
let height5
let height6
let erledigt
let currentgoal
let nochzutuen




var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')      
const termometer = document.getElementById("Termometer");
var toastLiveExample2 = document.getElementById('liveToast2')      
const gift = document.querySelector('#gift');

console.log("Maximale Höhe " + maxHöhe)
console.log("Schon Erledigt " + erledigt) 
console.log("Höhe " + höhe)
console.log("current gaol: " + currentgoal)

termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px "+höhe+"px");
document.getElementById("erledigt").innerHTML = erledigt;
document.getElementById("nochzutuen").innerHTML = maxHöhe-erledigt;
goal();
document.getElementById("goal-text").innerHTML = currentgoal;

min = (Math.min(height, height2, height3, height4, height5, height6));



if (erledigt < min) {
        console.log("nichts zu tun")
      }else{
        const gift = document.querySelector('#gift');
        gift.classList.add("animate__wobble", "animate__animated", "animate__repeat-3");
        gift.addEventListener('animationend', () => {
            gift.classList.remove("animate__wobble", "animate__animated", "animate__repeat-3");
            gift.classList.add("animate__animated", "animate__repeat-1", "animate__bounceOutDown");
            document.getElementById("currentgift").innerHTML = currentgift;
            currentgift.classList.add("animate__animated", "animate__repeat-1","animate__bounceOutDown" )
      });
      
}



function MaximaleHöhe()
{ 
  let maxHöhe 

  maxHöhe = document.getElementById("maxHöhe").value;
  console.log(maxHöhe)
  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHöhe-erledigt;


  $.ajax({
    type: 'POST',
    data: maxHöhe,
    url: '/public/data',
    success: function (data) {
        console.log("Klappt" + data);
    }
  });
}

function MaximaleHöhe2()
{ 
  maxHöhe = document.getElementById("maxHöhe2").value;
  console.log(maxHöhe)
  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHöhe-erledigt


}

function reset()
{
  erledigt = 0
  höhe = 640
  maxHöhe = 0

  console.log(erledigt); 
  console.log(höhe);
  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px "+höhe+"px");
  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHöhe-erledigt;
  setgoal()
  goal()
}

function höher() 
{ 
  var toast = new bootstrap.Toast(toastLiveExample)
  höhe = höhe - (630 / maxHöhe)
  

  erledigt++
  console.log("Erledigt: " + erledigt); 
  console.log("Höhe: " + höhe);
  console.log("MaxHöhe: " + maxHöhe);
  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x; background-position: 1000px "+höhe+"px;");

  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHöhe-erledigt;

  toast.show()
  goal()
}

function setgoal()
{
    
    var name = document.getElementById("goal-name-1").value 
    var height = document.getElementById("goal-height-1").value 
    const line1 = document.getElementById("line1");
    line1.setAttribute("style","top:"+ -((height*maxHöhe)/640)+"px;");


    
    var name2 = document.getElementById("goal-name-2").value 
    var height2 = document.getElementById("goal-height-2").value 

    var name3 = document.getElementById("goal-name-3").value 
    var height3 = document.getElementById("goal-height-3").value 


    var name4 = document.getElementById("goal-name-4").value 
    var height4 = document.getElementById("goal-height-4").value 

    
    var name5 = document.getElementById("goal-name-5").value 
    var height5 = document.getElementById("goal-height-5").value 



    var name6 = document.getElementById("goal-name-6").value 
    var height6 = document.getElementById("goal-height-6").value 


    console.log(height, height2, height3, height4, height5, height6)
    document.getElementById("goal-text").innerhtml = "Nächster Preis:" + name;
    var currentgoal = name
    document.getElementById("goal-text").innerHTML = "Nächster Preis: " + currentgoal;

}
function goal()
{

    console.log("goal function executed")
    var toast2 = new bootstrap.Toast(toastLiveExample2)
    
 
    min = (Math.min(height, height2, height3, height4, height5, height6));
    console.log("min: " + min)
    console.log("Schon Erledigt " + erledigt) 

    document.getElementById("bis-nächstes-ziel").innerHTML = min - erledigt;
    if (erledigt == min) {
        document.getElementById("bis-nächstes-ziel").innerHTML = "Geschafft😃";
        toast2.show()
        document.getElementById("goal-text").innerHTML = "Verdienter preis:" + currentgift;
        const gift = document.querySelector('#gift');
        gift.classList.add("animate__wobble", "animate__animated", "animate__repeat-3");
        gift.addEventListener('animationend', () => {
            gift.classList.remove("animate__wobble", "animate__animated", "animate__repeat-3");
            gift.classList.add("animate__animated", "animate__repeat-1", "animate__bounceOutDown");
            document.getElementById("currentgift").innerHTML = currentgift;
            document.getElementById("currentgift").classList.add("animate__animated", "animate__repeat-1","animate__bounceInDown", "goal-text");
          });
          
    }


    console.log("height " + height)

        
    if (height == erledigt){
        console.log("erledigt: " +erledigt)
        height = 99999
        console.log("height: " + height)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name2;
        var currentgoal = name2

        
        
    }

    
    if (height2 == erledigt){
        height2 = 99998
        console.log("height: " + height2)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name3;
        var currentgoal = name3
        var currentgift = name2

    }

    
    if (height3 == erledigt){
        height3 = 99997
        console.log("height: " + height3)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name4;
        var currentgoal = name4
        var currentgift = name3

    }
    
    if (height4 == erledigt){
        height4 = 99996
        console.log("height: " + height4)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name5;
        var currentgoal = name5
        var currentgift = name4

    }

    if (height5 == erledigt){
        height5 = 99995
        console.log("height: " + height5)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name6;
        var currentgoal = name6
        var currentgift = name5

    }


    if (height6 == erledigt){
        height6 = 99994
        console.log("height: " + height6)
        var currentgift = name6

    }
    

    console.log(height, height2, height3, height4, height5, height6)
    console.log(name, name2, name3, name4, name5, name6)
}
