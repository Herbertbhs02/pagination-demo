(this["webpackJsonppagination-demo"]=this["webpackJsonppagination-demo"]||[]).push([[0],{23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(2),a=n(15),r=n.n(a),i=(n(23),n(5)),o=n.n(i),u=n(16),j=n(3),b=(n(6),function(t){var e=t.posts;return Object(c.jsx)("ul",{className:"list",children:e.map((function(t){return Object(c.jsxs)("li",{className:"list",children:[Object(c.jsxs)("span",{className:"id",children:[t.id," "]})," ",t.title]},t.id)}))})}),l=function(t){for(var e=t.length,n=t.pagesize,s=t.selectednumber,a=t.activebutton,r=Math.ceil(e/n),i=[],o=1;o<=r;o++)i.push(o);var u=i.map((function(t){return Object(c.jsx)("button",{onClick:function(){return s(t)},className:t===a?"activebtn":"btn",children:t},t)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Pagination component"}),Object(c.jsxs)("button",{children:[" ",Object(c.jsx)("i",{class:"material-icons",children:"arrow_back"})]}),"  ",u,Object(c.jsxs)("button",{children:[" ",Object(c.jsx)("i",{class:"material-icons",children:"arrow_forward"})]})]})},d=n(17),p=n.n(d);var O=function(){var t=Object(s.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1],r=Object(s.useState)(1),i=Object(j.a)(r,2),d=i[0],O=i[1],h=Object(s.useState)(10),f=Object(j.a)(h,2),m=f[0],x=(f[1],Object(s.useState)(1)),v=Object(j.a)(x,2),g=v[0],w=v[1],k=Object(s.useState)(1),N=Object(j.a)(k,2),S=N[0],y=N[1];Object(s.useEffect)((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://jsonplaceholder.typicode.com/posts");case 2:e=t.sent,a(e.data),O(e.data.length);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var z=(g-1)*m,E=g*m,J=n.slice(z,E);return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"List below"}),Object(c.jsx)(b,{posts:J}),Object(c.jsx)(l,{length:d,pagesize:m,selectednumber:function(t){w(t),y(t)},activebutton:S})]})};r.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))},6:function(t,e,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.75e45bf4.chunk.js.map