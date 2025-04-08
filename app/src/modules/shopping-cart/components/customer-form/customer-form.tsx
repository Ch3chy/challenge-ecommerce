import { Formik } from "formik";
import { FC, useEffect, useState } from "react";
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
  const [customer, setCustomer] = useState(data || initialValues);

  useEffect(() => {
    setCustomer(data || initialValues);
  }, [data]);

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
