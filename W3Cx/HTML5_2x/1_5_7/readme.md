# Load a sound sample using XhR2, decode it and play it using Web Audio

[JSBin / CodePen](https://jsbin.com/botagas/edit?html,js,console,output)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/dc6fe6f5d28f49b5a753ba6b49820849/f162bb287eca4f04bb22d60b2c5456ac/4?activate_block_id=block-v1%3AW3Cx%2BHTML5.2x%2B3T2018%2Btype%40vertical%2Bblock%40c8c3f0351a9b45fc8a0f1f9819fb7df9)  

## watchout for

HTML

```html
<button id="playButton" disabled=true>Play sound</button>
```

CSS

```CSS

```

JAVASCRIPT

```JavaScript
function playSound(buffer){
    // builds the audio graph, then start playing the source
    var bufferSource = ctx.createBufferSource();
    bufferSource.buffer = buffer;
    bufferSource.connect(ctx.destination);
    bufferSource.start(); // remember, you can start() a source only once!
}
```