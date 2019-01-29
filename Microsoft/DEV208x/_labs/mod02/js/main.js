
// your answer would go here
$(document).ready(function(){
  
    // When the user hovers their mouse over a circle, that circle and all circles to the left must be filled with a color, such as yellow. 
    $(document).delegate('.rating-circle','mouseover',function () {
        var target = $(this);
        target.removeClass('rating-chosen');
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

    var $circle = $('#template').clone();

    $('#rating-container').remove('#template');
    $('#update-max-value').click(function () {

        var $maxValue = $('#max-value').val();
        // integer?
        if ($maxValue % 1 === 0) {
            //$('#rating-container').remove('');
            for (let i = 0; i < $maxValue; i++) {
                var newCircle = $circle.clone()
                $('#rating-container').after(newCircle);

            }
        } else {
            alert('pls. insert a valid number!');
        }
    });
});
