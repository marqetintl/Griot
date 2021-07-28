import { lazy, Suspense, useContext } from "react";
import { Switch } from "react-router-dom";

import { Icons, Loading } from "@miq/components";

import { SharedDataCtx } from "@miq/contexts";

import { AdminLayout as Layout, AdminSidebar, AdminMain } from "@miq/adminjs";
import { PagesLayout, SettingsLayout, AdminRoute } from "@miq/adminjs";

import DashboardView from "./DashboardView";
import { UserProfileUpdateView } from "../Profile";

const DocumentRoutes = lazy(() => import("@miq/dmsjs"));
const HrmRoutes = lazy(() => import("@miq/hrmjs"));

// const SettingsLayout = lazy(() => import("../settings"));

export default function AdminLayout(props) {
    const ctx = useContext(SharedDataCtx);

    if (!ctx) return null;
    if (!ctx.isLoaded) return <Loading />;

    const { user } = ctx;
    const { path } = props.match;

    return (
        <Layout {...props}>
            <AdminSidebar
                id="AdminNav"
                className="grio-nav"
                /**
                 * ===================================== HEADER ======================================>
                 */
                header={<h1>{ctx.site.name}</h1>}
                /**
                 * ====================================== FOOTER =====================================>
                 */
                footer={
                    <>
                        {user && (
                            <AdminSidebar.NavLink
                                to={`${path}account/`}
                                label={user.first_name}
                                Icon={Icons.Person}
                                // requiredPerms={["miq.view_setting"]}
                            />
                        )}
                        <AdminSidebar.NavLink
                            to={`${path}company/`}
                            label="Company"
                            Icon={Icons.Person}
                            requiredPerms={["miq_hrm.view_employee"]}
                        />
                        <AdminSidebar.NavLink
                            to={`${path}settings/`}
                            label="Settings"
                            Icon={Icons.Gear}
                            // requiredPerms={["miq.view_setting"]}
                        />
                    </>
                }
            >
                <AdminSidebar.NavLink exact to={path} label="Dashboard" Icon={Icons.House} />

                <div className="grio-nav-items">
                    <AdminSidebar.NavLink
                        to={`${path}documents/`}
                        label="Documents"
                        Icon={Icons.Bookmark}
                        requiredPerms={["miq_dms.view_document"]}
                    />
                </div>

                <AdminSidebar.NavLink
                    to={`${path}pages/`}
                    label="Pages"
                    Icon={Icons.Files}
                    requiredPerms={["miq.view_page"]}
                />
            </AdminSidebar>

            <AdminMain className="grio-main">
                <Suspense fallback={<Loading label="Main loading" />}>
                    <Switch>
                        <AdminRoute
                            path={`${path}documents/`}
                            component={DocumentRoutes}
                            requiredPerms={["miq_dms.view_document"]}
                        />
                        <AdminRoute
                            path={`${path}company/`}
                            component={HrmRoutes}
                            requiredPerms={["miq_hrm.view_employee"]}
                        />

                        <AdminRoute path={`${path}pages/`} component={PagesLayout} requiredPerms={["miq.view_page"]} />
                        <AdminRoute path={`${path}settings/`} component={SettingsLayout} />
                        <AdminRoute path={`${path}account/`} component={UserProfileUpdateView} />
                        <AdminRoute path={`${path}`} component={DashboardView} />
                    </Switch>
                </Suspense>
            </AdminMain>
        </Layout>
    );
}
