
// TIP : use "document.currentScript" here to select
// the "local document", the one corresponding to this page.
// this may avoid problems when multiple WebComponents files
// are inserted in the same document. See below...
var localDoc = document.currentScript.ownerDocument;

class myWidget extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        let template = localDoc.querySelector('#superTemplate');

        shadowRoot.appendChild(document.importNode(template.content, true));
    }
}

try {
    customElements.define('my-widget', myWidget);
    console.log('Element defined');
} catch (error) {
    console.log('No Good:' + error);
}