// Accordian
$("#accordion > li > h4").click(function(){
    if(false == $(this).next().is(':visible')) {
    $('#accordion p').slideUp(300);
    }
    $(this).next().show(300);
    });
    $('#accordion p:eq(0)').show();
    
    $('#accordion > li').click(function() {
    $( this ).parent().find('.active').removeClass('active');
    $( this ).toggleClass('active');
    });
    
    // Slider
    var swiper = new Swiper('.swiper-container', {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
    
    // Tabbing
    (function($) {
    $.fn.multitabs = function() {
    var _this = $(this);
    var tabs = _this.children('.tab__header[data-child="false"]').children('div');
    var childrenTabs = _this.find('.tab__header[data-child="true"]').children('div');
    
    $(tabs).add(childrenTabs).on('click', function() {
    var num;
    var _this = $(this);
    var classNameTab = _this.attr('class').split(' ');
    var classNameContent = _this.parent().siblings().children();
    
    for (i = 0; i <= classNameTab.length; i++) {
    if (/([\d.]+)/.test(classNameTab[i])) {
    var isChild = $(_this).parent().data('child');
    num = classNameTab[i].split('-')[1];
    
    if (!isChild) {
    $(tabs).removeClass('tab__header--active');
    $(_this).addClass('tab__header--active');
    } else {
    $(_this).siblings().removeClass('tab__header--active');
    $(_this).addClass('tab__header--active');
    }
    
    }
    }
    
    $(classNameContent).each(function(i, n) {
    var name = $(n).attr('class').split(' ');
    for (n = 0; n <= name.length; n++) {
    if (name[n] != undefined) {
    if (/([\d.]+)/.test(name[n])) {
    if (num === name[n].split('-')[1]) {
    var el = $(classNameContent)[num - 1];
    $(classNameContent).removeClass('tab__content--active');
    $(el).addClass('tab__content--active');
    }
    }
    }
    }
    });
    
    });
    
    }
    })(jQuery);
    $('.tab1').multitabs();
    $('.tab2').multitabs();
    $('.tab3').multitabs();


    // Testimonials
    var listElements = document.getElementById('test_img').querySelectorAll("li");
var x = document.getElementById("content-div").querySelectorAll("div");
var createBullets = document.getElementById("sliderNav");
var slNav = '';

var step = (2*Math.PI)/listElements.length;
  var angle=0;
  var circleCenterX = 220;
  var circleCenterY = 150;
  var radius = 170;

  
function createCircleImage(){    
    for(var i = 0; i<listElements.length; i++)
     { 
        var element = listElements[i];
        x[i].style.display = "none";
        var liLeft=Number(Math.round(circleCenterX+radius*Math.cos(angle)));
        var liTop=Number(Math.round(circleCenterY+radius*Math.sin(angle)));
        element.style.left = liLeft+"px";
        element.style.top = liTop+"px";
        element.style.width= 50+"px";
        angle+=step;
  }
}

function buildNav(){
    slNav = slNav + "<ul>"; 

    for(var i = 0; i<listElements.length; i++)
     {
        slNav = slNav + "<li onclick='changeCenter("+i+")''></li>"; 
     }
     slNav = slNav + "</ul>"; 
     createBullets.innerHTML = slNav;
}

buildNav();
function init(){

    createCircleImage();
    var slNav = document.getElementById('sliderNav').querySelectorAll("li");
    var element = listElements[0];
    slNav[0].classList.add("active");
    element.style.left = 200+"px";
    element.style.top = 140+"px";
    element.style.width = 120+"px";
    x[0].style.display = "block";
}

init();

  function changeCenter(val){
    init();
   
    createCircleImage();
    
    var slNav = document.getElementById('sliderNav').querySelectorAll("li");
    var element = listElements[val];
    
    [].forEach.call(slNav, function(el) {
        el.classList.remove("active");
    });
   
    slNav[val].classList.add("active");
    element.style.left = 200+"px";
    element.style.top = 140+"px";
    element.style.width = 120+"px";
    x[val].style.display = "block";
  }

  //Footer
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
  
//Mobile Hamburger Menu
  function myfunction(){
    var e = document.getElementById('navbar');
    e.classList.toggle('open');
    }
 