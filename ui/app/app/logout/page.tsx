'use client';

import { MessageBar, MessageBarType } from '@fluentui/react';

export default function LogoutPage() {
  return (
    <div className="tre-logout-message">
      <MessageBar
        messageBarType={MessageBarType.success}
        isMultiline={true}
      >
        <h2>You are logged out.</h2>
        <p>
          You are now logged out of the Azure TRE portal. Please ensure that you
          also log out and close all browser windows for other TRE services,
          such as virtual machines, that you might have open.
        </p>
      </MessageBar>
    </div>
  );
}
