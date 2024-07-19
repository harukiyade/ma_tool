import { z } from "zod";

export const searchForm = z.object({
  name: z.string(),
  companyId: z.string(),
  corporateType: z.string(),
  prefecture: z.string(),
});

export type SearchParamType = z.infer<typeof searchForm>;
