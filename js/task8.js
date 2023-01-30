var scores = [20, 320, 554, 665, 696, 45];
function hightScores (scores){

    max = scores[0];
    for( var i = 1; i<scores.length; i++){
        if (max<scores[i]){
            max=scores[i];
        }
    }
    return max;

}

maxScore = hightScores(scores);
document.write("Highest Score =" + maxScore);