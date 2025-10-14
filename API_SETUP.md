# API Configuration Setup

## Development Environment Setup

To use the API in development, follow these steps:

### 1. Update Environment Configuration

Edit `src/config/environment.js` and update the development configuration:

```javascript
development: {
  apiBaseUrl: '/api',
  apiToken: 'your_actual_development_token_here', // Replace with your actual token
  targetUrl: 'http://localhost:4040'
}
```

### 2. Start Your Local API Server

Make sure your local API server is running on `http://localhost:4040`

### 3. Start the Development Server

```bash
npm run dev
```

## How It Works

- **Development**: Uses Vite proxy (`/api/*` → `http://localhost:4040/*`)
- **Production**: Uses direct API calls to `https://testapi.prepseed.com`

## Environment Variables (Optional)

You can also create `.env.development` and `.env.production` files:

```bash
# .env.development
VITE_API_BASE_URL=/api
VITE_API_TOKEN=your_development_token

# .env.production  
VITE_API_BASE_URL=https://testapi.prepseed.com
VITE_API_TOKEN=your_production_token
```

## Troubleshooting

1. **CORS Issues**: The proxy configuration handles CORS in development
2. **Token Issues**: Make sure to update the token in `src/config/environment.js`
3. **API Not Found**: Ensure your local API server is running on port 4040
