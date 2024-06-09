//TODO: Implement time stop when goal is reached and save current time to backend to set a highscore
let data
let finishtime, maxHoehe, name1, height1, done, currentgoal, currentgift, saved_password, time_max, password, authorized, logs


load()

document.getElementById("currentgift").innerHTML = name1;
document.getElementById("erledigt").innerHTML = done;
document.getElementById("nochzutuen").innerHTML = maxHoehe-done;
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')      
const termometer = document.getElementById("Termometer");
const toastLiveExample2 = document.getElementById('liveToast2')      
const gift = document.querySelector('#gift');
const timer_text = document.getElementById("timeleft")

// animate the termometer
let hoehe = 522 - ((510 / maxHoehe)*done)
termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px 522px");
$('#Termometer').animate({
  'background-position-y': hoehe + "px"
}, 1000, 'linear');


//n_higher event listener
document.getElementById("n_higher_button").addEventListener ("click" , function(){
	hoeher(document.getElementById("n_higher_input").value)
}, false);

//resive event listener
addEventListener("resize", (event) => {});
onresize = (event) => {
  height = document.documentElement.clientHeight
  width = document.documentElement.clientWidth
  navedit()
}

getTimestampInSeconds()
async function getTimestampInSeconds () {
  let time_to_display
  await load()
  console.log(finishtime)
  if (done < height1)
  {
	  console.log("wuuuusch")
    while (true)
    {
      let time
      time = Math.floor(Date.now() / 1000)


      
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
    console.log("done")
    var d = Math.floor(finishtime / (3600*24));
    var h = Math.floor(finishtime % (3600*24) / 3600);
    var m = Math.floor(finishtime % 3600 / 60);
    var s = Math.floor(finishtime % 60);
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

if (height1 <= done){
  document.getElementById("bis-nächstes-ziel").innerHTML = "Ihr habt euer Ziel erreicht!"
}else{
  document.getElementById("bis-nächstes-ziel").innerHTML = height1 - done;
}


function MaximaleHoehe()
{ 
  maxHoehe = Number(document.getElementById("maxHoehe").value);
  document.getElementById("nochzutuen").innerHTML = maxHoehe-done;
  console.log("maxHoehe: " + maxHoehe)
  save()}

function MaximaleHoehe2()
{ 
  maxHoehe = document.getElementById("maxHoehe2").value;
  document.getElementById("erledigt").innerHTML = done;
  document.getElementById("nochzutuen").innerHTML = maxHoehe-done
  save()
}

function reset()
{
  done = 0
  hoehe = 522

  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x;  background-position: 1000px "+hoehe+"px");
  document.getElementById("erledigt").innerHTML = done;
  document.getElementById("nochzutuen").innerHTML = maxHoehe-done;
  save()
}

function hoeher(count) 
{ 
  toast = new bootstrap.Toast(toastLiveExample)
  hoehe = hoehe - ((510 / maxHoehe)*count)

  done = done+1*count

  termometer.setAttribute("style","background:url(/public/assets/red.png); background-repeat: repeat-x; background-position: 1000px "+hoehe+"px;");

  document.getElementById("erledigt").innerHTML = done;
  document.getElementById("nochzutuen").innerHTML = maxHoehe-done;
  toast.show()
  goal()
  logs=Date.now()/1000 + ";" + count
  save_logs()
}


function passwordfunction()
{
  var offcanvas = document.getElementById('offcanvas')
  var toast = document.getElementById('passwordwrongtoast')
  password = document.getElementById("password").value;

  if (password == saved_password)
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
  goal()
  save()
  document.getElementById("goal-text").innerhtml = "Nächster Preis:" + name1;
  currentgoal = name1
  document.getElementById("goal-text").innerHTML = "Nächster Preis: " + currentgoal;
}


function goal()
{
    toast2 = new bootstrap.Toast(toastLiveExample2)
    toast2.show()


    document.getElementById("bis-nächstes-ziel").innerHTML = height1 - done;

    if (height1 <= done){
        document.getElementById("bis-nächstes-ziel").innerHTML = "Ihr habt euer Ziel erreicht";
        currentgift = name1
        currentgoal = "Ihr habt euer Ziel erreicht"
        finishtime = time_max - Math.floor(Date.now() / 1000)
    }
    save()

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
    url: '/public/data',
    success: function (lodeddata) {
      data = lodeddata

      done = parseInt(data.done)
      maxHoehe = data.max
      saved_password = data.password
      name1 = data.goal.name
      height1 = data.goal.height
      finishtime = data.finishtime
      time_max = data.maxtime
      
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
function save() {
  console.log(data)
  data.done = done
  data.max = maxHoehe
  data.password = saved_password
  data.goal.name = name1
  data.goal.height = height1
  data.finishtime = finishtime
  data.maxtime = time_max
  console.log(data)

  $.ajax({
    dataType: "JSON",
    traditional: true,
    type: 'POST',
    data:{'data': JSON.stringify(data)},
    cache: false,
    url: '/public/savedata',

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
