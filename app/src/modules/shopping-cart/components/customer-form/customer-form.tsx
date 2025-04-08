import { Formik } from "formik";
import { FC } from "react";
import { CustomerFormProps } from "./customer-form.types";
import {
  initialValues,
  validationSchema,
} from "../../constants/customer.constants";
import InnerForm from "./components/inner-form/inner-form";

const CustomerForm: FC<CustomerFormProps> = ({
  data,
  countries,
  className,
  onChangeData,
  onChangeIsValid,
}) => {
  const customer = data || initialValues;

  return (
    <Formik
      initialValues={customer}
      validationSchema={validationSchema}
      validateOnMount
      onSubmit={() => undefined}
    >
      {(props) => (
        <InnerForm
          {...props}
          countries={countries}
          className={className}
          onChangeData={onChangeData}
          onChangeIsValid={onChangeIsValid}
        />
      )}
    </Formik>
  );
};

export default CustomerForm;
