import { Route, Routes } from 'react-router-dom';

import HomePage from './routes/home-page/home-page.component';
import Navigation from './routes/navigation/navigation.component';

const Shop = () => {
  return <div>Shop Page</div>;
};

const Contact = () => {
  return <div>Contact Page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
