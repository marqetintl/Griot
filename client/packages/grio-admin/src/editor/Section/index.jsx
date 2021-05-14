import React from "react";

export default function Section({ data = {}, ...props }) {
    const { slug } = data;
    if (!slug) return null;

    return <div className="section">l</div>;
}
