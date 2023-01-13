import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addEmployee } from '../api/Employees';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function EmployeeReg() {
  const employeeRegSchema = Yup.object().shape({
    emp_name: Yup.string().required(),
    branch_code: Yup.string().required,
    contact_number: Yup.string()
    .matches(/(^[0-9]+$|^\+[0-9]+$)/, 'Invalid Phone Number')
    .min(10, 'Phone number must be at least 10 digits')
    .max(12, 'Phone number must be at most 12 digits')
    .required(),
    email: Yup.string().required,
    address_no: Yup.string().required(),
    street: Yup.string().required(),
    town: Yup.string().required(),
    // no column for hash password
    salary: Yup.number().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const employee = {
      emp_name: values.emp_name,
      branch_code: values.branch_code,
      contact_number: values.contact_number,
      email: values.email,
      address_no: values.address_no,
      street: values.street,
      town: values.town,
      salary: values.salary,
    };
    addEmployee({ employee }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          emp_name: '',
          branch_code: '',
          contact_number: '',
          email: '',
          address_no: '',
          street: '',
          town: '',
          salary: '',
        }}
        validationSchema={employeeRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='employee--reg--form'>
              <h1> Employee Registration</h1>
              <span>
                <Field
                  type='text'
                  name='emp_name'
                  placeholder='Full Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field type='text' name='branch_code' placeholder='Branch Code' />
              </span>
              <span>
                <Field type='text' name='contact_number' placeholder='Phone' />
              </span>
              <span>
                <Field type='text' name='email' placeholder='Email' />
              </span>
              <span>
                <Field type='text' name='address_no' placeholder='Address No' />
              </span>
              <span>
                <Field type='text' name='street' placeholder='Street' />
              </span>
              <span>
                <Field type='text' name='town' placeholder='Town' />
              </span>
              <span>
                <Field type='number' name='salary' placeholder='Salary' />
              </span>

              <Button
                className='employee--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='employee--reg--form--errors'>
                    <ErrorMessage name='emp_name' component='div' />
                    <ErrorMessage name='branch_code' component='div' />
                    <ErrorMessage name='contact_number' component='div' />
                    <ErrorMessage name='email' component='div' />
                    <ErrorMessage name='address_no' component='div' />
                    <ErrorMessage name='street' component='div' />
                    <ErrorMessage name='town' component='div' />
                    <ErrorMessage name='salary' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}