

navigator.getMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia).bind(navigator);
 
var onLoad = function() {
  
  navigator.getMedia (
 
   // constraints
   {
      'video': {"mandatory": {}, "optional": []},
      'audio': true
   },
 
   // successCallback
   function(localMediaStream) {
      var audio = document.querySelector('audio');
      audio.src = window.URL.createObjectURL(localMediaStream);
      audio.onloadedmetadata = function(e) {

         // handle audio

      };
   },
 
   // errorCallback
   function(err) {
    console.log("getMedia error: " + err);
   }
 
);


};

document.addEventListener("DOMContentLoaded", onLoad);