import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import NoMatch from './components/noMatch/noMatch';
import PostUser from './components/postUser/postUser';
import UpdateUser from './components/updateUser/UpdateUser';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/user" element={<PostUser></PostUser>}></Route>
        <Route path="/user/:id" element={<UpdateUser></UpdateUser>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </>
  );
}

export default App;
