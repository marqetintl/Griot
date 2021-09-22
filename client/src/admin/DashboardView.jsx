import { useContext } from 'react';

import { AdminView } from '@miq/adminjs';
import { DocumentsLatest } from '@miq/dmsjs';
import { SharedDataCtx } from '@miq/contexts';

export default function DashboardView(props) {
  const { user } = useContext(SharedDataCtx);

  return (
    <AdminView title="Dashboard" actions={<></>} className="">
      <div className="">
        <div className="mb-3 pb-2 border-bottom">Welcome back, {user.first_name}</div>

        <DocumentsLatest {...props} title="Recent Documents" />
      </div>
    </AdminView>
  );
}
