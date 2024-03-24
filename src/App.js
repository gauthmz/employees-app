import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllEmployee from './components/ViewAllEmployee';
import DeleteEmployee from './components/DeleteEmployee';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<AddEmployee />} />
        <Route path='/search' element={<SearchEmployee />} />
        <Route path='/view' element={<ViewAllEmployee />} />
        <Route path='/delete' element={<DeleteEmployee />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
