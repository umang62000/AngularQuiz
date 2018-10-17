app.factory("quizMetrics",(dataService)=>{
    var numCorrect=0;
    var quizObj={
        quizActive:false,
        correctAnswers:[],
        markQuiz(){
            
            correctAnswers = dataService.correctAnswers;
            for(let i=0 ; i<dataService.quizQuestions.length;i++){
                if(dataService.quizQuestions[i].selected===dataService.correctAnswers[i]){
                    dataService.quizQuestions[i].correct=true;
                     numCorrect ++;
                     console.log(numCorrect);
                }
                else{
                    dataService.quizQuestions[i].correct=false;
                }
            }
            return numCorrect;
        }
        
    }
    return quizObj;

    

});
