[JSBin / CodePen](https://jsbin.com/sequtas/edit?html,output)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/dc6fe6f5d28f49b5a753ba6b49820849/f162bb287eca4f04bb22d60b2c5456ac/4?activate_block_id=block-v1%3AW3Cx%2BHTML5.2x%2B3T2018%2Btype%40vertical%2Bblock%40c8c3f0351a9b45fc8a0f1f9819fb7df9)  

**watchout for**

HTML

```html

```

CSS

```CSS

```

JAVASCRIPT

```JavaScript
   // Create an analyser node
   analyser = audioContext.createAnalyser();
   // set visualizer options, for lower precision change 1024 to 512,
   // 256, 128, 64 etc. bufferLength will be equal to fftSize/2
   analyser.fftSize = 1024;
   bufferLength = analyser.frequencyBinCount;
   dataArray = new Uint8Array(bufferLength);
```

```javascript
  // 2 - Get the analyser data - for waveforms we need time domain data
  analyser.getByteTimeDomainData(dataArray);
```