import { z } from "zod";

/** 追加情報 */
const additonalInfoForm = z.object({
  name: z.string(),
  zipCode: z.string(),
  address: z.string(),
  birthday: z.string(),
  shareholder: z.string(),
  businessM: z.string(),
  businessS: z.string(),
  businessXS: z.string(),
});
/** すべての項目をoptionalにする */
export const additionalForm = additonalInfoForm.partial();

/** 備考欄 */
export const extraInfoForm = z.object({
  info: z.string(),
});

export type ExtraInfoFormType = z.infer<typeof extraInfoForm>;
export type AdditionalInfoFormType = z.infer<typeof additionalForm>;
