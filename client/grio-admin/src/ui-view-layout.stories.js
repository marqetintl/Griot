import React from "react";

import { ViewLayout } from "./ui";

export default {
    title: "Views/ViewLayout",
    component: ViewLayout,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => <ViewLayout {...args} />;

export const SimpleView = Template.bind({});
SimpleView.args = {
    title: "This is a title",
};
