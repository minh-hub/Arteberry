// !function(d){"use strict";"undefined"==typeof ScrollProgressBar&&(d.ScrollProgressBar=function(){var t={color:"#ffa453",opacity:1,placement:"top",size:"10px",zIndex:9999};function ScrollProgressBar(e){for(var o in e){if(!1===t.hasOwnProperty(o))throw new Error('\n "'+o+'" is not a valid option for ScrollProgressBar.');if("color"===o&&"string"!=typeof e[o])throw new Error('\n color must be a string ("#ffa453", "rgba(255,255,255)", "blue" etc...)');if("opacity"===o&&("string"==typeof e[o]||"number"==typeof e[o])&&(1<parseInt(e[o])||parseInt(e[o])<0))throw new Error("\n opacity must only be an integer or string between 0-1.");if("placement"===o&&void 0===["top","left","right","bottom"].find(function(t){return t===e[o]}))throw new Error("\n placement must either be top, left, right or bottom.");if("size"===o&&"string"!=typeof e[o])throw new Error('\n size must be a string ("12px", "5rem", "8em" etc...)');if("zIndex"===o&&("string"!=typeof e[o]&&"number"!=typeof e[o]||parseInt(e[o]).toString().length!==e[o].toString().length))throw new Error("\n zIndex must only be an integer or string with a numeric value.");o!==t[o]&&(t[o]=e[o])}this.options=t}return ScrollProgressBar.prototype.start=function(){var t=document.documentElement||document.querySelector("html")||document.getElementsByTagName("HTML")[0],e=document.body||document.querySelector("body")||document.getElementsByTagName("BODY")[0],o=document.head||document.querySelector("head")||document.getElementsByTagName("head")[0],n=document.createElement("span"),i=("_scrollbar"+Math.random()).replace(".","");n.id=i;var r=document.createElement("style");r.type="text/css";var s,a,l,c,p,m,h="#"+i+"{ transition: transform 1s; -ms-transition: transform 0.08s; -wekbit-transition: transform 0.08s; position: fixed; z-index: "+this.options.zIndex+" !important; background-color: "+this.options.color+"; opacity: "+this.options.opacity+";";s=d.pageYOffset||(t||document.body.parentNode||document.body).scrollTop,d.innerWidth||t.clientWidth||e.clientWidth,a=d.innerHeight||t.clientHeight||e.clientHeight,l=Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)-a,c=s/l,n.style.transform="scaleX("+s/l+")","top"===this.options.placement||"bottom"===this.options.placement?(h+="width: 100%;",h+="height: "+this.options.size+";",h+="left: 0;",h+="transform-origin: left;","top"===this.options.placement?h+="top: 0;":h+="bottom: 0;",n.style.transform="scaleX("+c+")"):"left"!==this.options.placement&&"right"!==this.options.placement||(h+="height: 100%;",h+="width: "+this.options.size+";",h+="top: 0;",h+="transform-origin: top;","left"===this.options.placement?h+="left: 0;":h+="right: 0;",n.style.transform="scaleY("+c+")"),h+="}",r.innerHTML=h,o.appendChild(r),e.appendChild(n);var f=this;d.addEventListener("resize",function(){p=p||setTimeout(function(){p=null,s=d.pageYOffset||(t||document.body.parentNode||document.body).scrollTop,d.innerWidth||t.clientWidth||e.clientWidth,a=d.innerHeight||t.clientHeight||e.clientHeight,l=Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)-a,c=s/l,"top"===f.options.placement||"bottom"===f.options.placement?n.style.transform="scaleX("+c+")":"left"!==f.options.placement&&"right"!==f.options.placement||(n.style.transform="scaleY("+c+")")},66)},!1),document.addEventListener("scroll",function(){m&&d.cancelAnimationFrame(m),m=d.requestAnimationFrame(function(){s=d.pageYOffset||(t||document.body.parentNode||document.body).scrollTop,l=Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)-a,c=s/l,"top"===f.options.placement||"bottom"===f.options.placement?n.style.transform="scaleX("+c+")":"left"!==f.options.placement&&"right"!==f.options.placement||(n.style.transform="scaleY("+c+")")})})},ScrollProgressBar}())}(window);
// new ScrollProgressBar({color: '#0029FF', opacity: 1, placement: 'bottom', size: '2px'}).start();

var scroll = window.requestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000 / 60) };

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

loop();

function isElementInViewport(el) {

    const rect = el.getBoundingClientRect();

    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);


    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

// $(document).ready(function()
// {$('.toggle').click(function(){$('.banner').toggleClass('active');});});

$('#toggle').on('click', function(e) {
    e.preventDefault();
    $('.banner').toggleClass('active');
    $('.toggle').toggleClass('active')
})
