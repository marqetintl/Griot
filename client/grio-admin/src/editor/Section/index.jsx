import React, { createContext, useRef } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./section.scss";

import { getClassName, isRequired } from "@miq/utils";

import ImageSection from "./ImageSection";
import MarkdownSection from "./MarkdownSection";
import TextSection from "./TextSection";
import { sectionActions } from "./utils";

const getSectionComponent = (type) => {
    switch (type) {
        case "MD":
            return MarkdownSection;
        case "IMG":
            return ImageSection;

        default:
            return TextSection;
    }
};

export const SectionCtx = createContext();

export default function Section(props) {
    const { data = isRequired("section data props") } = props;
    const { slug, type } = data;

    const ref = useRef();
    const [isEdit, setEdit] = useState(props.isEdit || false);

    const dispatch = useDispatch();

    const context = useMemo(() => {
        return { isEdit, setEdit, update: sectionActions.patch, remove: sectionActions.delete, dispatch };
    }, [isEdit, dispatch]);

    if (!slug) return null;

    const Component = getSectionComponent(type);

    return (
        <SectionCtx.Provider value={context}>
            <Component {...{ ...props, ref, context, className: getClassName(["section", isEdit && "active"]) }} />
        </SectionCtx.Provider>
    );
}
