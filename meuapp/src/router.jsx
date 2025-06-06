import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Filme from './pages/Filme/index';
import Header from './components/header';
import Erro from './pages/Erro';

function RouterApp() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        {/* Rota para os caminhos dos arquivos */}
        <Route path='/' element={<Home />} />
        <Route path='/filme/:id' element={<Filme />} />
        <Route path='*' element={<Erro/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;
