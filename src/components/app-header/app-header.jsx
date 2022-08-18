import appHeaderStyles from './app-header.module.css';

import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header className={`${appHeaderStyles.header}`}>
      <nav className={`${appHeaderStyles.nav} pt-4 pb-4`}>
        <ul className={`${appHeaderStyles.menu}`}>
          <li>
            <a href={"#"} className={`${appHeaderStyles.menu__link} pr-5 pl-5 mr-2`}>
              <BurgerIcon type={"primary"}/>
              <p className={'text text_type_main-default ml-2'}>Коструктор</p>
            </a>
          </li>
          <li>
            <a href={"#"} className={`${appHeaderStyles.menu__link} pr-5 pl-5`}>
              <ListIcon type={"secondary"}/>
              <p className={'text text_type_main-default text_color_inactive ml-2'}>Лента заказов</p>
            </a>
          </li>
          <li className={`${appHeaderStyles.menu__logo}`}>
            <a href={"#"} className={`${appHeaderStyles.menu__link} pr-5 pl-5`}>
              <Logo/>
            </a>
          </li>
          <li>
            <a href={"#"} className={`${appHeaderStyles.menu__link} pr-5 pl-5`}>
              <ProfileIcon type={"secondary"}/>
              <p className={'text text_type_main-default text_color_inactive ml-2'}>Личный кабинет</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
