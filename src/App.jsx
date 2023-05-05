import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ZipCode from './pages/ZipCode';
import BasicInfo from './pages/BasicInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="zipcode" element={<ZipCode />}></Route>
        <Route path="basicinfo" element={<BasicInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
