import { Layout } from "../../components";
import DarkSwitch from "../../components/DarkSwitch";
import Table from "../../components/Table";
import { useFetchData } from "../../hooks/useFetchData"
import { Skeleton, Stack } from "@mui/material"
import { useAppSelector } from "../../hooks/useRedux";

const StartScreen = () => {
    useFetchData()
    const { commits } = useAppSelector((state) => state.users)
    const { loading } = useAppSelector((state) => state.ui)


    return (
        <Layout>
            {loading ?
                <Stack spacing={1}>
                    <Skeleton variant="rounded" width={"100%"} height={60} />
                    <Skeleton variant="rounded" width={"100%"} height={"50vh"} />
                </Stack>
                :
                <>
                    <DarkSwitch />
                    <Table data={commits}></Table>
                </>}
        </Layout>
    );
}

export default StartScreen;