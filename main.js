Webcam.set({
    width:350,
    image_format:'png',
    height:300,
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' )

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="caputured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

calassifier = ml5.imageClassifier('     ',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first predition is " + prediction_1;
    speak_data_2 = "The second predition is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        var prediction_1 = results[0].label;
        speak();
        if(results[0].label == "Thumbs up")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077";
        }
        if(results[0].label == "")
        {
            document.getElementById("update_emoji").innerHTML = "&#128532";
        }
        if(results[0].label == "")
        {
            document.getElementById("update_emoji").innerHTML = "&#128548";
        }
    }
}