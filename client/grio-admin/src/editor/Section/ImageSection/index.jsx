import { forwardRef } from "react";
import { Image as ImageIcon } from "react-bootstrap-icons";

import { getClassName, IS_DEV } from "@miq/utils";

import { SectionDeleteButton, SectionEditButton } from "../section-components";
import { SectionBody, SectionFooter, SectionHeader } from "../section-ui";

/**
 * IMAGE SECTION
 * images Icon:viewlist
 * slider; distribute-horizontal
 */

const ImgSectionEdit = (props) => {
    return <div className="">ImgSectionEdit</div>;
};

const ImgSectionPreview = (props) => {
    if (props.context.isEdit) return <ImgSectionEdit {...props} />;

    return <div className="">img render</div>;
};

const ImageSection = forwardRef((props, ref) => {
    return (
        <div id={props.id} {...{ ref }} className={getClassName([props.className])}>
            <SectionHeader Icon={ImageIcon} />

            <SectionBody>
                <ImgSectionPreview {...props} />
            </SectionBody>

            <SectionFooter>
                <div className="actions">
                    <SectionDeleteButton {...props} />

                    <SectionEditButton context={props.context} />
                </div>
            </SectionFooter>
        </div>
    );
});

if (IS_DEV) {
    ImageSection.displayName = "ImageSection";
}

export default ImageSection;
