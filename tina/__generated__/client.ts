import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'edbbae443e75930207926285bdca8af3d4d8a5d6', queries,  });
export default client;
  