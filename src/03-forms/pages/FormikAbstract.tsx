import {FormikErrors, useFormik, Formik, Field, Form, ErrorMessage }from 'formik'
import * as Yup from "yup";
import '../styles/styles.css'

// import { MyTextInput } from '../components/MyTextInput';
// import { MySelect } from '../components/MySelect';
// import { MyCheckbox } from '../components/MyCheckbox';

import {MyCheckbox, MySelect, MyTextInput} from '../components'

interface formValues {
    firstName: string;
            lastName: string;
            email:string;
}

export const FormikAbstract = () => {   

  return (
    <div>
        <h1>Formik Abstract</h1>
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
                <MyTextInput 
                label="First name" 
                name='firstName'
                placeholder="Tu nombre aqui"
                 />

                <MyTextInput 
                label="last name" 
                name='lastName'
                placeholder="Tu apellido aqui"
                 />

                <MyTextInput 
                label="email" 
                name='email'
                placeholder="ingresa tu email"
                type='email'
                 />
            
            
            <MySelect name="jobType" as="select" label='job Type' >
              <option value="">Pick something</option>
              <option value="developer">developer</option>
              <option value="tester">tester</option>
              </MySelect>

            <MyCheckbox label="terms and conditions" name="terms" />

            <button type='submit'>Submit</button>
        </Form>
            )
          }

        </Formik>

        
        
    </div>
  )
}
