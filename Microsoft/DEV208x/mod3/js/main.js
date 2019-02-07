window.onload = function(){
    $.getJSON('https://localhost:5001/api/v1.0/Links', function(data){
        var links = data;
        links.forEach(element => {            
            $('#output').append('<li>' + element.title + '</li>');
        });
    });
};


