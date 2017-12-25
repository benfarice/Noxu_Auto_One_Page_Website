/*------------------Map Google-----------------------------*/
function initMap() {
        var uluru = {lat: 33.5801543, lng: -7.5674638};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
/*-----------------Slider 2--------------------------*/
$(document).ready(function(){

s = new slider(".galerie");
});
var slider = function(id){
self = this ;

this.div = $(id);
this.slider = this.div.find(".slider");

this.largeurCache = this.div.width();

this.largeur = 0;
this.div.find(".bloc").each(function(){
self.largeur +=$(this).width();
self.largeur +=parseInt($(this).css("padding-left"));
self.largeur +=parseInt($(this).css("padding-right"));
self.largeur +=parseInt($(this).css("margin-left"));
self.largeur +=parseInt($(this).css("margin-right"));
});
this.prec = this.div.find(".prec");
this.suiv = this.div.find(".suiv");
this.saut = this.largeurCache/2;
this.nbEtapes = Math.ceil(this.largeur/this.saut - this.largeurCache/this.saut);
this.courant = 0;

this.suiv.click(function(){
	if(self.courant < (self.nbEtapes-1)){
	self.courant++;	
	self.slider.animate({
	
	left:-self.saut * self.courant

},1000);}
});


this.prec.click(function(){
	if(self.courant > 0){
	self.courant--;	
	self.slider.animate({
	
	left:-self.saut * self.courant

},1000);}
});}
/*------------------Slider 1-------------------------*/
var myVar=0;
var x = false;
function enabledFalse(){
    setTimeout(function(){x=true;}, 2000);
    
}
 $(document).ready(function() {
     go();
      $('.skitter-large').skitter({
        numbers: false,
        dots: false,
        interval:5000,
        navigation:false,
        auto_play:true,
        stop_over:false
         
      });
     myVar = setInterval(moveFunc, 6000);
     $("#topImg").click(function(){
        if(x==true){$('.skitter-large').skitter('next'); 
         clearInterval(myVar);
         changeSafra(-1);
         
         myVar = setInterval(moveFunc, 6000);} 
         x=false;
        enabledFalse();
     });
     
       $("#contreimages").click(function(){
        if(x==true){ $('.skitter-large').skitter('prev'); 
           clearInterval(myVar);
            changeSafra(1);
          
           myVar = setInterval(moveFunc, 6000);}
             x=false;
            enabledFalse();
           
     });  
    });
/*--------------------------------**/

function moveFunc(){
     changeSafra(1);
}
function go(){
setTimeout(moveFunc(), 2000);
}
function mg(){
var a =document.getElementById("emechangement")
var b = document.getElementById("changement")
var c = document.getElementById("changemeeent")
var d = document.getElementById("echangement")
var e = document.getElementById("mechangement")
var f = document.getElementById("changement")
var g = document.getElementById("navbar-inverse")

g.style.background="rgba(34,59,62,0.9)"
a.style.display="block"
b.style.display="none"
c.style.display="none"
d.style.display="none"
e.style.display="none"
f.style.display="none"
}
function rf(){
var a =document.getElementById("emechangement")
var b = document.getElementById("changement")
var c = document.getElementById("changemeeent")
var d = document.getElementById("echangement")
var e = document.getElementById("mechangement")
var f = document.getElementById("changemeent")
var g = document.getElementById("navbar-inverse")

g.style.background="rgba(34,59,62,0.9)"
e.style.display="block"
b.style.display="none"
c.style.display="none"
d.style.display="none"
a.style.display="none"
f.style.display="none"
}
function cli(){
var a =document.getElementById("emechangement")
var b = document.getElementById("changement")
var c = document.getElementById("changemeeent")
var d = document.getElementById("echangement")
var e = document.getElementById("mechangement")
var f = document.getElementById("changemeent")
var g = document.getElementById("navbar-inverse")

g.style.background="rgba(34,59,62,0.9)"
d.style.display="block"
b.style.display="none"
c.style.display="none"
e.style.display="none"
a.style.display="none"
f.style.display="none"
}
function sa(){
var a =document.getElementById("emechangement")
var b = document.getElementById("changement")
var c = document.getElementById("changemeeent")
var d = document.getElementById("echangement")
var e = document.getElementById("mechangement")
var f = document.getElementById("changemeent")
var g = document.getElementById("navbar-inverse")

g.style.background="rgba(34,59,62,0.9)"
changemeent
f.style.display="block"
b.style.display="none"
c.style.display="none"
e.style.display="none"
a.style.display="none"
d.style.display="none"
}
function vid(){
var a =document.getElementById("emechangement")
var b = document.getElementById("changement")
var c = document.getElementById("changemeeent")
var d = document.getElementById("echangement")
var e = document.getElementById("mechangement")
var f = document.getElementById("changemeent")
var g = document.getElementById("navbar-inverse")

g.style.background="rgba(34,59,62,0.9)"
changemeent
c.style.display="block"
b.style.display="none"
f.style.display="none"
e.style.display="none"
a.style.display="none"
d.style.display="none"
g.style.background="rgba(34,59,62,0.9)"
}

    


