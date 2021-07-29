import { useContext } from "react";

import Form, { useForm } from "@miq/form";
import { services, AdminView } from "@miq/adminjs";
import { SharedDataCtx } from "@miq/contexts";
import { AvatarUploadButton } from "@miq/components";

import "./profile.scss";

const errorMessages = {
    first_name: "Enter a valid first name",
    last_name: "Enter a valid last name",
};

export const UserProfileUpdateView = (props) => {
    const { user, updateUser } = useContext(SharedDataCtx);
    const form = useForm({ first_name: user.first_name, last_name: user.last_name });

    const saveAccount = ({ name, value }) => {
        services
            .patch(
                "account/current/",
                { [name]: value },
                { [name]: user[name] },
                { headers: { "content-type": "application/json" } }
            )
            .then((data) => {
                updateUser(data);
            })
            .catch((err) => {
                form.handleError(err);
            });
    };

    const validate = ({ value, name }) => {
        if (value.length < 3) {
            form.setErrors({ ...form.errors, [name]: errorMessages[name] || "Invalid" });
            return false;
        }
        return true;
    };

    return (
        <Form context={form}>
            <AdminView title={`Account`} className="staff-profile miq-container-fluid">
                <section className="mb-3">
                    <div className="mb-2">
                        <h3 className="">Profile information</h3>
                        <p className="text-muted text-sm">Update your first and last names.</p>
                    </div>
                    <div className="d-grid grid-lg-12 mb-2">
                        <Form.Label value="First name" className="span-12 mb-1" />
                        <Form.TextInput
                            required
                            name="first_name"
                            onSave={saveAccount}
                            isValid={validate}
                            error={form.errors.first_name}
                            placeholder="First name"
                            className="span-md-6"
                            minLength={2}
                        />
                    </div>

                    <div className="d-grid grid-lg-12 mb-2">
                        <Form.Label value="Last name" className="span-12 mb-1" />
                        <Form.TextInput
                            required
                            name="last_name"
                            onSave={saveAccount}
                            isValid={validate}
                            error={form.errors.last_name}
                            placeholder="Last name"
                            className="span-md-6"
                            minLength={2}
                        />
                    </div>
                </section>

                <section className="mb-3">
                    <div className="mb-2">
                        <h3>Avatar</h3>
                        <p className="text-muted text-sm mb-2">
                            Update your profile picture. Images must be .png, .jpg or .gif format.
                        </p>
                        <div className="">
                            <AvatarUploadButton />
                        </div>
                    </div>
                </section>

                <section className="mb-3">
                    <div className="mb-2">
                        <h3>Email</h3>
                        <p className="text-muted text-sm">{user.email}</p>
                    </div>
                </section>

                <section className="mb-3">
                    <div className="mb-2">
                        <h3>Password</h3>
                        <p className="text-muted text-sm">
                            Change your password. Password must be at least 6 characters long.
                        </p>
                    </div>
                </section>
            </AdminView>
        </Form>
    );
};
