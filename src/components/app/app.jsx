import AppHeader from "../app-header/app-header";

import appStyles from './app.module.css';

const App = () => {
  return (
    <div className={appStyles.app}>
      <AppHeader />
    </div>
  );
}

export default App;

