import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import './assets/styles/app.styles.scss';

const Shop = () => {
  return <h1>This is the Shop</h1>;
};

const App = () => {
  return (
    <Routes >
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
