import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addOrgCustomer } from '../api/OrganizationCustomers';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function OrgCustomerReg() {
  const orgCustomerRegSchema = Yup.object().shape({
    name: Yup.string().required(),
    reg_no: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const orgCustomer = {
      name: values.name,
      reg_no: values.reg_no,
    };
    addOrgCustomer({ orgCustomer }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          reg_no: '',
        }}
        validationSchema={orgCustomerRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='orgCustomer--reg--form'>
              <span>
                <Field
                  type='text'
                  name='name'
                  placeholder='Organization Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field type='text' name='reg_no' placeholder='Organization Registration Number' />
              </span>
    
              <Button
                className='orgCustomer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='orgCustomer--reg--form--errors'>
                    <ErrorMessage name='name' component='div' />
                    <ErrorMessage name='reg_no' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}