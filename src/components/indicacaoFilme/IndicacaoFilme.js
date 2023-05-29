import "./indicacao.css";
import { BsPlay } from "react-icons/bs";

function IndicacaoFilme () {
    return(
        <section className="indicacaoFilme">
            <a className="filmeIndicado" href="https://www.youtube.com/watch?v=e01NVCveGkg&pp=ygURZ3Jvd24gdXBzIHRyYWlsZXI%3D"><img src="https://th.bing.com/th/id/R.fb75a6754e0607147328ae72f1e35334?rik=wGTQtNRXLoCQGg&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2f29We1MLNidfXrwkZe390frjnOns.jpg&ehk=ZVxJncTDmEvdlwjXRP8Tn%2bc6x0LVOPPU6020W5w4vfI%3d&risl=&pid=ImgRaw&r=0" alt="filme-indicado" className="filmeIndicado"/></a>
            <div className="informacao-indicacao">
                <p className="ano-lancamento-indicacao">1996</p>
                <h1 className="nome-indicacao">
                    Scream
                </h1>
                <ul >
                    <li className="genero-indicacao">Horror</li>
                </ul>
                <p  className="resumo-indicacao">"Scream" is a 1996 horror film directed by Wes Craven.
A small town called Woodsboro is terrorized by a masked killer known as Ghostface.
High school student Sidney Prescott becomes the primary target of Ghostface.
The film starts with the murder of Sidney's classmate, Casey Becker.
Sidney and her friends find themselves in a terrifying game of cat and mouse.
They must unravel the identity of the mysterious killer while trying to survive.
"Scream" is known for its self-awareness and subversion of horror movie tropes.
The characters reference horror films, creating a meta-commentary on the genre.
The movie explores themes of horror movie clichés and the nature of fear.
"Scream" became a successful franchise, spawning multiple sequels and a TV series.</p>
                <span className="assistir-ind"><a className="assistir-ind" href="https://www.youtube.com/watch?v=e01NVCveGkg&pp=ygURZ3Jvd24gdXBzIHRyYWlsZXI%3D"><BsPlay/> Watch trailer</a></span>
            </div>
        </section>
    );
}

export default IndicacaoFilme;

