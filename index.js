import{S as f,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=r=>`  <a href="${r.largeImageURL}">
            <div class="gallery-item">
                <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
                <div class="info">
                    <p>Likes: ${r.likes}</p>
                    <p>Views: ${r.views}</p>
                    <p>Comments: ${r.comments}</p>
                    <p>Downloads: ${r.downloads}</p>
                </div>
            </div>
        </a>`,h="https://pixabay.com",p=r=>{const s=new URLSearchParams({key:"46898279-65d5dcdd2fa29fc168f36b5dd",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return console.log(s.toString()),fetch(`${h}/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},a=document.querySelector(".search-container"),l=document.querySelector(".galerry-js"),u=document.querySelector(".loader"),y=new f(".galerry-js a",{captionsData:"alt",captionDelay:250});function d(){u.classList.add("hidden")}function g(){u.classList.remove("hidden")}const L=async r=>{r.preventDefault();const s=a.elements.user_query.value.trim();if(!s){c.warning({title:"Warning",message:"Please enter a search query."});return}l.innerHTML="",g();try{const o=await p(s);if(o.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.reset(),d();return}const n=o.hits.map(e=>m(e)).join("");l.innerHTML=n,y.refresh(),a.reset()}catch(o){c.error({title:"Error",message:"An error occurred while fetching images. Please try again later."}),console.error(o)}finally{d()}};a.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
