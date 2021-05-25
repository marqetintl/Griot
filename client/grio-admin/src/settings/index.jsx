import { Link } from "react-router-dom";
import { ViewLayout } from "../ui";

import "./style.scss";

export default function SettingsLayout(props) {
    return (
        <ViewLayout
            id="SettingsLayout"
            title="Settings"
            // actions={}
        >
            <div className="settings">
                <section className="settings-section">
                    <div className="title">Website</div>
                    <div className="content">
                        <Link>
                            <span className="btn-icon"></span>
                            <div>
                                <h4>General</h4>
                                <p>Site settings and branding</p>
                            </div>
                        </Link>

                        <Link>
                            <span className="btn-icon"></span>
                            <div>
                                <h4>Index</h4>
                                <p>Homepage settings</p>
                            </div>
                        </Link>

                        <Link>
                            <span className="btn-icon"></span>
                            <div>
                                <h4>Navigation</h4>
                                <p>Site navigation</p>
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        </ViewLayout>
    );
}
