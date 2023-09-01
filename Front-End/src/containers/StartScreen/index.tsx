import { Layout } from "../../components";
import { useFetchData } from "../../hooks/useFetchData"


const StartScreen = () => {
    const data = useFetchData("http://localhost:5000/github/commits?owner=everaldogch&repo=fulltimeforce-challenge")

    return (
        <Layout>
            {data?
            <></>
            :
            <p>Cargando feo</p>}
        </Layout>
    );
}

export default StartScreen;