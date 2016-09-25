import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'angular2-seed-advanced-spikes2';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: 'bootstrap/dist/css/bootstrap.css'/*bootstrap.min.css ? maybe not because they will get minified when build for production*/, inject: true},
      {src: 'chart.js/dist/Chart.bundle.js', inject: 'libs'},   // bundle includes moment.js -- if used elsewhere, moment.js should be included separately
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });

    // ng-bootstrap references for web dev and production builds -- don't forget to include references in tools/tasks/project/desktop.libs.ts as well
    this.SYSTEM_BUILDER_CONFIG.packages['@ng-bootstrap/ng-bootstrap'] = {main: 'ng-bootstrap.js', defaultExtension : 'js'};
    this.SYSTEM_BUILDER_CONFIG.paths   ['@ng-bootstrap/ng-bootstrap'] = `${this.APP_BASE}node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js`;
    this.SYSTEM_CONFIG_DEV    .paths   ['@ng-bootstrap/ng-bootstrap'] = `${this.APP_BASE}node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap`;
    this.SYSTEM_CONFIG        .paths   ['@ng-bootstrap/ng-bootstrap'] = `${this.APP_BASE}node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js`;

    // ng2-charts + chart.js (according to http://www.chartjs.org/docs/#getting-started)
    this.SYSTEM_BUILDER_CONFIG.packages['ng2-charts'] = {main: 'ng2-charts.js', defaultExtension : 'js'};
    this.SYSTEM_BUILDER_CONFIG.paths   ['ng2-charts'] = `${this.APP_BASE}node_modules/ng2-charts/`;
    this.SYSTEM_CONFIG_DEV    .paths   ['ng2-charts'] = `${this.APP_BASE}node_modules/ng2-charts/`;
    this.SYSTEM_CONFIG        .paths   ['ng2-charts'] = `${this.APP_BASE}node_modules/ng2-charts/`;

  }

}
