function init(){
    // the div is the Shadow Host. Its content will not be rendered
    var host = document.querySelector('div');
  
    // Create the shadow ROOT, the root node of the shadow DOM
    // using mode:open makes it available, mode:close would return null
    const shadowRoot = host.attachShadow({mode: 'open'});

    shadowRoot.textContent = 'this will be rendered';

    document.body.appendChild(shadowRoot);
}