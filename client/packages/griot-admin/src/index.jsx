import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

export default function Admin(props) {
    const { path } = props.match;

    return (
        <BrowserRouter>
            <div className="">
                <NavBar {...props} path={path} />
                <Main {...props} path={path} />
            </div>
        </BrowserRouter>
    );
}

const Main = (props) => {
    const { path } = props;

    return (
        <div className="">
            <Switch>
                {/* <Route path={`${path}settings/`} component={Comp} /> */}
                <Route path={`${path}settings/`} component={Settings} />
                <Route path={`${path}`} component={Dashboard} />
            </Switch>
        </div>
    );
};

const Dashboard = (props) => {
    return <div className="">Dashboard</div>;
};

const Settings = (props) => {
    return <div className="">Settings</div>;
};

const NavBar = (props) => {
    const { path } = props;
    return (
        <div className="">
            <NavLink to={path}>Dashboard</NavLink>
            <NavLink to={`${path}settings/`}>Settings</NavLink>
        </div>
    );
};
