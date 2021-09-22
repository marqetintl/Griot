import { useContext } from 'react';

import Form, { useForm } from '@miq/form';
import { services, AdminView } from '@miq/adminjs';
import { SharedDataCtx } from '@miq/contexts';
import { AvatarUploadButton } from '@miq/components';

import './profile.scss';

const errorMessages = {
  first_name: 'Enter a valid first name',
  last_name: 'Enter a valid last name',
};

export const UserProfileUpdateView = (props) => {
  const { user, updateUser, apps } = useContext(SharedDataCtx);
  const { employee } = user;

  const formInitData = { first_name: user.first_name, last_name: user.last_name };
  if (employee) {
    formInitData.position = employee.position;
  }
  const form = useForm(formInitData);

  const saveAccount = ({ name, value }) => {
    services
      .patch(
        'account/current/',
        { [name]: value },
        { [name]: user[name] },
        { headers: { 'content-type': 'application/json' } }
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
      form.setErrors({ ...form.errors, [name]: errorMessages[name] || 'Invalid' });
      return false;
    }
    return true;
  };

  return (
    <Form context={form}>
      <AdminView title={`Account`} className="staff-profile miq-container-fluid">
        <AdminView.Section title="Profile information" text="Update your profile information.">
          <div className="d-grid grid-12 mb-2">
            <Form.Label value="First name" className="span-12 mb-1" />
            <Form.TextInput
              required
              name="first_name"
              onSave={saveAccount}
              isValid={validate}
              error={form.errors.first_name}
              placeholder="First name"
              className="span-12 span-md-6"
              minLength={2}
            />
          </div>

          <div className="d-grid grid-12 mb-2">
            <Form.Label value="Last name" className="span-12 mb-1" />
            <Form.TextInput
              required
              name="last_name"
              onSave={saveAccount}
              isValid={validate}
              error={form.errors.last_name}
              placeholder="Last name"
              className="span-12 span-md-6"
              minLength={2}
            />
          </div>

          <div className="">
            <Form.Label value="Gender" className="me-2" />
            {/* <Form.SelectInput value={form.gender}> */}
            <select
              name="gender"
              value={user.gender}
              onChange={({ target }) => saveAccount(target)}
              className="miq-select"
            >
              <option value="OTHER">Other</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            {/* </Form.SelectInput> */}
          </div>

          {Object.keys(apps).includes('miq_hrm') && (
            <section className="mb-3">
              <div className="d-grid grid-12 mb-2">
                <Form.Label value="Role" className="span-12 mb-1" />
                <Form.TextInput
                  required
                  name="position"
                  onSave={({ value }) =>
                    services
                      .patch(
                        'account/current/position/',
                        { position: value }
                        // { position: employee.position }
                      )
                      .catch((err) => {
                        form.handleError(err);
                      })
                  }
                  isValid={validate}
                  error={form.errors.position}
                  placeholder="Role"
                  className="span-12 span-md-9"
                  minLength={2}
                />
              </div>
            </section>
          )}
        </AdminView.Section>

        <AdminView.Section title="Avatar" text="Update your profile picture. Images must be .png, .jpg or .gif format.">
          <div className="">
            <AvatarUploadButton />
          </div>
        </AdminView.Section>

        <AdminView.Section title="Email" text="Please contact support to change your email.">
          <p className="text-muted text-sm">{user.email}</p>
        </AdminView.Section>

        <AdminView.Section
          title="Password"
          text="Please contact support to change your password. Password must be at least 6 characters long."
        />
      </AdminView>
    </Form>
  );
};
