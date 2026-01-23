# Origin Form - Plain HTML/JavaScript Integration Example

This example demonstrates how to integrate the Origin Form component into a plain HTML page using vanilla JavaScript, without any framework dependencies.

## Overview

This demo shows the simplest way to embed the Origin Form web component in a standard HTML page. It's useful for:
- Quick prototyping
- Integration into existing non-framework websites
- Understanding the basic component API
- Testing the component in isolation

## Files

- `login.html` - Login page with configurable form fields
- `index.html` - Main HTML file with the Origin Form component
- `config.json` - Default configuration file (edit with your settings)
- `bundle.js` - The Origin Form web component bundle (pre-built)
- `bundle.js.map` - Source map for debugging
- `3rdpartylicenses.txt` - Third-party licenses information

## Prerequisites

Before using this example, you need:

1. Valid credentials (username, password, clientId, clientSecret)
2. Access to the required API endpoints
3. A valid configuration UUID

## Setup

### 1. Web Component Bundle

The `bundle.js` file is the pre-built Origin Form web component. It is loaded in the `<head>` section of `index.html`:

```html
<script src="bundle.js"></script>
```

### 3. Configure Default Settings

Edit `config.json` with your environment settings:

```json
{
  "baseUrlGateway": "https://your-api-gateway.com",
  "baseUrlAuthenticator": "https://your-api-gateway.com/authenticator",
  "baseUrlPublicInfrastructure": "https://your-api-gateway.com/public/infrastructure",
  "baseUrlInfrastructure": "https://your-api-gateway.com/infrastructure",
  "baseUrlDocuments": "https://your-api-gateway.com/documents",
  "baseUrlBusiness": "https://your-api-gateway.com/web",
  "baseUrlSmartBank": "https://your-api-gateway.com/smartaccounts",
  "clientId": "your-client-id",
  "clientSecret": "your-client-secret",
  "username": "your-username",
  "password": "your-password",
  "configUuid": "your-config-uuid",
  "isDemoMode": false,
  "isDebug": true,
  "env": "Config",
  "showDisplayMode": true,
  "showLanguageSelector": true,
  "currentLanguageIso": "ro",
  "scope": "apiName offline_access",
  "grantType": "password"
}
```

### 4. Run the Application

Serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server package)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000/login.html`

**Note:** Opening files directly in the browser (file:// protocol) may not work due to CORS restrictions. Use a local web server.

## How It Works

### Login Flow

1. Open `login.html` in your browser
2. The form is pre-populated with values from `config.json`
3. Fill in any missing credentials (username, password, clientSecret)
4. Click "Login & Open Form"
5. The login page makes a POST request to `/connect/token` with OAuth2 password grant
6. On success, you are redirected to `index.html` with tokens in the URL

### Authentication

The login page performs OAuth2 password grant authentication:

```
POST {baseUrlGateway}/connect/token
Content-Type: application/x-www-form-urlencoded

client_id=...&client_secret=...&grant_type=password&username=...&password=...&scope=apiName offline_access
```

### Security Note

- Tokens are passed via URL parameters and stored in sessionStorage
- `config.json` should NOT contain real credentials in production
- Use environment-specific config files or remove sensitive data before committing

## Login Page Features

The login page (`login.html`) provides:

- **Authentication Section**: Username, Password, Client ID, Client Secret, Grant Type, Scope
- **API Configuration** (collapsible): All API endpoint URLs
- **Form Configuration** (collapsible): Config UUID, environment, language, and display options
- **Reset to Defaults**: Reload values from `config.json`

## URL Parameters (index.html)

The form page accepts these URL parameters (automatically set by login page):

- `token` - Access token from OAuth response
- `refreshToken` - Refresh token from OAuth response
- `configUuid` - Configuration UUID
- `language` - Language ISO code ('ro', 'en')
- `env` - Environment ('Config', 'Dev', 'Prod')
- `debug` - Enable debug mode (true/false)
- `demo` - Enable demo mode (true/false)
- `showDisplayMode` - Show display mode toggle (true/false)
- `showLanguageSelector` - Show language selector (true/false)

## Component API

### Element Name

The web component is registered as `<origin-form-element>`.

### Attributes

- `isDemoMode` - Boolean string ('true'/'false') - Enables demo mode
- `isDebug` - Boolean string ('true'/'false') - Enables debug logging
- `env` - String - Environment identifier
- `showDisplayMode` - Boolean string - Show display mode toggle
- `showLanguageSelector` - Boolean string - Show language selector
- `currentLanguageIso` - String - Current language ISO code

### Properties

Set these directly on the element object:

- `configUuid` - String - Configuration UUID to load
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

### Events

Listen for custom events from the component:

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

### Login fails with 400 Bad Request

1. Verify clientId and clientSecret are correct
2. Check that username and password are valid
3. Ensure the baseUrlGateway is correct
4. Check browser console/network tab for detailed error

### Component not rendering

1. Check that `bundle.js` is in the same directory
2. Verify the element name is `<origin-form-element>` (not `<app-origin-form>`)
3. Check browser console for errors
4. Ensure you're using a web server (not file:// protocol)

### Redirect loop to login page

1. Verify that the login was successful (check network tab)
2. Ensure the token and refreshToken are in the URL
3. Check that sessionStorage is not blocked

### Authentication errors after login

1. Verify that your tokens are valid and not expired
2. Check that API URLs are correct and accessible
3. Ensure the `configUuid` exists in your system

## Support

For issues, questions, or contributions, please contact the Origin Form development team.
