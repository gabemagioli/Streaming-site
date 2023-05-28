import "./indicacao.css";
import { BsPlay } from "react-icons/bs";

function IndicacaoFilme () {
    return(
        <section className="indicacaoFilme">
            <a className="filmeIndicado" href="https://www.youtube.com/watch?v=e01NVCveGkg&pp=ygURZ3Jvd24gdXBzIHRyYWlsZXI%3D"><img src="https://www.bing.com/th?id=OIP.hR4DyZZTJSnSzKKAGlSk6gHaLH&w=137&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="filme-indicado" className="filmeIndicado"/></a>
            <div className="informacao-indicacao">
                <p className="ano-lancamento-indicacao">2001</p>
                <h1 className="nome-indicacao">
                    Harry Potter and the sorcere's stone
                </h1>
                <ul >
                    <li className="genero-indicacao">Fantasy</li>
                </ul>
                <p  className="resumo-indicacao">"Harry Potter and the Sorcerer's Stone" is the first book in the beloved Harry Potter series by J.K. Rowling transformed into a movie. It tells the story of an orphaned boy named Harry Potter who discovers he is a wizard on his eleventh birthday. He is invited to attend Hogwarts School of Witchcraft and Wizardry, where he befriends Ron Weasley and Hermione Granger. Together, they uncover the mystery of the Philosopher's Stone, an object that grants immortality. Along the way, Harry learns about his parents' tragic past and confronts the dark wizard Lord Voldemort. With the help of his friends and the guidance of wise mentors, Harry embarks on a magical adventure filled with danger, friendship, and the eternal struggle between good and evil.</p>
                <span className="assistir-ind"><a className="assistir-ind" href="https://www.youtube.com/watch?v=e01NVCveGkg&pp=ygURZ3Jvd24gdXBzIHRyYWlsZXI%3D"><BsPlay/> Watch trailer</a></span>
            </div>
        </section>
    );
}

export default IndicacaoFilme;

