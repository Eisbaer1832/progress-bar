
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
          url: '/public/',
          success: function (currentgift) {
            console.log(currentgift);
            currentgift = currentgift
          }
        });
        document.getElementById("currentgift").innerHTML = currentgift;
        currentgift.classList.add("animate__animated", "animate__repeat-1","animate__bounceOutDown" )
  });
  
}

