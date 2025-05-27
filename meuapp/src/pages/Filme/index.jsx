import { useParams } from 'react-router-dom';

function Filme() {
  const { id } = useParams();

  return (
    <div>
      <h1>Bem-vindo aos Filmes!</h1>
      <p>Você está vendo o filme com ID: {id}</p>
    </div>
  );
}

export default Filme;
