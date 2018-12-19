# File upload with XMLHttpRequest level 2 and HTML5

[JSBin](https://jsbin.com/pidusap/edit)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/1c530fbca988429899cd827dd5a4cc8b/672b23946d9241599d10105527876a77/?child=last)  

## watchout for

JAVASCRIPT

```JavaScript
   xhr.onload = function() {
     alert('Upload complete !');
   };
 
   var form = new FormData();
   form.append('file', fileInput.files[0]);
```