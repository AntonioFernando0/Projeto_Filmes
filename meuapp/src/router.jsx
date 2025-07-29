import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Filme from './pages/Filme/index';
import Header from './components/header';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos/index';

function RouterApp() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        {/* Rota para os caminhos dos arquivos */}
        <Route path='/' element={<Home />} />
        <Route path='/filme/:id' element={<Filme />} />
        <Route path='/favoritos' element={ <Favoritos/> } />
        <Route path='*' element={<Erro/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;
