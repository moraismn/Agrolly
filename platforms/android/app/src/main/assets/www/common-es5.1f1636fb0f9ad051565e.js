(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"DK3/":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return s})),e.d(t,"d",(function(){return l}));var l=function(){var n=window.TapticEngine;n&&n.selection()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},o=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},s=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}},Jky2:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return r}));var l=e("mrSG"),i=function(n,t){return null!==t.closest(n)},o=function(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0},s=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},u=/^[a-z][a-z0-9+\-.]*:/,r=function(n,t,e){return Object(l.b)(void 0,void 0,void 0,(function(){var i;return Object(l.e)(this,(function(l){return null!=n&&"#"!==n[0]&&!u.test(n)&&(i=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,i.push(n,e)]):[2,!1]}))}))}},"MJr+":function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e("mloo");var l=function(){function n(n){this.httpcallsService=n,this.showHomeTab=!0,this.showLoginTab=!0,this.showRegisterTab=!0,this.showMyQuestionsTab=!1,this.showAskQuestionsTab=!1,this.showFrm1Tab=!1,this.showFrm2Tab=!1,this.loginStatus=!1,this.showHomeTab=this.httpcallsService.showHomeTab,this.showLoginTab=this.httpcallsService.showLoginTab,this.showRegisterTab=this.httpcallsService.showRegisterTab,this.showMyQuestionsTab=this.httpcallsService.showMyQuestionsTab,this.showAskQuestionsTab=this.httpcallsService.showAskQuestionsTab,this.showFrm1Tab=!1,this.showFrm2Tab=!1,this.checkLogin()}return n.prototype.setDefaultTabs=function(){this.showHomeTab=!0,this.showLoginTab=this.httpcallsService.showLoginTab,this.showRegisterTab=this.httpcallsService.showRegisterTab,this.showMyQuestionsTab=this.httpcallsService.showMyQuestionsTab,this.showAskQuestionsTab=this.httpcallsService.showAskQuestionsTab,this.showFrm1Tab=!1,this.showFrm2Tab=!1},n.prototype.checkLogin=function(){this.httpcallsService.loggedIn&&(this.showLoginTab=this.httpcallsService.showLoginTab,this.showRegisterTab=this.httpcallsService.showRegisterTab,this.showMyQuestionsTab=this.httpcallsService.showMyQuestionsTab,this.showAskQuestionsTab=this.httpcallsService.showAskQuestionsTab)},n.prototype.onFrm1Clicked=function(){this.showHomeTab=!0,this.showLoginTab=this.httpcallsService.showLoginTab,this.showRegisterTab=this.httpcallsService.showRegisterTab,this.showMyQuestionsTab=this.httpcallsService.showMyQuestionsTab,this.showAskQuestionsTab=this.httpcallsService.showAskQuestionsTab,this.showFrm1Tab=!0,this.showFrm2Tab=!1},n.prototype.onFrm2Clicked=function(){this.showHomeTab=!0,this.showLoginTab=this.httpcallsService.showLoginTab,this.showRegisterTab=this.httpcallsService.showRegisterTab,this.showMyQuestionsTab=this.httpcallsService.showMyQuestionsTab,this.showAskQuestionsTab=this.httpcallsService.showAskQuestionsTab,this.showFrm1Tab=!1,this.showFrm2Tab=!0},n.prototype.onLoginRegisterClicked=function(){this.showHomeTab=!0,this.showLoginTab=this.httpcallsService.showLoginTab,this.showRegisterTab=this.httpcallsService.showRegisterTab,this.showMyQuestionsTab=this.httpcallsService.showMyQuestionsTab,this.showAskQuestionsTab=this.httpcallsService.showAskQuestionsTab,this.showFrm1Tab=!1},n}()},NTBD:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return l}));var l=function(n,t,e){var l=new MutationObserver((function(n){e(i(n,t))}));return l.observe(n,{childList:!0,subtree:!0}),l},i=function(n,t){var e;return n.forEach((function(n){for(var l=0;l<n.addedNodes.length;l++)e=o(n.addedNodes[l],t)||e})),e},o=function(n,t){if(1===n.nodeType)return(n.tagName===t.toUpperCase()?[n]:Array.from(n.querySelectorAll(t))).find((function(n){return!0===n.checked}))}},RMHy:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),o=e("pMnS"),s=e("oBZk"),u=e("ZZ/e"),r=e("Ip0R"),c=e("mrSG"),a=e("mloo"),h=e("MJr+"),b=e("bbb9"),d=function(){function n(n,t,e,l,i){this.showHideTabs=n,this.httpcalls=t,this.storage=e,this.modalCtrl=l,this.loading=i,this.httpcalls.GetTopics2(),this.lists=this.httpcalls.topicList2}return n.prototype.ngOnInit=function(){this.httpcalls.GetTopics2(),this.lists=this.httpcalls.topicList2},n.prototype.ionViewDidEnter=function(){this.LogcheckSubscriber(),this.storage.get("phone").then((function(n){}))},n.prototype.LogcheckSubscriber=function(){var n=this;this.showLogoutsubscriber=this.httpcalls.checkLogin().subscribe((function(t){n.showLogout=t}))},n.prototype.logout=function(){this.httpcalls.Logout(),this.LogcheckSubscriber(),this.showHideTabs.setDefaultTabs()},n.prototype.LoadQuestions=function(n){var t=this;this.httpcalls.subjectSelected=n,this.httpcalls.GetSubjectQuestions(),this.presentLoading(),setTimeout((function(){t.showQuestions(n)}),2e3)},n.prototype.presentLoading=function(){return c.b(this,void 0,void 0,(function(){return c.e(this,(function(n){switch(n.label){case 0:return[4,this.loading.create({spinner:"lines",message:"Please Wait",duration:2e3})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},n.prototype.showQuestions=function(n){return c.b(this,void 0,void 0,(function(){return c.e(this,(function(t){switch(t.label){case 0:return[4,this.modalCtrl.create({component:b.a,componentProps:{topicName:n}})];case 1:return[4,t.sent().present()];case 2:return[2,t.sent()]}}))}))},n}(),f=e("iw74"),p=l.rb({encapsulation:0,styles:[[".tabButtons[_ngcontent-%COMP%]{height:10%}.fold-lines[_ngcontent-%COMP%]{white-space:pre-line!important}"]],data:{}});function w(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,8,"ion-buttons",[["slot","end"]],null,null,null,s.C,s.c)),l.sb(1,49152,null,0,u.j,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,6,"ion-tab-button",[],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.logout()&&l),l}),s.V,s.v)),l.sb(3,49152,null,0,u.tb,[l.h,l.k,l.z],null,null),(n()(),l.tb(4,0,null,0,1,"ion-icon",[["name","walk"]],null,null,null,s.L,s.l)),l.sb(5,49152,null,0,u.A,[l.h,l.k,l.z],{name:[0,"name"]},null),(n()(),l.tb(6,0,null,0,2,"ion-label",[],null,null,null,s.N,s.n)),l.sb(7,49152,null,0,u.L,[l.h,l.k,l.z],null,null),(n()(),l.Lb(-1,0,["Logout"]))],(function(n,t){n(t,5,0,"walk")}),null)}function g(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,6,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.LoadQuestions(n.context.$implicit.subject)&&l),l}),s.M,s.m)),l.sb(1,49152,null,0,u.F,[l.h,l.k,l.z],{button:[0,"button"]},null),(n()(),l.tb(2,0,null,0,1,"ion-icon",[["class","ion-padding"],["color","dark"]],null,null,null,s.L,s.l)),l.sb(3,49152,null,0,u.A,[l.h,l.k,l.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),l.tb(4,0,null,0,2,"ion-label",[["class","fold-lines"]],null,null,null,s.N,s.n)),l.sb(5,49152,null,0,u.L,[l.h,l.k,l.z],null,null),(n()(),l.Lb(6,0,["",""]))],(function(n,t){n(t,1,0,""),n(t,3,0,"dark",l.xb(1,"",t.context.$implicit.icon,""))}),(function(n,t){n(t,6,0,t.context.$implicit.subject)}))}function m(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,8,"ion-header",[],null,null,null,s.K,s.k)),l.sb(1,49152,null,0,u.z,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,6,"ion-toolbar",[],null,null,null,s.Z,s.z)),l.sb(3,49152,null,0,u.Ab,[l.h,l.k,l.z],null,null),(n()(),l.tb(4,0,null,0,2,"ion-title",[],null,null,null,s.Y,s.y)),l.sb(5,49152,null,0,u.yb,[l.h,l.k,l.z],null,null),(n()(),l.Lb(-1,0,["Practice Questions"])),(n()(),l.ib(16777216,null,0,1,null,w)),l.sb(8,16384,null,0,r.i,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(9,0,null,null,6,"ion-content",[],null,null,null,s.H,s.h)),l.sb(10,49152,null,0,u.s,[l.h,l.k,l.z],null,null),(n()(),l.tb(11,0,null,0,4,"ion-list",[],null,null,null,s.O,s.o)),l.sb(12,49152,null,0,u.M,[l.h,l.k,l.z],null,null),(n()(),l.ib(16777216,null,0,2,null,g)),l.sb(14,278528,null,0,r.h,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),l.Hb(0,r.n,[])],(function(n,t){var e=t.component;n(t,8,0,e.showLogout),n(t,14,0,l.Mb(t,14,0,l.Fb(t,15).transform(e.lists,0,e.lists.length-1)))}),null)}function v(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"app-practice-ques2",[],null,null,null,m,p)),l.sb(1,114688,null,0,d,[h.a,a.a,f.b,u.Fb,u.Eb],null,null)],(function(n,t){n(t,1,0)}),null)}var T=l.pb("app-practice-ques2",d,v,{},{},[]),k=e("gIcY"),y=e("ZYCi"),L=function(){return function(){}}();e.d(t,"PracticeQues2PageModuleNgFactory",(function(){return M}));var M=l.qb(i,[],(function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[o.a,T]],[3,l.j],l.x]),l.Db(4608,r.k,r.j,[l.u,[2,r.r]]),l.Db(4608,k.l,k.l,[]),l.Db(4608,u.b,u.b,[l.z,l.g]),l.Db(4608,u.Fb,u.Fb,[u.b,l.j,l.q]),l.Db(4608,u.Ib,u.Ib,[u.b,l.j,l.q]),l.Db(1073742336,r.b,r.b,[]),l.Db(1073742336,k.k,k.k,[]),l.Db(1073742336,k.c,k.c,[]),l.Db(1073742336,u.Cb,u.Cb,[]),l.Db(1073742336,y.q,y.q,[[2,y.v],[2,y.m]]),l.Db(1073742336,L,L,[]),l.Db(1073742336,i,i,[]),l.Db(1024,y.k,(function(){return[[{path:"",component:d}]]}),[])])}))},YNVt:function(n,t,e){"use strict";e.d(t,"a",(function(){return T})),e.d(t,"b",(function(){return L})),e.d(t,"c",(function(){return m})),e.d(t,"d",(function(){return k})),e.d(t,"e",(function(){return s}));var l=e("mrSG"),i=e("Twl7"),o=e("ocqh"),s=function(n){return new Promise((function(t,e){Object(i.m)((function(){u(n),r(n).then((function(e){e.animation&&e.animation.destroy(),c(n),t(e)}),(function(t){c(n),e(t)}))}))}))},u=function(n){var t=n.enteringEl,e=n.leavingEl;y(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),k(t,!1),e&&k(e,!1)},r=function(n){return Object(l.b)(void 0,void 0,void 0,(function(){var t;return Object(l.e)(this,(function(e){switch(e.label){case 0:return[4,a(n)];case 1:return[2,(t=e.sent())?h(t,n):b(n)]}}))}))},c=function(n){var t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},a=function(n){return Object(l.b)(void 0,void 0,void 0,(function(){var t;return Object(l.e)(this,(function(l){switch(l.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,e.e(105).then(e.bind(null,"xxD1"))]:[2,void 0];case 1:return t=l.sent().iosTransitionAnimation,[3,4];case 2:return[4,e.e(106).then(e.bind(null,"v1ax"))];case 3:t=l.sent().mdTransitionAnimation,l.label=4;case 4:return[2,t]}}))}))},h=function(n,t){return Object(l.b)(void 0,void 0,void 0,(function(){var i,o;return Object(l.e)(this,(function(l){switch(l.label){case 0:return[4,d(t,!0)];case 1:l.sent(),l.label=2;case 2:return l.trys.push([2,5,,6]),[4,e.e(5).then(e.bind(null,"5QBn"))];case 3:return[4,l.sent().create(n,t.baseEl,t)];case 4:return i=l.sent(),[3,6];case 5:return l.sent(),i=n(t.baseEl,t),[3,6];case 6:return w(t.enteringEl,t.leavingEl),[4,p(i,t)];case 7:return o=l.sent(),t.progressCallback&&t.progressCallback(void 0),o&&g(t.enteringEl,t.leavingEl),[2,{hasCompleted:o,animation:i}]}}))}))},b=function(n){return Object(l.b)(void 0,void 0,void 0,(function(){var t,e;return Object(l.e)(this,(function(l){switch(l.label){case 0:return t=n.enteringEl,e=n.leavingEl,[4,d(n,!1)];case 1:return l.sent(),w(t,e),g(t,e),[2,{hasCompleted:!0}]}}))}))},d=function(n,t){return Object(l.b)(void 0,void 0,void 0,(function(){var e;return Object(l.e)(this,(function(l){switch(l.label){case 0:return e=(void 0!==n.deepWait?n.deepWait:t)?[T(n.enteringEl),T(n.leavingEl)]:[v(n.enteringEl),v(n.leavingEl)],[4,Promise.all(e)];case 1:return l.sent(),[4,f(n.viewIsReady,n.enteringEl)];case 2:return l.sent(),[2]}}))}))},f=function(n,t){return Object(l.b)(void 0,void 0,void 0,(function(){return Object(l.e)(this,(function(e){switch(e.label){case 0:return n?[4,n(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},p=function(n,t){var e=t.progressCallback,l=new Promise((function(t){n.onFinish((function(e){"number"==typeof e?t(1===e):void 0!==n.hasCompleted&&t(n.hasCompleted)}))}));return e?(n.progressStart(!0),e(n)):n.play(),l},w=function(n,t){m(t,o.c),m(n,o.a)},g=function(n,t){m(n,o.b),m(t,o.d)},m=function(n,t){if(n){var e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}},v=function(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()},T=function(n){return Object(l.b)(void 0,void 0,void 0,(function(){var t;return Object(l.e)(this,(function(e){switch(e.label){case 0:return(t=n)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(T))];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))},k=function(n,t){t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},y=function(n,t,e){void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")},L=function(n){return n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n}},dsFO:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),o=e("pMnS"),s=e("oBZk"),u=e("ZZ/e"),r=e("Ip0R"),c=e("ZYCi"),a=e("MJr+"),h=e("mloo"),b=function(){function n(n,t){this.showHideTabs=n,this.httpcalls=t,this.updateTabs()}return n.prototype.ngOnInit=function(){},n.prototype.updateTabs=function(){this.showHideTabs.showLoginTab=!1,this.showHideTabs.showRegisterTab=!1,this.showHideTabs.showMyQuestionsTab=this.httpcalls.showMyQuestionsTab,this.showHideTabs.showAskQuestionsTab=this.httpcalls.showAskQuestionsTab,this.showHideTabs.showFrm2Tab=!0},n.prototype.ionViewWillEnter=function(){this.LogcheckSubscriber(),this.updateTabs()},n.prototype.LogcheckSubscriber=function(){var n=this;this.showLogoutsubscriber=this.httpcalls.checkLogin().subscribe((function(t){n.showLogout=t}))},n.prototype.logout=function(){this.httpcalls.Logout(),this.LogcheckSubscriber(),this.showHideTabs.setDefaultTabs()},n}(),d=l.rb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.centerAll[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}@media only screen and (min-width:768px){.examType[_ngcontent-%COMP%]{width:300px;height:50px;margin-top:20px;font-weight:700;font-size:large}.mainButtons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:700px}}@media only screen and (min-width:414px) and (max-width:767px){.examType[_ngcontent-%COMP%]{width:300px;height:50px;margin-top:20px;font-weight:700;font-size:large}img[_ngcontent-%COMP%]{width:100%}.mainButtons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:700px}}@media only screen and (min-width:376px) and (max-width:412px){.examType[_ngcontent-%COMP%]{width:300px;height:50px;margin-top:20px;font-weight:700;font-size:large}.mainButtons[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}@media only screen and (min-width:321px) and (max-width:375px){.examType[_ngcontent-%COMP%]{width:300px;height:50px;margin-top:20px;font-weight:700;font-size:large}.mainButtons[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}@media only screen and (max-width:320px){.examType[_ngcontent-%COMP%]{width:300px;height:45px;margin-top:20px;font-weight:700;font-size:large}.mainButtons[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}"]],data:{}});function f(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,8,"ion-buttons",[["slot","end"]],null,null,null,s.C,s.c)),l.sb(1,49152,null,0,u.j,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,6,"ion-tab-button",[],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.logout()&&l),l}),s.V,s.v)),l.sb(3,49152,null,0,u.tb,[l.h,l.k,l.z],null,null),(n()(),l.tb(4,0,null,0,1,"ion-icon",[["name","walk"]],null,null,null,s.L,s.l)),l.sb(5,49152,null,0,u.A,[l.h,l.k,l.z],{name:[0,"name"]},null),(n()(),l.tb(6,0,null,0,2,"ion-label",[],null,null,null,s.N,s.n)),l.sb(7,49152,null,0,u.L,[l.h,l.k,l.z],null,null),(n()(),l.Lb(-1,0,["Logout"]))],(function(n,t){n(t,5,0,"walk")}),null)}function p(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,8,"ion-header",[],null,null,null,s.K,s.k)),l.sb(1,49152,null,0,u.z,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,6,"ion-toolbar",[],null,null,null,s.Z,s.z)),l.sb(3,49152,null,0,u.Ab,[l.h,l.k,l.z],null,null),(n()(),l.tb(4,0,null,0,2,"ion-title",[],null,null,null,s.Y,s.y)),l.sb(5,49152,null,0,u.yb,[l.h,l.k,l.z],null,null),(n()(),l.Lb(-1,0,["THE FRM CLUB"])),(n()(),l.ib(16777216,null,0,1,null,f)),l.sb(8,16384,null,0,r.i,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(9,0,null,null,29,"ion-content",[],null,null,null,s.H,s.h)),l.sb(10,49152,null,0,u.s,[l.h,l.k,l.z],null,null),(n()(),l.tb(11,0,null,0,27,"div",[["class","centerAll"]],null,null,null,null,null)),(n()(),l.tb(12,0,null,null,0,"img",[["src","../assets/frm2.svg"]],null,null,null,null,null)),(n()(),l.tb(13,0,null,null,25,"div",[["class","mainButtons"]],null,null,null,null,null)),(n()(),l.tb(14,0,null,null,24,"ion-grid",[],null,null,null,s.J,s.j)),l.sb(15,49152,null,0,u.y,[l.h,l.k,l.z],null,null),(n()(),l.tb(16,0,null,0,10,"ion-row",[],null,null,null,s.R,s.r)),l.sb(17,49152,null,0,u.hb,[l.h,l.k,l.z],null,null),(n()(),l.tb(18,0,null,0,8,"ion-button",[["class","examType"],["color","success"],["routerLinkActive","router-link-active"]],null,[[null,"click"]],(function(n,t,e){var i=!0,o=n.component;return"click"===t&&(i=!1!==l.Fb(n,20).onClick()&&i),"click"===t&&(i=!1!==l.Fb(n,22).onClick(e)&&i),"click"===t&&(i=!1!==o.updateTabs()&&i),i}),s.B,s.b)),l.sb(19,49152,null,0,u.i,[l.h,l.k,l.z],{color:[0,"color"]},null),l.sb(20,16384,[[1,4]],0,c.n,[c.m,c.a,[8,null],l.D,l.k],{routerLink:[0,"routerLink"]},null),l.Gb(21,1),l.sb(22,737280,null,0,u.Jb,[r.g,u.Gb,l.k,c.m,[2,c.n]],null,null),l.sb(23,1720320,null,2,c.o,[c.m,l.k,l.D,[2,c.n],[2,c.p]],{routerLinkActive:[0,"routerLinkActive"]},null),l.Jb(603979776,1,{links:1}),l.Jb(603979776,2,{linksWithHrefs:1}),(n()(),l.Lb(-1,0,[" PRACTICE QUESTION BANK "])),(n()(),l.tb(27,0,null,0,4,"ion-row",[],null,null,null,s.R,s.r)),l.sb(28,49152,null,0,u.hb,[l.h,l.k,l.z],null,null),(n()(),l.tb(29,0,null,0,2,"ion-button",[["class","examType"],["color","success"],["disabled",""]],null,null,null,s.B,s.b)),l.sb(30,49152,null,0,u.i,[l.h,l.k,l.z],{color:[0,"color"],disabled:[1,"disabled"]},null),(n()(),l.Lb(-1,0,[" QUESTION LOG "])),(n()(),l.tb(32,0,null,0,6,"ion-row",[],null,null,null,s.R,s.r)),l.sb(33,49152,null,0,u.hb,[l.h,l.k,l.z],null,null),(n()(),l.tb(34,0,null,0,4,"ion-button",[["class","examType"],["color","success"],["disabled",""]],null,null,null,s.B,s.b)),l.sb(35,49152,null,0,u.i,[l.h,l.k,l.z],{color:[0,"color"],disabled:[1,"disabled"]},null),(n()(),l.Lb(-1,0,[" SIMULATION "])),(n()(),l.tb(37,0,null,0,1,"ion-icon",[["name","lock"]],null,null,null,s.L,s.l)),l.sb(38,49152,null,0,u.A,[l.h,l.k,l.z],{name:[0,"name"]},null)],(function(n,t){n(t,8,0,t.component.showLogout),n(t,19,0,"success");var e=n(t,21,0,"/tabs/pracques2");n(t,20,0,e),n(t,22,0),n(t,23,0,"router-link-active"),n(t,30,0,"success",""),n(t,35,0,"success",""),n(t,38,0,"lock")}),null)}function w(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"app-frm2",[],null,null,null,p,d)),l.sb(1,114688,null,0,b,[a.a,h.a],null,null)],(function(n,t){n(t,1,0)}),null)}var g=l.pb("app-frm2",b,w,{},{},[]),m=e("gIcY"),v=function(){return function(){}}();e.d(t,"Frm2PageModuleNgFactory",(function(){return T}));var T=l.qb(i,[],(function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[o.a,g]],[3,l.j],l.x]),l.Db(4608,r.k,r.j,[l.u,[2,r.r]]),l.Db(4608,m.l,m.l,[]),l.Db(4608,u.b,u.b,[l.z,l.g]),l.Db(4608,u.Fb,u.Fb,[u.b,l.j,l.q]),l.Db(4608,u.Ib,u.Ib,[u.b,l.j,l.q]),l.Db(1073742336,r.b,r.b,[]),l.Db(1073742336,m.k,m.k,[]),l.Db(1073742336,m.c,m.c,[]),l.Db(1073742336,u.Cb,u.Cb,[]),l.Db(1073742336,c.q,c.q,[[2,c.v],[2,c.m]]),l.Db(1073742336,v,v,[]),l.Db(1073742336,i,i,[]),l.Db(1024,c.k,(function(){return[[{path:"",component:b}]]}),[])])}))},uYVq:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return i}));var l=function(){return function(n,t){this.x=n,this.y=t}}(),i=function(n,t,e,l,i){var u=s(n.y,t.y,e.y,l.y,i);return o(n.x,t.x,e.x,l.x,u[0])},o=function(n,t,e,l,i){return i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+l*i))-n*Math.pow(i-1,3)},s=function(n,t,e,l,i){return u((l-=i)-3*(e-=i)+3*(t-=i)-(n-=i),3*e-6*t+3*n,3*t-3*n,n).filter((function(n){return n>=0&&n<=1}))},u=function(n,t,e,l){if(0===n)return function(n,t,e){var l=t*t-4*n*e;return l<0?[]:[(-t+Math.sqrt(l))/(2*n),(-t-Math.sqrt(l))/(2*n)]}(t,e,l);var i=(3*(e/=n)-(t/=n)*t)/3,o=(2*t*t*t-9*t*e+27*(l/=n))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];var s=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===s)return[Math.pow(o/2,.5)-t/3];if(s>0)return[Math.pow(-o/2+Math.sqrt(s),1/3)-Math.pow(o/2+Math.sqrt(s),1/3)-t/3];var u=Math.sqrt(Math.pow(-i/3,3)),r=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),c=2*Math.pow(u,1/3);return[c*Math.cos(r/3)-t/3,c*Math.cos((r+2*Math.PI)/3)-t/3,c*Math.cos((r+4*Math.PI)/3)-t/3]}},"v7+D":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var l=e("mrSG"),i=function(n,t,e,i,o){return Object(l.b)(void 0,void 0,void 0,(function(){var s;return Object(l.e)(this,(function(l){switch(l.label){case 0:if(n)return[2,n.attachViewToDom(t,e,o,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e,i&&i.forEach((function(n){return s.classList.add(n)})),o&&Object.assign(s,o),t.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:l.sent(),l.label=2;case 2:return[2,s]}}))}))},o=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},zwjO:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var l=function(n){try{if("string"!=typeof n||""===n)return n;var t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,u.forEach((function(n){for(var e=t.querySelectorAll(n),l=e.length-1;l>=0;l--){var s=e[l];s.parentNode?s.parentNode.removeChild(s):t.removeChild(s);for(var u=o(s),r=0;r<u.length;r++)i(u[r])}}));for(var l=o(t),s=0;s<l.length;s++)i(l[s]);var r=document.createElement("div");r.appendChild(t);var c=r.querySelector("div");return null!==c?c.innerHTML:r.innerHTML}catch(a){return console.error(a),""}},i=function(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var e=n.attributes.item(t),l=e.name;if(s.includes(l.toLowerCase())){var u=e.value;null!=u&&u.toLowerCase().includes("javascript:")&&n.removeAttribute(l)}else n.removeAttribute(l)}var r=o(n);for(t=0;t<r.length;t++)i(r[t])}},o=function(n){return null!=n.children?n.children:n.childNodes},s=["class","id","href","src","name","slot"],u=["script","style","iframe","meta","link","object","embed"]}}]);