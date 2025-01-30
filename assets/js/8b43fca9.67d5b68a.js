"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[937],{7376:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"webhooks/index","title":"Introducci\xf3n a Webhooks","description":"Los webhooks permiten a tu sistema recibir notificaciones autom\xe1ticas en tiempo real cuando ocurren ciertos eventos en nuestra plataforma. Esto elimina la necesidad de realizar consultas peri\xf3dicas a nuestra API, mejorando la eficiencia y reduciendo la latencia en la integraci\xf3n.","source":"@site/docs/webhooks/index.mdx","sourceDirName":"webhooks","slug":"/webhooks/","permalink":"/docs/webhooks/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"guides","previous":{"title":"Autenticaci\xf3n","permalink":"/docs/authentication/"},"next":{"title":"Endpoints: Webhooks","permalink":"/docs/webhooks/handle-webhooks"}}');var o=s(4848),i=s(8453);const r={},c="Introducci\xf3n a Webhooks",t={},l=[{value:"C\xf3mo funcionan los webhooks",id:"c\xf3mo-funcionan-los-webhooks",level:2},{value:"Formato de las solicitudes",id:"formato-de-las-solicitudes",level:2},{value:"Validaci\xf3n de firmas",id:"validaci\xf3n-de-firmas",level:2},{value:"Manejo de errores",id:"manejo-de-errores",level:2},{value:"Mejoras y mejores pr\xe1cticas",id:"mejoras-y-mejores-pr\xe1cticas",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"introducci\xf3n-a-webhooks",children:"Introducci\xf3n a Webhooks"})}),"\n",(0,o.jsx)(n.p,{children:"Los webhooks permiten a tu sistema recibir notificaciones autom\xe1ticas en tiempo real cuando ocurren ciertos eventos en nuestra plataforma. Esto elimina la necesidad de realizar consultas peri\xf3dicas a nuestra API, mejorando la eficiencia y reduciendo la latencia en la integraci\xf3n."}),"\n",(0,o.jsx)(n.h2,{id:"c\xf3mo-funcionan-los-webhooks",children:"C\xf3mo funcionan los webhooks"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Configura tu URL de Webhook:"})," Proporciona una URL en tu sistema que est\xe9 preparada para recibir solicitudes HTTP POST."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Suscr\xedbete a eventos:"})," Selecciona los eventos relevantes para los que deseas recibir notificaciones."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Recibe notificaciones:"})," Cuando ocurra un evento, enviaremos una solicitud HTTP POST a la URL configurada con los detalles del evento en formato JSON."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"formato-de-las-solicitudes",children:"Formato de las solicitudes"}),"\n",(0,o.jsx)(n.p,{children:"Cada solicitud de webhook incluir\xe1 los siguientes elementos:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Encabezados HTTP:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Content-Type: application/json"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"X-Signature: <firma>"})," (para validar la autenticidad de la solicitud, ver ",(0,o.jsx)(n.a,{href:"/docs/webhooks/#validaci%C3%B3n-de-firmas",children:"Validaci\xf3n de firmas"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Cuerpo del mensaje:"}),"\nContiene un objeto JSON con los detalles del evento. Para m\xe1s informaci\xf3n sobre los diferentes eventos y sus esquemas, consulta la ",(0,o.jsx)(n.a,{href:"/docs/webhooks/events",children:"documentaci\xf3n de eventos"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"validaci\xf3n-de-firmas",children:"Validaci\xf3n de firmas"}),"\n",(0,o.jsxs)(n.p,{children:["Por razones de seguridad, todas las solicitudes de webhook incluyen una firma digital en el encabezado ",(0,o.jsx)(n.code,{children:"X-Signature"}),". Esta firma permite verificar que la solicitud proviene de nuestra plataforma y que no ha sido alterada."]}),"\n",(0,o.jsx)(n.p,{children:"Para validar la firma:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Calcula un hash HMAC usando el cuerpo del mensaje y la clave secreta de tu webhook."}),"\n",(0,o.jsxs)(n.li,{children:["Compara el hash calculado con el valor en el encabezado ",(0,o.jsx)(n.code,{children:"X-Signature"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Ejemplo de c\xf3digo para validaci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const crypto = require('crypto');\n\nfunction validateSignature(body, receivedSignature, secretKey) {\n  const computedSignature = crypto\n    .createHmac('sha256', secretKey)\n    .update(body, 'utf8')\n    .digest('hex');\n  return computedSignature === receivedSignature;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"manejo-de-errores",children:"Manejo de errores"}),"\n",(0,o.jsx)(n.p,{children:"Si tu servidor no puede procesar una solicitud de webhook, deber\xe1s responder con un c\xf3digo de estado HTTP diferente a 2xx. En este caso:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Reintentaremos la entrega del webhook hasta 10 veces."}),"\n",(0,o.jsxs)(n.li,{children:["El intervalo entre reintentos seguir\xe1 una f\xf3rmula de retroceso exponencial: ",(0,o.jsx)(n.code,{children:"2 ^ (intentos - 1) * retraso"}),", donde el retraso es de 5 segundos."]}),"\n",(0,o.jsx)(n.li,{children:"Despu\xe9s de 10 intentos fallidos, el webhook ser\xe1 deshabilitado autom\xe1ticamente."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"mejoras-y-mejores-pr\xe1cticas",children:"Mejoras y mejores pr\xe1cticas"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Seguridad:"})," Utiliza HTTPS para proteger la comunicaci\xf3n entre tu servidor y nuestra plataforma."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Escalabilidad:"})," Aseg\xfarate de que tu servidor pueda manejar m\xfaltiples solicitudes simult\xe1neamente."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Logs:"})," Registra todas las solicitudes de webhooks y sus respuestas para facilitar la depuraci\xf3n."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Para obtener m\xe1s detalles sobre c\xf3mo configurar y probar los webhooks, consulta nuestras gu\xedas avanzadas en la documentaci\xf3n."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var a=s(6540);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);