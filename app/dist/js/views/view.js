export class View {
    constructor(selector, escape) {
        this.escape = false;
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Seletor ${selector} não existen o DOM`);
        }
        if (escape) {
            this.escape = escape;
        }
    }
    update(model) {
        const template = this.escape
            ? this.template(model).replace(/<script>[\s\S]*?<\/script>/, "")
            : this.template(model);
        this.element.innerHTML = template;
    }
}
