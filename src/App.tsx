import { Route, Routes } from 'react-router-dom';
import Layout from 'src/components/Layout/Layout';
import Main from 'src/pages/Main/Main';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </>
  );
};
