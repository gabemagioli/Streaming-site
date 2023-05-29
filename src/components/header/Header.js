import "./header.css";
import { MdLogout } from "react-icons/md";

const Header = () => {
    <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet"/>
    </>


    return(
        <>
        <header className="header">
                <div>
                <img src="https://bitbucket.org/repo/ydBdKa/images/3020985987-Stream%20Logo.png" alt="logo website" className="logo"/>
                </div>
                <div>
                    <nav className="pastas-navegacao">
                        <h2 className="pasta">MAIN</h2>
                        <h2 className="pasta">NEWS</h2>
                        <h2 className="pasta">CONTACT</h2>
                        <h2 className="pasta">YOUR ACCOUNT</h2>
                        <h2 className="pastaOut">SIGN OUT <MdLogout/></h2>   
                    </nav>
                </div>
        </header>
        </>
    );
}

export default Header;