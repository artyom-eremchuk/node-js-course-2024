import Square from "./squareDefault.js";
import { Square as SquareClassic } from "./square.js";

const squareDefault = new Square(3);
const squareClassic = new SquareClassic(4);

console.log(`SquareDefault ${squareDefault.area()}`);
console.log(`SquareClassic ${squareClassic.area()}`);

const p1 = new Promise((resolve, reject) => {
  console.log("timeout started");
  setTimeout(() => {
    console.log("timeout finished");
    if (Boolean(+new Date().getSeconds() % 2)) {
      resolve("success");
    } else {
      reject("error");
    }
  }, 2000);
});

try {
  const successResult = await p1;
  console.log("Async call success: ", successResult);
} catch (e) {
  console.log("Async call failed: ", e);
}
