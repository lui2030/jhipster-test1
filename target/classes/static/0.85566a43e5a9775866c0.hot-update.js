webpackHotUpdate(0,{

/***/ "./src/main/webapp/app/entities/skill/skill-update.component.html":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/entities/skill/skill-update.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<div class=\\\"row justify-content-center\\\"> <div class=\\\"col-8\\\"> <form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" [formGroup]=\\\"editForm\\\"> <h2 id=\\\"jhi-skill-heading\\\">Create or edit a Skill</h2> <div> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!skill.id\\\"> <label for=\\\"id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" formControlName=\\\"id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_nome\\\">Nome</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"nome\\\" id=\\\"field_nome\\\" formControlName=\\\"nome\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_livello\\\">Livello</label> <select class=\\\"form-control\\\" name=\\\"livello\\\" id=\\\"field_livello\\\" formControlName=\\\"livello\\\"> <option *ngIf=\\\"livello == null\\\"><img src=\\\"\" + __webpack_require__(/*! ./src/main/webapp/content/images/0.png */ \"./src/main/webapp/content/images/0.png\") + \"\\\" width=\\\"45\\\" height=\\\"15\\\"> </option> <option *ngIf=\\\"livello == 1\\\"><img src=\\\"\" + __webpack_require__(/*! ./src/main/webapp/content/images/1.png */ \"./src/main/webapp/content/images/1.png\") + \"\\\" width=\\\"45\\\" height=\\\"15\\\"> </option> <option *ngIf=\\\"livello == 2\\\"><img src=\\\"\" + __webpack_require__(/*! ./src/main/webapp/content/images/2.png */ \"./src/main/webapp/content/images/2.png\") + \"\\\" width=\\\"45\\\" height=\\\"15\\\"> </option> <option *ngIf=\\\"livello == 3\\\"><img src=\\\"\" + __webpack_require__(/*! ./src/main/webapp/content/images/3.png */ \"./src/main/webapp/content/images/3.png\") + \"\\\" width=\\\"45\\\" height=\\\"15\\\"> </option> <option *ngIf=\\\"livello == 4\\\"><img src=\\\"\" + __webpack_require__(/*! ./src/main/webapp/content/images/4.png */ \"./src/main/webapp/content/images/4.png\") + \"\\\" width=\\\"45\\\" height=\\\"15\\\"> </option> <option *ngIf=\\\"livello == 5\\\"><img src=\\\"\" + __webpack_require__(/*! ./src/main/webapp/content/images/5.png */ \"./src/main/webapp/content/images/5.png\") + \"\\\" width=\\\"45\\\" height=\\\"15\\\"> </option> </select> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" for=\\\"field_descrizione\\\">Descrizione</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"descrizione\\\" id=\\\"field_descrizione\\\" formControlName=\\\"descrizione\\\"/> </div> <div *ngIf=\\\"editForm.get('nome').invalid && (editForm.get('nome').dirty || editForm.get('nome').touched)\\\"> <small class=\\\"form-text text-danger\\\" *ngIf=\\\"editForm.get('nome').errors.required\\\"> This field is required. </small> </div> </div> <div> <button type=\\\"button\\\" id=\\\"cancel-save\\\" class=\\\"btn btn-secondary\\\" (click)=\\\"previousState()\\\"> <fa-icon [icon]=\\\"'ban'\\\"></fa-icon>&nbsp;<span>Cancel</span> </button> <button type=\\\"submit\\\" id=\\\"save-entity\\\" [disabled]=\\\"editForm.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <fa-icon [icon]=\\\"'save'\\\"></fa-icon>&nbsp;<span>Save</span> </button> </div> </form> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NraWxsL3NraWxsLXVwZGF0ZS5jb21wb25lbnQuaHRtbD9mYzcyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG02QkFBbTZCLG1CQUFPLENBQUMsc0ZBQThGLDRGQUE0RixtQkFBTyxDQUFDLHNGQUE4Riw0RkFBNEYsbUJBQU8sQ0FBQyxzRkFBOEYsNEZBQTRGLG1CQUFPLENBQUMsc0ZBQThGLDRGQUE0RixtQkFBTyxDQUFDLHNGQUE4Riw0RkFBNEYsbUJBQU8sQ0FBQyxzRkFBOEYsc3JCQUFzckIsMkxBQTJMIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9za2lsbC9za2lsbC11cGRhdGUuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtOFxcXCI+IDxmb3JtIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlIChuZ1N1Ym1pdCk9XFxcInNhdmUoKVxcXCIgW2Zvcm1Hcm91cF09XFxcImVkaXRGb3JtXFxcIj4gPGgyIGlkPVxcXCJqaGktc2tpbGwtaGVhZGluZ1xcXCI+Q3JlYXRlIG9yIGVkaXQgYSBTa2lsbDwvaDI+IDxkaXY+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtoaWRkZW5dPVxcXCIhc2tpbGwuaWRcXFwiPiA8bGFiZWwgZm9yPVxcXCJpZFxcXCI+SUQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImlkXFxcIiBuYW1lPVxcXCJpZFxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJpZFxcXCIgcmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfbm9tZVxcXCI+Tm9tZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJub21lXFxcIiBpZD1cXFwiZmllbGRfbm9tZVxcXCIgZm9ybUNvbnRyb2xOYW1lPVxcXCJub21lXFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmllbGRfbGl2ZWxsb1xcXCI+TGl2ZWxsbzwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibGl2ZWxsb1xcXCIgaWQ9XFxcImZpZWxkX2xpdmVsbG9cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwibGl2ZWxsb1xcXCI+IDxvcHRpb24gKm5nSWY9XFxcImxpdmVsbG8gPT0gbnVsbFxcXCI+PGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGx1aWdpXFxcXERlc2t0b3BcXFxcdGVzdDE5XFxcXGpoaXBzdGVyLXRlc3QxXFxcXHNyY1xcXFxtYWluXFxcXHdlYmFwcFxcXFxjb250ZW50XFxcXGltYWdlc1xcXFwwLnBuZ1wiKSArIFwiXFxcIiB3aWR0aD1cXFwiNDVcXFwiIGhlaWdodD1cXFwiMTVcXFwiPiA8L29wdGlvbj4gPG9wdGlvbiAqbmdJZj1cXFwibGl2ZWxsbyA9PSAxXFxcIj48aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcbHVpZ2lcXFxcRGVza3RvcFxcXFx0ZXN0MTlcXFxcamhpcHN0ZXItdGVzdDFcXFxcc3JjXFxcXG1haW5cXFxcd2ViYXBwXFxcXGNvbnRlbnRcXFxcaW1hZ2VzXFxcXDEucG5nXCIpICsgXCJcXFwiIHdpZHRoPVxcXCI0NVxcXCIgaGVpZ2h0PVxcXCIxNVxcXCI+IDwvb3B0aW9uPiA8b3B0aW9uICpuZ0lmPVxcXCJsaXZlbGxvID09IDJcXFwiPjxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxsdWlnaVxcXFxEZXNrdG9wXFxcXHRlc3QxOVxcXFxqaGlwc3Rlci10ZXN0MVxcXFxzcmNcXFxcbWFpblxcXFx3ZWJhcHBcXFxcY29udGVudFxcXFxpbWFnZXNcXFxcMi5wbmdcIikgKyBcIlxcXCIgd2lkdGg9XFxcIjQ1XFxcIiBoZWlnaHQ9XFxcIjE1XFxcIj4gPC9vcHRpb24+IDxvcHRpb24gKm5nSWY9XFxcImxpdmVsbG8gPT0gM1xcXCI+PGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGx1aWdpXFxcXERlc2t0b3BcXFxcdGVzdDE5XFxcXGpoaXBzdGVyLXRlc3QxXFxcXHNyY1xcXFxtYWluXFxcXHdlYmFwcFxcXFxjb250ZW50XFxcXGltYWdlc1xcXFwzLnBuZ1wiKSArIFwiXFxcIiB3aWR0aD1cXFwiNDVcXFwiIGhlaWdodD1cXFwiMTVcXFwiPiA8L29wdGlvbj4gPG9wdGlvbiAqbmdJZj1cXFwibGl2ZWxsbyA9PSA0XFxcIj48aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcbHVpZ2lcXFxcRGVza3RvcFxcXFx0ZXN0MTlcXFxcamhpcHN0ZXItdGVzdDFcXFxcc3JjXFxcXG1haW5cXFxcd2ViYXBwXFxcXGNvbnRlbnRcXFxcaW1hZ2VzXFxcXDQucG5nXCIpICsgXCJcXFwiIHdpZHRoPVxcXCI0NVxcXCIgaGVpZ2h0PVxcXCIxNVxcXCI+IDwvb3B0aW9uPiA8b3B0aW9uICpuZ0lmPVxcXCJsaXZlbGxvID09IDVcXFwiPjxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxsdWlnaVxcXFxEZXNrdG9wXFxcXHRlc3QxOVxcXFxqaGlwc3Rlci10ZXN0MVxcXFxzcmNcXFxcbWFpblxcXFx3ZWJhcHBcXFxcY29udGVudFxcXFxpbWFnZXNcXFxcNS5wbmdcIikgKyBcIlxcXCIgd2lkdGg9XFxcIjQ1XFxcIiBoZWlnaHQ9XFxcIjE1XFxcIj4gPC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpZWxkX2Rlc2NyaXppb25lXFxcIj5EZXNjcml6aW9uZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJkZXNjcml6aW9uZVxcXCIgaWQ9XFxcImZpZWxkX2Rlc2NyaXppb25lXFxcIiBmb3JtQ29udHJvbE5hbWU9XFxcImRlc2NyaXppb25lXFxcIi8+IDwvZGl2PiA8ZGl2ICpuZ0lmPVxcXCJlZGl0Rm9ybS5nZXQoJ25vbWUnKS5pbnZhbGlkICYmIChlZGl0Rm9ybS5nZXQoJ25vbWUnKS5kaXJ0eSB8fCBlZGl0Rm9ybS5nZXQoJ25vbWUnKS50b3VjaGVkKVxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZWRpdEZvcm0uZ2V0KCdub21lJykuZXJyb3JzLnJlcXVpcmVkXFxcIj4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2PiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImNhbmNlbC1zYXZlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIChjbGljayk9XFxcInByZXZpb3VzU3RhdGUoKVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ2JhbidcXFwiPjwvZmEtaWNvbj4mbmJzcDs8c3Bhbj5DYW5jZWw8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgaWQ9XFxcInNhdmUtZW50aXR5XFxcIiBbZGlzYWJsZWRdPVxcXCJlZGl0Rm9ybS5pbnZhbGlkIHx8IGlzU2F2aW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCInc2F2ZSdcXFwiPjwvZmEtaWNvbj4mbmJzcDs8c3Bhbj5TYXZlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiBcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/skill/skill-update.component.html\n");

/***/ })

})