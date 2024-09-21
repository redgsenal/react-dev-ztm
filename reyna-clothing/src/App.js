import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import './assets/styles/app.styles.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;
