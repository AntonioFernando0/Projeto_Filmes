// Importa os hooks useEffect e useState do React
import { useEffect, useState } from "react";

// Importa o módulo de requisições HTTP (axios configurado) do arquivo api.js
import api from "../../services/api";

function Home() {
    // Cria um estado chamado 'filmes' com valor inicial como array vazio
    // A função 'setfilmes' será usada para atualizar esse estado
    const [filmes, setfilmes] = useState([]);

    // useEffect será executado apenas uma vez quando o componente for montado (porque o array de dependências está vazio)
    useEffect(() => {
        // Função assíncrona para carregar os filmes da API
        async function loadFilmes() {
            // Faz uma requisição GET para o endpoint "movie/now_playing"
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "f473c8c0ce90b372a47df5442d56c3ec", // Chave da API TMDB
                    language: "pt-BR", // Define o idioma da resposta como português brasileiro
                    page: 1 // Pega a primeira página dos resultados
                }
            });

            // Exibe os dados retornados da API no console do navegador
            console.log(response.data);

            // (Melhoria possível): Atualizar o estado com os filmes retornados
            setfilmes(response.data.results);
        }

        // Chama a função que carrega os filmes
        loadFilmes();
    }, []);

    // Renderiza o conteúdo da página
    return (
        <div>
            
            <ul>
                {filmes.map(filme => (
                    <li key={filme.id}>{filme.title}</li>
                ))}
            </ul>
            
        </div>
    );
}

export default Home;
