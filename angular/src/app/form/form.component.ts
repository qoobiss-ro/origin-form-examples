import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputConfig } from '@qbs-origin/origin-form';
import { ProxyService } from '../services/proxy.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  applicationUuid: string | undefined;
  env: string = 'Config';
  isLoading = true;
  isDemoMode = false;
  isDebug = false;
  subscription = new Subscription();
  showDisplayMode = false;
  showLanguageSelector = true;
  configUuid: string = '';

  configComponent: InputConfig | undefined;
  businessBaseUrl: string | undefined;
  currentLanguageIso: string = 'ro';

  constructor(public proxyService: ProxyService,
    private route: ActivatedRoute
    ) {
    this.route.queryParams.subscribe(async (params) => {
      this.applicationUuid = params['uuid'];
      this.env = params['env'] || 'Config';
      this.currentLanguageIso = params['language'] || 'ro';
      const refreshToken = this.proxyService.refreshToken;
      this.configComponent = proxyService.configComponent;
      this.configComponent.RefreshToken = refreshToken;
      this.configUuid = proxyService.configUUID;
    });
  }
}
