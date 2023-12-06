import { Route, Routes } from 'react-router-dom';

import HomePage from './routes/home-page/home-page.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
