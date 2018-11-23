[JsBin](https://jsbin.com/lodiju/edit?output)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/dc6fe6f5d28f49b5a753ba6b49820849/b48b0d1504864633b862ef7306f4258b/?child=first)

**watchout for**

HTML
```html
<div id="soundButtons" class="isSupported"></div>
```

JS
```javascript
var track = audio.addTextTrack("metadata", "sprite track", "en");
track.mode = "hidden";
```

```javascript
var cue = new VTTCue(sound.startTime, sound.endTime, sound.id); 
cue.id = sound.id;
// add it to the track
track.addCue(cue);
```

```javascript
var cue = track.getCueById(id);
```