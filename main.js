function identify(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YVgsmdx6G/model.jsonmodel.json", modelReady);
     

}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults (error , results){
 if(error){
     console.error(error);
 
 }
 else{
     console.log(results);
     random_number_r = Math.floor(Math.random() * 255)+ 1;
        random_number_g = Math.floor(Math.random() * 255)+ 1;
        random_number_b = Math.floor(Math.random() * 255)+ 1;

        document.getElementById("result").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy - " +(results[0].confidence * 100).toFixed(2)+"%";
        document.getElementById("result").style.color = "rgb("+random_number_r+" , "+random_number_g+" "+random_number_b+")";
        document.getElementById("accuracy").style.color = "rgb("+random_number_r+" , "+random_number_g+" "+random_number_b+")";

        if(results[0].label == "meowing"){
            document.getElementById("ear").src = "cat.png";
         }

         else if (results[0].label == "barking"){
             document.getElementById("ear").src = "dog.png" ; 
         }

         else if (results[0].label == "quacking"){
            document.getElementById("ear").src = "duck.png" ; 
        }
     
      else {
          document.getElementById("ear").src = "cow.png";
      }
 }
}