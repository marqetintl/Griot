import { Redirect, Route, Switch } from "react-router-dom";

import "./editor.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pagesActions } from "../pages/utils";
import Editor from "./Editor";
import { IconNavLink } from "@miq/components";
import { ChevronLeft } from "react-bootstrap-icons";

export const EDITOR_PATH = "/grio/editor/";
export const PAGE_CREATE_PATH = `${EDITOR_PATH}pages/`;

export default function EditorLayout(props) {
    const { path } = props.match;

    return (
        <div className="editor">
            <Switch>
                <Route path={`${path}pages/:pageSlug/`} component={PageUpdateView} />
                <Route path={`${path}pages/`} component={PageAddView} />
                <Redirect to={PAGE_CREATE_PATH} />
            </Switch>
        </div>
    );
}

const PageAddView = (props) => {
    return <div className="view">page add</div>;
};

const PageUpdateView = (props) => {
    const { pageSlug } = props.match.params;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!pageSlug) return;

        pagesActions.get(pageSlug).catch((err) => {});
    }, [pageSlug]);

    const page = useSelector((state) => state.pages.items)[`${pageSlug}`];

    if (!page) return null;

    return (
        <Editor sourceSlug={pageSlug} sourceData={page}>
            <div className="view">
                <section className="view-content">
                    <PageUpdateHeader {...props} {...{ pageSlug, dispatch, page }} />

                    <Editor.Panel sourceSlug={pageSlug} />
                </section>
            </div>
        </Editor>
    );
};

const PageUpdateHeader = (props) => {
    return (
        <header className="view-header">
            <IconNavLink label="Pages" Icon={ChevronLeft} to="/grio/pages/" />
        </header>
    );
};
