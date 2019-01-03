function init(){
    // instanciate the template
    var template = document.querySelector('#ShadowTemplate');
  
    // Manipultae the Template
    template.content.querySelector('h1').textContent = "xxx";


    // the div is the Shadow Host. Its content will not be rendered
    var host = document.querySelector('#withShadowH1');
    // Create the shadow ROOT, the root node of the shadow DOM
    // using mode:open makes it available, mode:close would return null
    const shadowRoot = host.attachShadow({mode: 'open'});

    shadowRoot.appendChild(document.importNode(template.content, true));
}