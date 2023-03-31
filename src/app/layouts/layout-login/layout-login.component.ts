import { Component } from '@angular/core';
import { LazyLoadScriptService } from '@app/shared/services/lazy-load-script.service'

@Component({
  selector: 'app-layout-login',
  templateUrl: './layout-login.component.html',
  styleUrls: ['./layout-login.component.scss']
})
export class LayoutLoginComponent {
  constructor(
    private _lazyLoadService: LazyLoadScriptService
  ) {
    this.loadStyle();
    this.loadScript();
  }

  loadStyle() {
    this._lazyLoadService.loadStyle('assets/zem/assets/css/icons.css');
    this._lazyLoadService.loadStyle('assets/zem/assets/plugins/bootstrap/css/bootstrap.min.css');
    this._lazyLoadService.loadStyle('assets/zem/assets/css/style.css');
    this._lazyLoadService.loadStyle('assets/zem/assets/css/plugins.css');
  }

  loadScript() {
    this._lazyLoadService.loadScript('assets/zem/assets/js/custom.js');
  }
}
