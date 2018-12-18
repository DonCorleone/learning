# Ajax and binary files - downloading files and monitoring progress

[JSBin](https://jsbin.com/mecakaz/edit?html,output)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/1c530fbca988429899cd827dd5a4cc8b/672b23946d9241599d10105527876a77/1?activate_block_id=block-v1%3AW3Cx%2BHTML5.2x%2B3T2018%2Btype%40vertical%2Bblock%40198671a1f7144a9ca007b7270ba6c6a0)  

## watchout for

HTML

```html
<button onclick="downloadSoundFile('http://myserver.com/song.mp3');">
     Download and play example song.
 </button>
```

JAVASCRIPT

```JavaScript
    xhr.responseType = 'arraybuffer'; // THIS IS NEW WITH HTML5!
```