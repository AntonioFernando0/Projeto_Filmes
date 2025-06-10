import { useNavigate, useParams } from 'react-router-dom'; // Hook para pegar parâmetros da URL
import { useEffect, useState } from 'react';  // Hooks do React
import './filme.css'
import api from '../../services/api';         // Configuração do axios

function Filme() {
  const { id } = useParams(); // Pega o parâmetro "id" da URL (ex: /filme/123)
  const navigate = useNavigate()
  
  const [filme, setFilmes] = useState({});    // Armazena os dados do filme
  const [loading, setLoading] = useState(true); // Estado para mostrar "carregando"
  

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "f473c8c0ce90b372a47df5442d56c3ec", // Chave da API do TMDB
          language: "pt-BR"                            // Idioma da resposta
        }
      })
      .then((response) => {
        setFilmes(response.data); // Salva os dados do filme
        setLoading(false);        // Remove o "carregando"
      })
      .catch(() => {
        console.log("Erro ao buscar o filme."); // Erro no fetch
        navigate("/", {
          replace: true
        })
        setLoading(false); // Mesmo com erro, remove o "carregando"
      });
    }

    loadFilme(); // Chamada da função dentro do useEffect
  }, [navigate, id]); // Executa sempre que o ID mudar

  function salvarFilmes(){
    const minhaLista = localStorage.getItem("@prime-flix")
    let filmesSalvo = JSON.parse(minhaLista) || [];

    const hasfilme = filmesSalvo.some((filmesSalvo) => filmesSalvo.id === filme.id )
    if(hasfilme){
      alert("ESSE FILME JÁ ESTÁ NA LISTA")
      return;

    }
    filmesSalvo.push(filme)
    localStorage.setItem("@prime-flix", JSON.stringify(filmesSalvo))
    alert("FILME SALVO COM SUCESSO")
  }
  
  if (loading) {
    return (
      <div className='filme-info'>
        <h1>Carregando detalhes</h1>
      </div>
    );
  }

  return (
    <div className='filme-info'>
      <h1>{filme.title}</h1> {/* Título do filme */}
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <span className='sino'>Sinopse</span>
      <p> {filme.overview}</p> {/* Sinopse */}
      <strong>Nota: {filme.vote_average.toFixed(1)}/10</strong> {/* Nota média */}

      <div className='area-buttons'>
          <button onClick={salvarFilmes}>
            Salvar
          </button>
          <button className='link'>
            <a target='blanc' href={`https://youtube.com/results?search_query=${filme.title} Trailler`}>
              Trailler
            </a>
          </button>

      </div>
    </div>
  );
}

export default Filme;
