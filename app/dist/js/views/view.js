export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Seletor ${selector} não existen o DOM`);
        }
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
