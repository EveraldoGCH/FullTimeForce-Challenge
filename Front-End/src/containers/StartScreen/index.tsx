import { Layout } from "../../components";
import { useFetchData } from "../../hooks/useFetchData"


const StartScreen = () => {
    useFetchData()

    return (
        <Layout>
            {true?
            <></>
            :
            <p>Cargando feo</p>}
        </Layout>
    );
}

export default StartScreen;