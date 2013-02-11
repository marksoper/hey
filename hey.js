

navigator.getMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia).bind(navigator);
 
var onLoad = function() {
  
  navigator.getMedia (
 
   // constraints
   {
      video: true,
      audio: true
   },
 
   // successCallback
   function(localMediaStream) {
      var video = document.querySelector('video');
      video.src = window.URL.createObjectURL(localMediaStream);
      video.onloadedmetadata = function(e) {

         // handle video

      };
   },
 
   // errorCallback
   function(err) {
    console.log("getMedia error: " + err);
   }
 
);


};

document.addEventListener("DOMContentLoaded", onLoad);