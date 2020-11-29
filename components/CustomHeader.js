class CustomHeader extends HTMLElement {
  constructor () {
    super();
  }
  
  connectedCallback () {
    this.innerHTML = `
      <header>
        <h1>Texto en header</h1>
      </header>
    `;
  }
}

window.customElements.define('custom-header', CustomHeader)