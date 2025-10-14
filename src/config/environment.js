// Environment Configuration
export const config = {
  development: {
    apiBaseUrl: 'http://localhost:4040/api',
    apiToken: 'your_development_token_here', // Replace with your actual token
    targetUrl: 'http://localhost:4040'
  },
  production: {
    apiBaseUrl: 'https://testapi.prepseed.com',
    apiToken: 'your_production_token_here', // Replace with your actual token
    targetUrl: 'https://testapi.prepseed.com'
  }
};

// Get current environment
export const getCurrentConfig = () => {
  const isDev = import.meta.env.DEV;
  return isDev ? config.development : config.production;
};
