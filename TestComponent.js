import { BaseComponent, html, css } from './BaseComponent.js';

class TestComponent extends BaseComponent {
    constructor() {
        super();
        this.enableShadow();
    }

    template() {
        return html`
            <h2>Hello World!</h2>
            <p>GUScode -> Este es un párrafo de web component</p>
        `;
    }

    styles() {
        return css`
            h2 {
                color: white;
                background-color: blue;
                padding: 1rem;
            }
        `;
    }
}

customElements.define('test-component', TestComponent);
