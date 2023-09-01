import { Layout } from "../../components";
import DarkSwitch from "../../components/DarkSwitch";
import { useFetchData } from "../../hooks/useFetchData"


const StartScreen = () => {
    useFetchData()

    return (
        <Layout>
            <DarkSwitch/>
            {true?
            <></>
            :
            <p>Cargando feo</p>}
        </Layout>
    );
}

export default StartScreen;