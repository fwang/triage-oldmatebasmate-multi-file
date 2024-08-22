import { api } from "./api";

export const web = new sst.aws.StaticSite("Web", {
  path: "web",
  environment: {
    VITE_API_URL: api.url,
  },
});
