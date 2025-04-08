import * as Yup from "yup";
import { Customer } from "../types/customer.type";

export const initialValues: Customer = {
  name: "",
  email: "",
  country: "",
  city: "",
  address: "",
};

export const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es requerido"),
  email: Yup.string()
    .email("Correo electronico inválido")
    .required("El correo electronico es requerido"),
  country: Yup.string().required("El pais es requerido"),
  city: Yup.string().required("La ciudad es requerida"),
  address: Yup.string().required("La dirección es requerida"),
});
