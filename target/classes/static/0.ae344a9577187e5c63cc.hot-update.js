webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/dipendente/dipendente.component.html":
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/entities/dipendente/dipendente.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div> <h2 id=\\\"page-heading\\\"> <span>Dipendentes</span> <button id=\\\"jh-create-entity\\\" class=\\\"btn btn-primary float-right jh-create-entity create-dipendente\\\" [routerLink]=\\\"['/dipendente/new']\\\"> <fa-icon [icon]=\\\"'plus'\\\"></fa-icon> <span> Create new Dipendente </span> </button> </h2> <jhi-alert></jhi-alert> <br/> <div class=\\\"table-responsive\\\" *ngIf=\\\"dipendentes\\\"> <table class=\\\"table table-striped\\\"> <thead> <tr jhiSort [(predicate)]=\\\"predicate\\\" [(ascending)]=\\\"reverse\\\" [callback]=\\\"transition.bind(this)\\\"> <th jhiSortBy=\\\"id\\\"><span>ID</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"nome\\\"><span>Nome</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"cognome\\\"><span>Cognome</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"dataNascita\\\"><span>Data Nascita</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"indirizzo\\\"><span>Indirizzo</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"numeroTelefono\\\"><span>Numero Telefono</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"email\\\"><span>Email</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"nazionalita\\\"><span>Nazionalita</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th jhiSortBy=\\\"skill.id\\\"><span>Skill</span> <fa-icon [icon]=\\\"'sort'\\\"></fa-icon></th> <th></th> </tr> </thead> <tbody> <tr *ngFor=\\\"let dipendente of dipendentes ;trackBy: trackId\\\"> <td><a [routerLink]=\\\"['/dipendente', dipendente.id, 'view' ]\\\">{{dipendente.id}}</a></td> <td>{{dipendente.nome}}</td> <td>{{dipendente.cognome}}</td> <td>{{dipendente.dataNascita | date:'mediumDate'}}</td> <td>{{dipendente.indirizzo}}</td> <td>{{dipendente.numeroTelefono}}</td> <td>{{dipendente.email}}</td> <td>{{dipendente.nazionalita}}</td> <td *ngFor=\\\"let skill of dipendente.skills\\\"> <span>{{skill.nome}}</span> </td> <td class=\\\"text-right\\\"> <div class=\\\"btn-group\\\"> <button type=\\\"submit\\\" [routerLink]=\\\"['/dipendente', dipendente.id, 'view' ]\\\" class=\\\"btn btn-info btn-sm\\\"> <fa-icon [icon]=\\\"'eye'\\\"></fa-icon> <span class=\\\"d-none d-md-inline\\\">View</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/dipendente', dipendente.id, 'edit']\\\" class=\\\"btn btn-primary btn-sm\\\"> <fa-icon [icon]=\\\"'pencil-alt'\\\"></fa-icon> <span class=\\\"d-none d-md-inline\\\">Edit</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', 'dipendente', { outlets: { popup: dipendente.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-danger btn-sm\\\"> <fa-icon [icon]=\\\"'times'\\\"></fa-icon> <span class=\\\"d-none d-md-inline\\\">Delete</span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\\\"dipendentes && dipendentes.length\\\"> <div class=\\\"row justify-content-center\\\"> <jhi-item-count [page]=\\\"page\\\" [total]=\\\"totalItems\\\" [maxSize]=\\\"5\\\" [itemsPerPage]=\\\"itemsPerPage\\\"></jhi-item-count> </div> <div class=\\\"row justify-content-center\\\"> <ngb-pagination [collectionSize]=\\\"totalItems\\\" [(page)]=\\\"page\\\" [pageSize]=\\\"itemsPerPage\\\" [maxSize]=\\\"5\\\" [rotate]=\\\"true\\\" [boundaryLinks]=\\\"true\\\" (pageChange)=\\\"loadPage(page)\\\"></ngb-pagination> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RpcGVuZGVudGUvZGlwZW5kZW50ZS5jb21wb25lbnQuaHRtbD8wOWI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHE2Q0FBcTZDLHNGQUFzRixlQUFlLGdCQUFnQixpQkFBaUIsWUFBWSxvQkFBb0IsWUFBWSw0Q0FBNEMsWUFBWSxzQkFBc0IsWUFBWSwyQkFBMkIsWUFBWSxrQkFBa0IsWUFBWSx3QkFBd0IsNkRBQTZELFlBQVksbWlCQUFtaUIsV0FBVyxrQ0FBa0MsRUFBRSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGlwZW5kZW50ZS9kaXBlbmRlbnRlLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxoMiBpZD1cXFwicGFnZS1oZWFkaW5nXFxcIj4gPHNwYW4+RGlwZW5kZW50ZXM8L3NwYW4+IDxidXR0b24gaWQ9XFxcImpoLWNyZWF0ZS1lbnRpdHlcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgamgtY3JlYXRlLWVudGl0eSBjcmVhdGUtZGlwZW5kZW50ZVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9kaXBlbmRlbnRlL25ldyddXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCIncGx1cydcXFwiPjwvZmEtaWNvbj4gPHNwYW4+IENyZWF0ZSBuZXcgRGlwZW5kZW50ZSA8L3NwYW4+IDwvYnV0dG9uPiA8L2gyPiA8amhpLWFsZXJ0PjwvamhpLWFsZXJ0PiA8YnIvPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiZGlwZW5kZW50ZXNcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0ciBqaGlTb3J0IFsocHJlZGljYXRlKV09XFxcInByZWRpY2F0ZVxcXCIgWyhhc2NlbmRpbmcpXT1cXFwicmV2ZXJzZVxcXCIgW2NhbGxiYWNrXT1cXFwidHJhbnNpdGlvbi5iaW5kKHRoaXMpXFxcIj4gPHRoIGpoaVNvcnRCeT1cXFwiaWRcXFwiPjxzcGFuPklEPC9zcGFuPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidzb3J0J1xcXCI+PC9mYS1pY29uPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcIm5vbWVcXFwiPjxzcGFuPk5vbWU8L3NwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3NvcnQnXFxcIj48L2ZhLWljb24+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiY29nbm9tZVxcXCI+PHNwYW4+Q29nbm9tZTwvc3Bhbj4gPGZhLWljb24gW2ljb25dPVxcXCInc29ydCdcXFwiPjwvZmEtaWNvbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJkYXRhTmFzY2l0YVxcXCI+PHNwYW4+RGF0YSBOYXNjaXRhPC9zcGFuPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidzb3J0J1xcXCI+PC9mYS1pY29uPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImluZGlyaXp6b1xcXCI+PHNwYW4+SW5kaXJpenpvPC9zcGFuPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidzb3J0J1xcXCI+PC9mYS1pY29uPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcIm51bWVyb1RlbGVmb25vXFxcIj48c3Bhbj5OdW1lcm8gVGVsZWZvbm88L3NwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3NvcnQnXFxcIj48L2ZhLWljb24+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiZW1haWxcXFwiPjxzcGFuPkVtYWlsPC9zcGFuPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidzb3J0J1xcXCI+PC9mYS1pY29uPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcIm5hemlvbmFsaXRhXFxcIj48c3Bhbj5OYXppb25hbGl0YTwvc3Bhbj4gPGZhLWljb24gW2ljb25dPVxcXCInc29ydCdcXFwiPjwvZmEtaWNvbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJza2lsbC5pZFxcXCI+PHNwYW4+U2tpbGw8L3NwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3NvcnQnXFxcIj48L2ZhLWljb24+PC90aD4gPHRoPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGRpcGVuZGVudGUgb2YgZGlwZW5kZW50ZXMgO3RyYWNrQnk6IHRyYWNrSWRcXFwiPiA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9kaXBlbmRlbnRlJywgZGlwZW5kZW50ZS5pZCwgJ3ZpZXcnIF1cXFwiPnt7ZGlwZW5kZW50ZS5pZH19PC9hPjwvdGQ+IDx0ZD57e2RpcGVuZGVudGUubm9tZX19PC90ZD4gPHRkPnt7ZGlwZW5kZW50ZS5jb2dub21lfX08L3RkPiA8dGQ+e3tkaXBlbmRlbnRlLmRhdGFOYXNjaXRhIHwgZGF0ZTonbWVkaXVtRGF0ZSd9fTwvdGQ+IDx0ZD57e2RpcGVuZGVudGUuaW5kaXJpenpvfX08L3RkPiA8dGQ+e3tkaXBlbmRlbnRlLm51bWVyb1RlbGVmb25vfX08L3RkPiA8dGQ+e3tkaXBlbmRlbnRlLmVtYWlsfX08L3RkPiA8dGQ+e3tkaXBlbmRlbnRlLm5hemlvbmFsaXRhfX08L3RkPiA8dGQgKm5nRm9yPVxcXCJsZXQgc2tpbGwgb2YgZGlwZW5kZW50ZS5za2lsbHNcXFwiPiA8c3Bhbj57e3NraWxsLm5vbWV9fTwvc3Bhbj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4gPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvZGlwZW5kZW50ZScsIGRpcGVuZGVudGUuaWQsICd2aWV3JyBdXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ2V5ZSdcXFwiPjwvZmEtaWNvbj4gPHNwYW4gY2xhc3M9XFxcImQtbm9uZSBkLW1kLWlubGluZVxcXCI+Vmlldzwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnL2RpcGVuZGVudGUnLCBkaXBlbmRlbnRlLmlkLCAnZWRpdCddXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3BlbmNpbC1hbHQnXFxcIj48L2ZhLWljb24+IDxzcGFuIGNsYXNzPVxcXCJkLW5vbmUgZC1tZC1pbmxpbmVcXFwiPkVkaXQ8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCAnZGlwZW5kZW50ZScsIHsgb3V0bGV0czogeyBwb3B1cDogZGlwZW5kZW50ZS5pZCArICcvZGVsZXRlJ30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIHF1ZXJ5UGFyYW1zSGFuZGxpbmc9XFxcIm1lcmdlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCIndGltZXMnXFxcIj48L2ZhLWljb24+IDxzcGFuIGNsYXNzPVxcXCJkLW5vbmUgZC1tZC1pbmxpbmVcXFwiPkRlbGV0ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiZGlwZW5kZW50ZXMgJiYgZGlwZW5kZW50ZXMubGVuZ3RoXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbbWF4U2l6ZV09XFxcIjVcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiPjwvamhpLWl0ZW0tY291bnQ+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclxcXCI+IDxuZ2ItcGFnaW5hdGlvbiBbY29sbGVjdGlvblNpemVdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbKHBhZ2UpXT1cXFwicGFnZVxcXCIgW3BhZ2VTaXplXT1cXFwiaXRlbXNQZXJQYWdlXFxcIiBbbWF4U2l6ZV09XFxcIjVcXFwiIFtyb3RhdGVdPVxcXCJ0cnVlXFxcIiBbYm91bmRhcnlMaW5rc109XFxcInRydWVcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/dipendente/dipendente.component.html\n");

/***/ })

})