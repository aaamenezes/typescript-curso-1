export function escape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const currentReturn = originalMethod.apply(this, args);
        if (typeof currentReturn === "string") {
            return currentReturn.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return currentReturn;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map