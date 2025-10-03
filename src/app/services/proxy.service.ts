import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InputConfig } from 'origin-form';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  public refreshToken: string = '';
  public configUUID: string = '';
  public token: string = '';
  
  public configComponent: InputConfig = {
    Token: 'your-access-token',
    RefreshToken: 'your-refresh-token',
    BaseUrlGateway: 'http://10.9.1.1:5581',
    BaseUrlAuthenticator: 'http://10.9.1.1:5577/v1',
    BaseUrlInfrastructure: 'http://10.9.1.1:5581/infrastructure',
    BaseUrlPublicInfrastructure: 'http://10.9.1.1:5581/public/infrastructure',
    BaseUrlDocuments: 'http://10.9.1.1:5581/documents',
    BaseUrlBusiness: 'http://10.9.1.1:5581/web',
    ClientId: 'backoffice',
  };
  constructor(
    private route: ActivatedRoute,
    private appConfig: ConfigService
  ) { }

  public async intiProxy() {
    await this.appConfig.setConfig();
    let config = this.appConfig.readConfig();
    this.configComponent.BaseUrlGateway = config.baseUrlGateway;
    this.configComponent.BaseUrlAuthenticator = config.baseUrlAuthenticator;
    this.configComponent.BaseUrlInfrastructure = config.baseUrlInfrastructure;
    this.configComponent.BaseUrlPublicInfrastructure =
      config.baseUrlPublicInfrastructure;
    this.configComponent.BaseUrlDocuments = config.baseUrlDocuments;
    this.configComponent.BaseUrlBusiness = config.baseUrlBusiness;
    this.configComponent.ClientId = config.clientId;
    this.configUUID = config.configUUID;
    this.token = config.token;
    this.refreshToken = config.refreshToken;
  }
}
