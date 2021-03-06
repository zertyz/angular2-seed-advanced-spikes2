// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// libs
import { StoreModule } from '@ngrx/store';

import { t } from '../../../frameworks/test/index';
import { NameListService, nameListReducer } from '../../../frameworks/sample/index';
import { CoreModule } from '../../../frameworks/core/core.module';
import { AnalyticsModule } from '../../../frameworks/analytics/analytics.module';
import { MultilingualModule } from '../../../frameworks/i18n/multilingual.module';
import { GvHomeComponent } from './gv-home.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [CoreModule, RouterTestingModule, AnalyticsModule,
      MultilingualModule, StoreModule.provideStore({ names: nameListReducer })],
    declarations: [GvHomeComponent, TestComponent],
    providers: [
      NameListService,
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      }
    ]
  });
};

export function main() {
  t.describe('@Component: GvHomeComponent', () => {

    t.be(testModuleConfig);

    t.it('should work',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();

            let homeInstance = fixture.debugElement.children[0].componentInstance;
            let homeDOMEl = fixture.debugElement.children[0].nativeElement;

            t.e(homeInstance.nameListService).toEqual(jasmine.any(NameListService));
            t.e(homeDOMEl.querySelectorAll('li').length).toEqual(0);

          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<gv-home></gv-home>'
})
class TestComponent {

}
