

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

      var localVideo = document.querySelector('#localVideo');
      localVideo.src = window.URL.createObjectURL(localMediaStream);
      /*
      localVideo.onloadedmetadata = function(e) {

        console.log("onloadedmetadata handler");
         // handle video

      };
      */
   },
 
   // errorCallback
   function(err) {
    console.log("getMedia error: " + err);
   }
 
);


};

document.addEventListener("DOMContentLoaded", onLoad);