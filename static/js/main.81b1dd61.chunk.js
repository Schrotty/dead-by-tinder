(this["webpackJsonpkiller-tinder"]=this["webpackJsonpkiller-tinder"]||[]).push([[0],{15:function(e,a,t){e.exports=t(27)},20:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(9),o=t.n(r);t(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(10),l=t(11),c=t(4),d=t(14),m=t(13),h=t(2),p=t(3),u=(t(26),t(5)),g=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={killer:u[0],pos:0},n.handleClick=n.handleClick.bind(Object(c.a)(n)),n}return Object(l.a)(t,[{key:"handleClick",value:function(){for(var e=this.state.pos;e===this.state.pos;)e=Math.floor(Math.random()*u.length);this.setState({pos:e}),this.setState({killer:u[e]})}},{key:"onSwipeUp",value:function(){console.log("test")}},{key:"render",value:function(){return i.a.createElement("div",{id:"swiper",className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{id:"profile-image",className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement("img",{id:"image",src:"/dead-by-tinder/images/"+this.state.killer.id+".png",alt:this.props.killer})))),i.a.createElement("div",{id:"desc",className:"card-content"},i.a.createElement("div",{id:"profile",className:"row"},i.a.createElement("div",{id:"profile-name",className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement("span",{id:"name"},this.state.killer.name),i.a.createElement("span",{id:"radius"},this.state.killer.range))),i.a.createElement("div",{id:"profile-location",className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement(h.a,{icon:p.b}),i.a.createElement("span",{id:"location"},this.state.killer.location))),i.a.createElement("div",{id:"profile-description",className:"row"},i.a.createElement("div",{id:"profile-long-description"},i.a.createElement("p",null,this.state.killer.description)))),i.a.createElement("div",{id:"actions",className:"row"},i.a.createElement("div",{className:"column column"},i.a.createElement("span",{onMouseUp:this.handleClick},i.a.createElement(h.a,{icon:p.d})),i.a.createElement("span",null,i.a.createElement(h.a,{icon:p.c})),i.a.createElement("span",null,i.a.createElement(h.a,{icon:p.a}))))))}}]),t}(i.a.Component),f=t(12);var v=function(){var e=Object(f.a)({onSwipedUp:function(){return document.getElementById("desc").classList.add("swiped-up"),document.getElementById("image").classList.add("swiped-up"),void document.getElementById("profile-description").classList.add("maxed")},onSwipedDown:function(){return document.getElementById("desc").classList.remove("swiped-up"),document.getElementById("image").classList.remove("swiped-up"),void document.getElementById("profile-description").classList.remove("maxed")},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return i.a.createElement("div",e,i.a.createElement(g,null))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e){e.exports=JSON.parse('[{"id":"trapper","name":"Evan MacMillan","range":32,"location":"The MacMillan Estate","description":"There is a vast monster of a man with a hideous grin torn across the mask that keeps stalking my every move. Similar to a hunter, he tracks us, priming devastating traps amongst the greenery. Extreme vigilance and a light step is essential in avoiding the blood-curdling clench of a bear trap or the clutches of what I\'ve taken to calling \\"The Miserable Smiling Killer\\". I have but many times managed to get caught in one of these traps. I have nothing but a fear for the feeling of blunt trap spikes grinding against my bones or for the heavy and deliberate footsteps which always inevitably reveal a plastered, sadistic grin. With the traps and the Trapper, it has so far been a constant battle between looking up and looking down."},{"id":"anna","name":"Anna","range":20,"location":"Hunting Hatchets","description":"A figure clad in the head of a hare. A most disturbing sight. This new foe holds something human within her."},{"id":"wraith","name":"Philip Ojomo","range":32,"location":"Autohaven Wreckers","description":"There\'s another apparition, more terrifying than anything I\'ve ever seen, hunting amongst the shadows here. It moves like a silhouette, appearing and disappearing at the sound of a dreaded bell."},{"id":"cannibal","name":"Bubba Sawyer","range":32,"location":"None","description":"Whether Killers perform their heinous acts by the compulsions of their diseased minds, or if they are forced into them by external pressures, has long been a matter of debate."},{"id":"plague","name":"Adiris","range":32,"location":"Red Forest","description":"When she was five years old, Adiris, the youngest of a family of seven, was left on the brick-red burning steps of the Temple of Purgation at the centre of Babylon."},{"id":"hillbilly","name":"Max Thompson Jr.","range":32,"location":"Coldwind Farm","description":"A most terrible man to behold. His physique is all twisted and disfigured as of by some awful accident."}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.81b1dd61.chunk.js.map