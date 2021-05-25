import { ArrowUpCircle, Eye, PencilSquare, Trash } from "react-bootstrap-icons";

import { IconButton } from "@miq/components";
import { isRequired } from "@miq/utils";

export const SectionSaveButton = (props) => {
    const { context = isRequired("section context") } = props;
    const { form = isRequired("form context") } = props;
    const { data = isRequired("section data") } = props;

    const handleSave = (e) => {
        const shouldSave = data.text !== form.values.text;
        console.log("Saving", shouldSave);

        if (!shouldSave) return context.setEdit(!context.isEdit);
        if (!props.onSave) return;

        props.onSave();
    };

    return <IconButton Icon={ArrowUpCircle} label="Save" className="section-btn" title="Save" onClick={handleSave} />;
};

export const SectionDeleteButton = (props) => {
    console.log(props);
    const { context = isRequired("section context") } = props;
    const { data = isRequired("section data") } = props;

    return (
        <IconButton
            {...props}
            Icon={Trash}
            className="section-btn btn-danger"
            title="Delete"
            onClick={() => context.remove(data.slug)}
        />
    );
};

export const SectionEditButton = (props) => {
    const { context = isRequired("section context") } = props;
    const { isEdit } = context;

    if (isEdit) return <SectionSaveButton {...props} />;

    return (
        <IconButton
            Icon={isEdit ? Eye : PencilSquare}
            className="section-btn"
            title={isEdit ? "Preview Mode" : "Edit Mode"}
            onClick={() => context.setEdit(!isEdit)}
        />
    );
};
