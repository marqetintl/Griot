import { lazy, Suspense, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { House, Gear, Files, Bookmark, PersonBadge } from "react-bootstrap-icons";

import Admin from "@miq/admin";
import { IconNavLink } from "@miq/components";
import { SharedDataCtx } from "@miq/contexts";
import { Fallback } from "../index";

const PagesLayout = lazy(() => import("../pages"));
const SettingsLayout = lazy(() => import("../settings"));

export default function AdminLayout(props) {
    const ctx = useContext(SharedDataCtx);
    const { path } = props.match;

    if (!ctx) return null;
    if (!ctx.isLoaded) return <Fallback />;

    return (
        <Admin.Layout >
            <NavBar {...props} {...{ path, ctx }} />

            <Admin.Main className="grio-main">
                <Suspense fallback={<Fallback />}>
                    <Switch>
                        <Route path={`${path}pages/`} component={PagesLayout} />
                        <Route path={`${path}settings/`} component={SettingsLayout} />
                        <Route path={`${path}`} component={Dashboard} />
                    </Switch>
                </Suspense>
            </Admin.Main>

            <MobileNav />
        </Admin.Layout>
    );
}

export const Dashboard = (props) => {
    return <div className="">Dashboard</div>;
};

export const NavBar = (props) => {
    const { path, ctx = {} } = props;

    return (
        <Admin.Navbar id="AdminNav" className="grio-nav">
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
        </Admin.Navbar>
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
    return <Admin.MobileNavbar className="grio-mobile-nav">Mobile</Admin.MobileNavbar>;
};