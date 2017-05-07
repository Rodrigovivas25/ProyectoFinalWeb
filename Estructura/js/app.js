
(function(){
  'use strict';

angular
.module("myApp",[])
.controller("movieCtrl", movieCtrl);

function movieCtrl(){
  var movie = this;

  movie.Android = [{'Android' : 'Android'}];
  movie.Arduino = [{'Arduino':'Arduino'}];
  movie.Bases    = [{'Bases':'Bases de Datos'}];
  movie.C       = [{'C':'C'}];
  movie.C1      = [{'C1':'C++'}];
  movie.C2      = [{'C2':'C#'}];
  movie.Diseno  = [{'Diseno':'Diseño WEB'}];
  movie.Ensamblado= [{'Ensamblado':'Emsamblado y Mantenimiento de PC´S'}];
  movie.Computo = [{'Computo':'Computo Forense'}];
  movie.Fortran = [{'Fortran':'Fortran'}];
  movie.Inteligencia = [{'Inteligencia':'Inteligencia Artificial'}];
  movie.Introduccion = [{'Introduccion':'Introduccion a la programacion'}];
  movie.IOS = [{'ios' : 'IOS'}];
  movie.Redes = [{'Redes':'Redes'}];
  movie.Raspberry = [{'Raspberry':'Raspberry'}];
  movie.Python = [{'Python':'Python'}];
  movie.PHP = [{'PHP':'PHP'}];
  movie.Matlab= [{'Matlab':'Matlab'}];
  movie.Linux = [{'Linux':'Linux'},];
  movie.Laravel = [{'Laravel':'Laravel'}];
  movie.Java = [{'Java':'Java'}];

}

})();

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

$('.carousel.carousel-slider').carousel({fullWidth: true});


  $('.tap-target').tapTarget('open');
  $('.tap-target').tapTarget('close');
        
 var options = [{selector: '#image-test', offset: 500, callback: function(el) { Materialize.fadeInImage($(el)); } } ]; Materialize.scrollFire(options);