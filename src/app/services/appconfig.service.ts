import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

export interface AppConfig {
  baseUrlGateway: string;
  baseUrlAuthenticator: string;
  baseUrlInfrastructure: string;
  baseUrlPublicInfrastructure: string;
  baseUrlDocuments: string;
  baseUrlBusiness: string;
  clientId: string;
  clientSecret: string;
  clientScope: string;
  configUUID: string;
  token: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  //We create the configuration with default values in case anything fails
  private configuration: AppConfig = {
    baseUrlAuthenticator: '',
    baseUrlBusiness: '',
    baseUrlDocuments: '',
    baseUrlGateway: '',
    baseUrlInfrastructure: '',
    baseUrlPublicInfrastructure: '',
    clientId: '',
    clientScope: '',
    clientSecret: '',
    configUUID: '',
    token: '',
    refreshToken: ''
  };

  private http: HttpClient;
  constructor(private readonly httpHandler: HttpBackend) {
    this.http = new HttpClient(this.httpHandler);
  }

  //This function will get the current config for the environment
  async setConfig(): Promise<void | AppConfig> {
    return firstValueFrom(this.http.get<AppConfig>('./app-config.json'))
      .then((config: AppConfig) => (this.configuration = config))
      .catch((error) => {
        console.error(error);
      });
  }

  //We're going to use this function to read the config.
  readConfig(): AppConfig {
    return this.configuration;
  }
}
