import { Configuration, PublicClientApplication } from "@azure/msal-browser";

// Lazy initialization of MSAL to ensure it only runs on client
let pca: PublicClientApplication | null = null;

export const getPca = (): PublicClientApplication | null => {
  if (typeof window === 'undefined') {
    // Return null during SSR
    return null;
  }

  if (!pca) {
    // Dynamically import config only on client
    // Using require here since this code only runs in browser
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config = require("./config.json");
    
    const configuration: Configuration = {
      auth: {
        clientId: config.rootClientId,
        authority: `${config.activeDirectoryUri}/${config.rootTenantId}`,
        redirectUri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}`,
        postLogoutRedirectUri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/logout`,
      },
    };

    pca = new PublicClientApplication(configuration);
  }

  return pca;
};
