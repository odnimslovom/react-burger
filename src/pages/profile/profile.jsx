import profilePageStyles from './profile.module.css';

import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";


const ProfilePage = () => {

  const handleLogOut = (evt) => {
    evt.preventDefault();
    console.log('Log out')
  }

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

  const handleResetClick = (evt) => {
    evt.preventDefault();
    console.log('Reset click');
  }

  return (
    <div className={profilePageStyles.container}>
      <nav className={`${profilePageStyles.nav} pr-15`}>
        <ul className={profilePageStyles.list}>
          <li className='pt-6 pb-6'>
            <a href={''}
               className={`${profilePageStyles.link} text text_type_main-medium text_color_inactive`}
            >
              Профиль
            </a>
          </li>
          <li className='pt-6 pb-6'>
            <a href={''}
               className={`${profilePageStyles.link} text text_type_main-medium text_color_inactive`}
            >
              История заказов
            </a>
          </li>
          <li className='pt-6 pb-6'>
            <a href={''}
               className={`${profilePageStyles.link} text text_type_main-medium text_color_inactive`}
               onClick={handleLogOut}
            >
              Выход
            </a>
          </li>
        </ul>
        <p className='text text_type_main-default text_color_inactive pt-20'>
          В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные
        </p>
      </nav>
      <form className={profilePageStyles.form} onSubmit={handleFormSubmit}>
        <div className={`${profilePageStyles.input} mb-6`}>
          <Input
            type='text'
            name='name'
            value={''}
            onChange={handleNameChange}
            placeholder='Имя'
            icon='EditIcon'
          />
        </div>
        <div className={`${profilePageStyles.input} mb-6`}>
          <Input
            type={'email'}
            name='email'
            value={''}
            onChange={handleEmailChange}
            placeholder='Логин'
            icon='EditIcon'
          />
        </div>
        <div className={`${profilePageStyles.input} mb-6`}>
          <Input
            type={'password'}
            name='password'
            value={''}
            onChange={handlePasswordChange}
            placeholder='Пароль'
            icon='EditIcon'
          />
        </div>
        <div>
          <Button
            type='secondary'
            size='medium'
            onClick={handleResetClick}
          >
            Отмена
          </Button>
          <Button
            type='primary'
            size='medium'
          >
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ProfilePage;
