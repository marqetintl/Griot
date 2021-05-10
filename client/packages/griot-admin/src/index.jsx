import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Admin(props) {
    const { path } = props.match;

    return (
        <BrowserRouter>
            <div className="">
                <Comp2 />
                <Switch>
                    <Route path={`${path}settings/`} component={Comp} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

const Comp = (props) => {
    return (
        <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur, atque
            et illo impedit architecto a pariatur minus iure nostrum facilis quos quod facere quo
            magnam tenetur quia cumque non?
        </div>
    );
};
const Comp2 = (props) => {
    return <div className="">2</div>;
};
