
// your answer would go here
$(document).ready(function(){
  
    // When the user hovers their mouse over a circle, that circle and all circles to the left must be filled with a color, such as yellow. 
    $(document).delegate('.rating-circle','mouseover',function () {
        var target = $(this);
        target.removeClass('rating-chosen');
        target.prevAll('.rating-circle').removeClass('rating-chosen');
        target.nextAll('.rating-circle').removeClass('rating-chosen');
        target.addClass('rating-hover');
        target.prevAll('.rating-circle').addClass('rating-hover');
    });

    $(document).delegate('.rating-circle','mouseout',function () {
        var target = $(this);
        target.removeClass('rating-hover');
        target.prevAll('.rating-circle').removeClass('rating-hover');
    });

    //When the user clicks on a circle, that circle and all circles to the left must be filled with a different color, such as green. The color must remain, even after the user moves their mouse away from the widget. 
    $(document).delegate('.rating-circle','click',function () {
        var target = $(this);
        target.addClass('rating-chosen');
        target.prevAll('.rating-circle').addClass('rating-chosen');
    });

    $(document).ajaxSend(function () {
        // disable all buttons
        $('button').attr('disabled', 'disabled');
    }).ajaxComplete(function () {
        // enable all buttons
        $('button').removeAttr('disabled');
    });
    
    // onClick on button
    $('#update-max-value').click(function () {

        // read Value
        var $maxValue = $('#max-value').val();
        
        // check value if integer
        if ($maxValue % 1 === 0) {
            
            // set max value
            $('#rating-container').attr('max-value', $maxValue);
        } else {
            // warn
            alert('Pls. insert a valid number!');
        }

        refreshCircles();
    });

    // Click Handler for Save-Button
    $('#save-rating').click(function(){

        // Init Counter
        var counter = 0;

        // count each with class 'rating-chosen'
        $('.rating-chosen').each(element => {
            counter ++;
        });

        // create JSON Object
        var rating = {
            value: counter, 
            maxValue: $('#rating-container').attr('max-value')
        }

        // send to API
        $.post('http://jquery-edx.azurewebsites.net/api/Rating', rating, function(data){

            // display response
            $('#output').text(data.message);
        })
    })

    // Init circles for the first time.
    refreshCircles();
});


function refreshCircles(){

    // clean the container
    $('#rating-container').children().remove();

    // read max Value
    var $maxValue = $('#rating-container').attr('max-value');

    // sth todo?
    if ($maxValue > 0) {
        // create a template
        // https://stackoverflow.com/questions/867916/creating-a-div-element-in-jquery
        var $circleTemplate = jQuery('<div/>', {
            id: 'circle',
            class: 'rating-circle'
        });

        // create N circles
        for (let i = 0; i < $maxValue; i++) {
            var newCircle = $circleTemplate.clone()
            newCircle.attr('id', newCircle.attr('id') + i);
            // add new circle
            $('#rating-container').append(newCircle);
        }
    }
}