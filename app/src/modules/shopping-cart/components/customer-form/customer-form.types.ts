import { Customer } from "../../types/customer.type";

export interface CustomerFormProps {
  countries: string[];
  data?: Customer;
  className?: string;
  onChangeData?: (data: Customer) => void;
  onChangeIsValid?: (isValid: boolean) => void;
}
