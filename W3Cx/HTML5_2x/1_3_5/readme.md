[JSBIN](https://jsbin.com/pulefe/1/edit?html,css,js,output)
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/dc6fe6f5d28f49b5a753ba6b49820849/a01770f16a0946999ddcfb9bb3929b6e/?child=last)

watchout:

```html
<track label="English chapters"
         kind="chapters"
        srclang="en" src="https://...../elephants-dream-chapters-en-JSON.vtt">
</video>
...
<div id="chapterMenu"></div>
```

```javascript
// Build the chapter navigation menu for the given lang and kind
buildChapterMenu('en', 'chapters');

...

var cueObject = JSON.parse(cue.text);
var description = cueObject.description;
var imageFileName = cueObject.image;

```
