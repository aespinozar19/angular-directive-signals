"use strict";(self.webpackChunkdirectiveSignals=self.webpackChunkdirectiveSignals||[]).push([[473],{6473:(F,p,o)=>{o.r(p),o.d(p,{SignalsModule:()=>q});var l=o(6814),a=o(8589),t=o(4946);let d=(()=>{class e{constructor(){this.counter=(0,t.tdS)(10),this.squareCounter=(0,t.Flj)(()=>this.counter()*this.counter())}increaseBy(s){this.counter.update(n=>n+s)}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:14,vars:2,consts:[[1,"btn","btn-primary",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"h1"),t._uU(1),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"h2"),t._uU(4),t.qZA(),t._UZ(5,"hr"),t.TgZ(6,"button",0),t.NdJ("click",function(){return r.increaseBy(1)}),t._uU(7," +1 "),t.qZA(),t._uU(8,"\n\xa0\n"),t.TgZ(9,"button",0),t.NdJ("click",function(){return r.increaseBy(-1)}),t._uU(10," -1 "),t.qZA(),t._uU(11,"\n\xa0\n"),t.TgZ(12,"button",0),t.NdJ("click",function(){return r.counter.set(0)}),t._uU(13," Reset "),t.qZA()),2&n&&(t.xp6(1),t.hij("Counter: ",r.counter(),""),t.xp6(3),t.hij("Square Counter ",r.squareCounter(),""))}})}return e})(),h=(()=>{class e{constructor(){this.counter=(0,t.tdS)(10),this.user=(0,t.tdS)({id:2,email:"janet.weaver@reqres.in",first_name:"Janet",last_name:"Weaver",avatar:"https://reqres.in/img/faces/2-image.jpg"}),this.fullName=(0,t.Flj)(()=>`${this.user().first_name} ${this.user().last_name}`),this.userChangedEffects=(0,t.cEC)(()=>{console.log(`${this.user().first_name} - ${this.counter()}`)})}ngOnInit(){setInterval(()=>{this.counter.update(s=>s+1),this.counter()>100&&this.userChangedEffects.destroy()},1e-4)}ngOnDestroy(){}increaseBy(s){this.counter.update(n=>n+s)}onFieldUpdated(s,n){this.user.update(r=>({...r,[s]:n}))}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:18,vars:7,consts:[[1,"row"],[1,"col-6"],["type","text",1,"form-control","mb-2",3,"value","input"],["txtEmail",""],["txtFirstName",""],["txtLastName",""],[1,"btn","btn-primary",3,"click"]],template:function(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"h1"),t._uU(1,"Mutaciones"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"input",2,3),t.NdJ("input",function(){t.CHM(i);const c=t.MAs(6);return t.KtG(r.onFieldUpdated("email",c.value))}),t.qZA(),t.TgZ(7,"input",2,4),t.NdJ("input",function(){t.CHM(i);const c=t.MAs(8);return t.KtG(r.onFieldUpdated("first_name",c.value))}),t.qZA(),t.TgZ(9,"input",2,5),t.NdJ("input",function(){t.CHM(i);const c=t.MAs(10);return t.KtG(r.onFieldUpdated("last_name",c.value))}),t.qZA()(),t.TgZ(11,"div",1)(12,"pre"),t._uU(13),t.ALo(14,"json"),t.qZA(),t._uU(15),t.TgZ(16,"button",6),t.NdJ("click",function(){return r.increaseBy(1)}),t._uU(17," +1 "),t.qZA()()()}2&n&&(t.xp6(5),t.Q6J("value",r.user().email),t.xp6(2),t.Q6J("value",r.user().first_name),t.xp6(2),t.Q6J("value",r.user().last_name),t.xp6(4),t.Oqu(t.lcZ(14,5,r.user())),t.xp6(2),t.hij(" ",r.fullName()," "))},dependencies:[l.Ts]})}return e})();function f(e,m){if(1&e&&(t.TgZ(0,"li",2),t._uU(1),t.qZA()),2&e){const s=m.$implicit;t.Q6J("routerLink",s.route),t.xp6(1),t.hij(" ",s.title," ")}}let g=(()=>{class e{constructor(){this.menuItems=(0,t.tdS)([{title:"Contador",route:"counter"},{title:"Usuario",route:"user-info"},{title:"Mutaciones",route:"properties"}])}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["side-menu"]],decls:2,vars:1,consts:[[1,"list-group"],["routerLinkActive","active","class","list-group-item",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink"]],template:function(n,r){1&n&&(t.TgZ(0,"ul",0),t.YNc(1,f,2,2,"li",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",r.menuItems()))},dependencies:[l.sg,a.rH,a.Od],styles:["li[_ngcontent-%COMP%]{cursor:pointer}"]})}return e})(),_=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:8,vars:0,consts:[[1,"row","mt-2"],[1,"col-2"],[1,"col-10"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Men\xfa"),t.qZA(),t._UZ(4,"hr")(5,"side-menu"),t.qZA(),t.TgZ(6,"div",2),t._UZ(7,"router-outlet"),t.qZA()())},dependencies:[a.lC,g]})}return e})();var U=o(9862),Z=o(7398),v=o(9397);let C=(()=>{class e{constructor(){this.http=(0,t.f3M)(U.eN),this.baseurl="https://reqres.in/api/users"}getUserById(s){return this.http.get(`${this.baseurl}/${s}`).pipe((0,Z.U)(n=>n.data),(0,v.b)(console.log))}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function T(e,m){1&e&&(t.TgZ(0,"div",6)(1,"h3"),t._uU(2,"Usuario no encontrado"),t.qZA()())}const A=[{path:"",component:_,children:[{path:"counter",component:d},{path:"user-info",component:(()=>{class e{constructor(){this.userServiceService=(0,t.f3M)(C),this.userId=(0,t.tdS)(1),this.currentUser=(0,t.tdS)(void 0),this.userWasFound=(0,t.tdS)(!0),this.fullName=(0,t.Flj)(()=>this.currentUser()?`${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`:"Usuario no encontrado")}ngOnInit(){this.loadUser(this.userId()),console.log("UserInfo")}loadUser(s){s<=0||(this.userId.set(s),this.currentUser.set(void 0),this.userServiceService.getUserById(s).subscribe({next:n=>{this.currentUser.set(n),this.userWasFound.set(!0)},error:()=>{this.userWasFound.set(!1),this.currentUser.set(void 0)}}))}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:21,vars:5,consts:[[1,"row"],[1,"col-4"],[1,"btn","btn-primary",3,"click"],[1,"col-8"],["alt","Avatar",1,"rounded",3,"src"],["class","col-8 text-danger",4,"ngIf"],[1,"col-8","text-danger"]],template:function(n,r){if(1&n&&(t.TgZ(0,"h1"),t._uU(1,"informaci\xf3n del usuario"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"h3"),t._uU(6),t.qZA(),t.TgZ(7,"button",2),t.NdJ("click",function(){return r.loadUser(r.userId()-1)}),t._uU(8,"Anterior"),t.qZA(),t._uU(9," \xa0 "),t.TgZ(10,"button",2),t.NdJ("click",function(){return r.loadUser(r.userId()+1)}),t._uU(11,"Siguiente"),t.qZA()(),t.TgZ(12,"div",3)(13,"h3"),t._uU(14,"Usuario"),t.qZA(),t.TgZ(15,"p"),t._uU(16),t.qZA(),t.TgZ(17,"p"),t._uU(18),t.qZA(),t._UZ(19,"img",4),t.qZA(),t.YNc(20,T,3,0,"div",5),t.qZA()),2&n){let i,u;t.xp6(6),t.hij("Usuario actual: ",r.userId()," "),t.xp6(10),t.hij("Correo: ",null==(i=r.currentUser())?null:i.email," "),t.xp6(2),t.hij("Nombre: ",r.fullName()," "),t.xp6(1),t.Q6J("src",null==(u=r.currentUser())?null:u.avatar,t.LSH),t.xp6(1),t.Q6J("ngIf",!r.userWasFound())}},dependencies:[l.O5]})}return e})()},{path:"properties",component:h},{path:"**",redirectTo:"counter"}]}];let y=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(A),a.Bz]})}return e})(),q=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[l.ez,y]})}return e})()}}]);