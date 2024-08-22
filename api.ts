import { web } from "./web";

export const api = new sst.aws.ApiGatewayV2("Api");
api.route("GET /", {
  handler: "./functions/handler-example/index.handler",
  link: [web],
});
