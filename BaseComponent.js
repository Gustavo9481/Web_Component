// Clase base para creación de componentes

export class BaseComponent extends HTMLElement {
    enableShadow(enabled = true, options = { mode:"open" }) {
        if (enabled) {
            this.attachShadow({ mode: options.mode });
        }
    }

    connectedCallback() {
        this.render();
        this.applyStyles();
    }

    applyStyles() {
        if (this.styles && this.shadowRoot) {
            const css = new CSSStyleSheet();
            css.replaceSync(this.styles());
            this.shadowRoot.adoptedStyleSheets = [css];
        } else if (this.styles && !this.shadowRoot) {
            this.insertAdjacentHTML("beforeend", 
                `<style>@scope { ${this.styles().trim()} }</style>`);
        }
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = this.template();
        } else {
            this.innerHTML = this.template();
        }
    }

    template() {
        return ``;
    }

    styles() {
        return ``;
    }
}

export const css = (params) => String.raw`${params}`;
export const html = (params) => String.raw`${params}`;
