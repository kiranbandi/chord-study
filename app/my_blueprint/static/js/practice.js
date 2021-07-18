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
// Set the Chart Iterator to zero
var currentIndex = 0;
// Set the Question Iterator to zero
var question_index = 0;




// Study intro is shown by default so wait for the user to click next 
$('#study-intro button.next').click(() => {
    // Hide study intro and then based on the user condition either show the chord intro or the sankey intro 
    $('#study-intro').hide();
    intializeChart();
});


function intializeChart() {
    // Based on the chartType of the user condition show the corresponding intro 
    let value = question_map[currentIndex];
    let [chartType, questionType, dataType] = value.split('-');
    $('#' + chartType + '-intro').show();
    // Also show the chart 
    if (chartType == 'chord') { createChord(dataType) }
    else { createSankey(dataType) }

    // Blink the Chord A to Chord B demo link 
    $('.Country-A-Country-B').addClass('animate');

    // Study intro is shown by default so wait for the user to click next 
    // When the next button is clicked after reading the chart intro 
    // hide the chart intro and then start showing the questions 
    $('#' + chartType + '-intro button.next').click(() => {

        // Hide the demo blinking 
        $('.Country-A-Country-B').removeClass('animate');

        // Based on the chartType of the user condition show the corresponding intro 
        let value = question_map[currentIndex];
        let [chartType, questionType, dataType] = value.split('-');
        $('#' + chartType + '-intro').hide();
        // When the next button is clicked after reading the chart intro 
        // hide the chart intro and then start showing the questions
        initializeQuestionSet();
    });
}

function initializeQuestionSet() {
    // start with the first question 
    question_index = 0;
    showQuestion();
}



function showQuestion() {
    // Based on the chartType of the user condition get the question set 
    let value = question_map[currentIndex];
    let [chartType, questionType, dataType] = value.split('-');
    let question_set = studyQuestions[questionType + '-' + dataType];


    // Show the questionBox 
    $('#question-box').show();
    // Set the question in the label 
    $('#question-label').text('Question: ' + question_set[question_index].label);
    // Get the choices for the question 
    let answer_choices = question_set[question_index].choices;
    // Clear answer choice box 
    $('#choice-box').empty();
    // Add these choices to the form
    answer_choices.map((choice, choiceIndex) => {
        $('#choice-box').append(
            `<div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="radio-${choiceIndex}" name="answer-radio" 
                        value="${choice}">
                    <label class="form-check-label" for="radio-${choiceIndex}">${choice}</label>
                </div>`
        );
    });


    $('#question-box button.next').unbind('click').click((event) => {
        // prevent form from submitting
        event.preventDefault();
        // validate the answer by getting the question set

        let value = question_map[currentIndex];
        let [chartType, questionType, dataType] = value.split('-');
        let question_set = studyQuestions[questionType + '-' + dataType];

        let correct_answer = question_set[question_index].answer,
            user_answer = $('input[name="answer-radio"]:checked').val();

        if (correct_answer == user_answer) {
            // TODO log the answer 
            // then go to next question
            if (question_index < 4) {
                // increment question index
                question_index += 1;
                showQuestion();
            }
            else {
                if (currentIndex < question_map.length) {
                    // hide question box 
                    $('#question-box').hide();
                    // increment current index and go to the next chart type 
                    currentIndex += 1;
                    intializeChart();
                }
                else {
                    // go to next phase on the study
                    window.location.href = "/redirect_next_page";
                }
            }
        }
        else {
            alert('Sorry, that was the wrong answer. Please try again.');
        }
    });

}





