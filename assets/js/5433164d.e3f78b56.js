"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[159],{6292:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>t});const a=JSON.parse('{"id":"loans/index","title":"Consulta de Pr\xe9stamo por ID","description":"Esta gu\xeda detalla c\xf3mo consultar la informaci\xf3n de un pr\xe9stamo en el sistema utilizando su ID, basada en el modelo definido.","source":"@site/docs/loans/index.mdx","sourceDirName":"loans","slug":"/loans/","permalink":"/docs/loans/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"guides","previous":{"title":"Consulta de Usuario por ID","permalink":"/docs/users/"}}');var i=s(4848),d=s(8453);const l={},o="Consulta de Pr\xe9stamo por ID",r={},t=[{value:"Endpoint",id:"endpoint",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Respuesta",id:"respuesta",level:2},{value:"Ejemplo de Respuesta",id:"ejemplo-de-respuesta",level:3},{value:"Descripci\xf3n de los Campos",id:"descripci\xf3n-de-los-campos",level:2},{value:"Campos del Pr\xe9stamo",id:"campos-del-pr\xe9stamo",level:3},{value:"Relaciones",id:"relaciones",level:3},{value:"Cuotas",id:"cuotas",level:4},{value:"Notas",id:"notas",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"consulta-de-pr\xe9stamo-por-id",children:"Consulta de Pr\xe9stamo por ID"})}),"\n",(0,i.jsx)(n.p,{children:"Esta gu\xeda detalla c\xf3mo consultar la informaci\xf3n de un pr\xe9stamo en el sistema utilizando su ID, basada en el modelo definido."}),"\n",(0,i.jsx)(n.h2,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /v1/loans/:loan_id"})}),"\n",(0,i.jsx)(n.h2,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"loan_id"})," (path): Identificador \xfanico del pr\xe9stamo en formato UUID."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"respuesta",children:"Respuesta"}),"\n",(0,i.jsx)(n.p,{children:"La respuesta incluye la informaci\xf3n b\xe1sica del pr\xe9stamo y sus relaciones relevantes, seg\xfan lo definido en el modelo."}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo-de-respuesta",children:"Ejemplo de Respuesta"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "018c0f5b-4d4b-7bde-89a6-6f2a4d60f56e",\n  "user_id": "01f4c5d9-3b6f-7e4a-93b6-2f1a3c50d78f",\n  "application_id": "02f4c5d9-3b6f-7e4a-93b6-2f1a3c50d78f",\n  "product_id": "03f4c5d9-3b6f-7e4a-93b6-2f1a3c50d78f",\n  "currency_id": "USD",\n  "requested_amount": 10000.00,\n  "interest_rate": 5.00,\n  "penalty_rate": 2.00,\n  "bonus_amount": 500.00,\n  "bonus_percentage": 5.00,\n  "total_amount": 10500.00,\n  "paid_amount": 5000.00,\n  "balance": 5500.00,\n  "installment_quantity": 12,\n  "requested_date": "2025-01-01T10:00:00Z",\n  "approved_date": "2025-01-05T10:00:00Z",\n  "credited_date": "2025-01-06T10:00:00Z",\n  "last_payment_date": "2025-06-01T10:00:00Z",\n  "fully_paid_date": null,\n  "status": {\n    "id": "in_course",\n    "name": "In Course",\n    "description": "El pr\xe9stamo est\xe1 en curso."\n  },\n  "installments": [\n    {\n      "id": "04f4c5d9-3b6f-7e4a-93b6-2f1a3c50d78f",\n      "due_date": "2025-02-01T10:00:00Z",\n      "due_amount": 1000.00,\n      "paid_amount": 500.00,\n      "balance": 500.00,\n      "number": 1,\n      "status": {\n        "id": "pending",\n        "name": "Pending",\n        "description": "La cuota est\xe1 pendiente de pago."\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n-de-los-campos",children:"Descripci\xf3n de los Campos"}),"\n",(0,i.jsx)(n.h3,{id:"campos-del-pr\xe9stamo",children:"Campos del Pr\xe9stamo"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"id:"})," Identificador \xfanico del pr\xe9stamo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"user_id:"})," Identificador \xfanico del usuario asociado al pr\xe9stamo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"application_id:"})," Identificador de la aplicaci\xf3n asociada."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"product_id:"})," Identificador del producto financiero asociado."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"currency_id:"})," Identificador de la moneda del pr\xe9stamo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"requested_amount:"})," Monto solicitado por el usuario."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"interest_rate:"})," Tasa de inter\xe9s aplicada al pr\xe9stamo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"penalty_rate:"})," Tasa de penalizaci\xf3n por incumplimiento."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"bonus_amount:"})," Monto del bono asociado al pr\xe9stamo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"bonus_percentage:"})," Porcentaje del bono sobre el pr\xe9stamo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"total_amount:"})," Monto total del pr\xe9stamo, incluyendo intereses y bonos."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"paid_amount:"})," Monto pagado hasta el momento."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"balance:"})," Saldo pendiente del pr\xe9stamo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"installment_quantity:"})," Cantidad total de cuotas del pr\xe9stamo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"requested_date:"})," Fecha en la que se solicit\xf3 el pr\xe9stamo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"approved_date:"})," Fecha en la que se aprob\xf3 el pr\xe9stamo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"credited_date:"})," Fecha en la que se acreditaron los fondos."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"last_payment_date:"})," Fecha del \xfaltimo pago realizado."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"fully_paid_date:"})," Fecha en la que se complet\xf3 el pago del pr\xe9stamo (si aplica)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"status:"})," Informaci\xf3n del estado actual del pr\xe9stamo:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"id:"})," Identificador \xfanico del estado (e.g., ",(0,i.jsx)(n.code,{children:"in_course"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"name:"})," Nombre descriptivo del estado."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"description:"})," Descripci\xf3n del estado."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"relaciones",children:"Relaciones"}),"\n",(0,i.jsx)(n.h4,{id:"cuotas",children:"Cuotas"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"id:"})," Identificador \xfanico de la cuota."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"due_date:"})," Fecha de vencimiento de la cuota."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"due_amount:"})," Monto debido para la cuota."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"paid_amount:"})," Monto pagado para la cuota."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"balance:"})," Saldo pendiente de la cuota."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"number:"})," N\xfamero de la cuota."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"status:"})," Informaci\xf3n del estado actual de la cuota:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"id:"})," Identificador \xfanico del estado (e.g., ",(0,i.jsx)(n.code,{children:"pending"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"name:"})," Nombre descriptivo del estado."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"description:"})," Descripci\xf3n del estado."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Aseg\xfarate de que el ",(0,i.jsx)(n.code,{children:"loan_id"})," corresponde a un pr\xe9stamo existente antes de realizar la consulta."]}),"\n",(0,i.jsx)(n.li,{children:"Para validar la autenticidad de las solicitudes, utiliza las firmas digitales incluidas en los encabezados del webhook."}),"\n",(0,i.jsx)(n.li,{children:"La respuesta puede incluir informaci\xf3n adicional relevante seg\xfan el contexto del pr\xe9stamo."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var a=s(6540);const i={},d=a.createContext(i);function l(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);