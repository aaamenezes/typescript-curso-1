export function execTimeLogin() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      console.log(`DECORATOR exec time login`);
      const time1 = performance.now();
      const func = originalMethod.apply(this, args);
      const time2 = performance.now();
      console.log(
        `${propertyKey}, execution time: ${(time2 - time1) / 1000} seconds`
      );
      func;
    };

    return descriptor;
  };
}
