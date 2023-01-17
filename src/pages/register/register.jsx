import pageStyles from './register.module.css';

import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const RegisterPage = () => {

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log('Form submit');
  }

  const handleNameChange = (evt) => {
    evt.preventDefault();
    console.log('Name change');
  }

  const handleEmailChange = (evt) => {
    evt.preventDefault();
    console.log('Email change');
  }

  const handlePasswordChange = (evt) => {
    evt.preventDefault();
    console.log('Password change');
  }

  return (
    <section className={pageStyles.container}>
      <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
      <form className={pageStyles.form} onSubmit={handleFormSubmit}>
        <div className={`${pageStyles.input} mb-6`}>
          <Input
            type='text'
            name='name'
            placeholder='Имя'
            value={''}
            onChange={handleNameChange}/>
        </div>
        <div className={`${pageStyles.input} mb-6`}>
          <Input
            type='email'
            name='email'
            placeholder='E-mail'
            value={''}
            onChange={handleEmailChange}/>
        </div>
        <div className={`${pageStyles.input} mb-6`}>
          <PasswordInput
            name='password'
            value={''}
            onChange={handlePasswordChange}/>
        </div>
        <Button type='primary' size='medium'>Зарегестрироваться</Button>
      </form>
      <p className='text text_type_main-default text_color_inactive mb-4 mt-20'>
        Уже зарегестрированы?&nbsp;
        <a href={''} className={pageStyles.link}>Войти</a>
      </p>
    </section>
  )
}

export default RegisterPage;
