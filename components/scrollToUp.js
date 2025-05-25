// Crea una hoja de estilo CSS
const checkboxStyleSheet = new CSSStyleSheet();

checkboxStyleSheet.replaceSync(/*css*/ `
  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -.125em
  }

  .svg-inline--fa.fa-w-18 {
    width: 1.125em
  }

  #backToTop {
    height: auto;
    border: 1px solid #fff;
    padding: 0 10px;
    position: fixed;
    right: 2rem;
    bottom: 8rem;
    color: #fff;
    text-shadow: none;
    background: #9f2340;
    padding: 4px 8px;
    border: 0;
    box-shadow: none;
    outline: none;
    border-radius: 5px;
    
    /* Inicialmente oculto */
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    cursor: pointer; /* Añadir cursor de puntero para indicar que es clickable */
  }
  
  #backToTop.show {
    opacity: 1;
    visibility: visible;
  }
`);

export class BackToTop extends HTMLElement {
	static nameElement = 'back-to-top';

	// Almacenar una referencia al botón para evitar buscarlo en cada scroll
	#backToTopButton = null;

	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [checkboxStyleSheet]; // Adjunta el CSS
	}

	eventScroll = () => {
		const backToTopButton = this.#backToTopButton;
		const scrollThreshold = 300;

		if (window.scrollY > scrollThreshold) {
			backToTopButton.classList.add('show');
		} else {
			backToTopButton.classList.remove('show');
		}
	};

	connectedCallback() {
		this.#render();

		// obtenemos la referencia al botón dentro del Shadow DOM
		this.#backToTopButton = this.shadowRoot.getElementById('backToTop');

		// Añadir el evento de click para que el botón funcione
		if (this.#backToTopButton) {
			this.#backToTopButton.addEventListener('click', this.#scrollToTop);
		}

		// Asegurarse de que `this.eventScroll` tenga el contexto correcto
		// (ya está hecho con la función de flecha, pero es buena práctica mental)
		window.addEventListener('scroll', this.eventScroll);
	}

	disconnectedCallback() {
		// Limpiar los listeners cuando el elemento se remueve del DOM
		window.removeEventListener('scroll', this.eventScroll);
		if (this.#backToTopButton) {
			this.#backToTopButton.removeEventListener('click', this.#scrollToTop);
		}
		this.#backToTopButton = null; // Limpiar la referencia
	}

	#scrollToTop(event) {
		event.preventDefault();

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	#render() {
		this.shadowRoot.innerHTML = /*html*/ `
      <a id="backToTop" href="#" role="button">
        <svg class="svg-inline--fa fa-w-18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
        </svg>
      </a>    
    `;
	}
}
