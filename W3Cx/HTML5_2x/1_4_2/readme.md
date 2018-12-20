[JSBin / CodePen](https://jsbin.com/gucutiyoyu/2/edit?html,css,js,output)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/dc6fe6f5d28f49b5a753ba6b49820849/b48b0d1504864633b862ef7306f4258b/?child=first)

**watchout for**
```html
<div id="map"></div>
```
```html
<iframe sandbox="allow-same-origin" id="myIframe" > </iframe>
```
**javascript**
```javascript
    // cue change listener, this is where the synchronization between
    // the HTML document and the video is done
    textTrack.oncuechange = function (){
       // we assume that we have no overlapping cues
       var cue = this.activeCues[0];
       if(cue === undefined) return;
       // get cue content as a JavaScript object
       var cueContentJSON = JSON.parse(cue.text);
       // do different things depending on the type of sync (wikipedia, gmap)
       switch(cueContentJSON.type) {
         case'WikipediaPage':
            var myURL = cueContentJSON.url;
            var myLink = "<a href=\"" + myURL + "\">" + myURL + "</a>";
            currentURLSpan.innerHTML = myLink;
            myIFrame.src = myURL; // assign url to src property
            break;
         case 'LongLat':
            drawPosition(cueContentJSON.long, cueContentJSON.lat);
            break;
       }
   };
```