import pageStyles from './reset-password.module.css';

import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const ResetPasswordPage = () => {

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log('Form submit');
  }

  const handlePasswordChange = (evt) => {
    evt.preventDefault();
    console.log('Password change');
  }

  const handleCodeChange = (evt) => {
    evt.preventDefault();
    console.log('Code change');
  }

  return (
    <div className={pageStyles.container}>
      <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
      <form className={pageStyles.form} onSubmit={handleFormSubmit}>
        <div className={`${pageStyles.input} mb-6`}>
          <PasswordInput
            name='resetPassword'
            placeholder={'Введите новый пароль'}
            value={''}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={`${pageStyles.input} mb-6`}>
          <Input
            name='code'
            value={''}
            onChange={handleCodeChange} placeholder='Введите код из письма'/>
        </div>
        <Button type='primary' size='medium'>
          Сохранить
        </Button>
      </form>
      <p className='text text_type_main-default text_color_inactive mb-4 mt-20'>
        Вспомнили пароль?&nbsp;
        <a href={''} className={pageStyles.link}>Войти</a>
      </p>
    </div>
  )
}

export default ResetPasswordPage;
