function start()
{
    navigator.mediaDevices.getUserMedia({audio : true}) ; 
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9antuQo0V/model.json' , modelReady)

}

function modelReady() 
{
    classifier.classify(gotResults) ;  
}
