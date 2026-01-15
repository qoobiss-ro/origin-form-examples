# Origin Form - Plain HTML/JavaScript Integration Example

This example demonstrates how to integrate the Origin Form component into a plain HTML page using vanilla JavaScript, without any framework dependencies.

## Overview

This demo shows the simplest way to embed the Origin Form web component in a standard HTML page. It's useful for:
- Quick prototyping
- Integration into existing non-framework websites
- Understanding the basic component API
- Testing the component in isolation

## Files

- `index.html` - Main HTML file with the Origin Form integration
- `bundle.js` - The Origin Form web component bundle (pre-built)
- `bundle.js.map` - Source map for debugging
- `3rdpartylicenses.txt` - Third-party licenses information

## Prerequisites

Before using this example, you need:

1. Valid authentication tokens (token and refresh token)
2. Access to the required API endpoints
3. A valid configuration UUID

## Setup

### 1. Web Component Bundle (Already Included)

The `bundle.js` file is already included in this directory and is loaded in the `<head>` section of `index.html`:

```html
<script src="bundle.js"></script>
```

### 2. Configure the Application

Open `index.html` and update the `CONFIG` object with your environment settings:

```javascript
const CONFIG = {
  // API URLs - Update these to match your environment
  baseUrlGateway: 'http://your-gateway-url:port',
  baseUrlAuthenticator: 'http://your-authenticator-url:port/v1',
  baseUrlPublicInfrastructure: 'http://your-infrastructure-url:port/public/infrastructure',
  baseUrlInfrastructure: 'http://your-infrastructure-url:port/infrastructure',
  baseUrlDocuments: 'http://your-documents-url:port/documents',
  baseUrlBusiness: 'http://your-business-url:port/web',
  baseUrlSmartBank: 'http://your-smartbank-url:port',

  // Authentication - Replace with your actual tokens
  clientId: 'your-client-id',
  token: 'your-access-token',
  refreshToken: 'your-refresh-token',

  // Configuration UUID - The ID of the form configuration to load
  configUuid: 'your-config-uuid',

  // Component settings
  isDemoMode: false,          // Set to true for demo mode
  isDebug: false,             // Set to true to enable debug logging
  env: 'Config',              // Environment: 'Config', 'Dev', 'Prod', etc.
  showDisplayMode: false,     // Show/hide display mode toggle
  showLanguageSelector: true, // Show/hide language selector
  currentLanguageIso: 'ro'    // Default language: 'ro', 'en', etc.
};
```

### 3. Run the Application

Serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server package)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000/index.html`

**Note:** Opening `index.html` directly in the browser (file:// protocol) may not work due to CORS restrictions. Use a local web server.

## URL Parameters

You can override configuration values using URL query parameters:

- `configUuid` - Override the configuration UUID
- `refreshToken` - Override the refresh token
- `language` - Override the default language (e.g., 'ro', 'en')
- `env` - Override the environment
- `debug` - Enable debug mode (true/false)
- `demo` - Enable demo mode (true/false)

**Example:**
```
http://localhost:8000/index.html?configUuid=abc-123&language=en&debug=true
```

## Component API

### Attributes

The following attributes can be set on the `<app-origin-form>` element:

- `isDemoMode` - Boolean string ('true'/'false') - Enables demo mode
- `isDebug` - Boolean string ('true'/'false') - Enables debug logging
- `env` - String - Environment identifier
- `showDisplayMode` - Boolean string - Show display mode toggle
- `showLanguageSelector` - Boolean string - Show language selector
- `currentLanguageIso` - String - Current language ISO code
- `configUuid` - String - Configuration UUID to load

### Properties

The following properties should be set directly on the element object:

- `configComponent` - Object containing:
  - `Token` - Access token for authentication
  - `RefreshToken` - Refresh token for authentication
  - `BaseUrlGateway` - Gateway API URL
  - `BaseUrlAuthenticator` - Authentication service URL
  - `BaseUrlInfrastructure` - Infrastructure service URL
  - `BaseUrlPublicInfrastructure` - Public Infrastructure service URL
  - `BaseUrlDocuments` - Documents service URL
  - `BaseUrlBusiness` - Business service URL
  - `BaseUrlSmartBank` - SmartBank service URL
  - `ClientId` - OAuth client ID

### Events (Optional)

You can listen for custom events from the component:

```javascript
document.addEventListener('formSubmitted', (event) => {
  console.log('Form submitted:', event.detail);
});

document.addEventListener('formError', (event) => {
  console.error('Form error:', event.detail);
});

document.addEventListener('formValidationError', (event) => {
  console.warn('Form validation error:', event.detail);
});
```

## Troubleshooting

### Component not rendering

1. Check that `bundle.js` is in the same directory as `index.html`
2. Verify that the component name is correct (`<app-origin-form>`)
3. Check browser console for errors
4. Ensure all required attributes and properties are set
5. Make sure you're using a web server (not file:// protocol)

### Authentication errors

1. Verify that your tokens are valid and not expired
2. Check that API URLs are correct and accessible
3. Ensure the `configUuid` exists in your system
4. Verify CORS settings on your API endpoints

### Configuration not loading

1. Check that the `configUuid` is correct
2. Verify API connectivity
3. Check browser network tab for failed requests

## Comparison with Other Integration Methods

- **Angular Integration**: See the `angular` folder for a full Angular application example

## Support

For issues, questions, or contributions, please contact the Origin Form development team.
