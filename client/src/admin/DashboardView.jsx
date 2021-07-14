import { AdminView } from "@miq/admin";
import { SharedDataCtx } from "@miq/contexts";
import { useContext } from "react";

export default function DashboardView(props) {
    const { user } = useContext(SharedDataCtx);

    // const [items, setI] = useState(i1);
    return (
        <AdminView title="Dashboard" actions={<>Ajouter document</>} className="">
            <div className="">
                <h3>Welcome back, {user.first_name}</h3>

                <h4>Recent files</h4>
                <div className="">
                    <div className="">Document title {">"}</div>
                </div>
            </div>
        </AdminView>
    );
}
