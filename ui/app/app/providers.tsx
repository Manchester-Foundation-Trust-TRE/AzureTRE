'use client';

import { ReactNode, useEffect, useState } from 'react';
import { MsalProvider } from '@azure/msal-react';
import { Provider } from 'react-redux';
import { getPca } from '@/authConfig';
import { store } from '@/store/store';
import { RouterProvider } from './router-provider';
import { mergeStyles } from '@fluentui/react';
import { initializeFileTypeIcons } from '@fluentui/react-file-type-icons';
import reportWebVitals from '@/reportWebVitals';

export function Providers({ children }: { children: ReactNode }) {
  const [pca, setPca] = useState<any>(null);

  useEffect(() => {
    // Initialize MSAL on client side only
    setPca(getPca());

    // Inject global styles
    mergeStyles({
      ':global(body,html)': {
        margin: 0,
        padding: 0,
        height: '100vh',
      },
    });

    // Initialize file type icons
    initializeFileTypeIcons();

    // Report web vitals
    reportWebVitals();
  }, []);

  if (!pca) {
    return <div>Loading...</div>;
  }

  return (
    <MsalProvider instance={pca}>
      <RouterProvider>
        <Provider store={store}>
          {children}
        </Provider>
      </RouterProvider>
    </MsalProvider>
  );
}
