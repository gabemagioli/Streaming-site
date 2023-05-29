import { useState } from "react";
import "./filmes.css";
import { BiTime } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import {AiOutlineCheck} from "react-icons/ai";
import anjosdalei from "./anjosdalei.jpg";

function Filmes () {

    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet"/>
    </>

    const comedia = [{
        id: 1,
        foto: "https://www.thoughtco.com/thmb/ZxwvXmuJFQw-gqU9FXCeH8Alpg0=/1500x1185/filters:no_upscale():max_bytes(150000):strip_icc()/DumbandDumber-5c46646246e0fb00019e6267.jpg",
        nome: "Dumb and Dumber",
        duracao: 85,
        trailer: "https://www.youtube.com/watch?v=l13yPhimE3o&pp=ygUXZHVtYiBhbmQgZHVtYmVyIHRyYWlsZXI%3D",
        tipo: "COMEDY"
    },
{
    id: 2,
    foto: "https://th.bing.com/th/id/OIP.MH6dKn7pN2I798SO740SdQHaLG?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    nome: "Murder Mistery 2",
    duracao: 90,
    trailer: "https://www.youtube.com/watch?v=LM2F56uK0fs&pp=ygUYbXVyZGVyIG1pc3RlcnkgMiB0cmFpbGVy",
    tipo: "COMEDY"
},{
    id: 3,
    foto: "https://th.bing.com/th/id/OIP.HHjsn1FxttQpF3N4XTt_3AHaKy?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    nome: "The Hangover",
    duracao: 100,
    trailer: "https://www.bing.com/ck/a?!&&p=bc9ea6bb76919de5JmltdHM9MTY4NTIzMjAwMCZpZ3VpZD0zOTNmOTViZi1hMmFmLTY4MzgtMWJiZS04NzJhYTNmODY5NTgmaW5zaWQ9NjAxMg&ptn=3&hsh=3&fclid=393f95bf-a2af-6838-1bbe-872aa3f86958&u=a1L3ZpZGVvcy9zZWFyY2g_cT1oYW5nb3Zlcittb3ZpZStkdXJhdGlvbiZkb2NpZD02MDM1Mjc5OTcwMTE4MDI3MjUmbWlkPTVDRkIzNUI4QzlDMEYyQjA1MzUwNUNGQjM1QjhDOUMwRjJCMDUzNTAmdmlldz1kZXRhaWwmRk9STT1WSVJF&ntb=1",
    tipo: "COMEDY"
},{
    id: 4,
    foto: "https://th.bing.com/th/id/OIP.NdHCVXUJCzTMt6IlWCIOQgHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    nome: "Superbad",
    duracao: 119,
    trailer: "https://www.bing.com/videos/riverview/relatedvideo?&q=superbad&&mid=35D7A862DD0B9BF14CDD35D7A862DD0B9BF14CDD&&FORM=VRDGAR",
    tipo: "COMEDY"
},{
    id: 5,
    foto: anjosdalei,
    nome: "21 Jump Street",
    duracao: 119,
    trailer: "https://www.bing.com/videos/riverview/relatedvideo?&q=21+jump+street+movie+duratino&&mid=8C292E6728296E528D818C292E6728296E528D81&&FORM=VRDGAR",
    tipo: "COMEDY"
}];

//state do watch later
    const [later, setLater] = useState([]);
    const [simboloLater, setSimboloLater] = useState(<BsPlusLg/>);
//funcao adicionar item na watch later list
const addWatchLater = (id, foto, nome, duracao, trailer, tipo) => {
    const laterFilm = {
        id:id,
        foto:foto,
        nome: nome,
        duracao:duracao,
        trailer: trailer,
        tipo:tipo
    };
    setLater([laterFilm, ...later]);
    setSimboloLater(<AiOutlineCheck/>);
    console.log("filme adicionado", later);
}// ver depois pq a imagem nao aparece

    return(
        <section className="filmes">
            <div  className="titulo">
                <h2 className="titulo-pag">FILMS</h2>
            </div>
            <h3 className="genero-comedia">Comedy</h3>
            <ul className="comedia">
                { comedia.map(f => (
                    <li key={ f.id } className="li-comedia">
                        <a className="a-com" href={ f.trailer }><img src={ f.foto } alt="imagem o filme" className='filme-img'/>
                        <h5 className="nome-filme">{ f.nome }</h5>
                        <div className="informacao-comedia">
                            <p> <BiTime/> { f.duracao }min</p>
                            <p> | </p>
                            <p>{f.tipo}</p>
                        </div></a>
                        <span className="later-comedy" onClick={() => addWatchLater(f.id, f.foto, f.nome, f.duracao, f.trailer, f.tipo)}>Watch Later {simboloLater}</span>
                    </li>
                ))}
            </ul>
            <h3 className="list-later">Watch Later List</h3>
            <ul className="later">
                { later.map(filme => (
                    <li key={ filme.id } className="li-later">
                    <a className="a-lat" href={ filme.trailer }><img src={ filme.foto } alt="imagem o filme" className='filme-later'/>
                    <h5 className="nome-later">{ filme.nome }</h5>
                    <div className="informacao-later">
                        <p> <BiTime/> { filme.duracao }min</p>
                        <p> | </p>
                        <p>{filme.tipo}</p>
                    </div></a>
                </li>
                ))}
            </ul>
        </section>
    );
}

export default Filmes;