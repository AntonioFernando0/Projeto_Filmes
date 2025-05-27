import { useEffect, useState } from "react";
import api from "../../services/api";


function Home() {
    const [filmes,setfilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"f473c8c0ce90b372a47df5442d56c3ec",
                    language: "pt-BR",
                    page:1,
                }
            })
            console.log(response.data)
        }
        loadFilmes();
    }, [])


    return(
        <div>
            <h1>
                Bem Vindo!
            </h1>
        </div>
    )
}

export default Home;