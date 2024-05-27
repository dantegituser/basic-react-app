import {FormikErrors, useFormik, Formik, Field, Form, ErrorMessage }from 'formik'
import * as Yup from "yup";
import '../styles/styles.css'

interface formValues {
    firstName: string;
            lastName: string;
            email:string;
}

export const FormikComponents = () => {   

  return (
    <div>
        <h1>Formik Components</h1>
        <Formik 
        initialValues={{firstName: '',
          lastName: '',
          email:'',
          terms: false,
          jobType:''
        }}
        onSubmit={(values) => {console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
          .max(15,"Debe tener 15 caracteres o menos")
          .required("Requerido"),
          lastName: Yup.string()
          .max(10,"Debe tener 10 caracteres o menos")
          .required("Requerido"),
          email: Yup.string()
          .required("Requerido").email("Email no tiene formato valido"),
          terms: Yup.boolean().oneOf([true]).required('Debes aceptar los terminos'),
          jobType: Yup.string().required('Requerido').notOneOf(['tester'], 'esta opcoin no es permitida')
          
        })}
        >

          {
            (formik) => (
              <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name='firstName'  component='span'/>

            <label htmlFor="lastName">last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name='lastName'  component='span'/>

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name='email' component='span' />
            
            <label>
            <Field name="terms" type="checkbox" />Terms and conditions
            </label>
            <ErrorMessage name='terms' component='span' />
            
            <label htmlFor="jobType">Job type
            </label>
            <Field name="jobType" as="select" >
              <option value="">Pick something</option>
              <option value="developer">developer</option>
              <option value="tester">tester</option>
              </Field>
            <ErrorMessage name='jobType' component='span' />

            <button type='submit'>Submit</button>
        </Form>
            )
          }

        </Formik>

        
        
    </div>
  )
}
