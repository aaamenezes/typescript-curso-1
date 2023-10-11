export function execTimeLogin(inSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      console.log(`DECORATOR exec time login`);

      const divisor = inSeconds ? 1000 : 1;
      const unity = inSeconds ? "seconds" : "miliseconds";

      const time1 = performance.now();
      const func = originalMethod.apply(this, args);
      const time2 = performance.now();

      console.log(
        `${propertyKey}, execution time: ${(time2 - time1) / divisor} ${unity}`
      );
      func;
    };

    return descriptor;
  };
}
