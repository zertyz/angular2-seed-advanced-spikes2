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
      {src: 'ng2-bootstrap/', inject: 'libs'},
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

    this.SYSTEM_CONFIG_DEV.paths['moment'] =
      `${this.APP_BASE}node_modules/moment/moment`;
    this.SYSTEM_BUILDER_CONFIG.packages['moment'] = {
      main: 'moment.js',
      defaultExtension: 'js'
    };

    this.SYSTEM_CONFIG_DEV.paths['ng2-bootstrap'] =
      `${this.APP_BASE}node_modules/ng2-bootstrap/ng2-bootstrap`;
    this.SYSTEM_BUILDER_CONFIG.packages['ng2-bootstrap'] = {
      main: 'ng2-bootstrap.js',
      defaultExtension: 'js'
    };
  }

}
