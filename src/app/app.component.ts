import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProxyService } from './services/proxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'origin-client-app';
  private username ='';
  private password ='';

public constructor(private router: Router,private proxyService: ProxyService)
{
    
}

public ngOnInit(): void {
        this.router.navigate(['/form']);
}
}