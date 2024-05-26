import { z } from "zod";

export const searchForm = z.object({
  name: z.string(),
});

export type SearchParamType = z.infer<typeof searchForm>;
