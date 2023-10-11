export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    let element: HTMLElement;
    function getter() {
      if (element) return element;
      return <HTMLElement>document.querySelector(selector);
    }

    Object.defineProperty(target, propertyKey, { get: getter });
  };
}
