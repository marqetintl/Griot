import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Form, { useForm } from "@miq/form";
import { isRequired } from "@miq/utils";
import Section from "../Section";
import { pagesActions } from "../../pages/utils";

import { useDispatch, useSelector } from "react-redux";
import { sectionActions } from "../Section/utils";

const propTypes = {
    sourceSlug: PropTypes.string.isRequired,
    sourceData: PropTypes.object.isRequired,
    // children: PropTypes.string.isRequired,
};

export default function Editor({ sourceSlug = isRequired("source slug"), children, ...props }) {
    const { sourceData = isRequired("source data") } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!sourceSlug) return;

        dispatch(sectionActions.list({ source: sourceSlug }));

        // dispatch(pagesActions.get(sourceSlug))
        //     .catch((err) => {})
        //     .then(() => );
    }, [sourceSlug, dispatch]);

    const form = useForm({ label: sourceData.label || "" });

    return (
        <>
            <Form context={form} onSubmit={(e) => e.preventDefault()}>
                {children}
            </Form>
        </>
    );
}

const Panel = (props) => {
    const sections = useSelector((state) => state.sections);

    if (!sections) return null;

    return (
        <div className="editor-panel">
            <div className="editor-content">
                <div className="editor-label">
                    <Form.TextAreaX name="label" tabIndex={1} maxLength={250} />
                </div>

                <div className="editor-sections">
                    {sections.results.map((data) => (
                        <Section data={data} key={data.slug} />
                    ))}
                </div>
            </div>
        </div>
    );
};

Editor.Panel = Panel;

Editor.propTypes = propTypes;
