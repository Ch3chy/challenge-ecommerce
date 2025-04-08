import { Formik, FormikProps } from "formik";
import { FC, useEffect, useState } from "react";
import { CustomerFormProps } from "./customer-form.types";
import { Customer } from "../../types/customer.type";
import {
  initialValues,
  validationSchema,
} from "../../constants/customer.constants";
import styles from "./customer-form.module.scss";

const CustomerForm: FC<CustomerFormProps> = ({
  data,
  countries,
  className,
  onChangeData,
  onChangeIsValid,
}) => {
  const [customer, setCustomer] = useState(initialValues);

  const handleSubmit = (values: Customer) => {
    console.log("Datos del cliente:", values);
  };

  useEffect(() => {
    if (data) {
      setCustomer({
        name: data.name,
        email: data.email,
        country: data.country,
        city: data.city,
        address: data.address,
      });
    } else {
      setCustomer(initialValues);
    }
  }, [data]);

  const InnerForm = ({
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
  }: FormikProps<Customer>) => {
    useEffect(() => {
      if (onChangeData) onChangeData(values);
    }, [values]);

    useEffect(() => {
      if (onChangeIsValid) onChangeIsValid(isValid);
    }, [isValid]);

    return (
      <form className={`${styles.customerForm} ${className || ""}`}>
        <h4 className={styles.title}>Datos personales</h4>
        <div className={styles.formSection}>
          <label htmlFor="customer-name" className={styles.label}>
            Nombre:
          </label>
          <input
            id="customer-name"
            name="name"
            type="text"
            value={values.name}
            className={styles.input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <div className={styles.error}>{errors.name}</div>
          )}
        </div>
        <div className={styles.formSection}>
          <label htmlFor="customer-email" className={styles.label}>
            Email:
          </label>
          <input
            id="customer-email"
            name="email"
            type="email"
            value={values.email}
            className={styles.input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <div className={styles.error}>{errors.email}</div>
          )}
        </div>
        <hr className={styles.divisor} />
        <h4 className={styles.title}>Domicilio</h4>
        <div className={styles.formSection}>
          <label htmlFor="customer-country" className={styles.label}>
            Country:
          </label>
          <select
            name="country"
            id="customer-country"
            value={values.country}
            className={styles.input}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Seleccione una opcion</option>
            {countries.map((country) => (
              <option value={country} key={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && touched.country && (
            <div className={styles.error}>{errors.country}</div>
          )}
        </div>
        <div className={styles.formSection}>
          <label htmlFor="customer-city" className={styles.label}>
            Ciudad:
          </label>
          <input
            id="customer-city"
            name="city"
            type="text"
            value={values.city}
            className={styles.input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.city && touched.city && (
            <div className={styles.error}>{errors.city}</div>
          )}
        </div>
        <div className={styles.formSection}>
          <label htmlFor="customer-address" className={styles.label}>
            Dirección:
          </label>
          <input
            id="customer-address"
            name="address"
            type="text"
            value={values.address}
            className={styles.input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address && (
            <div className={styles.error}>{errors.address}</div>
          )}
        </div>
      </form>
    );
  };

  return (
    <Formik
      initialValues={customer}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {(props) => <InnerForm {...props} />}
    </Formik>
  );
};

export default CustomerForm;
