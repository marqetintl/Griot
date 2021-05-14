import { lazy, Suspense, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { House, Gear, Files, Bookmark, PersonBadge } from "react-bootstrap-icons";

import { IconNavLink, SharedDataCtx } from "@miq/shared";
import { Fallback } from "../index";

const PagesLayout = lazy(() => import("../pages"));

export default function AdminView(props) {
    const ctx = useContext(SharedDataCtx);
    const { path } = props.match;

    if (!ctx) return null;
    if (!ctx.isLoaded) return <Fallback />;

    return (
        <div id="AdminView">
            <NavBar {...props} {...{ path, ctx }} />

            <main className="grio-main" role="main">
                <section className="container">
                    <Suspense fallback={<Fallback />}>
                        <Switch>
                            <Route path={`${path}pages/`} component={PagesLayout} />
                            <Route path={`${path}settings/`} component={Settings} />
                            <Route path={`${path}`} component={Dashboard} />
                        </Switch>
                    </Suspense>
                </section>
            </main>

            <MobileNav />
        </div>
    );
}

export const Dashboard = (props) => {
    return <div className="">Dashboard</div>;
};

export const Settings = (props) => {
    return <div className="">Settings</div>;
};

export const NavBar = (props) => {
    const { path, ctx = {} } = props;

    return (
        <nav id="AdminNav" className="grio-nav">
            <header className="grio-nav-header">
                <h1>{ctx.site.name}</h1>
            </header>

            <section className="grio-nav-body">
                <div className="grio-nav-content">
                    <NavItem exact to={"/grio/"} label="Dashboard" Icon={House} />

                    <div className="grio-nav-items">
                        <NavItem to={`${path}blog`} label="Articles" Icon={Bookmark} />
                    </div>

                    <NavItem to={`${path}pages/`} label="Pages" Icon={Files} />
                    <NavItem to={`${path}staff/`} label="Staff" Icon={PersonBadge} />
                </div>

                <div className="grio-nav-footer">
                    <NavItem to={`${path}settings/`} label="Settings" Icon={Gear} />
                </div>
            </section>
        </nav>
    );
};

const NavItem = (props) => {
    return (
        <div className="grio-nav-item">
            <IconNavLink {...props} className="grio-nav-link" />
        </div>
    );
};

export const MobileNav = (props) => {
    return <nav className="grio-mobile-nav">Mobile</nav>;
};
