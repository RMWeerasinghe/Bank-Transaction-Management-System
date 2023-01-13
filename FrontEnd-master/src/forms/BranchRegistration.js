import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addBranch } from '../api/Branches';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function BranchReg() {
  const branchRegSchema = Yup.object().shape({
    branch_name: Yup.string().required(),
    //branchCode: Yup.string().required(),
    branch_city: Yup.string().required(),
    contact_number: Yup.string()
      .matches(/(^[0-9]+$|^\+[0-9]+$)/, 'Invalid Phone Number')
      .min(10, 'Phone number must be at least 10 digits')
      .max(12, 'Phone number must be at most 12 digits')
      .required(),
    email: Yup.string().required(),
    branch_code:Yup.string().required(),
    // managerName: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const branch = {
      branch_name: values.branch_name,
      //branchCode: values.branchCode,
      branch_city: values.branch_city,
      contact_number: values.contact_number,
      email: values.email,
      branch_code: values.branch_code,
      // managerName: values.managerName,
    };
    addBranch({ branch }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          branch_name: '',
          //branchCode: '',
          branch_city: '',
          contact_number: '',
          email: '',
          branch_code:'',
          // managerName: '',
        }}
        validationSchema={branchRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='branch--reg--form'>
              <h1>Branch Registration</h1>
              <span>
                <Field
                  type='text'
                  name='branch_name'
                  placeholder='Branch Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field type='text' name='branch_city' placeholder='Branch City' />
              </span>
              <span>
                <Field type='text' name='contact_number' placeholder='Phone' />
              </span>
              <span>
                <Field type='text' name='email' placeholder='Email' />
              </span>
              <span>
                <Field type='text' name='branch_code' placeholder='Branch Code' />
              </span>
              {/* <span>
                <Field type='text' name='managerName' placeholder='Manager Name' />
              </span> */}

              <Button
                className='branch--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='branch--reg--form--errors'>
                    <ErrorMessage name='branch_name' component='div' />
                    <ErrorMessage name='branch_city' component='div' />
                    <ErrorMessage name='contact_number' component='div' />
                    <ErrorMessage name='email' component='div' />
                    <ErrorMessage name='branch_code' component='div' />
                    {/* <ErrorMessage name='managerName' component='div' /> */}
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}