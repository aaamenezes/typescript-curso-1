export function execTimeLogin(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`DECORATOR exec time login`);
            const divisor = inSeconds ? 1000 : 1;
            const unity = inSeconds ? "seconds" : "miliseconds";
            const time1 = performance.now();
            const func = originalMethod.apply(this, args);
            const time2 = performance.now();
            console.log(`${propertyKey}, execution time: ${(time2 - time1) / divisor} ${unity}`);
            func;
        };
        return descriptor;
    };
}
