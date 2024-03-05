import { env } from "node:process";

const mode = Boolean(env.MODE === "prod");

const globalVariables = `
  HOST: ${env.HOST} 
  PORT: ${env.PORT}
  LOGIN: ${env.LOGIN}
  PASSWORD: ${env.PASSWORD}
  DB_NAME: ${env.DB_NAME}
  DB_SCHEME: ${env.DB_SCHEME}
`;

(function () {
  mode ? console.log(globalVariables) : console.log(globalVariables);
})();
