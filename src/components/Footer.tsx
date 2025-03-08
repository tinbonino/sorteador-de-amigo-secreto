import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSorteador } from "../hooks/useSorteador";
function Footer() {

    const navigate = useNavigate();

    const participantes=useSelector((state:any)=>state.amigoSecreto.names);

    const sortear =useSorteador();

    const iniciar = () => {
      sortear();
      navigate("/sorteo")
    }
    

    return (
        <footer>
            <button disabled={participantes<=3} onClick={iniciar }>
                Iniciar Juego
            </button>
        </footer>
    )
}

export default Footer