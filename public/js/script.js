!function(){function n(e){e.preventDefault();var t,r,n,l,o,a=e.target,s=(r=(t=a).elements,n=Object.keys(r).filter(function(e){return"honeypot"!==r[e].name}).map(function(e){return void 0!==r[e].name?r[e].name:0<r[e].length?r[e].item(0).name:void 0}).filter(function(e,t,n){return n.indexOf(e)==t&&e}),l={},n.forEach(function(e){var t=r[e];if(l[e]=t.value,t.length){for(var n=[],o=0;o<t.length;o++){var a=t.item(o);(a.checked||a.selected)&&n.push(a.value)}
l[e]=n.join(", ")}}),l.formDataNameOrder=JSON.stringify(n),l.formGoogleSheetName=t.dataset.sheet||"responses",l.formGoogleSendEmail=t.dataset.email||"",console.log(l),l);if(s.email&&(o=s.email,!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(o))){var i=a.querySelector(".email-invalid");if(i)return!(i.style.display="block")}else{!function(e){for(var t=e.querySelectorAll("button"),n=0;n<t.length;n++)t[n].disabled=!0}(a);var c=a.action,u=new XMLHttpRequest;u.open("POST",c),u.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u.onreadystatechange=function(){console.log(u.status,u.statusText),console.log(u.responseText);var e=a.querySelector(".form-elements");e&&(e.style.display="none");var t=a.querySelector(".thankyou_message");t&&(t.style.display="block")};var d=Object.keys(s).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(s[e])}).join("&");u.send(d)}}
document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll("form.gform"),t=0;t<e.length;t++)e[t].addEventListener("submit",n,!1)},!1)}();