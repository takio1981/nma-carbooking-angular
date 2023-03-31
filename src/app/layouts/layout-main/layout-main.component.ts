import { Component } from '@angular/core';
import { LazyLoadScriptService } from '@app/shared/services/lazy-load-script.service'

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent {
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
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/perfect-scrollbar/p-scroll.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/side-menu/sidemenu.js');
    this._lazyLoadService.loadScript('assets/zem/assets/js/sticky.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/sidebar/sidebar.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/sidebar/sidebar-custom.js');
    this._lazyLoadService.loadScript('assets/zem/assets/js/custom-switcher.js');
    this._lazyLoadService.loadScript('assets/zem/assets/js/custom.js');

    // <!-- Internal Data tables -->
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/js/jquery.dataTables.min.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/js/dataTables.bootstrap5.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/js/dataTables.buttons.min.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/js/buttons.bootstrap5.min.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/js/jszip.min.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/pdfmake/pdfmake.min.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/pdfmake/vfs_fonts.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/js/buttons.html5.min.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/js/buttons.print.min.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/js/buttons.colVis.min.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/dataTables.responsive.min.js');
    this._lazyLoadService.loadScript('assets/zem/assets/plugins/datatable/responsive.bootstrap5.min.js');
    this._lazyLoadService.loadScript('assets/zem/assets/js/table-data.js');

    // <!---Internal  Multislider js-->
		this._lazyLoadService.loadScript('assets/plugins/multislider/multislider.js');
		this._lazyLoadService.loadScript('assets/js/carousel.js');

  }
}
