import { argv, stdout } from "node:process";
import { getDiscFn } from "./getDiscFn.js";

const args = Array.from(argv.slice(2), Number);

if (args.length === 3 && args.every((arg) => typeof arg === "number")) {
  const [a, b, c] = args;

  getDiscFn(a, b, c);
} else {
  stdout.write(`Необходимо ввести 3 числа (+/-), через пробел\n`);
}
