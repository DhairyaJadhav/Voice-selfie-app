var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("text-box").innerHTML="";
  recognition.start();
}
recognition.onresult=function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text-box").innerHTML=content;
    console.log(content);
    if (content=="take my selfie"){
      console.log("taking selfie in ---");
      speak();
    }
}
function speak()
{
  var synth = window.speakSynthesis;
  speak_data = "taking your selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance;
  synth.speak(utterThis);
  webcam.attach(camera);

  setTimeout(function()
  {
    take_snapshot();
    save();
  }, 5000);
}
 Webcam.set({
height:360,
width:250,
image_format :' png ',
png_quality:90
 });
  
 camera=document.getElementById("camera");

 function take_snapshot()
 {
   Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image" src"'+data_uri+'">';
   });
}

function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src;
  link.href = image;
  link.click();
}