export function domInjector(selector) {
    return function (target, propertyKey) {
        let element;
        function getter() {
            if (element)
                return element;
            return document.querySelector(selector);
        }
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
