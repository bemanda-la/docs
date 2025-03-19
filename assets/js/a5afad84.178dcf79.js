"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[587],{8922:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"webhooks/events","title":"Documentaci\xf3n de Eventos de Webhooks","description":"Esta secci\xf3n detalla los eventos disponibles que puedes suscribirte mediante nuestros webhooks. Cada evento tiene un esquema espec\xedfico para el cuerpo del mensaje enviado en la notificaci\xf3n.","source":"@site/docs/webhooks/events.mdx","sourceDirName":"webhooks","slug":"/webhooks/events","permalink":"/docs/webhooks/events","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"guides","previous":{"title":"Endpoints: Webhooks","permalink":"/docs/webhooks/handle-webhooks"},"next":{"title":"Consulta de Usuario por ID","permalink":"/docs/users/"}}');var o=s(4848),a=s(8453);const d={},r="Documentaci\xf3n de Eventos de Webhooks",c={},l=[{value:"Eventos Disponibles",id:"eventos-disponibles",level:2},{value:"1. Creaci\xf3n de Usuario",id:"1-creaci\xf3n-de-usuario",level:3},{value:"2. Modificaci\xf3n de Usuario",id:"2-modificaci\xf3n-de-usuario",level:3},{value:"3. Creaci\xf3n de un Pr\xe9stamo",id:"3-creaci\xf3n-de-un-pr\xe9stamo",level:3},{value:"Consideraciones Generales",id:"consideraciones-generales",level:2}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"documentaci\xf3n-de-eventos-de-webhooks",children:"Documentaci\xf3n de Eventos de Webhooks"})}),"\n",(0,o.jsx)(n.p,{children:"Esta secci\xf3n detalla los eventos disponibles que puedes suscribirte mediante nuestros webhooks. Cada evento tiene un esquema espec\xedfico para el cuerpo del mensaje enviado en la notificaci\xf3n."}),"\n",(0,o.jsx)(n.h2,{id:"eventos-disponibles",children:"Eventos Disponibles"}),"\n",(0,o.jsx)(n.h3,{id:"1-creaci\xf3n-de-usuario",children:"1. Creaci\xf3n de Usuario"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Descripci\xf3n:"})," Este evento se dispara cuando se crea un nuevo usuario en la plataforma. Despu\xe9s de recibir este evento, se recomienda consultar la informaci\xf3n del usuario en la API correspondiente:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET /v1/users/:user_id"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Nombre del evento:"})," ",(0,o.jsx)(n.code,{children:"user.created"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Ejemplo de payload:"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "event": "user.created",\n  "data": {\n    "user_id": "018c0f5b-4d4b-7bde-89a6-6f2a4d60f56e",\n    "application_id": "01f3d0f9-7c6a-4b6e-97c6-2f3a4c50d78f"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"2-modificaci\xf3n-de-usuario",children:"2. Modificaci\xf3n de Usuario"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Descripci\xf3n:"})," Este evento se dispara cuando se modifica la informaci\xf3n de un usuario existente. Despu\xe9s de recibir este evento, se recomienda consultar la informaci\xf3n actualizada del usuario en la API correspondiente:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET /v1/users/:user_id"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Nombre del evento:"})," ",(0,o.jsx)(n.code,{children:"user.updated"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Ejemplo de payload:"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "event": "user.updated",\n  "data": {\n    "user_id": "018c0f5b-4d4b-7bde-89a6-6f2a4d60f56e",\n    "application_id": "01f3d0f9-7c6a-4b6e-97c6-2f3a4c50d78f"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"3-creaci\xf3n-de-un-pr\xe9stamo",children:"3. Creaci\xf3n de un Pr\xe9stamo"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Descripci\xf3n:"})," Este evento se dispara cuando se crea un nuevo pr\xe9stamo en la plataforma. Despu\xe9s de recibir este evento, se recomienda consultar la informaci\xf3n del pr\xe9stamo en la API correspondiente:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET /v1/loans/:loan_id"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Nombre del evento:"})," ",(0,o.jsx)(n.code,{children:"loan.created"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Ejemplo de payload:"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "event": "loan.created",\n  "data": {\n    "loan_id": "018c0f5b-4d4b-7bde-89a6-6f2a4d60f56e",\n    "user_id": "018c0f5b-4d4b-7bde-89a6-6f2a4d60f56e",\n    "application_id": "01f3d0f9-7c6a-4b6e-97c6-2f3a4c50d78f"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"consideraciones-generales",children:"Consideraciones Generales"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Campos comunes:"})," Todos los eventos incluyen un campo ",(0,o.jsx)(n.code,{children:"event"})," que indica el tipo de evento y un objeto ",(0,o.jsx)(n.code,{children:"data"})," que contiene los detalles espec\xedficos del evento."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Consulta del recurso:"})," Es recomendable que, tras recibir un evento, se realice una consulta a la API correspondiente para obtener informaci\xf3n actualizada del recurso."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Seguridad:"})," Aseg\xfarate de validar la firma digital incluida en los encabezados del webhook para garantizar la autenticidad de las solicitudes. Para m\xe1s detalles, consulta la secci\xf3n de ",(0,o.jsx)(n.a,{href:"/docs/webhooks/",children:"validaci\xf3n de firmas"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre c\xf3mo manejar estos eventos en tu servidor, consulta la ",(0,o.jsx)(n.a,{href:"/docs/webhooks/",children:"gu\xeda de implementaci\xf3n de webhooks"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var i=s(6540);const o={},a=i.createContext(o);function d(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);