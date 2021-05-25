import { getClassName, isRequired } from "@miq/utils";

export const ViewLayout = ({ children, ...props }) => {
    const { title = isRequired("title"), actions, ...rest } = props;

    return (
        <div {...rest} className={getClassName(["view", props.className])}>
            <header className="view-header">
                <div className="view-header-inner">
                    <h2 className="view-title">{title}</h2>

                    {actions && <section className="view-actions"></section>}
                </div>
            </header>

            {children}
        </div>
    );
};
