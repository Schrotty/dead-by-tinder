(this["webpackJsonpkiller-tinder"]=this["webpackJsonpkiller-tinder"]||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(9),r=a.n(s);a(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(10),l=a(11),c=a(4),d=a(14),m=a(13),h=a(2),u=a(3),p=a(12),v=(a(26),a(5)),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).drag=n.a.createRef(),i.overlay=n.a.createRef(),i.times=n.a.createRef(),i.heart=n.a.createRef(),i.star=n.a.createRef(),i.state={killer:v[0],pos:0},i.animate=i.animate.bind(Object(c.a)(i)),i.onSwipeLeft=i.onSwipeLeft.bind(Object(c.a)(i)),i.onSwipeRight=i.onSwipeRight.bind(Object(c.a)(i)),i.onStarring=i.onStarring.bind(Object(c.a)(i)),i}return Object(l.a)(a,[{key:"changeProfile",value:function(){for(var e=this.state.pos;e===this.state.pos;)e=Math.floor(Math.random()*v.length);this.setState({pos:e,killer:v[e]});var t=document.getElementById("swiper");t.classList.add("animated","bounceIn","fast"),t.addEventListener("animationend",(function e(){t.classList.remove("animated","bounceIn","fast"),t.removeEventListener("animationend",e)}))}},{key:"animate",value:function(e){var t=document.getElementById("swiper");t.classList.add("animated",e,"slow");var a=this;t.addEventListener("animationend",(function i(){t.classList.remove("animated",e,"slow"),t.removeEventListener("animationend",i),a.overlay.current.classList.remove("visible","red","green","blue"),a.times.current.classList.remove("visible"),a.heart.current.classList.remove("visible"),a.star.current.classList.remove("visible"),a.changeProfile()}))}},{key:"onSwipeLeft",value:function(){this.overlay.current.classList.add("visible","red"),this.times.current.classList.add("visible"),this.animate("bounceOutLeft")}},{key:"onSwipeRight",value:function(){this.overlay.current.classList.add("visible","green"),this.heart.current.classList.add("visible"),this.animate("bounceOutRight")}},{key:"onStarring",value:function(){this.overlay.current.classList.add("visible","blue"),this.star.current.classList.add("visible"),this.animate("bounceOutRight")}},{key:"onSwipeUp",value:function(){document.getElementById("desc").classList.add("swiped-up"),document.getElementById("image").classList.add("min"),document.getElementById("profile-description").classList.add("maxed")}},{key:"onSwipedDown",value:function(){document.getElementById("desc").classList.remove("swiped-up"),document.getElementById("image").classList.remove("min"),document.getElementById("profile-description").classList.remove("maxed")}},{key:"render",value:function(){return n.a.createElement(p.a,{onSwipedLeft:this.onSwipeLeft,onSwipedRight:this.onSwipeRight,onSwipedUp:this.onSwipeUp,onSwipedDown:this.onSwipedDown,preventDefaultTouchmoveEvent:!0},n.a.createElement("div",{id:"swiper",className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{id:"profile-image",className:"row"},n.a.createElement("div",{className:"column"},n.a.createElement("img",{id:"image",src:"/dead-by-tinder/images/"+this.state.killer.id+".png",alt:this.props.killer}),n.a.createElement("div",{ref:this.overlay,className:"image-overlay"},n.a.createElement("div",{ref:this.times,className:"overlay-text"},n.a.createElement(h.a,{icon:u.d})),n.a.createElement("div",{ref:this.heart,className:"overlay-text"},n.a.createElement(h.a,{icon:u.a})),n.a.createElement("div",{ref:this.star,className:"overlay-text"},n.a.createElement(h.a,{icon:u.c})))))),n.a.createElement("div",{id:"desc",className:"card-content"},n.a.createElement("div",{id:"profile",className:"row"},n.a.createElement("div",{id:"profile-name",className:"row"},n.a.createElement("div",{className:"column"},n.a.createElement("span",{id:"name"},this.state.killer.name))),n.a.createElement("div",{id:"profile-location",className:"row"},n.a.createElement("div",{className:"column"},n.a.createElement(h.a,{icon:u.b}),n.a.createElement("span",{id:"location"},this.state.killer.location))),n.a.createElement("div",{id:"profile-description",className:"row"},n.a.createElement("div",{id:"profile-long-description"},n.a.createElement("p",null,this.state.killer.description)))))),n.a.createElement("div",{id:"actions",className:"row"},n.a.createElement("div",{className:"column column"},n.a.createElement("span",{onMouseUp:this.onSwipeLeft},n.a.createElement(h.a,{icon:u.d})),n.a.createElement("span",{onMouseUp:this.onStarring},n.a.createElement(h.a,{icon:u.c})),n.a.createElement("span",{onMouseUp:this.onSwipeRight},n.a.createElement(h.a,{icon:u.a})))))}}]),a}(n.a.Component);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e){e.exports=JSON.parse('[{"id":"trapper","name":"Evan MacMillan","range":32,"location":"The MacMillan Estate","description":"There is a vast monster of a man with a hideous grin torn across the mask that keeps stalking my every move. Similar to a hunter, he tracks us, priming devastating traps amongst the greenery. Extreme vigilance and a light step is essential in avoiding the blood-curdling clench of a bear trap or the clutches of what I\'ve taken to calling \\"The Miserable Smiling Killer\\". I have but many times managed to get caught in one of these traps. I have nothing but a fear for the feeling of blunt trap spikes grinding against my bones or for the heavy and deliberate footsteps which always inevitably reveal a plastered, sadistic grin. With the traps and the Trapper, it has so far been a constant battle between looking up and looking down."},{"id":"anna","name":"Anna","range":20,"location":"Hunting Hatchets","description":"A figure clad in the head of a hare. A most disturbing sight. This new foe holds something human within her."},{"id":"wraith","name":"Philip Ojomo","range":32,"location":"Autohaven Wreckers","description":"There\'s another apparition, more terrifying than anything I\'ve ever seen, hunting amongst the shadows here. It moves like a silhouette, appearing and disappearing at the sound of a dreaded bell."},{"id":"cannibal","name":"Bubba Sawyer","range":32,"location":"None","description":"Whether Killers perform their heinous acts by the compulsions of their diseased minds, or if they are forced into them by external pressures, has long been a matter of debate."},{"id":"plague","name":"Adiris","range":32,"location":"Red Forest","description":"When she was five years old, Adiris, the youngest of a family of seven, was left on the brick-red burning steps of the Temple of Purgation at the centre of Babylon."},{"id":"hillbilly","name":"Max Thompson Jr.","range":32,"location":"Coldwind Farm","description":"A most terrible man to behold. His physique is all twisted and disfigured as of by some awful accident."}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.2ae86ba9.chunk.js.map