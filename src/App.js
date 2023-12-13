import { Route, Routes } from 'react-router-dom';

import Authentication from './routes/authentication/authentication';
import HomePage from './routes/home-page/home-page.component';
import Navigation from './routes/navigation/navigation.component';

const Shop = () => {
  return <div>Shop Page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
