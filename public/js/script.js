var hoehe
var maxHoehe
var name1
var name2
var name3
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
var saved_passwort
var passwort
var authorized
var goalpassed
var min
var saved



addEventListener("resize", (event) => {});
onresize = (event) => {
  height = document.documentElement.clientHeight
  width = document.documentElement.clientWidth
  navedit()
}
load()


var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')      
const termometer = document.getElementById("Termometer");
var toastLiveExample2 = document.getElementById('liveToast2')      
const gift = document.querySelector('#gift');
min = (Math.min(height1, height2, height3, height4, height5, height6));

currentgiftfunction()
masheightCheck()

termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px "+hoehe+"px");
document.getElementById("erledigt").innerHTML = erledigt;
document.getElementById("nochzutuen").innerHTML = maxHoehe-erledigt;
document.getElementById("goal-text").innerHTML = currentgoal;


console.log (passwort)
//console.log("read: " + goalpassed ,erledigt, hoehe,name1,name2,name3,name4,name5,name6,height1,height2,height3,height4,height5,height6,maxHoehe, currentgoal, nochzutuen)

document.getElementById("bis-nächstes-ziel").innerHTML = min - erledigt;


function MaximaleHoehe()
{ 
  maxHoehe = Number(document.getElementById("maxHoehe").value);
  document.getElementById("nochzutuen").innerHTML = maxHoehe-erledigt;
  console.log("maxHoehe: " + maxHoehe)
  save_maxHoehe()
}

function MaximaleHoehe2()
{ 
  maxHoehe = document.getElementById("maxHoehe2").value;
  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe-erledigt
  save_maxHoehe()
}

function reset()
{
  erledigt = 0
  hoehe = 640
  goalpassed = "True"

  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px "+hoehe+"px");
  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe-erledigt;

  save_erledigt()
  save_hoehe()
  save_goalpassed()

}

function hoeher() 
{ 
  console.log ("Hoehe: " + hoehe)
  console.log ("maxHoehe: " + maxHoehe)

  toast = new bootstrap.Toast(toastLiveExample)
  hoehe = hoehe - (630 / maxHoehe)
  erledigt++
  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x; background-position: 1000px "+hoehe+"px;");
  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x; background-position: 1000px "+hoehe+"px;");

  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe-erledigt;
  toast.show()
  goal()
  save_erledigt()
  save_hoehe()
  save_goalpassed()

}


function am_hoechsten() 
{ 

  var am_hoechsten = document.getElementById("am_hoechsten").value;

  toast = new bootstrap.Toast(toastLiveExample)
  hoehe = hoehe - ((630 / maxHoehe)*am_hoechsten)


  erledigt = erledigt+1*am_hoechsten

  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x; background-position: 1000px "+hoehe+"px;");

  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe-erledigt;
  toast.show()

  masheightCheck()
  save_erledigt()
  save_hoehe()



}
function masheightCheck(){
  if (erledigt > height1){
    height1 = 999999
    save_height1()
  }

  if (erledigt > height2){
    height2 = 999998
    save_height2()
  }

  if (erledigt > height3){
    height3 = 999997
    save_height3()
  }
  
  
  if (erledigt > height4){
    height4 = 999996
    save_height4()
  }


  if (erledigt > height5){
    height5 = 999995
    save_height5()
  }

  if (erledigt > height6){
    height6 = 999994
    save_height6()
  }

}

function currentgiftfunction(){

  if(height1 != 999999 && height2 != 999998 && height3 != 999997 && height4 != 999996 && height5 != 99996 && height6 != 99995){
    currentgift = "Noch kein Ziel erreicht."
    currentgoal = name1
    document.getElementById("goal-text").innerHTML = "Verdienter preis:" + currentgift;
    save_currentgift()
    document.getElementById("currentgift").innerHTML = currentgift;

  }
    if(height1 == 999999 && height2 != 999998 && height3 != 999997 && height4 != 999996 && height5 != 99995 && height6 != 99994){
      currentgift = name1
      currentgoal = name2
      document.getElementById("goal-text").innerHTML = "Verdienter preis:" + currentgift;
      save_currentgift()
      document.getElementById("currentgift").innerHTML = currentgift;

    }

    if(height1 == 999999 && height2 == 999998 && height3 != 999997 && height4 != 999996 && height5 != 99995 && height6 != 99994){
          currentgift = name2
          currentgoal = name3
          document.getElementById("goal-text").innerHTML = "Verdienter preis:" + currentgift;
          save_currentgift()
          document.getElementById("currentgift").innerHTML = currentgift;

    }
    
    if(height1 == 999999 && height2 == 999998 && height3 == 999997 && height4 != 999996 && height5 != 99995 && height6 != 99994){
      currentgift = name3
      currentgoal = name4
      document.getElementById("goal-text").innerHTML = "Verdienter preis:" + currentgift;
      save_currentgift()
      document.getElementById("currentgift").innerHTML = currentgift;

    }

    if(height1 == 999999 && height2 == 999998 && height3 == 999997 && height4 == 999996 && height5 != 99995 && height6 != 99994){
      currentgift = name4
      currentgoal = name5
      document.getElementById("goal-text").innerHTML = "Verdienter preis:" + currentgift;
      save_currentgift()
      const gift = document.querySelector('#gift');
      document.getElementById("currentgift").innerHTML = currentgift;

    }


    if(height1 == 999999 && height2 == 999998 && height3 == 999997 && height4 == 999996 && height5 == 99995 && height6 != 99994){
      currentgift = name5
      currentgoal = name6
      document.getElementById("goal-text").innerHTML = "Verdienter preis:" + currentgift;
      save_currentgift()
      document.getElementById("currentgift").innerHTML = currentgift;

    }

    
    if(height1 == 999999 && height2 == 999998 && height3 == 999997 && height4 == 999996 && height5 == 999995 && height6 == 999994){
      currentgoal = "keine Preise mehr 😕"
      currentgift = name6
      document.getElementById("bis-nächstes-ziel").innerHTML = "Nichts mehr zu erledigen"
      document.getElementById("goal-text").innerHTML = "Verdienter preis:" + currentgift;
      save_currentgift()
      document.getElementById("currentgift").innerHTML = currentgift;
    };
}


function passwortfunction()
{
  var offcanvas = document.getElementById('offcanvas')
  var toast = document.getElementById('passwortwrongtoast')
  passwort = document.getElementById("passwort").value;

  if (passwort == saved_passwort)
  {
    authorized = true
    var showOffcanvas = new bootstrap.Offcanvas(offcanvas)
    showOffcanvas.show()
  }else{
    var showtoast = new bootstrap.Toast(toast)
    showtoast.show()
  }
}

function setgoal1()
{
  name1 = document.getElementById("goal-name-1").value 
  height1 = document.getElementById("goal-height-1").value 
  goalpassed = "True"
  goal()
  save_height1()
  save_name1()
  document.getElementById("goal-text").innerhtml = "Nächster Preis:" + name1;
  currentgoal = name1
  document.getElementById("goal-text").innerHTML = "Nächster Preis: " + currentgoal;
}

function setgoal2(){
  name2 = document.getElementById("goal-name-2").value 
  height2 = document.getElementById("goal-height-2").value 
  goalpassed = "True"
  save_height2()
  save_name2()
  goal()
}
    

function setgoal3(){
  name3 = document.getElementById("goal-name-3").value 
  height3 = document.getElementById("goal-height-3").value     
  goalpassed = "True"
  save_height3()
  save_name3()
  goal()  
}

function setgoal4(){
  name4 = document.getElementById("goal-name-4").value 
  height4 = document.getElementById("goal-height-4").value 
  goalpassed = "True"
  save_height4()
  save_name4()
  goal()

}

function setgoal5(){
  name5 = document.getElementById("goal-name-5").value 
  height5 = document.getElementById("goal-height-5").value 
  goalpassed = "True"
  save_height5()
  save_name5()
  goal()
}

function setgoal6(){
  name6 = document.getElementById("goal-name-6").value 
  height6 = document.getElementById("goal-height-6").value 
  goalpassed = "True"
  save_height6()
  save_name6()
  goal()
}

function goal()
{
    console.log("goal function executed")
    toast2 = new bootstrap.Toast(toastLiveExample2)
    toast2.show()

 
    min = (Math.min(height1, height2, height3, height4, height5, height6));
    console.log("min: " + min)
    document.getElementById("bis-nächstes-ziel").innerHTML = min - erledigt;
    if (erledigt == min) {
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
        height1 = 999999
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name2;
        currentgift = name1
        currentgoal = name2
        save_height1()
        save_currentgoal()
        save_currentgift()
        
    }

    
    if (height2 == erledigt){
        height2 = 999998
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name3;
         currentgoal = name3
         currentgift = name2
        save_height2()
        save_currentgoal()
        save_currentgift()
    }

    
    if (height3 == erledigt){
        height3 = 99997
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name4;
         currentgoal = name4
         currentgift = name3
        save_height3()
        save_currentgoal()
        save_currentgift()
    }
    
    if (height4 == erledigt){
        height4 = 999996
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name5;
         currentgoal = name5
         currentgift = name4
        save_height4()
        save_currentgoal()
        save_currentgift()
    }

    if (height5 == erledigt){
        height5 = 999995
        document.getElementById("goal-text").innerHTML = "Nächster Preis: " + name6;
         currentgoal = name6
         currentgift = name5
        save_height5()
        save_currentgoal()
        save_currentgift()
    }


    if (height6 == erledigt){
        height6 = 999994
        currentgift = name6
      save_height6()
      save_currentgoal()
      save_currentgift()
    }

}


/////////////////////////////
//                         //
//                         //
//  | | ___   __ _  __| |  //
//  | |/ _ \ / _` |/ _` |  //
//  | | (_) | (_| | (_| |  //
//  |_|\___/ \__,_|\__,_|  //
//                         //                                      
//                         //                                        
/////////////////////////////

function load(){

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
    url: '/public/shoehe',
    success: function (lhoehe) {
      hoehe = lhoehe
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
    dataType: "text",
    traditional: true,
    type: 'POST',
    async : false,
    url: '/public/saved_passwort',
    success: function (lsaved_passwort) {
      saved_passwort = lsaved_passwort
    }
  });
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    url: '/public/smaxHoehe',
    async : false,

    success: function (lmaxHoehe) {
      maxHoehe = lmaxHoehe
    }
  });

  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    url: '/public/scurrentgift',
    async : false,

    success: function (lcurrentgift) {
      currentgift = lcurrentgift
    }
  });

  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    url: '/public/sgoalpassed',
    async : false,
    success: function (lgoalpassed) {
      goalpassed = lgoalpassed
      }
  });

  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    url: '/public/sname1',    
    async : false,
    success: function (lname1) {
      name1 = lname1
    }
  });

  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    url: '/public/sname2',
       async : false,

    success: function (lname2) {
      name2 = lname2
    }
  });

  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    url: '/public/sname3',
    async : false,
    success: function (lname3) {
      name3 = lname3
    }
  });

  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    url: '/public/sname4',
    async : false,

    success: function (lname4) {
      name4 = lname4
    }
  });
  
  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    url: '/public/sname5',
    async : false,

    success: function (lname5) {
      name5 = lname5
    }
  });

  $.ajax({
    dataType: "text",
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
    dataType: "text",
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

/////////////////////////////
//                         //
//   ___  ______   _____   //
//  / __|/ _` \ \ / / _ \  //
//  \__ \ (_| |\ V /  __/  //
//  |___/\__,_| \_/ \___|  //
//                         //                                      
//                         //                                        
/////////////////////////////
function save_erledigt(){
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'erledigt': erledigt},
    cache: false,
    url: '/public/erledigt',

  });
  
}

function save_goalpassed(){
  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    data:{'goalpassed': goalpassed},
    cache: false,
    url: '/public/goalpassed',
    success: function (goalpassed) {
      window.location.reload();
    }
  });
}

function save_maxHoehe(){
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'maxHoehe': maxHoehe},
    cache: false,
    url: '/public/maxHoehe',
  });
}

function save_hoehe(){
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'hoehe': hoehe},
    cache: false,
    url: '/public/hoehe',
    success: function (hoehe) {
        window.location.reload();
    }
  });
}

function save_name1(){
  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    data:{'name1': name1},
    cache: false,
    url: '/public/name1',
    success: function (name1) {
      window.location.reload();
    }
  });
}

function save_name2(){
  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    data:{'name2': name2},
    cache: false,
    url: '/public/name2',
    success: function (name2) {
      window.location.reload();
    }
  });
}

function save_name3(){
  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    data:{'name3': name3},
    cache: false,
    url: '/public/name3',
    success: function (name3) {
      window.location.reload();
    }
  });
}

function save_name4(){
  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    data:{'name4': name4},
    cache: false,
    url: '/public/name4',
    success: function (name4) {
      window.location.reload();
    }
  });
}

function save_name5(){
  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    data:{'name5': name5},
    cache: false,
    url: '/public/name5',
    success: function (name5) {
      window.location.reload();
    }
  });
}

function save_name6(){
  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    data:{'name6': name6},
    cache: false,
    url: '/public/name6',
    success: function (name6) {
      window.location.reload();
    }
  });
}

function save_height1(){

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height1': height1},
    cache: false,
    url: '/public/height1',
  });
}

function save_height2(){
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height2': height2},
    cache: false,
    url: '/public/height2',
  });
}

function save_height3(){
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height3': height3},
    cache: false,
    url: '/public/height3',
  });
}

function save_height4(){
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height4': height4},
    cache: false,
    url: '/public/height4',
  });
}

function save_height5(){
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height5': height5},
    cache: false,
    url: '/public/height5',
  });
}

function save_height6(){
  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'height6': height6},
    cache: false,
    url: '/public/height6',
  });
}


function save_currentgoal(){
  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    data:{'currentgoal': currentgoal},
    cache: false,
    url: '/public/currentgoal',
  });
}

function save_currentgift(){
  $.ajax({
    dataType: "text",
    traditional: true,
    type: 'POST',
    data:{'currentgift': currentgift},
    cache: false,
    url: '/public/currentgift',
  });
}

function nochzutuen(){
  $.ajax({
    dataType: "JSON",
    traditional: true,
    data:{'nochzutuen': nochzutuen},
    cache: false,
    url: '/public/nochzutuen',
  });
}


