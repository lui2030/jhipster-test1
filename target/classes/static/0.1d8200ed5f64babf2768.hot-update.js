webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/skill/skill-update.component.html":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/entities/skill/skill-update.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row justify-content-center\\\"> <div class=\\\"col-8\\\"> <form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" [formGroup]=\\\"editForm\\\"> <h2 id=\\\"jhi-skill-heading\\\">Create or edit a Skill</h2> <div> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!skill.id\\\"> <label for=\\\"id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" formControlName=\\\"id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_nome\\\">Nome</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"nome\\\" id=\\\"field_nome\\\" formControlName=\\\"nome\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_livello\\\" placeholder=\\\"minimo 1 massimo 5\\\">Livello</label> <input type=\\\"number\\\" class=\\\"form-control\\\" name=\\\"livello\\\" id=\\\"field_livello\\\" formControlName=\\\"livello\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_descrizione\\\">Descrizione</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"descrizione\\\" id=\\\"field_descrizione\\\" formControlName=\\\"descrizione\\\"/> </div> <div *ngIf=\\\"editForm.get('nome').invalid && (editForm.get('nome').dirty || editForm.get('nome').touched)\\\"> <small class=\\\"form-text text-danger\\\" *ngIf=\\\"editForm.get('nome').errors.required\\\"> This field is required. </small> </div> </div> <div> <button type=\\\"button\\\" id=\\\"cancel-save\\\" class=\\\"btn btn-secondary\\\" (click)=\\\"previousState()\\\"> <fa-icon [icon]=\\\"'ban'\\\"></fa-icon>&nbsp;<span>Cancel</span> </button> <button type=\\\"submit\\\" id=\\\"save-entity\\\" [disabled]=\\\"editForm.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <fa-icon [icon]=\\\"'save'\\\"></fa-icon>&nbsp;<span>Save</span> </button> </div> </form> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NraWxsL3NraWxsLXVwZGF0ZS5jb21wb25lbnQuaHRtbD9mYzcyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1pREFBbWlELDJMQUEyTCIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2tpbGwvc2tpbGwtdXBkYXRlLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLThcXFwiPiA8Zm9ybSBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZSAobmdTdWJtaXQpPVxcXCJzYXZlKClcXFwiIFtmb3JtR3JvdXBdPVxcXCJlZGl0Rm9ybVxcXCI+IDxoMiBpZD1cXFwiamhpLXNraWxsLWhlYWRpbmdcXFwiPkNyZWF0ZSBvciBlZGl0IGEgU2tpbGw8L2gyPiA8ZGl2PiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbaGlkZGVuXT1cXFwiIXNraWxsLmlkXFxcIj4gPGxhYmVsIGZvcj1cXFwiaWRcXFwiPklEPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJpZFxcXCIgbmFtZT1cXFwiaWRcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiaWRcXFwiIHJlYWRvbmx5PVxcXCJyZWFkb25seVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX25vbWVcXFwiPk5vbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibm9tZVxcXCIgaWQ9XFxcImZpZWxkX25vbWVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwibm9tZVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX2xpdmVsbG9cXFwiIHBsYWNlaG9sZGVyPVxcXCJtaW5pbW8gMSBtYXNzaW1vIDVcXFwiPkxpdmVsbG88L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJsaXZlbGxvXFxcIiBpZD1cXFwiZmllbGRfbGl2ZWxsb1xcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJsaXZlbGxvXFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfZGVzY3JpemlvbmVcXFwiPkRlc2NyaXppb25lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImRlc2NyaXppb25lXFxcIiBpZD1cXFwiZmllbGRfZGVzY3JpemlvbmVcXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZGVzY3JpemlvbmVcXFwiLz4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcImVkaXRGb3JtLmdldCgnbm9tZScpLmludmFsaWQgJiYgKGVkaXRGb3JtLmdldCgnbm9tZScpLmRpcnR5IHx8IGVkaXRGb3JtLmdldCgnbm9tZScpLnRvdWNoZWQpXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlZGl0Rm9ybS5nZXQoJ25vbWUnKS5lcnJvcnMucmVxdWlyZWRcXFwiPiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXY+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiY2FuY2VsLXNhdmVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKGNsaWNrKT1cXFwicHJldmlvdXNTdGF0ZSgpXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCInYmFuJ1xcXCI+PC9mYS1pY29uPiZuYnNwOzxzcGFuPkNhbmNlbDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBpZD1cXFwic2F2ZS1lbnRpdHlcXFwiIFtkaXNhYmxlZF09XFxcImVkaXRGb3JtLmludmFsaWQgfHwgaXNTYXZpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidzYXZlJ1xcXCI+PC9mYS1pY29uPiZuYnNwOzxzcGFuPlNhdmU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9mb3JtPiA8L2Rpdj4gPC9kaXY+IFwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/skill/skill-update.component.html\n");

/***/ })

})