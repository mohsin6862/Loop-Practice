var playersInfo = [["Ashraful",101],["Tanim",184],["Shakib",55], ["Mahmuhed",54]];


function highestRunScorer(playersInfo){


    highestRun = playersInfo[0][1];
    highestRunner = playersInfo[0][0];

    for(var i =1 ; i< playersInfo.length; i++){

        if (highestRun< playersInfo[i][1]){
            highestRun = playersInfo[i][1];
            highestRunner =playersInfo[i][0];
        }
    }
    return highestRunner;

}
highestRunnerName = highestRunScorer(playersInfo);
document.write("Name of Highest Run Scorer =" + highestRunnerName);