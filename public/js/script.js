let hoehe = 77
let maxHoehe1 = 77
let maxHoehe2 = 77
let name1 = 77
let name2 = 77
let name3 = 77
let name4 = 77
let name5 = 77
let name6 = 77
let height1 = 77
let height2 = 77 
let height3 = 77
let height4 = 77
let height5 = 77
let height6 = 77
let erledigt = 77
let currentgoal = 77
let nochzutuen = 77

for (var i = 1; i <= 18; ++i) {
  save(i)
}

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')      
const termometer = document.getElementById("Termometer");
var toastLiveExample2 = document.getElementById('liveToast2')      
const gift = document.querySelector('#gift');

console.log("Maximale Hoehe " + maxHoehe1)
console.log("Schon Erledigt " + erledigt) 
console.log("Hoehe " + hoehe)
console.log("current gaol: " + currentgoal)

termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px "+hoehe+"px");
document.getElementById("erledigt").innerHTML = erledigt;
document.getElementById("nochzutuen").innerHTML = maxHoehe1-erledigt;
goal();
document.getElementById("goal-text").innerHTML = currentgoal;

min = (Math.min(height1, height2, height3, height4, height5, height6));



if (erledigt < min) {
        console.log("nichts zu tun")
      }else{
        const gift = document.querySelector('#gift');
        gift.classList.add("animate__wobble", "animate__animated", "animate__repeat-3");
        gift.addEventListener('animationend', () => {
            gift.classList.remove("animate__wobble", "animate__animated", "animate__repeat-3");
            gift.classList.add("animate__animated", "animate__repeat-1", "animate__bounceOutDown");
            $.ajax({
              dataType: "JSON",
              traditional: true,
              type: 'POST',
              data:{'currentgift': currentgift},
              cache: false,
              url: '/public/currentgift',
              success: function (currentgift) {
                console.log(currentgift);
                currentgift = currentgift
              }
            });
            document.getElementById("currentgift").innerHTML = currentgift;
            currentgift.classList.add("animate__animated", "animate__repeat-1","animate__bounceOutDown" )
      });
      
}



function MaximaleHoehe()
{ 
  let maxHoehe1 = Number(document.getElementById("maxHoehe1").value); ;

  document.getElementById("nochzutuen").innerHTML = maxHoehe1-erledigt;
  save()
  load()
}

function MaximaleHoehe2()
{ 
  maxHoehe = document.getElementById("maxHoehe2").value;
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/maxHoehe2',
    cache: false,
    data:{'maxHoehe': maxHoehe2},
    success: function (currentgift) {
      console.log(maxHoehe2);
      maxHoehe2 = maxHoehe2
    }
  });
  save()
  console.log(maxHoehe1)
  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe1-erledigt


}

function reset()
{
  erledigt = 0
  hoehe = 640
  maxHoehe1 = 0

  console.log(erledigt); 
  console.log(hoehe);
  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px "+hoehe+"px");
  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe1-erledigt;
  setgoal()
  goal()
  save()
}

function hoeher() 
{ 
  load()
  var toast = new bootstrap.Toast(toastLiveExample)
  hoehe = hoehe - (630 / maxHoehe1)
  

  erledigt++
  console.log("Erledigt: " + erledigt); 
  console.log("Hoehe: " + hoehe);
  console.log("MaxHoehe1: " + maxHoehe1);
  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x; background-position: 1000px "+hoehe+"px;");

  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe1-erledigt;

  toast.show()
  goal()
  save()
}

function setgoal()
{
    load()
    var name = document.getElementById("goal-name-1").value 
    var height1 = document.getElementById("goal-height-1").value 
    const line1 = document.getElementById("line1");
    line1.setAttribute("style","top:"+ -((height*maxHoehe1)/640)+"px;");


    
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


    console.log(height1, height2, height3, height4, height5, height6)
    document.getElementById("goal-text").innerhtml = "Nächster Preis:" + name;
    var currentgoal = name
    document.getElementById("goal-text").innerHTML = "Nächster Preis: " + currentgoal;
    save()

}
function goal()
{
    load()
    console.log("goal function executed")
    var toast2 = new bootstrap.Toast(toastLiveExample2)
    
 
    min = (Math.min(height1, height2, height3, height4, height5, height6));
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


    console.log("height1 " + height1)

        
    if (height1 == erledigt){
        console.log("erledigt: " +erledigt)
        height1 = 99999
        console.log("height1: " + height1)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name2;
        var currentgoal = name2
        
    }

    
    if (height2 == erledigt){
        height2 = 99998
        console.log("height2: " + height2)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name3;
        var currentgoal = name3
        var currentgift = name2

    }

    
    if (height3 == erledigt){
        height3 = 9997
        console.log("height3: " + height3)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name4;
        var currentgoal = name4
        var currentgift = name3

    }
    
    if (height4 == erledigt){
        height4 = 99996
        console.log("height4: " + height4)
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


    save()

    console.log(height1, height2, height3, height4, height5, height6)
    console.log(name1, name2, name3, name4, name5, name6)
}


function load(){
  console.log("load")

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'maxHoehe1': maxHoehe1},
    url: '/public/smaxhoehe1',
    success: function (maxHoehe1) {
      console.log(maxHoehe1);
      maxHoehe1 = maxHoehe1
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/smaxHoehe2',
    success: function (maxHoehe2) {
      console.log(maxHoehe2);
      maxHoehe2 = maxHoehe2
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/shoehe',
    success: function (hoehe) {
      console.log(hoehe);
      hoehe = hoehe
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname1',
    success: function (name1) {
      console.log(name1);
      name1 = name1
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname2',
    success: function (name2) {
      console.log(name2);
      name2 = name2
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname3',
    success: function (name3) {
      console.log(name3);
      name3 = name3
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname4',
    success: function (name4) {
      console.log(name4);
      name4 = name4
    }
  });
  
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname5',
    success: function (name5) {
      console.log(name5);
      name5 = name5
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname6',
    success: function (name6) {
      console.log(name6);
      name6 = name6
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sheight1',
    success: function (height1) {
      console.log(height1);
      height1 = height1
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sheight2',
    success: function (height2) {
      console.log(height2);
      height2 = height2
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sheight3',
    success: function (height3) {
      console.log(height3);
      height3 = height3
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sheight4',
    success: function (height4) {
      console.log(height4);
      height4 = height4
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sheight5',
    success: function (height5) {
      console.log(height5);
      height5 = height5
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sheight6',
    success: function (height6) {
      console.log(height6);
      height6 = height6
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/erledigt',
    success: function (erledigt) {
      console.log(erledigt);
      erledigt = erledigt
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/currentgoal',
    success: function (currentgoal) {
      console.log(currentgoal);
      currentgoal = currentgoal
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/nochzutuen',
    success: function (nochzutuen) {
      console.log(nochzutuen);
      nochzutuen = nochzutuen
    }
  });

}

function save(){

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'maxHoehe1': maxHoehe1},
    cache: false,
    url: '/public/maxHoehe1',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'maxHoehe2': maxHoehe2},
    cache: false,
    url: '/public/maxHoehe2',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'hoehe': hoehe},
    cache: false,
    url: '/public/hoehe',
  });


  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'name1': name1},
    cache: false,
    url: '/public/name1',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'name2': name2},
    cache: false,
    url: '/public/name2',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'name3': name3},
    cache: false,
    url: '/public/name3',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'name4': name4},
    cache: false,
    url: '/public/name4',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'name5': name5},
    cache: false,
    url: '/public/name5',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'name6': name6},
    cache: false,
    url: '/public/name6',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height1': height1},
    cache: false,
    url: '/public/height1',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height2': height2},
    cache: false,
    url: '/public/height2',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height3': height3},
    cache: false,
    url: '/public/height3',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height4': height4},
    cache: false,
    url: '/public/height4',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height5': height5},
    cache: false,
    url: '/public/height5',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height6': height6},
    cache: false,
    url: '/public/height6',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'erledigt': erledigt},
    cache: false,
    url: '/public/erledigt',
  });


  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'currentgoal': currentgoal},
    cache: false,
    url: '/public/currentgoal',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'nochzutuen': nochzutuen},
    cache: false,
    url: '/public/nochzutuen',
  });}


