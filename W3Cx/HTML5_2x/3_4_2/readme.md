# Uploading files using XMLHttpRequest level 2 (XHR2)

[JSBin](https://jsbin.com/conigekoda/edit)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/1c530fbca988429899cd827dd5a4cc8b/f19a64e5f98c47418e2cc06ae9f01ad0/5?activate_block_id=block-v1%3AW3Cx%2BHTML5.2x%2B3T2018%2Btype%40vertical%2Bblock%406b5613b6ff8942f0a4b5356dd327de35)  

## watchout for

JAVASCRIPT

```JavaScript
var form = new FormData();
for(var i = 0 ; i < files.length ; i++) {  
    form.append('file', files[i]);
}

xhr.send(form);
```