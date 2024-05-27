import {FormikErrors, Formik, Form }from 'formik'
import * as Yup from "yup";
import '../styles/styles.css'
import { MyTextInput } from '../components/MyTextInput';

interface formValues {
            name: string,
            email:string,
            password1:string,
            password2:string;
}

export const RegisterFormikPage = () => {

  return (
    <div>
        
    <h1>Register Formik Page</h1>

    <Formik 
        initialValues={{firstName: '',
        name: '',
        password1:'',
        password2:'',
        email:''
        }}
        onSubmit={(values) => {console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
          .min(2,"Debe tener 3 caracteres o mas")
          .required("Requerido"),
          email: Yup.string()
          .required("Requerido").email("Email no tiene formato valido"),
          password1: Yup.string()
          .min(6,"Debe tener minimo 6 letras")
          .required("Requerido"),
          password2: Yup.string()
          .oneOf([Yup.ref('password1')], 'las contraseñas no son iguales')
          .required("Requerido")
          
        })}
        >

{
            (formik) => (
              <Form>
    
    <MyTextInput label='nombre' name="name" placeholder="Nomber aqui" />
    <MyTextInput label='email' name="email" type="email" placeholder="email@email.com" />
    <MyTextInput label='password1' name="password1" type="password" />
    <MyTextInput label='password2' name="password2" type="password" />

            <button type='submit'>Create </button>
            <button type='button' onClick={formik.handleReset}>Reset form </button>
            </Form>
      )
          }

        </Formik>
    </div>
  )
}
