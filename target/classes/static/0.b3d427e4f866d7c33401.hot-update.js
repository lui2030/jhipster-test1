webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/dipendente/dipendente.component.html":
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/entities/dipendente/dipendente.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \" <div> <h2 id=\\\"page-heading\\\"> <span>Dipendentes</span> <button id=\\\"jh-create-entity\\\" class=\\\"btn btn-primary float-right jh-create-entity create-dipendente\\\" [routerLink]=\\\"['/dipendente/new']\\\"> <fa-icon [icon]=\\\"'plus'\\\"></fa-icon> <span> Create new Dipendente </span> </button> </h2> <jhi-alert></jhi-alert> <br/> <div class=\\\"table-responsive\\\" *ngIf=\\\"dipendentes\\\"> <table class=\\\"table table-striped\\\"> <thead> <tr jhiSort [(predicate)]=\\\"predicate\\\" [(ascending)]=\\\"reverse\\\" [callback]=\\\"transition.bind(this)\\\"> <th jhiSortBy=\\\"id\\\"><span>ID</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"nome\\\"><span>Nome</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"cognome\\\"><span>Cognome</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"dataNascita\\\"><span>Data Nascita</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"indirizzo\\\"><span>Indirizzo</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"numeroTelefono\\\"><span>Numero Telefono</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"email\\\"><span>Email</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"nazionalita\\\"><span>Nazionalita</span><fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th><span>Skill</span></th> <th></th> </tr> </thead> <tbody> <tr *ngFor=\\\"let dipendente of dipendentes ;trackBy: trackId\\\"> <td><a [routerLink]=\\\"['/dipendente', dipendente.id, 'view' ]\\\">{{dipendente.id}}</a></td> <td>{{dipendente.nome}}</td> <td>{{dipendente.cognome}}</td> <td>{{dipendente.dataNascita | date:'mediumDate'}}</td> <td>{{dipendente.indirizzo}}</td> <td>{{dipendente.numeroTelefono}}</td> <td>{{dipendente.email}}</td> <td>{{dipendente.nazionalita}}</td> <td> <span *ngFor=\\\"let skill of dipendente.skills\\\"> <a [routerLink]=\\\"['/skill', dipendente?.id, 'view' ]\\\"><span>{{skill.nome}}</span></a>{{last ? '' : ', '}} <p *ngFor=\\\"let livello skill.livello\\\"> <img src=\\\"\" + __webpack_require__(/*! ./src/main/webapp/content/images/stella.png */ \"./src/main/webapp/content/images/stella.png\") + \"\\\" width=\\\"10\\\" height=\\\"10\\\"> </p> </span> </td> <td class=\\\"text-right\\\"> <div class=\\\"btn-group\\\"> <button type=\\\"submit\\\" [routerLink]=\\\"['/dipendente', dipendente.id, 'view' ]\\\" class=\\\"btn btn-info btn-sm\\\"> <fa-icon [icon]=\\\"'eye'\\\"></fa-icon> <span class=\\\"d-none d-md-inline\\\">View</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/dipendente', dipendente.id, 'edit']\\\" class=\\\"btn btn-primary btn-sm\\\"> <fa-icon [icon]=\\\"'pencil-alt'\\\"></fa-icon> <span class=\\\"d-none d-md-inline\\\">Edit</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', 'dipendente', { outlets: { popup: dipendente.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-danger btn-sm\\\"> <fa-icon [icon]=\\\"'times'\\\"></fa-icon> <span class=\\\"d-none d-md-inline\\\">Delete</span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\\\"dipendentes && dipendentes.length\\\"> <div class=\\\"row justify-content-center\\\"> <jhi-item-count [page]=\\\"page\\\" [total]=\\\"totalItems\\\" [maxSize]=\\\"5\\\" [itemsPerPage]=\\\"itemsPerPage\\\"></jhi-item-count> </div> <div class=\\\"row justify-content-center\\\"> <ngb-pagination [collectionSize]=\\\"totalItems\\\" [(page)]=\\\"page\\\" [pageSize]=\\\"itemsPerPage\\\" [maxSize]=\\\"5\\\" [rotate]=\\\"true\\\" [boundaryLinks]=\\\"true\\\" (pageChange)=\\\"loadPage(page)\\\"></ngb-pagination> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RpcGVuZGVudGUvZGlwZW5kZW50ZS5jb21wb25lbnQuaHRtbD8wOWI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHcyQ0FBdzJDLHNGQUFzRixlQUFlLGdCQUFnQixpQkFBaUIsWUFBWSxvQkFBb0IsWUFBWSw0Q0FBNEMsWUFBWSxzQkFBc0IsWUFBWSwyQkFBMkIsWUFBWSxrQkFBa0IsWUFBWSx3QkFBd0IsNEhBQTRILFlBQVksYUFBYSxrQkFBa0IseURBQXlELG1CQUFPLENBQUMsZ0dBQW1HLDRrQkFBNGtCLFdBQVcsa0NBQWtDLEVBQUUiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RpcGVuZGVudGUvZGlwZW5kZW50ZS5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdj4gPGgyIGlkPVxcXCJwYWdlLWhlYWRpbmdcXFwiPiA8c3Bhbj5EaXBlbmRlbnRlczwvc3Bhbj4gPGJ1dHRvbiBpZD1cXFwiamgtY3JlYXRlLWVudGl0eVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodCBqaC1jcmVhdGUtZW50aXR5IGNyZWF0ZS1kaXBlbmRlbnRlXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2RpcGVuZGVudGUvbmV3J11cXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidwbHVzJ1xcXCI+PC9mYS1pY29uPiA8c3Bhbj4gQ3JlYXRlIG5ldyBEaXBlbmRlbnRlIDwvc3Bhbj4gPC9idXR0b24+IDwvaDI+IDxqaGktYWxlcnQ+PC9qaGktYWxlcnQ+IDxici8+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJkaXBlbmRlbnRlc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyIGpoaVNvcnQgWyhwcmVkaWNhdGUpXT1cXFwicHJlZGljYXRlXFxcIiBbKGFzY2VuZGluZyldPVxcXCJyZXZlcnNlXFxcIiBbY2FsbGJhY2tdPVxcXCJ0cmFuc2l0aW9uLmJpbmQodGhpcylcXFwiPiA8dGggamhpU29ydEJ5PVxcXCJpZFxcXCI+PHNwYW4+SUQ8L3NwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3NvcnQnXFxcIj48L2ZhLWljb24+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibm9tZVxcXCI+PHNwYW4+Tm9tZTwvc3Bhbj4gPGZhLWljb24gW2ljb25dPVxcXCInc29ydCdcXFwiPjwvZmEtaWNvbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJjb2dub21lXFxcIj48c3Bhbj5Db2dub21lPC9zcGFuPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidzb3J0J1xcXCI+PC9mYS1pY29uPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImRhdGFOYXNjaXRhXFxcIj48c3Bhbj5EYXRhIE5hc2NpdGE8L3NwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3NvcnQnXFxcIj48L2ZhLWljb24+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiaW5kaXJpenpvXFxcIj48c3Bhbj5JbmRpcml6em88L3NwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3NvcnQnXFxcIj48L2ZhLWljb24+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibnVtZXJvVGVsZWZvbm9cXFwiPjxzcGFuPk51bWVybyBUZWxlZm9ubzwvc3Bhbj4gPGZhLWljb24gW2ljb25dPVxcXCInc29ydCdcXFwiPjwvZmEtaWNvbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJlbWFpbFxcXCI+PHNwYW4+RW1haWw8L3NwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3NvcnQnXFxcIj48L2ZhLWljb24+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibmF6aW9uYWxpdGFcXFwiPjxzcGFuPk5hemlvbmFsaXRhPC9zcGFuPjxmYS1pY29uIFtpY29uXT1cXFwiJ3NvcnQnXFxcIj48L2ZhLWljb24+PC90aD4gPHRoPjxzcGFuPlNraWxsPC9zcGFuPjwvdGg+IDx0aD48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBkaXBlbmRlbnRlIG9mIGRpcGVuZGVudGVzIDt0cmFja0J5OiB0cmFja0lkXFxcIj4gPHRkPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvZGlwZW5kZW50ZScsIGRpcGVuZGVudGUuaWQsICd2aWV3JyBdXFxcIj57e2RpcGVuZGVudGUuaWR9fTwvYT48L3RkPiA8dGQ+e3tkaXBlbmRlbnRlLm5vbWV9fTwvdGQ+IDx0ZD57e2RpcGVuZGVudGUuY29nbm9tZX19PC90ZD4gPHRkPnt7ZGlwZW5kZW50ZS5kYXRhTmFzY2l0YSB8IGRhdGU6J21lZGl1bURhdGUnfX08L3RkPiA8dGQ+e3tkaXBlbmRlbnRlLmluZGlyaXp6b319PC90ZD4gPHRkPnt7ZGlwZW5kZW50ZS5udW1lcm9UZWxlZm9ub319PC90ZD4gPHRkPnt7ZGlwZW5kZW50ZS5lbWFpbH19PC90ZD4gPHRkPnt7ZGlwZW5kZW50ZS5uYXppb25hbGl0YX19PC90ZD4gPHRkPiA8c3BhbiAqbmdGb3I9XFxcImxldCBza2lsbCBvZiBkaXBlbmRlbnRlLnNraWxsc1xcXCI+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvc2tpbGwnLCBkaXBlbmRlbnRlPy5pZCwgJ3ZpZXcnIF1cXFwiPjxzcGFuPnt7c2tpbGwubm9tZX19PC9zcGFuPjwvYT57e2xhc3QgPyAnJyA6ICcsICd9fSA8cCAqbmdGb3I9XFxcImxldCBsaXZlbGxvIHNraWxsLmxpdmVsbG9cXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcbHVpZ2lcXFxcRGVza3RvcFxcXFx0ZXN0MTlcXFxcamhpcHN0ZXItdGVzdDFcXFxcc3JjXFxcXG1haW5cXFxcd2ViYXBwXFxcXGNvbnRlbnRcXFxcaW1hZ2VzXFxcXHN0ZWxsYS5wbmdcIikgKyBcIlxcXCIgd2lkdGg9XFxcIjEwXFxcIiBoZWlnaHQ9XFxcIjEwXFxcIj4gPC9wPiA8L3NwYW4+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnL2RpcGVuZGVudGUnLCBkaXBlbmRlbnRlLmlkLCAndmlldycgXVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tc21cXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidleWUnXFxcIj48L2ZhLWljb24+IDxzcGFuIGNsYXNzPVxcXCJkLW5vbmUgZC1tZC1pbmxpbmVcXFwiPlZpZXc8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9kaXBlbmRlbnRlJywgZGlwZW5kZW50ZS5pZCwgJ2VkaXQnXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidwZW5jaWwtYWx0J1xcXCI+PC9mYS1pY29uPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIj5FZGl0PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgJ2RpcGVuZGVudGUnLCB7IG91dGxldHM6IHsgcG9wdXA6IGRpcGVuZGVudGUuaWQgKyAnL2RlbGV0ZSd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBxdWVyeVBhcmFtc0hhbmRsaW5nPVxcXCJtZXJnZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3RpbWVzJ1xcXCI+PC9mYS1pY29uPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcImRpcGVuZGVudGVzICYmIGRpcGVuZGVudGVzLmxlbmd0aFxcXCI+IDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj4gPGpoaS1pdGVtLWNvdW50IFtwYWdlXT1cXFwicGFnZVxcXCIgW3RvdGFsXT1cXFwidG90YWxJdGVtc1xcXCIgW21heFNpemVdPVxcXCI1XFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cXFwidG90YWxJdGVtc1xcXCIgWyhwYWdlKV09XFxcInBhZ2VcXFwiIFtwYWdlU2l6ZV09XFxcIml0ZW1zUGVyUGFnZVxcXCIgW21heFNpemVdPVxcXCI1XFxcIiBbcm90YXRlXT1cXFwidHJ1ZVxcXCIgW2JvdW5kYXJ5TGlua3NdPVxcXCJ0cnVlXFxcIiAocGFnZUNoYW5nZSk9XFxcImxvYWRQYWdlKHBhZ2UpXFxcIj48L25nYi1wYWdpbmF0aW9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/dipendente/dipendente.component.html\n");

/***/ })

})