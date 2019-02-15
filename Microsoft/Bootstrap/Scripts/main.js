$(this).onload = function(){
    $('#navId a').click(e => {
        alert("hello");
        e.preventDefault();
        $(this).tab('show');
    });
}

