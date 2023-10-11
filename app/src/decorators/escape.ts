export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const currentReturn = originalMethod.apply(this, args);

    if (typeof currentReturn === "string") {
      // console.log(`@escape in ${this.constructor.name} class in ${propertyKey} method`);
      return currentReturn.replace(/<script>[\s\S]*?<\/script>/, "");
    }

    return currentReturn;
  };

  return descriptor;
}
