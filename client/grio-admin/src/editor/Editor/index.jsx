import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Form, { useForm } from "@miq/form";
import { isRequired } from "@miq/utils";
import Section from "../Section";

import { useSelector } from "react-redux";
import { sectionActions } from "../Section/utils";
import { useState } from "react";
import { SectionAddButton } from "../Section/section-components";

const propTypes = {
    sourceSlug: PropTypes.string.isRequired,
    sourceData: PropTypes.object.isRequired,
    // children: PropTypes.string.isRequired,
};

export default function Editor({ sourceSlug = isRequired("source slug"), children, ...props }) {
    const [loading, setLoading] = useState(1);
    const { sourceData = isRequired("source data") } = props;

    useEffect(() => {
        if (!sourceSlug) return;

        sectionActions.list({ source: sourceSlug }).then(() => {
            setLoading(0);
        });
    }, [sourceSlug]);

    const form = useForm({ label: sourceData.label || "" });

    if (loading) return <div>Loading ...</div>;

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

                <div className="editor-actions">
                    <SectionAddButton sourceSlug={props.sourceSlug} type="TXT" />
                    <SectionAddButton sourceSlug={props.sourceSlug} type="MD" />
                    <SectionAddButton sourceSlug={props.sourceSlug} type="IMG" />
                </div>
            </div>
        </div>
    );
};

Editor.Panel = Panel;

Editor.propTypes = propTypes;
