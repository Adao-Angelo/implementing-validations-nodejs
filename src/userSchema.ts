import { z } from "zod";

const User = z.object({
  name: z.string(),
  email: z.string(),
  age: z.number(),
  admin: z.boolean(),
});
