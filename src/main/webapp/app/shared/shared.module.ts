import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestSharedLibsModule, TestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TestSharedLibsModule, TestSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestSharedModule {
  static forRoot() {
    return {
      ngModule: TestSharedModule
    };
  }
}
