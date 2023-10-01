
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientListing from './ClientListing';
import ClientCreate from './ClientCreate';
import ClientDetail from './ClientDetail';
import ClientEdit from './ClientEdit';

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <BrowserRouter>
  <Routes>
  <Route path='/' element={<ClientListing />}></Route>
  <Route path='/clienttt/create' element={<ClientCreate />}></Route>

<Route path='/clienttt/detail/:clientid' element={<ClientDetail />}></Route>
<Route path='/clienttt/edit/:clientid' element={<ClientEdit />}></Route>
  </Routes>
  </BrowserRouter>
      </div>
  );
  
}
export default App;