export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`- Method ${propertyKey}`);
        console.log(`-- Params: ${JSON.stringify(args)}`);
        const currentReturn = originalMethod.apply(this, args);
        console.log(`-- Return: ${JSON.stringify(currentReturn)}`);
        return currentReturn;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map