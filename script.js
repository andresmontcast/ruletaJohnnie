
 (function() {
   const wheel = document.querySelector('.wheel');
   const startButton = document.querySelector('.button');


   var texts = ["2000", "3000", "4000", "2500"]

    btn = document.getElementById("myBtn"),
    text = document.getElementById("myText"),
    index = 0;

btn.addEventListener("click", changeText);
text.innerHTML = texts[0];

function changeText() {

    index++;
    index %= texts.length
    text.innerHTML = texts[index];

 
    
}



   let deg =document.getElementById("myText").textContent;

  

   startButton.addEventListener('click', () => {
    
    changeText();
      //  Disable button during spin
     startButton.style.pointerEvents = 'none';
       // Calculate a new rotation between 5000 and 10 000
    //  deg = changeText()
  
       // Set the transition on the wheel
     wheel.style.transition = 'all 10s ease-out';
      //  Rotate the wheel
     wheel.style.transform = `rotate(${deg}deg)`;
       // Apply the blur
     wheel.classList.add('blur');
   });

   wheel.addEventListener('transitionend', () => {
     // Remove blur
     wheel.classList.remove('blur');
       // Enable button when spin is over
     startButton.style.pointerEvents = 'auto';
        //Need to set transition to none as we want to rotate instantly
     wheel.style.transition = 'none';
       // Calculate degree on a 360 degree basis to get the "natural" real rotation
       // Important because we want to start the next spin from that one
       // Use modulus to get the rest value from 360
     const actualDeg = deg % 360;
       // Set the real rotation instantly without animation
     wheel.style.transform = `rotate(${actualDeg}deg)`;
   });
 })();





$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});



$(function() {
  var body = $('#starshine'),
      template = $('.template.shine'),
      stars =  500,
      sparkle = 20;
  
    
  var size = 'small';
  var createStar = function() {
    template.clone().removeAttr('id').css({
      top: (Math.random() * 100) + '%',
      left: (Math.random() * 100) + '%',
      webkitAnimationDelay: (Math.random() * sparkle) + 's',
      mozAnimationDelay: (Math.random() * sparkle) + 's'
    }).addClass(size).appendTo(body);
  };
 
  for(var i = 0; i < stars; i++) {
    if(i % 2 === 0) {
      size = 'small';
    } else if(i % 3 === 0) {
      size = 'medium';
    } else {
      size = 'large';
    }
    
    createStar();
  }
});
















let cars = [
  {
    "numero": "0",
    "foto": "./cdef"
 
  },
  {
    "color": "1",
    "type": "station wagon"

  }

  ,
  {
    "color": "2",
    "type": "station wagon"

  }


  ,
  {
    "color": "3",
    "type": "station wagon"

  }


  ,
  {
    "color": "4",
    "type": "station wagon"

  }


  ,
  {
    "color": "5",
    "type": "station wagon"

  }


  ,
  {
    "color": "6",
    "type": "station wagon"

  }
  

     ]


function getGift() {


  for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log([i].numero)
  }



  console.log(element)
}






