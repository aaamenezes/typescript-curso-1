export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: Array<any>) {
    console.log(`- Method ${propertyKey}`);
    console.log(`-- Params: ${JSON.stringify(args)}`);
    const currentReturn = originalMethod.apply(this, args);
    console.log(`-- Return: ${JSON.stringify(currentReturn)}`);
    return currentReturn;
  };

  return descriptor;
}
