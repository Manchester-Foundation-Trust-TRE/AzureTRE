import { Configuration, PublicClientApplication } from "@azure/msal-browser";

// Lazy initialization of MSAL to ensure it only runs on client
let pca: PublicClientApplication | null = null;

export const getPca = () => {
  if (typeof window === 'undefined') {
    // Return a mock object during SSR
    return null as any;
  }

  if (!pca) {
    // Dynamically import config only on client
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

// Export for backwards compatibility
export { pca };
