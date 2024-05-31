import { useForm } from "react-hook-form";
import {
  AdditionalInfoFormType,
  ExtraInfoFormType,
  additionalForm,
  extraInfoForm,
} from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useFormHandler = () => {
  const extraInfoFormMethods = useForm<ExtraInfoFormType>({
    resolver: zodResolver(extraInfoForm),
    defaultValues: { info: "" },
  });

  const additionalInfoFormMethods = useForm<AdditionalInfoFormType>({
    resolver: zodResolver(additionalForm),
    defaultValues: {
      name: "",
      zipCode: "",
      address: "",
      birthday: "",
      shareholder: "",
      businessM: "",
      businessS: "",
      businessXS: "",
    },
  });

  return { extraInfoFormMethods, additionalInfoFormMethods };
};
