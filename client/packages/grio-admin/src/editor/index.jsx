import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";

import "./scss/main.scss";

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
                        <div className="editor-sections">{txt}</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const txt = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.

molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sequi
molestiae officiis labore aliquam adipisci debitis totam ullam? Corporis optio
officiis velit, laboriosam ullam dolores neque unde tempora magni corrupti.


`;
