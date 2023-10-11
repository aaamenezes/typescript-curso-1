export abstract class View<T> {
  protected element: HTMLElement;
  private escape = false;

  constructor(selector: string, escape?: boolean) {
    const element = document.querySelector(selector);
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw Error(`Seletor ${selector} não existen o DOM`);
    }

    if (escape) {
      this.escape = escape;
    }
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    const template = this.escape
      ? this.template(model).replace(/<script>[\s\S]*?<\/script>/, "")
      : this.template(model);

    this.element.innerHTML = template;
  }
}
