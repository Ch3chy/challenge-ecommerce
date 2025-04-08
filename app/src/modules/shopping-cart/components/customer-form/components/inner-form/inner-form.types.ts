import { Customer } from "@/modules/shopping-cart/types/customer.type";
import { FormikProps } from "formik";

export interface InnerFormProps extends FormikProps<Customer> {
  countries: string[];
  className?: string;
  onChangeData?: (data: Customer) => void;
  onChangeIsValid?: (isValid: boolean) => void;
}
