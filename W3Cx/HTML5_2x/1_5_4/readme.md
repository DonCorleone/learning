[JSBin / CodePen](https://jsbin.com/momixok/edit?html,js,console,output)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/dc6fe6f5d28f49b5a753ba6b49820849/f162bb287eca4f04bb22d60b2c5456ac/3?activate_block_id=block-v1%3AW3Cx%2BHTML5.2x%2B3T2018%2Btype%40html%2Bblock%4084ccadba8f46416a994728f9099a35c0)  

**watchout for**

HTML

```html
<input type="range" min="0" max="10" step="0.01"
        value="8" id="gainSlider1" />
```

CSS

```CSS

```

JAVASCRIPT

```JavaScript
// compressor was off, we connect the gain to the compressor
// and the compressor to the destination
gainNode1.disconnect(audioContext.destination);
gainNode1.connect(compressorNode);
compressorNode.connect(audioContext.destination);
compressorButton.innerHTML="Turn compressor: Off";
```

JAVASCRIPT

```JavaScript
   // do not connect it yet
   compressorNode = audioContext.createDynamicsCompressor(); // connect nodes together
```