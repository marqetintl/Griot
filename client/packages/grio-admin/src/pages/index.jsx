import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PlusCircle } from "react-bootstrap-icons";

import { addForwardSlash } from "@miq/shared";

import "./scss/main.scss";

import { PAGE_CREATE_PATH } from "../editor";
import { getPageUpdatePath, pagesActions } from "./utils";
import { useDispatch, useSelector } from "react-redux";

export default function PagesLayout(props) {
    const dispatch = useDispatch();

    const pages = useSelector((state) => state.pages);

    useEffect(() => {
        dispatch(pagesActions.list());
    }, [dispatch]);

    return (
        <div id="PagesLayout" className="view">
            <header className="view-header">
                <div className="view-header-inner">
                    <h2 className="view-title">Pages</h2>

                    <section className="view-actions">
                        <Link to={PAGE_CREATE_PATH} className="btn btn-primary btn-icon">
                            <PlusCircle className="icon" />
                            <span className="label">Add Page</span>
                        </Link>
                    </section>
                </div>
            </header>

            <PageList {...props} items={pages.results} />
        </div>
    );
}

const PageItem = ({ data = {}, ...props }) => {
    return (
        <Link to={getPageUpdatePath(data.slug)} className="page-item">
            <h3 className="page-label">{data.label}</h3>
            <div className="page-item-meta">
                <div className="page-status"></div>
                <span className="page-updated-since">{`${data.updated_since} ago`}</span>
            </div>
        </Link>
    );
};

const PageList = (props) => {
    const { items = [] } = props;
    const url = addForwardSlash(props.match.url);

    return (
        <ul className="page-list">
            {items.map((page) => (
                <li className="page-list-item" key={page.slug}>
                    <PageItem {...{ url }} data={page} />
                </li>
            ))}
        </ul>
    );
};

PageList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
};
