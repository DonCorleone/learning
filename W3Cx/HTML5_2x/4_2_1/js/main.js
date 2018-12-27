function instantiate() {
    var template = document.querySelector('#mytemplate');

    // Populate the src at runtime.
    template.content.querySelector('img').src = 'http://webcomponents.github.io/img/logo.svg';

    // clone template content
    var clone = document.importNode(template.content, true);

    // add it to the body of the HTML document
    document.body.appendChild(clone);
}