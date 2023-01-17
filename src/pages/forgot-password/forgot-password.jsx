import pageStyles from './forgot-password.module.css';

import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";

const ForgotPasswordPage = () => {

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log('Form submit');
  }

  const handleEmailChange = (evt) => {
    evt.preventDefault();
    console.log('Email change');
  }

  return (
    <div className={pageStyles.container}>
      <h2 className="text text_type_main-medium pb-6">Восстановление пароля</h2>
      <form className={pageStyles.form} onSubmit={handleFormSubmit}>
        <div className="pb-6">
          <Input
            type={'email'}
            name={'email'}
            placeholder={'Укажите e-mail'}
            onChange={handleEmailChange}
            value={''}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </div>
        <Button type="primary" size="medium">
          Восстановить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mt-20 mb-4">
        Вспомнили пароль?&nbsp;
        <a href={''} className={pageStyles.link}>Войти</a>
      </p>
    </div>
  )
}

export default ForgotPasswordPage;
