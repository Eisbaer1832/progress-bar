var hoehe
var maxHoehe1
var maxHoehe2
var name1
var name2
var name3
var name4
var name4
var name5
var name6
var height1
var height2
var height3
var height4 
var height5
var height6
var erledigt
var currentgoal
var currentgift
var nochzutuen
//load()

//save()



var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')      
const termometer = document.getElementById("Termometer");
var toastLiveExample2 = document.getElementById('liveToast2')      
const gift = document.querySelector('#gift');


termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px "+hoehe+"px");
document.getElementById("erledigt").innerHTML = erledigt;
document.getElementById("nochzutuen").innerHTML = maxHoehe1-erledigt;
goal();
document.getElementById("goal-text").innerHTML = currentgoal;

min = (Math.min(height1, height2, height3, height4, height5, height6));


console.log("read: " + hoehe,name1,name2,name3,name4,name5,name6,height1,height2,height3,height4,height5,height6,maxHoehe1,maxHoehe2, currentgoal, nochzutuen)


function MaximaleHoehe()
{ 
  load()
   maxHoehe1 = Number(document.getElementById("maxHoehe1").value); ;
  document.getElementById("nochzutuen").innerHTML = maxHoehe1-erledigt;
  //save()
}

function MaximaleHoehe2()
{ 
  load()
  maxHoehe2 = document.getElementById("maxHoehe2").value;
  //save()
  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe1-erledigt
}

function reset()
{
  load()
  erledigt = 0
  hoehe = 640
  maxHoehe1 = 0
  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px "+hoehe+"px");
  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe1-erledigt;
  setgoal()
  goal()
  //save()

}

function hoeher() 
{ 
  load()
   toast = new bootstrap.Toast(toastLiveExample)
  hoehe = hoehe - (630 / maxHoehe1)
  

  erledigt++
  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x; background-position: 1000px "+hoehe+"px;");

  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe1-erledigt;

  toast.show()
  goal()
  //save()
}

function setgoal()
{
    load()
     name1 = document.getElementById("goal-name-1").value 
     height1 = document.getElementById("goal-height-1").value 
    const line1 = document.getElementById("line1");
    line1.setAttribute("style","top:"+ -((height1*maxHoehe1)/640)+"px;");


    
     name2 = document.getElementById("goal-name-2").value 
     height2 = document.getElementById("goal-height-2").value 

     name3 = document.getElementById("goal-name-3").value 
     height3 = document.getElementById("goal-height-3").value 


     name4 = document.getElementById("goal-name-4").value 
     height4 = document.getElementById("goal-height-4").value 

    
     name5 = document.getElementById("goal-name-5").value 
     height5 = document.getElementById("goal-height-5").value 



     name6 = document.getElementById("goal-name-6").value 
     height6 = document.getElementById("goal-height-6").value 


    console.log(height1, height2, height3, height4, height5, height6)
    document.getElementById("goal-text").innerhtml = "Nächster Preis:" + name1;
     currentgoal = name1
    document.getElementById("goal-text").innerHTML = "Nächster Preis: " + currentgoal;
    
    //save()

}
function goal()
{
    load()
    console.log("goal function executed")
    toast2 = new bootstrap.Toast(toastLiveExample2)
    
 
    min = (Math.min(height1, height2, height3, height4, height5, height6));
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



        
    if (height1 == erledigt){
        console.log("erledigt: " +erledigt)
        height1 = 99999
        console.log("height1: " + height1)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name2;
         currentgoal = name2
        
    }

    
    if (height2 == erledigt){
        height2 = 99998
        console.log("height2: " + height2)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name3;
         currentgoal = name3
         currentgift = name2

    }

    
    if (height3 == erledigt){
        height3 = 9997
        console.log("height3: " + height3)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name4;
         currentgoal = name4
         currentgift = name3

    }
    
    if (height4 == erledigt){
        height4 = 99996
        console.log("height4: " + height4)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name5;
         currentgoal = name5
         currentgift = name4

    }

    if (height5 == erledigt){
        height5 = 99995
        console.log("height: " + height5)
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name6;
         currentgoal = name6
         currentgift = name5

    }


    if (height6 == erledigt){
        height6 = 99994
        console.log("height: " + height6)
        currentgift = name6

    }

    //save()
}


function load(){
  console.log("load")

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/smaxhoehe1',
    async : false,

    success: function (lmaxHoehe1) {
      maxHoehe1 = lmaxHoehe1
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/scurrentgift',
    async : false,

    success: function (lcurrentgift) {
      currentgift = lcurrentgift
    }
  });

  $.ajax({
    dataType: "JSON",
    type: 'POST',
    traditional: true,
    type: 'POST',
    async : false,

    url: '/public/smaxHoehe2',
    success: function (lmaxHoehe2) {
      maxHoehe2 = lmaxHoehe2
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/shoehe',
    async : false,

    success: function (lhoehe) {
      hoehe = lhoehe
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname1',    
    async : false,

    success: function (lname1) {
      name1 = lname1
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname2',
       async : false,

    success: function (lname2) {
      name2 = lname2
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname3',
    async : false,

    success: function (lname3) {
      name3 = lname3
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname4',
    async : false,

    success: function (lname4) {
      name4 = lname4
    }
  });
  
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname5',
    async : false,

    success: function (lname5) {
      name5 = lname5
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sname6',
    async : false,
    success: function (lname6) {
      name6 = lname6
    }
  });


  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sheight1',
    async : false,

    success: function (lheight1) {
      height1 = lheight1
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/sheight2',
    async : false,

    success: function (lheight2) {
      height2 = lheight2
    }
  });


  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    async : false,

    url: '/public/sheight3',
    success: function (lheight3) {
      height3 = lheight3
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    async : false,

    url: '/public/sheight4',
    success: function (lheight4) {
      height4 = lheight4
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    async : false,

    url: '/public/sheight5',
    success: function (lheight5) {
      height5 = lheight5
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    async : false,

    url: '/public/sheight6',
    success: function (lheight6) {
      height6 = lheight6
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    async : false,

    url: '/public/serledigt',
    success: function (lerledigt) {
      erledigt = lerledigt
    }
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    async : false,

    url: '/public/scurrentgoal',
    success: function (lcurrentgoal) {
      currentgoal = lcurrentgoal
    }
  });


  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    async : false,

    url: '/public/snochzutuen',
    success: function (lnochzutuen) {
      nochzutuen = lnochzutuen
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
    data:{'currentgift': currentgift},
    cache: false,
    url: '/public/currentgift',
  });

  $.ajax({
    dataType: "JSON",
    traditional: true,
    data:{'nochzutuen': nochzutuen},
    cache: false,
    url: '/public/nochzutuen',
  });
}


