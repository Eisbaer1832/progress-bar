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
let time_max
var passwort
var authorized
var goalpassed
var min
let savetime
var saved
let time_to_display
let logs
const timer_text = document.getElementById("timeleft")

//TODO: Implement time stop when goal is reached and save current time to backend to set a highscore

getTimestampInSeconds()

addEventListener("resize", (event) => {});
onresize = (event) => {
  height = document.documentElement.clientHeight
  width = document.documentElement.clientWidth
  navedit()
}
load()

async function getTimestampInSeconds () {
  await load()
  console.log(savetime)
  if (savetime == 0)
  {
    while (true)
    {
      time_max = 1738364399
      let time = Math.floor(Date.now() / 1000)
      let time_left = new Date ((time_max-time))
      var d = Math.floor(time_left / (3600*24));
      var h = Math.floor(time_left % (3600*24) / 3600);
      var m = Math.floor(time_left % 3600 / 60);
      var s = Math.floor(time_left % 60);

      if (time >= time_max)
      {
        time_to_display = "- " + "0 Tage - <br> - " + "0 Stunden - <br> - " + "0 Minuten - <br> - " + "0 Sekunden - "
        timer_text.innerHTML = time_to_display
        document.getElementById("currentgift").innerHTML = "Ihr wart zu langsam";
        //document.getElementById("liveToastBtn").classList.add("disabled")
        //document.getElementById("disable").classList.add("disabled")    
      }else{
      
        if (h < 10) {h = "0" + h}
        if (d < 10) {d = "0" + d}
        if (m < 10) {m = "0" + m}
        if (s < 10) {s = "0" + s}
    
        if (window.location.pathname === '/')
        {
          time_to_display = "- " + d + " Tage - <br> - " + h + " Stunden - <br> - " + m + " Minuten - <br> - " + s + " Sekunden - "
        }else{
          time_to_display = "- " + d + " Tage - <br> - " + h + " Stunden - <br> - " + m + " Minuten - <br> - " + s + " Sekunden - "
        }
        timer_text.innerHTML = time_to_display
    
      }
      await new Promise(resolve => setTimeout(resolve, 1000));  

    }
  }else{

    var d = Math.floor(savetime / (3600*24));
    var h = Math.floor(savetime % (3600*24) / 3600);
    var m = Math.floor(savetime % 3600 / 60);
    var s = Math.floor(savetime % 60);
    if (h < 10) {h = "0" + h}
    if (d < 10) {d = "0" + d}
    if (m < 10) {m = "0" + m}
    if (m < 10) {s = "0" + s}

    if (window.location.pathname === '/')
    {
      time_to_display = "- " + d + " Tage - <br> - " + h + " Stunden - <br> - " + m + " Minuten - <br> - " + s + " Sekunden - "
    }else{
      time_to_display = "- " + d + " Tage - <br> - " + h + " Stunden - <br> - " + m + " Minuten - <br> - " + s + " Sekunden - "
    }

    timer_text.innerHTML = time_to_display

  }
}

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')      
const termometer = document.getElementById("Termometer");
var toastLiveExample2 = document.getElementById('liveToast2')      
const gift = document.querySelector('#gift');
min = (Math.min(height1, height2, height3, height4, height5, height6));

currentgiftfunction()
masheightCheck()

termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px 522px");

$('#Termometer').animate({
  'background-position-y': hoehe + "px"
}, 1000, 'linear');


document.getElementById("erledigt").innerHTML = erledigt;
document.getElementById("nochzutuen").innerHTML = maxHoehe-erledigt;


console.log (passwort)
//console.log("read: " + goalpassed ,erledigt, hoehe,name1,name2,name3,name4,name5,name6,height1,height2,height3,height4,height5,height6,maxHoehe, currentgoal, nochzutuen)

        
if (height1 == 999999){
  document.getElementById("bis-nächstes-ziel").innerHTML = "keine Ziele mehr"
}else{
  document.getElementById("bis-nächstes-ziel").innerHTML = height1 - erledigt;
}


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
  hoehe = 522
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
  hoehe = hoehe - (510 / maxHoehe)
  erledigt++
  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x; background-position: 1000px "+hoehe+"px;");
  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x; background-position: 1000px "+hoehe+"px;");

  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe-erledigt;
  toast.show()
  logs=Date.now() + ";" + "1"
  save_logs()
  goal()
  save_erledigt()
  save_hoehe()
  save_goalpassed()

}


function am_hoechsten() 
{ 

  var am_hoechsten = document.getElementById("am_hoechsten").value;

  toast = new bootstrap.Toast(toastLiveExample)
  hoehe = hoehe - ((510 / maxHoehe)*am_hoechsten)


  erledigt = erledigt+1*am_hoechsten

  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x; background-position: 1000px "+hoehe+"px;");

  document.getElementById("erledigt").innerHTML = erledigt;
  document.getElementById("nochzutuen").innerHTML = maxHoehe-erledigt;
  toast.show()
  goal()
  masheightCheck()
  save_erledigt()
  save_hoehe()
}
function masheightCheck(){
  if (erledigt >=
     height1){
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
    currentgift = "Party im Restaurant Athos"
    save_currentgift()
    document.getElementById("currentgift").innerHTML = currentgift;
  }else{
    currentgift = "Der Wintergarten von Athos wird gemietet."
    save_currentgift()
    document.getElementById("currentgift").innerHTML = currentgift;
  }
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


function goal()
{
    console.log("goal function executed")
    toast2 = new bootstrap.Toast(toastLiveExample2)
    toast2.show()


    document.getElementById("bis-nächstes-ziel").innerHTML = height1 - erledigt;
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
    if (height1 <= erledigt){
        document.getElementById("bis-nächstes-ziel").innerHTML = "keine Ziele mehr"
        savetime = time_max - Math.floor(Date.now() / 1000)
        console.log(savetime)
        save_savetime()
        height1 = 999999
        currentgift = name1
        currentgoal = name2
        save_height1()
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
    url: '/public/lsavetime',
    async : false,
    success: function (lsavetime) {
      savetime = lsavetime
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

function save_savetime(){
  console.log(savetime)
  $.ajax({
    method: "POST",
    dataType: "text",
    traditional: true,
    data:{'savetime': savetime},
    cache: false,
    url: '/public/savetime',
  });
}

function save_logs(){
  $.ajax({
    method: "POST",
    dataType: "text",
    traditional: true,
    data:{'logs': logs},
    cache: false,
    url: '/public/logs',
  });
}
