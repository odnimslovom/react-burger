import {useEffect, useState} from "react";

import appStyles from './app.module.css';
import {API_URL} from "../../utils/constans";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingridients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const App = () => {

  const [appData, setAppData] = useState({
    ingredients: [],
    isLoading: true,
    hasError: false
  });

  const getAppData = (url) => {
    const checkResponse = (res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error ${res.status}!`);
    }

    fetch(url)
      .then(res => checkResponse(res))
      .then(res => {
        setAppData(prevState => ({
          ...prevState,
          ingredients: res.data,
          isLoading: false,
          hasError: false
        }))
      })
      .catch(err => {
        setAppData(prevState => ({
          ...prevState,
          ingredients: [],
          isLoading: false,
          hasError: true
        }));
        console.error(err);
      });
  }

  useEffect(() => {
    getAppData(API_URL);
  }, []);

  return (
    <div className={appStyles.app}>
      <AppHeader/>
      <main className={appStyles.content}>
        {appData.isLoading &&
          <p className={'text text_type_main-large'}>Загрузка...</p>
        }
        {!appData.isLoading && appData.hasError &&
          <p className={"text text_color_error text_type_main-large"}>Ошибка!!!</p>
        }
        {!appData.isLoading && !appData.hasError &&
          <>
            <BurgerIngredients data={appData.ingredients}/>
            <BurgerConstructor data={appData.ingredients}/>
          </>
        }
      </main>
    </div>
  );
}

export default App;

