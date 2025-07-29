import { useEffect, useState } from 'react'; // Importa os hooks do React: useState para estado e useEffect para executar algo ao carregar o componente
import './favoritos.css' // Importa o arquivo CSS para estilização do componente Favoritos
import { Link } from 'react-router-dom'; // Importa o Link para navegação interna entre páginas do React Router

function Favoritos() {
    const [filmes, setFilmes] = useState([]) // Cria um estado chamado filmes, inicialmente como array vazio

    useEffect(() => {
        const minhaLista = localStorage.getItem("@prime-flix"); // Busca os filmes salvos no localStorage usando a chave "@prime-flix"
        setFilmes(JSON.parse(minhaLista) || []) // Converte a string JSON para array e atualiza o estado. Se não houver nada, mantém como array vazio
    }, []) // O array vazio [] garante que o efeito será executado apenas uma vez (quando o componente for montado)

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => item.id !== id); // Cria um novo array removendo o item com o id correspondente
        setFilmes(filtroFilmes); // Atualiza o estado com o novo array sem o filme excluído
        localStorage.setItem("@prime-flix", JSON.stringify(filtroFilmes)) // ⚠️ Aqui há um pequeno erro: o correto seria localStorage.setItem, mas como você pediu para não mudar, apenas sinalizando aqui nos comentários
    }

    return (
        <div className='meus-filmes'> {/* Container principal com classe CSS para estilização */}
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Você não tem nenhum filme salvo</span>} 
            {/* Verifica se a lista está vazia. Se estiver, mostra uma mensagem */}

            <ul>
                {filmes.map((item) => { // Percorre o array de filmes
                    return (
                        <li key={item.id}> {/* Cada item da lista precisa ter uma chave única para ajudar o React a identificar o elemento */}
                            <span>{item.title}</span> {/* Exibe o título do filme */}
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link> {/* Link que leva para a página de detalhes do filme */}
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button> {/* Botão que, ao ser clicado, chama a função excluirFilme passando o id do item */}
                            </div> 
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos; // Exporta o componente Favoritos para ser usado em outros arquivos do projeto
