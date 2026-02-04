# Origin Form - Angular Example

This is an example Angular application demonstrating how to integrate the `@qbs-origin/origin-form` component.

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

Navigate to `http://localhost:4200/`

## Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Dependencies

This example uses the following public npm packages:

- [@qbs-origin/origin-form](https://www.npmjs.com/package/@qbs-origin/origin-form) - Origin Form component
- [@qbs-origin/sign-lib](https://www.npmjs.com/package/@qbs-origin/sign-lib) - Signature library

## Integration Guide

### 1. Install the packages

```bash
npm install @qbs-origin/origin-form @qbs-origin/sign-lib
```

### 2. Import the module

In your Angular module (e.g., `app.module.ts` or a shared module):

```typescript
import { OriginFormModule } from '@qbs-origin/origin-form';

@NgModule({
  imports: [
    // ...other imports
    OriginFormModule
  ]
})
export class AppModule { }
```

### 3. Configure the component

Create a configuration object with your API endpoints and authentication:

```typescript
import { InputConfig } from '@qbs-origin/origin-form';

const config: InputConfig = {
  Token: 'your-access-token',
  RefreshToken: 'your-refresh-token',
  BaseUrlGateway: 'https://your-gateway-url',
  BaseUrlAuthenticator: 'https://your-authenticator-url/v1',
  BaseUrlInfrastructure: 'https://your-infrastructure-url/infrastructure',
  BaseUrlPublicInfrastructure: 'https://your-infrastructure-url/public/infrastructure',
  BaseUrlDocuments: 'https://your-documents-url/documents',
  BaseUrlBusiness: 'https://your-business-url/web',
  BaseUrlSmartAccounts: 'https://your-smart-accounts-url/smart-accounts',
  ClientId: 'your-client-id',
};
```

### 4. Use in your template

```html
<app-origin-form
  [configComponent]="config"
  [configUuid]="'your-config-uuid'"
  [isDemoMode]="false"
  [isDebug]="false"
  [showDisplayMode]="false"
  [showLanguageSelector]="true"
  [currentLanguageIso]="'ro'">
</app-origin-form>
```

### 5. Angular.json configuration

Add external dependencies for Node.js modules and assets path:

```json
{
  "architect": {
    "build": {
      "options": {
        "externalDependencies": ["fs", "path"],
        "assets": [
          "src/assets",
          {
            "glob": "**/*",
            "input": "./node_modules/@qbs-origin/origin-form/lib/assets",
            "output": "/assets/"
          }
        ]
      }
    }
  }
}
```

## Configuration Options

| Property | Type | Description |
|----------|------|-------------|
| `configComponent` | `InputConfig` | API configuration object |
| `configUuid` | `string` | UUID of the form configuration to load |
| `isDemoMode` | `boolean` | Enable demo mode |
| `isDebug` | `boolean` | Enable debug logging |
| `showDisplayMode` | `boolean` | Show display mode toggle |
| `showLanguageSelector` | `boolean` | Show language selector |
| `currentLanguageIso` | `string` | Default language ISO code (e.g., 'ro', 'en') |
| `initFlowValues` | `string` | JSON string with pre-filled values for form fields |
| `fillData` | `object` | Object containing data to pre-fill form fields including `initFlowValues` |

## Using initFlowValues

The `initFlowValues` feature allows you to pre-fill form fields with values when initializing the form. This is useful for:
- Pre-populating fields with data from external systems
- Passing contextual information to the form
- Setting default values dynamically

### Configuration in Origin

The structure of `initFlowValues` must be configured in the **Origin application configuration**. When setting up your form configuration in Origin, you define which fields can be pre-filled and their expected structure in the JSON schema.

### Usage in Angular

You can pass `initFlowValues` either as a JSON string or through the `fillData` object:

```typescript
// Option 1: Using initFlowValues directly as a JSON string
const initFlowValues = JSON.stringify({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Bucharest'
  }
});

// In your template:
<app-origin-form
  [configComponent]="config"
  [configUuid]="'your-config-uuid'"
  [initFlowValues]="initFlowValues">
</app-origin-form>

// Option 2: Using fillData object
const fillData = {
  initFlowValues: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  }
};

<app-origin-form
  [configComponent]="config"
  [configUuid]="'your-config-uuid'"
  [fillData]="fillData">
</app-origin-form>
```

### How Field Mapping Works

The values in `initFlowValues` are mapped to form fields using a naming convention:
- Nested objects are flattened with underscore separators
- For example, `{ address: { street: '123 Main St' } }` creates a field named `initFlowValues_address_street`

The fields available for pre-filling depend on your form configuration in Origin. Contact your Origin administrator to configure the `initFlowValues` schema for your form.

## Support

For issues or questions, please contact the Origin Form development team.
