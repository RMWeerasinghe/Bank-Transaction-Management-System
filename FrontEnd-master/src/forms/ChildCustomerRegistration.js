import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addChildCustomer } from '../api/ChildCustomers';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function ChildCustomerReg() {
  const childCustomerRegSchema = Yup.object().shape({
    first_name: Yup.string().required(),
    middle_name: Yup.string().required(),
    last_name: Yup.string().required(),
    date_of_birth: Yup.date().required(),
    // age: Yup.number().required(),
    gender: Yup.string().required(),
    nationality: Yup.string().required(),
    guardian_first_name: Yup.string().required,
    guardian_middle_name: Yup.string().required,
    guardian_last_name: Yup.string().required,
    guardian_NIC: Yup.string().required,
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const childCustomer = {
      first_name: values.first_name,
      middle_name: values.middle_name,
      last_name: values.last_name,
      date_of_birth: values.date_of_birth,
      // age: values.age,
      gender: values.gender,
      nationality: values.nationality,
      guardian_first_name: values.guardian_first_name,
      guardian_middle_name: values.guardian_middle_name,
      guardian_last_name: values.guardian_last_name,
      guardian_NIC: values.guardian_NIC,
    };
    addChildCustomer({ childCustomer }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          first_name: '',
          middle_name: '',
          last_name: '',
          date_of_birth: '',
          // age: '',
          gender: '',
          nationality: '',
          guardian_first_name: '',
          guardian_middle_name: '',
          guardian_last_name: '',
          guardian_NIC: '',
        }}
        validationSchema={childCustomerRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='childCustomer--reg--form'>
              <h1>Child Customer Registration</h1>
              <span>
                <Field
                  type='text'
                  name='first_name'
                  placeholder='First Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field
                  type='text'
                  name='middle_name'
                  placeholder='Middle Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field
                  type='text'
                  name='last_name'
                  placeholder='Last Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field type='date' name='date_of_birth' placeholder='Date of Birth' />
              </span>
              {/* <span>
                <Field type='number' name='age' placeholder='Age' />
              </span> */}
              <span>
                <Field type='text' name='gender' placeholder='Gender' />
              </span>
              <span>
                <Field type='text' name='nationality' placeholder='Nationality' />
              </span>
              <span>
                <Field type='text' name='guardian_first_name' placeholder='Guardian First Name' />
              </span>
              <span>
                <Field type='text' name='guardian_middle_name' placeholder='Guardian Middle Name' />
              </span>
              <span>
                <Field type='text' name='guardian_last_name' placeholder='Guardian Last Name' />
              </span>
              <span>
                <Field type='text' name='guardian_NIC' placeholder='Guardian NIC' />
              </span>

              <Button
                className='childCustomer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='childCustomer--reg--form--errors'>
                    <ErrorMessage name='first_name' component='div' />
                    <ErrorMessage name='middle_name' component='div' />
                    <ErrorMessage name='last_name' component='div' />
                    <ErrorMessage name='date_of_birth' component='div' />
                    {/* <ErrorMessage name='age' component='div' /> */}
                    <ErrorMessage name='gender' component='div' />
                    <ErrorMessage name='nationality' component='div' />
                    <ErrorMessage name='guardian_first_name' component='div' />
                    <ErrorMessage name='guardian_middle_name' component='div' />
                    <ErrorMessage name='guardian_last_name' component='div' />
                    <ErrorMessage name='guardian_NIC' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}