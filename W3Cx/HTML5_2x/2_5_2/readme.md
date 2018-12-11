# Collission Detection Pool Balls

[JSBin](https://jsbin.com/vaqifokupi/edit?js,output)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/403b445abed54b2ba00322290f1684c7/3cce09df94d24a7a9e038680cae751f9/1?activate_block_id=block-v1%3AW3Cx%2BHTML5.2x%2B3T2018%2Btype%40vertical%2Bblock%406462ee62332946d38f051ef853f08c36)  

## watchout for

HTML

```html

```

CSS

```CSS

```

JAVASCRIPT

```JavaScript
var distance = Math.sqrt(dx * dx + dy * dy);
  
  // ..
  
  boundingCircleRadius: 70

  // ..

  boundingCircleRadius: 20

  // ..

    checkCollisions();

  // ..

    if(circleCollide(player.x, player.y, player.boundingCircleRadius,
                   monster.x, monster.y, monster.boundingCircleRadius)) {
  
  // ..

function circleCollide(x1, y1, r1, x2, y2, r2) {
   var dx = x1 - x2;
   var dy = y1 - y2;
   return ((dx * dx + dy * dy) < (r1 + r2)*(r1+r2));
   
```