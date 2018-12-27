function init(params) {
    var template = document.querySelector('#superTemplate');

    var host = document.querySelector('#superWidget');

    const shadowRoot = host.attachShadow({mode : 'open'});

    shadowRoot.appendChild(document.importNode(template.content, true));
}