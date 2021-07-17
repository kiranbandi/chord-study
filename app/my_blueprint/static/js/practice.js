// Get the list of datasets that we will be running the user through
var data_list = ['sample'];

// First get the condition 
var condition = getCond();
// Then get the corresponding map based on the condition 
var condition_set = condition_map[condition];

// Create a question set based on the condition 
//  for example if a user has condition ['chord-A','sankey-B'] ,
//  then their question set becomes ['chord-A-phone','sankey-B-phone','chord-A-space','sankey-B-space','chord-A-immigration','sankey-B-immigration','chord-A-debt','sankey-B-debt'];
var question_map = [];
data_list.map((d) => {
    condition_set.map((c) => {
        question_map.push(c + '-' + d);
    });
});
// Start Chart Iterator
var currentIndex = 0;
//  Start Question Iterator
// Show the first chart
showChart();

$('#next').click(() => {
    if (currentIndex >= question_map.length) {
        window.location.href = "/redirect_next_page";
    }
    else {
        showChart();
    }
});


function showChart() {
    let value = question_map[currentIndex];
    let [chartType, questionType, dataType] = value.split('-');
    if (chartType == 'chord') { createChord(dataType) }
    else { createSankey(dataType) }
    // After the chart is shown
    currentIndex += 1;
    
}

function showQuestion() {

    let value = question_map[currentIndex];
    let [chartType, questionType, dataType] = value.split('-');

    var questionSet = studyQuestions[]

    var questionBox = $('#question-box');
    //  First clear any existing contents of the question box
    questionBox.empty();
    // Then create the question label
    questionBox.append('<div class="form-group"><label>'++'</label></div>');

    $('#next').hide();


}



