"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[551],{8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var a=s(6540);const i={},r=a.createContext(i);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:n},e.children)}},9413:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"campaigns/id-emails","title":"Obtener lista de emails de una campa\xf1a por ID","description":"Esta gu\xeda explica c\xf3mo consultar la lista de correos electr\xf3nicos enviados dentro de una campa\xf1a, incluyendo la informaci\xf3n sobre su estado (enviado, recibido, abierto, clickeado) y la paginaci\xf3n de los resultados.","source":"@site/docs/campaigns/id-emails.mdx","sourceDirName":"campaigns","slug":"/campaigns/id-emails","permalink":"/docs/campaigns/id-emails","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"guides","previous":{"title":"Obtener m\xe9tricas de una campa\xf1a por ID","permalink":"/docs/campaigns/id-analytics"}}');var i=s(4848),r=s(8453);const l={},o="Obtener lista de emails de una campa\xf1a por ID",d={},c=[{value:"Endpoint",id:"endpoint",level:2},{value:"Par\xe1metros de ruta",id:"par\xe1metros-de-ruta",level:2},{value:"Par\xe1metros: Query Params",id:"par\xe1metros-query-params",level:2},{value:"Autenticaci\xf3n",id:"autenticaci\xf3n",level:2},{value:"Ejemplos de Llamadas",id:"ejemplos-de-llamadas",level:2},{value:"Usando cURL",id:"usando-curl",level:3},{value:"Usando Node.js",id:"usando-nodejs",level:3},{value:"Respuesta",id:"respuesta",level:2},{value:"Estructura de Respuesta",id:"estructura-de-respuesta",level:3},{value:"Detalles de los Campos",id:"detalles-de-los-campos",level:3},{value:"Campos del listado de emails de una campa\xf1a",id:"campos-del-listado-de-emails-de-una-campa\xf1a",level:3},{value:"Notas",id:"notas",level:2}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"obtener-lista-de-emails-de-una-campa\xf1a-por-id",children:"Obtener lista de emails de una campa\xf1a por ID"})}),"\n",(0,i.jsx)(n.p,{children:"Esta gu\xeda explica c\xf3mo consultar la lista de correos electr\xf3nicos enviados dentro de una campa\xf1a, incluyendo la informaci\xf3n sobre su estado (enviado, recibido, abierto, clickeado) y la paginaci\xf3n de los resultados."}),"\n",(0,i.jsx)(n.h2,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /v1/campaigns/:campaign_id/emails"})}),"\n",(0,i.jsx)(n.h2,{id:"par\xe1metros-de-ruta",children:"Par\xe1metros de ruta"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"campaign_id"})," (requerido): Identificador \xfanico de la campa\xf1a para la cual deseas obtener la lista de correos electr\xf3nicos enviados."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"par\xe1metros-query-params",children:"Par\xe1metros: Query Params"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"page"})," (opcional): N\xfamero de la p\xe1gina que se desea consultar. Valor por defecto: ",(0,i.jsx)(n.code,{children:"1"})," ."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"items_per_page"})," (opcional): Cantidad de elementos por p\xe1gina. Valor por defecto: ",(0,i.jsx)(n.code,{children:"10"})," ."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"orderBy (opcional)"}),": Campo y direcci\xf3n de ordenamiento. Formato: ",(0,i.jsx)(n.code,{children:"campo:asc"})," o ",(0,i.jsx)(n.code,{children:"campo:desc"}),". Ejemplo: ",(0,i.jsx)(n.code,{children:"sent_at:asc"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"autenticaci\xf3n",children:"Autenticaci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Este endpoint requiere autenticaci\xf3n mediante un token Bearer. Incluye el encabezado ",(0,i.jsx)(n.code,{children:"Authorization"})," en tu solicitud:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Authorization: Bearer <tu_token>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Aseg\xfarate de reemplazar ",(0,i.jsx)(n.code,{children:"<tu_token>"})," con un token v\xe1lido. Para obtener un token, consulta la gu\xeda de ",(0,i.jsx)(n.a,{href:"/docs/authentication/",children:"autenticaci\xf3n"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplos-de-llamadas",children:"Ejemplos de Llamadas"}),"\n",(0,i.jsx)(n.h3,{id:"usando-curl",children:"Usando cURL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET \\\n  \'{base_url}/v1/campaigns/:campaign_id/emails?page=1&items_per_page=10&orderBy=sent_at:asc\' \\\n  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\\n  -H "Content-Type: application/json"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"usando-nodejs",children:"Usando Node.js"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const fetch = require("node-fetch");\n\nasync function getCampaignEmails(campaign_id, page = 1, itemsPerPage = 10, token, orderBy) {\n  const queryParams = new URLSearchParams({\n    page,\n    items_per_page: itemsPerPage,\n    ...(orderBy && { orderBy }),\n  }).toString();\n\n  const response = await fetch(`${base_url}/v1/campaigns/${campaign_id}/emails?${queryParams}`, {\n    method: "GET",\n    headers: {\n      Authorization: `Bearer ${token}`,\n      "Content-Type": "application/json",\n    },\n  });\n\n  if (!response.ok) {\n    throw new Error(`Error fetching campaign emails: ${response.statusText}`);\n  }\n\n  const emailData = await response.json();\n  console.log(emailData);\n}\n\n// Ejemplo de uso\nconst campaign_id = "YOUR_CAMPAIGN_ID";\nconst token = "YOUR_ACCESS_TOKEN";\ngetCampaignEmails(campaign_id, 1, 10, token, "sent_at:asc").catch(console.error);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"respuesta",children:"Respuesta"}),"\n",(0,i.jsx)(n.p,{children:"La respuesta incluye la estructura est\xe1ndar para los recursos, con los siguientes elementos:"}),"\n",(0,i.jsx)(n.h3,{id:"estructura-de-respuesta",children:"Estructura de Respuesta"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "data": [\n    {\n      "email": "test9@mail.com",\n      "sent_at": null,\n      "received": false,\n      "opened": false,\n      "clicked": false\n    },\n    {\n      "email": "test6@mail.com",\n      "sent_at": null,\n      "received": false,\n      "opened": false,\n      "clicked": false\n    },\n    {\n      "email": "test7@mail.com",\n      "sent_at": null,\n      "received": false,\n      "opened": false,\n      "clicked": false\n    },\n    {\n      "email": "test8@mail.com",\n      "sent_at": null,\n      "received": false,\n      "opened": false,\n      "clicked": false\n    }\n  ],\n  "pagination": {\n    "total_items": 4,\n    "total_pages": 1,\n    "page": 1,\n    "items_per_page": 10\n  },\n  "error": null\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"detalles-de-los-campos",children:"Detalles de los Campos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"success:"})," Indica si la solicitud fue exitosa (",(0,i.jsx)(n.code,{children:"true"})," o ",(0,i.jsx)(n.code,{children:"false"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"data:"})," Lista de correos electr\xf3nicos asociados a la campa\xf1a."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"error:"})," Contendr\xe1 detalles de errores en caso de que existan, incluyendo:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"code:"})," C\xf3digo del error."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"message:"})," Mensaje general del error."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"errors:"})," Lista de errores espec\xedficos, cada uno con:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"message:"})," Descripci\xf3n del error."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"location:"})," Ubicaci\xf3n del error."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"pagination:"})," Informaci\xf3n de paginaci\xf3n de la consulta:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"page:"})," P\xe1gina actual de los resultados."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"items_per_page:"})," N\xfamero de elementos por p\xe1gina."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"total_items:"})," Total de elementos disponibles."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"total_pages:"})," Total de p\xe1ginas disponibles."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"campos-del-listado-de-emails-de-una-campa\xf1a",children:"Campos del listado de emails de una campa\xf1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"email:"})," Direcci\xf3n de correo electr\xf3nico del destinatario."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"sent_at:"})," Fecha y hora en que se envi\xf3 el correo (puede ser null si no se ha enviado)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"received:"})," Indica si el correo fue recibido por el destinatario (true o false)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"opened:"})," Indica si el correo fue abierto por el destinatario (true o false)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"clicked:"})," Indica si el destinatario hizo clic en alg\xfan enlace del correo (true o false)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Este endpoint utiliza el ID de la campa\xf1a proporcionado en la ruta para filtrar los correos electr\xf3nicos asociados."}),"\n",(0,i.jsxs)(n.li,{children:["Si no se especifican los par\xe1metros de paginaci\xf3n, se usan los valores predeterminados (",(0,i.jsx)(n.code,{children:"page=1"}),", ",(0,i.jsx)(n.code,{children:"items_per_page=10"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["El par\xe1metro orderBy permite ordenar los resultados seg\xfan un campo espec\xedfico en orden ascendente (",(0,i.jsx)(n.code,{children:"asc"}),") o descendente (",(0,i.jsx)(n.code,{children:"desc"}),"). Ejemplo: ",(0,i.jsx)(n.code,{children:"orderBy=email:asc"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Aseg\xfarate de que el token utilizado tenga los permisos necesarios para acceder a este recurso."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}}}]);