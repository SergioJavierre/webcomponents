class CustomFooter extends HTMLElement {
  constructor () {
    super();
  }
  
  connectedCallback () {
    this.innerHTML = `
      <footer>
        <p>sergiojavierre</p>
      </footer>
    `;
  }
}

window.customElements.define('custom-footer', CustomFooter)