import { Route, Routes } from 'react-router-dom';
import Layout from 'src/components/Layout/Layout';
import Main from 'src/pages/Main/Main';
import Components from './pages/Components/Components';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/:name" element={<Components />} />
        </Route>
      </Routes>
    </>
  );
};
