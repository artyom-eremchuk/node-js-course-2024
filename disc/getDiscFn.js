import process, { stdout, stderr } from "node:process";

export const getDiscFn = (a, b, c) => {
  const disc = b * b - 4 * a * c;

  if (disc > 0) {
    const x1 = (-b - Math.sqrt(disc)) / (2 * a);
    const x2 = (-b + Math.sqrt(disc)) / (2 * a);

    stdout.write(`Корни уравнения x1 = ${x1} и x2 = ${x2}\n`);
    process.exit(0);
  } else if (disc === 0) {
    const x = -(b / (2 * a));

    stdout.write(`Корень уравнения х = ${x}\n`);
    process.exit(0);
  } else {
    stderr.write(`Корней нет\n`);
    process.exit(404);
  }
};
