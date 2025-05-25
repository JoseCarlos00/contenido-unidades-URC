import { BackToTop } from './scrollToUp.js'

class MyCustomFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="container">
        <div class="row">
          <div class="column">
            <div class="logotipos">
              <img src="../../assets/images/logos_encabezado.svg">
            </div>
          </div>
        </div>
      </div>
      `;
	}
}

// Registro del Custom Element extendiendo 'footer'
customElements.define('my-footer', MyCustomFooter, { extends: 'footer' });

customElements.define(BackToTop.nameElement, BackToTop);
