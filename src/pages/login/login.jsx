import pageStyles from './login.module.css';

import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const LoginPage = () => {

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log('Form submit')
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
    <div className={`${pageStyles.container}`}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <form className={pageStyles.form} onSubmit={handleFormSubmit}>
        <div className={`mb-6`}>
          <EmailInput
            name="email"
            value={''}
            onChange={handleEmailChange}
            size="default"
          />
        </div>
        <div className={`mb-6`}>
          <PasswordInput
            name="password"
            value={''}
            onChange={handlePasswordChange}
            size="default"
          />
        </div>
        <Button size={'medium'}>Войти</Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20 mb-4">
        Вы — новый пользователь?&nbsp;
        <a className={pageStyles.link} href={''}>Зарегистрироваться</a>
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Забыли пароль?&nbsp;
        <a className={pageStyles.link} href={''}>Восстановить пароль</a>
      </p>
    </div>
  )
}

export default LoginPage;
