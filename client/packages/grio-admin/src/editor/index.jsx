import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";

import "./scss/main.scss";
import Section from "./Section";

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
    const pageSlug = props.match.params;

    const [label, setLabel] = useState("a title");
    console.log(pageSlug);

    return (
        <div className="view">
            <section className="view-content">
                <header className="view-header">page update</header>

                <div className="editor-panel">
                    <div className="editor-content">
                        <div className="editor-label">
                            <textarea
                                name="label"
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                                tabIndex={1}
                            />
                        </div>
                        <div className="editor-sections">
                            {sections.map((data) => (
                                <Section data={data} key={data.slug} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const sections = [
    { text: "## this is a header", type: "MD", html: "", slug: 1 },
    { text: "## this is a header", type: "TXT", html: "", slug: 2 },
    { text: "### this is a another header", type: "MD", html: "", slug: 3 },
    {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur earum sequi provident! Dolor eligendi corporis voluptatum error quasi, voluptas doloribus quam tempore doloremque vero provident soluta pariatur sapiente quos odio.",
        type: "MD",
        html: "",
        slug: 5,
    },
];
