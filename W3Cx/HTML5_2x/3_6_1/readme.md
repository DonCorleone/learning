# Using IndexedDB: creating and deleting a database

[JSBin](https://jsbin.com/govuci/edit?html,js)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/1c530fbca988429899cd827dd5a4cc8b/6c3721f499ec4df395514b458961002f/?child=first)  

## watchout for

HTML

```html

```

CSS

```CSS

```

JAVASCRIPT

```JavaScript
    // short version of typingdeleting
    var request = db.transaction(["customers"], "readwrite")
    .objectStore("customers")
    .delete("444-44-4444");

    // short version if searching
    db.transaction("customers").objectStore("customers")
    .get(document.querySelector("#ssn").value).onsuccess = function (event) {
        document.querySelector("#name").value = event.target.result.name;
        document.querySelector("#age").value = event.target.result.age;
        document.querySelector("#email").value = event.target.result.email;
    };
```

```JavaScript
    newCustomer.age =  parseInt(document.querySelector("#age").value, 0);
```