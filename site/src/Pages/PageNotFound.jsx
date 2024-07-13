import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <>
        <h1>Página não encontrada</h1>

        <nav>
            <ul><li><Link to={"/"}>Volte para a página incial</Link></li></ul>
        </nav>
        </>
     );
}
 
export default PageNotFound;