(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/main/webapp/app/entities/dipendente/dipendente.module.ts":
/*!**********************************************************************!*\
  !*** ./src/main/webapp/app/entities/dipendente/dipendente.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nconst core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nconst router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nconst shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nconst _1 = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/dipendente/index.ts\");\r\nconst ENTITY_STATES = [..._1.dipendenteRoute, ..._1.dipendentePopupRoute];\r\nlet TestDipendenteModule = class TestDipendenteModule {\r\n};\r\nTestDipendenteModule = tslib_1.__decorate([\r\n    core_1.NgModule({\r\n        imports: [shared_1.TestSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],\r\n        declarations: [\r\n            _1.DipendenteComponent,\r\n            _1.DipendenteDetailComponent,\r\n            _1.DipendenteUpdateComponent,\r\n            _1.DipendenteDeleteDialogComponent,\r\n            _1.DipendenteDeletePopupComponent\r\n        ],\r\n        entryComponents: [_1.DipendenteComponent, _1.DipendenteUpdateComponent, _1.DipendenteDeleteDialogComponent, _1.DipendenteDeletePopupComponent],\r\n        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n    })\r\n], TestDipendenteModule);\r\nexports.TestDipendenteModule = TestDipendenteModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RpcGVuZGVudGUvZGlwZW5kZW50ZS5tb2R1bGUudHM/YTc2ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzR0FBaUU7QUFDakUsOEdBQStDO0FBRS9DLGdHQUE4QztBQUM5QywrRkFRWTtBQUVaLE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBRyxrQkFBZSxFQUFFLEdBQUcsdUJBQW9CLENBQUMsQ0FBQztBQWNwRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtDQUFHO0FBQXZCLG9CQUFvQjtJQVpoQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyx5QkFBZ0IsRUFBRSxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRSxZQUFZLEVBQUU7WUFDWixzQkFBbUI7WUFDbkIsNEJBQXlCO1lBQ3pCLDRCQUF5QjtZQUN6QixrQ0FBK0I7WUFDL0IsaUNBQThCO1NBQy9CO1FBQ0QsZUFBZSxFQUFFLENBQUMsc0JBQW1CLEVBQUUsNEJBQXlCLEVBQUUsa0NBQStCLEVBQUUsaUNBQThCLENBQUM7UUFDbEksT0FBTyxFQUFFLENBQUMsNkJBQXNCLENBQUM7S0FDbEMsQ0FBQztHQUNXLG9CQUFvQixDQUFHO0FBQXZCLG9EQUFvQiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGlwZW5kZW50ZS9kaXBlbmRlbnRlLm1vZHVsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUZXN0U2hhcmVkTW9kdWxlIH0gZnJvbSAnYXBwL3NoYXJlZCc7XHJcbmltcG9ydCB7XHJcbiAgRGlwZW5kZW50ZUNvbXBvbmVudCxcclxuICBEaXBlbmRlbnRlRGV0YWlsQ29tcG9uZW50LFxyXG4gIERpcGVuZGVudGVVcGRhdGVDb21wb25lbnQsXHJcbiAgRGlwZW5kZW50ZURlbGV0ZVBvcHVwQ29tcG9uZW50LFxyXG4gIERpcGVuZGVudGVEZWxldGVEaWFsb2dDb21wb25lbnQsXHJcbiAgZGlwZW5kZW50ZVJvdXRlLFxyXG4gIGRpcGVuZGVudGVQb3B1cFJvdXRlXHJcbn0gZnJvbSAnLi8nO1xyXG5cclxuY29uc3QgRU5USVRZX1NUQVRFUyA9IFsuLi5kaXBlbmRlbnRlUm91dGUsIC4uLmRpcGVuZGVudGVQb3B1cFJvdXRlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1Rlc3RTaGFyZWRNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JDaGlsZChFTlRJVFlfU1RBVEVTKV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEaXBlbmRlbnRlQ29tcG9uZW50LFxyXG4gICAgRGlwZW5kZW50ZURldGFpbENvbXBvbmVudCxcclxuICAgIERpcGVuZGVudGVVcGRhdGVDb21wb25lbnQsXHJcbiAgICBEaXBlbmRlbnRlRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgRGlwZW5kZW50ZURlbGV0ZVBvcHVwQ29tcG9uZW50XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtEaXBlbmRlbnRlQ29tcG9uZW50LCBEaXBlbmRlbnRlVXBkYXRlQ29tcG9uZW50LCBEaXBlbmRlbnRlRGVsZXRlRGlhbG9nQ29tcG9uZW50LCBEaXBlbmRlbnRlRGVsZXRlUG9wdXBDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdERpcGVuZGVudGVNb2R1bGUge31cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/dipendente/dipendente.module.ts\n");

/***/ })

}]);