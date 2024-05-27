import { ChangeEvent, FormEvent, useState } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

  const {onChange, formData, name, password1,password2, email, resetForm, isValidEmail} = useForm({
    name:'', email: '', password1:'', password2:''
  })
  
  const onSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData);
    
  }

  return (
    <div>
        
    <h1>RegisterPage</h1>
    <form onSubmit={onSubmit} action="" noValidate>
        <input name="name" type="text" placeholder='name' value={name} onChange={onChange} 
        className={`${name.trim().length <=0 && 'has-error'}`} />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input name="email" type="email" placeholder='email' value={email} onChange={onChange}
        className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Este campo es necesario</span>}

        <input name="password1" type="password" placeholder='password' value={password1} onChange={onChange} />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length <6 && password1.trim().length > 0 && <span>La contraseña debe tener 6 caracteres</span>}

        <input name="password2" type="password" placeholder='repeat password' value={password2} onChange={onChange} />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2  && <span>Las contraseñas deben ser iguales</span>}

        <button type="submit" >Create</button>
        <button type="submit" onClick={resetForm} >Reset</button>
    </form>
    </div>
  )
}
