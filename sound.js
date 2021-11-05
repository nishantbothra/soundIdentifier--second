function start_recording() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6cxl3nQUC/model.json", modelLoaded);
}
function modelLoaded() {
    console.log("model is initialized");
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}

































