
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