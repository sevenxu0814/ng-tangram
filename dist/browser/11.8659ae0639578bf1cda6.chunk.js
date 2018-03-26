webpackJsonp([11],{X5ca:function(l,n){l.exports='import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'demo-scrim-basic\',\n  template: `\n  <nt-table [ntScrim]="isOpen" ntScrimText="正在加载中..." [ntDataSource]="dataSource">\n\n    <nt-column ntColumnKey="name">\n      <nt-column-header>Name</nt-column-header>\n      <nt-column-cell *ntColumnCellDef="let item">{{ item.name }}</nt-column-cell>\n    </nt-column>\n\n    <nt-column ntColumnKey="age">\n      <nt-column-header>Age</nt-column-header>\n      <nt-column-cell *ntColumnCellDef="let item">{{ item.age }}</nt-column-cell>\n    </nt-column>\n\n    <nt-column ntColumnKey="address">\n      <nt-column-header>Address</nt-column-header>\n      <nt-column-cell *ntColumnCellDef="let item">{{ item.address }}</nt-column-cell>\n    </nt-column>\n\n  </nt-table>\n  <nt-pagination [ntTotal]="300" [ntPageIndex]="pageIndex" [ntPageSize]="20" (ntOnPageChange)="onPageChange($event)"></nt-pagination>\n  `\n})\nexport class DemoScrimBasciComponent {\n  isOpen = false;\n  dataSource = [\n    {\n      name: \'张三\',\n      age: 20,\n      address: \'北京\'\n    },\n    {\n      name: \'李四\',\n      age: 22,\n      address: \'上海\'\n    },\n    {\n      name: \'王五\',\n      age: 18,\n      address: \'广州\'\n    },\n    {\n      name: \'赵六\',\n      age: 27,\n      address: \'大连\'\n    }\n  ];\n  pageIndex = 1;\n\n  onPageChange(index: number) {\n    this.pageIndex = index;\n    this.isOpen = true;\n    setTimeout(_ => this.isOpen = false, 500);\n  }\n}\n'},sRt8:function(l,n,u){"use strict";function e(l){return _._37(0,[(l()(),_._15(0,0,null,null,2,"nt-column-cell",[["class","nt-column-cell"]],null,null,null,null,null)),_._14(1,16384,null,0,h.b,[],null,null),(l()(),_._35(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.name)})}function t(l){return _._37(0,[(l()(),_._15(0,0,null,null,2,"nt-column-cell",[["class","nt-column-cell"]],null,null,null,null,null)),_._14(1,16384,null,0,h.b,[],null,null),(l()(),_._35(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.age)})}function a(l){return _._37(0,[(l()(),_._15(0,0,null,null,2,"nt-column-cell",[["class","nt-column-cell"]],null,null,null,null,null)),_._14(1,16384,null,0,h.b,[],null,null),(l()(),_._35(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.address)})}function o(l){return _._37(0,[(l()(),_._35(-1,null,["\n  "])),(l()(),_._15(1,16777216,null,null,47,"nt-table",[["class","nt-table"],["ntScrimText","正在加载中..."]],null,null,null,g.b,g.a)),_._14(2,147456,null,0,v,[_.n,_.M,_.k,_.Y],{text:[0,"text"],scrim:[1,"scrim"]},null),_._14(3,1753088,null,1,y.a,[_.G,_.i,_.n],{dataSource:[0,"dataSource"]},null),_._33(603979776,1,{_columns:1}),_._32(2048,null,x.b,null,[y.a]),(l()(),_._35(-1,null,["\n\n    "])),(l()(),_._15(7,16777216,null,null,12,"nt-column",[["ntColumnKey","name"]],null,null,null,S.b,S.a)),_._14(8,1097728,[[1,4]],2,h.c,[[2,x.b],_.Y,_.n],{columnKey:[0,"columnKey"]},null),_._33(335544320,2,{header:0}),_._33(335544320,3,{cellDef:0}),_._32(2048,null,x.a,null,[h.c]),(l()(),_._35(-1,null,["\n      "])),(l()(),_._15(13,0,null,0,2,"nt-column-header",[["class","nt-column-header"]],[[2,"nt-column-sort",null],[2,"asc",null],[2,"desc",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==_._26(l,14).column.sorting(!0)&&e),e},null,null)),_._14(14,16384,[[2,4]],0,h.d,[_.n,[2,x.a]],null,null),(l()(),_._35(-1,null,["Name"])),(l()(),_._35(-1,null,["\n      "])),(l()(),_._10(0,null,null,1,null,e)),_._14(18,16384,[[3,4]],0,h.a,[_.V],null,null),(l()(),_._35(-1,null,["\n    "])),(l()(),_._35(-1,null,["\n\n    "])),(l()(),_._15(21,16777216,null,null,12,"nt-column",[["ntColumnKey","age"]],null,null,null,S.b,S.a)),_._14(22,1097728,[[1,4]],2,h.c,[[2,x.b],_.Y,_.n],{columnKey:[0,"columnKey"]},null),_._33(335544320,4,{header:0}),_._33(335544320,5,{cellDef:0}),_._32(2048,null,x.a,null,[h.c]),(l()(),_._35(-1,null,["\n      "])),(l()(),_._15(27,0,null,0,2,"nt-column-header",[["class","nt-column-header"]],[[2,"nt-column-sort",null],[2,"asc",null],[2,"desc",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==_._26(l,28).column.sorting(!0)&&e),e},null,null)),_._14(28,16384,[[4,4]],0,h.d,[_.n,[2,x.a]],null,null),(l()(),_._35(-1,null,["Age"])),(l()(),_._35(-1,null,["\n      "])),(l()(),_._10(0,null,null,1,null,t)),_._14(32,16384,[[5,4]],0,h.a,[_.V],null,null),(l()(),_._35(-1,null,["\n    "])),(l()(),_._35(-1,null,["\n\n    "])),(l()(),_._15(35,16777216,null,null,12,"nt-column",[["ntColumnKey","address"]],null,null,null,S.b,S.a)),_._14(36,1097728,[[1,4]],2,h.c,[[2,x.b],_.Y,_.n],{columnKey:[0,"columnKey"]},null),_._33(335544320,6,{header:0}),_._33(335544320,7,{cellDef:0}),_._32(2048,null,x.a,null,[h.c]),(l()(),_._35(-1,null,["\n      "])),(l()(),_._15(41,0,null,0,2,"nt-column-header",[["class","nt-column-header"]],[[2,"nt-column-sort",null],[2,"asc",null],[2,"desc",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==_._26(l,42).column.sorting(!0)&&e),e},null,null)),_._14(42,16384,[[6,4]],0,h.d,[_.n,[2,x.a]],null,null),(l()(),_._35(-1,null,["Address"])),(l()(),_._35(-1,null,["\n      "])),(l()(),_._10(0,null,null,1,null,a)),_._14(46,16384,[[7,4]],0,h.a,[_.V],null,null),(l()(),_._35(-1,null,["\n    "])),(l()(),_._35(-1,null,["\n\n  "])),(l()(),_._35(-1,null,["\n  "])),(l()(),_._15(50,0,null,null,1,"nt-pagination",[["aria-label","分页导航"]],null,[[null,"ntOnPageChange"]],function(l,n,u){var e=!0;return"ntOnPageChange"===n&&(e=!1!==l.component.onPageChange(u)&&e),e},O.b,O.a)),_._14(51,49152,null,0,k.a,[[2,D.a]],{pageSize:[0,"pageSize"],total:[1,"total"],pageIndex:[2,"pageIndex"]},{onPageChange:"ntOnPageChange"}),(l()(),_._35(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,2,0,"正在加载中...",u.isOpen),l(n,3,0,u.dataSource),l(n,8,0,"name"),l(n,22,0,"age"),l(n,36,0,"address"),l(n,51,0,20,300,u.pageIndex)},function(l,n){l(n,13,0,_._26(n,14).column.sortable,"asc"===_._26(n,14).column.sort,"desc"===_._26(n,14).column.sort),l(n,27,0,_._26(n,28).column.sortable,"asc"===_._26(n,28).column.sort,"desc"===_._26(n,28).column.sort),l(n,41,0,_._26(n,42).column.sortable,"asc"===_._26(n,42).column.sort,"desc"===_._26(n,42).column.sort)})}function c(l){return _._37(0,[(l()(),_._15(0,0,null,null,1,"h1",[["id","纱幕-Scrim"]],null,null,null,null,null)),(l()(),_._35(-1,null,["\n        纱幕 Scrim\n      "])),(l()(),_._15(2,0,null,null,1,"h2",[["id","何时使用"]],null,null,null,null,null)),(l()(),_._35(-1,null,["\n        何时使用\n      "])),(l()(),_._15(4,0,null,null,1,"h2",[["id","代码演示"]],null,null,null,null,null)),(l()(),_._35(-1,null,["\n        代码演示\n      "])),(l()(),_._15(6,0,null,null,17,"p",[],null,null,null,null,null)),(l()(),_._15(7,0,null,null,16,"nt-example",[],null,null,null,m.b,m.a)),_._14(8,49152,null,0,d.a,[],null,null),(l()(),_._35(-1,0,["\n  "])),(l()(),_._15(10,0,null,0,5,"nt-example-showcase",[],null,null,null,p.b,p.a)),_._14(11,49152,null,0,f.a,[],null,null),(l()(),_._35(-1,0,["\n    "])),(l()(),_._15(13,0,null,0,1,"demo-scrim-basic",[],null,null,null,o,R)),_._14(14,49152,null,0,P,[],null,null),(l()(),_._35(-1,0,["\n  "])),(l()(),_._35(-1,0,["\n  "])),(l()(),_._15(17,0,null,0,2,"nt-example-legend",[["ntTitle","基本"]],null,null,null,K.b,K.a)),_._14(18,49152,null,0,I.a,[],{title:[0,"title"]},null),(l()(),_._35(-1,0,["最简单的下拉菜单。"])),(l()(),_._35(-1,0,["\n  "])),(l()(),_._15(21,0,null,0,1,"nt-example-code",[],null,null,null,T.b,T.a)),_._14(22,1097728,null,0,w.a,[_.J,_.n],{code:[0,"code"]},null),(l()(),_._35(-1,0,["\n"])),(l()(),_._35(-1,null,["\n"])),(l()(),_._15(25,0,null,null,1,"h2",[["id","API"]],null,null,null,null,null)),(l()(),_._35(-1,null,["\n        API\n      "])),(l()(),_._15(27,0,null,null,27,"table",[],null,null,null,null,null)),(l()(),_._35(-1,null,["\n"])),(l()(),_._15(29,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),_._35(-1,null,["\n"])),(l()(),_._15(31,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),_._35(-1,null,["\n"])),(l()(),_._15(33,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._35(-1,null,["参数"])),(l()(),_._35(-1,null,["\n"])),(l()(),_._15(36,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._35(-1,null,["说明"])),(l()(),_._35(-1,null,["\n"])),(l()(),_._15(39,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._35(-1,null,["类型"])),(l()(),_._35(-1,null,["\n"])),(l()(),_._15(42,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._35(-1,null,["默认值"])),(l()(),_._35(-1,null,["\n"])),(l()(),_._35(-1,null,["\n"])),(l()(),_._35(-1,null,["\n"])),(l()(),_._15(47,0,null,null,6,"tbody",[],null,null,null,null,null)),(l()(),_._35(-1,null,["\n"])),(l()(),_._15(49,0,null,null,3,"tr",[],null,null,null,null,null)),(l()(),_._35(-1,null,["\n"])),(l()(),_._15(51,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),_._35(-1,null,["\n"])),(l()(),_._35(-1,null,["\n"])),(l()(),_._35(-1,null,["\n"])),(l()(),_._35(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,18,0,"基本"),l(n,22,0,u.basicCode)},null)}Object.defineProperty(n,"__esModule",{value:!0});var _=u("WT6e"),i=function(){},r=u("Tsuc"),s=u("C+bv"),m=u("C73v"),d=u("DoA5"),p=u("jnb2"),f=u("TS6a"),h=u("udBo"),g=u("FKqo"),b=u("akf3"),C=u("hIvL"),v=function(){function l(l,n,u,e){this._elementRef=l,this._renderer=n,this._componentFactoryResolver=u,this._viewContainerRef=e;var t=this._componentFactoryResolver.resolveComponentFactory(C.a);this._componentRef=this._viewContainerRef.createComponent(t);var a=window.getComputedStyle(this._elementRef.nativeElement);"absolute"===a.position&&"absolute"===a.position||this._renderer.setStyle(this._elementRef.nativeElement,"position","relative"),this._renderer.appendChild(this._elementRef.nativeElement,this._componentRef.location.nativeElement)}return Object.defineProperty(l.prototype,"text",{set:function(l){this._componentRef.instance.text=l},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"scrim",{set:function(l){this._componentRef.instance.isOpen=Object(b.a)(l)},enumerable:!0,configurable:!0}),l.prototype.ngOnDestroy=function(){this._renderer.removeChild(this._elementRef.nativeElement,this._componentRef.location.nativeElement),this._componentRef.destroy()},l}(),y=u("QcMw"),x=u("Q2dM"),S=u("IEsu"),O=u("lmxi"),k=u("F3kr"),D=u("DgAs"),P=function(){function l(){this.isOpen=!1,this.dataSource=[{name:"张三",age:20,address:"北京"},{name:"李四",age:22,address:"上海"},{name:"王五",age:18,address:"广州"},{name:"赵六",age:27,address:"大连"}],this.pageIndex=1}return l.prototype.onPageChange=function(l){var n=this;this.pageIndex=l,this.isOpen=!0,setTimeout(function(l){return n.isOpen=!1},500)},l}(),R=_._13({encapsulation:2,styles:[],data:{}});_._11("demo-scrim-basic",P,function(l){return _._37(0,[(l()(),_._15(0,0,null,null,1,"demo-scrim-basic",[],null,null,null,o,R)),_._14(1,49152,null,0,P,[],null,null)],null,null)},{},{},[]);var K=u("FigG"),I=u("JefN"),T=u("WCdf"),w=u("yaHl"),A=function(){this.basicCode=u("X5ca")},j=_._13({encapsulation:2,styles:[],data:{}}),E=_._11("nt-scrim-document",A,function(l){return _._37(0,[(l()(),_._15(0,0,null,null,1,"nt-scrim-document",[],null,null,null,c,j)),_._14(1,49152,null,0,A,[],null,null)],null,null)},{},{},[]),F=u("Xjw4"),G=u("9Sd6"),M=u("XHgV"),N=u("1T37"),V=u("+j5Y"),Y=u("ySNe"),W=u("bkcK"),X=u("L97D"),$=u("WifD"),z=u("DSM8"),J=u("Otgr"),B=u("WoKC"),H=u("bVDu"),L=u("bfOx");u.d(n,"ScrimDocumentModuleNgFactory",function(){return Q});var Q=_._12(i,[],function(l){return _._22([_._23(512,_.k,_._8,[[8,[r.a,s.a,E]],[3,_.k],_.E]),_._23(4608,F.m,F.l,[_.A,[2,F.v]]),_._23(6144,G.b,null,[F.c]),_._23(4608,G.c,G.c,[[2,G.b]]),_._23(4608,M.a,M.a,[]),_._23(5120,N.c,N.a,[[3,N.c],_.G,M.a]),_._23(5120,N.f,N.e,[[3,N.f],M.a,_.G]),_._23(4608,V.i,V.i,[N.c,N.f,_.G,F.c]),_._23(5120,V.d,V.j,[[3,V.d],F.c]),_._23(4608,V.h,V.h,[N.f,F.c]),_._23(5120,V.e,V.m,[[3,V.e],F.c]),_._23(4608,V.b,V.b,[V.i,V.d,_.k,V.h,V.e,_.g,_.w,_.G,F.c]),_._23(5120,V.k,V.l,[V.b]),_._23(512,F.b,F.b,[]),_._23(512,Y.a,Y.a,[]),_._23(512,G.a,G.a,[]),_._23(512,W.f,W.f,[]),_._23(512,M.b,M.b,[]),_._23(512,N.b,N.b,[]),_._23(512,V.f,V.f,[]),_._23(512,X.a,X.a,[]),_._23(512,$.a,$.a,[]),_._23(512,z.a,z.a,[]),_._23(512,J.a,J.a,[]),_._23(512,B.a,B.a,[]),_._23(512,H.a,H.a,[]),_._23(512,L.p,L.p,[[2,L.v],[2,L.m]]),_._23(512,i,i,[]),_._23(1024,L.k,function(){return[[{path:"",component:A}]]},[])])})}});