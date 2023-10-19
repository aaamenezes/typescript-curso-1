import { Printable } from "./printable.js";

export function print(...objects: Printable[]): void {
  for (let object of objects) {
    console.log(object.toText());
  }
}
