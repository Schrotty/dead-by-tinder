(this["webpackJsonpkiller-tinder"]=this["webpackJsonpkiller-tinder"]||[]).push([[0],{10:function(e,t,a){},17:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(11),s=a.n(o);a(10),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(5);function l(){if("undefined"!==typeof document.fullscreenElement)return"fullscreenElement";if("undefined"!==typeof document.mozFullScreenElement)return"mozFullScreenElement";if("undefined"!==typeof document.msFullscreenElement)return"msFullscreenElement";if("undefined"!==typeof document.webkitFullscreenElement)return"webkitFullscreenElement";throw new Error("fullscreenElement is not supported by this browser")}var d=a(12),h=a(13),c=a(4),m=a(16),u=a(15),f=a(2),g=a(3),p=a(14),w=(a(27),a(6)),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).drag=i.a.createRef(),n.overlay=i.a.createRef(),n.times=i.a.createRef(),n.heart=i.a.createRef(),n.star=i.a.createRef(),n.state={killer:w[0],pos:0},n.animate=n.animate.bind(Object(c.a)(n)),n.onSwipeLeft=n.onSwipeLeft.bind(Object(c.a)(n)),n.onSwipeRight=n.onSwipeRight.bind(Object(c.a)(n)),n.onStarring=n.onStarring.bind(Object(c.a)(n)),n.config={trackMouse:!0,trackTouch:!0,preventDefaultTouchmoveEvent:!0},n}return Object(h.a)(a,[{key:"changeProfile",value:function(){for(var e=this.state.pos;e===this.state.pos;)e=Math.floor(Math.random()*w.length);this.setState({pos:e,killer:w[e]});var t=document.getElementById("swiper");t.classList.add("animated","bounceIn","fast"),t.addEventListener("animationend",(function e(){t.classList.remove("animated","bounceIn","fast"),t.removeEventListener("animationend",e)}))}},{key:"animate",value:function(e){var t=document.getElementById("swiper");t.classList.add("animated",e,"slow");var a=this;t.addEventListener("animationend",(function n(){t.classList.remove("animated",e,"slow"),t.removeEventListener("animationend",n),a.overlay.current.classList.remove("visible","red","green","blue"),a.times.current.classList.remove("visible"),a.heart.current.classList.remove("visible"),a.star.current.classList.remove("visible"),a.changeProfile()}))}},{key:"onSwipeLeft",value:function(){this.overlay.current.classList.add("visible","red"),this.times.current.classList.add("visible"),this.animate("bounceOutLeft"),this.onSwipedDown()}},{key:"onSwipeRight",value:function(){this.overlay.current.classList.add("visible","green"),this.heart.current.classList.add("visible"),this.animate("bounceOutRight"),this.onSwipedDown()}},{key:"onStarring",value:function(){this.overlay.current.classList.add("visible","blue"),this.star.current.classList.add("visible"),this.animate("bounceOutRight"),this.onSwipedDown()}},{key:"onSwipeUp",value:function(){document.getElementById("desc").classList.add("swiped-up"),document.getElementById("image").classList.add("min"),document.getElementById("image-overlay").classList.add("maxed"),document.getElementById("profile-description").classList.add("maxed")}},{key:"onSwipedDown",value:function(){document.getElementById("desc").classList.remove("swiped-up"),document.getElementById("image").classList.remove("min"),document.getElementById("image-overlay").classList.remove("maxed"),document.getElementById("profile-description").classList.remove("maxed")}},{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({onSwipedLeft:this.onSwipeLeft,onSwipedRight:this.onSwipeRight,onSwipedUp:this.onSwipeUp,onSwipedDown:this.onSwipedDown,preventDefaultTouchmoveEvent:!0},this.config),i.a.createElement("div",{id:"swiper",className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{id:"profile-image",className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement("img",{id:"image",src:"/dead-by-tinder/images/"+this.state.killer.id+".png",alt:this.props.killer}),i.a.createElement("div",{id:"image-overlay",ref:this.overlay,className:"image-overlay"},i.a.createElement("div",{ref:this.times,className:"overlay-text"},i.a.createElement(f.a,{icon:g.d})),i.a.createElement("div",{ref:this.heart,className:"overlay-text"},i.a.createElement(f.a,{icon:g.a})),i.a.createElement("div",{ref:this.star,className:"overlay-text"},i.a.createElement(f.a,{icon:g.c})))))),i.a.createElement("div",{id:"desc",className:"card-content"},i.a.createElement("div",{id:"profile",className:"row"},i.a.createElement("div",{id:"profile-name",className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement("span",{id:"name"},this.state.killer.name))),i.a.createElement("div",{id:"profile-location",className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement(f.a,{icon:g.b}),i.a.createElement("span",{id:"location"},this.state.killer.location))),i.a.createElement("div",{id:"profile-description",className:"row"},i.a.createElement("p",{id:"profile-long-description"},this.state.killer.description))))),i.a.createElement("div",{id:"actions",className:"row"},i.a.createElement("div",{className:"column column"},i.a.createElement("span",{onMouseUp:this.onSwipeLeft},i.a.createElement(f.a,{icon:g.d})),i.a.createElement("span",{onMouseUp:this.onStarring},i.a.createElement(f.a,{icon:g.c})),i.a.createElement("span",{onMouseUp:this.onSwipeRight},i.a.createElement(f.a,{icon:g.a})))))}}]),a}(i.a.Component);function v(){var e=i.a.useRef(null);try{var t=function(e){var t=i.a.useState(null!=document[l()]),a=Object(r.a)(t,2),n=a[0],o=a[1];return i.a.useLayoutEffect((function(){return document.onfullscreenchange=function(){return o(null!=document[l()])},function(){return document.onfullscreenchange=void 0}})),[n,function(){null!=e.current&&e.current.requestFullscreen().then((function(){o(null!=document[l()])})).catch((function(){o(!1)}))}]}(e),a=Object(r.a)(t,2);a[0],a[1]}catch(n){!1,void 0,console.log("error")}return i.a.createElement(y,{ref:e})}s.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('[{"id":"trapper","name":"Evan MacMillan","range":32,"location":"The MacMillan Estate","description":"There is a vast monster of a man with a hideous grin torn across the mask that keeps stalking my every move. Similar to a hunter, he tracks us, priming devastating traps amongst the greenery. Extreme vigilance and a light step is essential in avoiding the blood-curdling clench of a bear trap or the clutches of what I\'ve taken to calling \\"The Miserable Smiling Killer\\". I have but many times managed to get caught in one of these traps. I have nothing but a fear for the feeling of blunt trap spikes grinding against my bones or for the heavy and deliberate footsteps which always inevitably reveal a plastered, sadistic grin. With the traps and the Trapper, it has so far been a constant battle between looking up and looking down."},{"id":"anna","name":"Anna","range":20,"location":"Hunting Hatchets","description":"A figure clad in the head of a hare. A most disturbing sight. This new foe holds something human within her. Some shards of ordinary life. She seems to be a hunter. I have met many different beings in this place, but this is the first one with a natural skill of hunting. In any other place one could deem it a talent. But her knack for tracking, capturing and killing is something else here. There is something else in her too, she seems to seek something."},{"id":"wraith","name":"Philip Ojomo","range":32,"location":"Autohaven Wreckers","description":"There\'s another apparition, more terrifying than anything I\'ve ever seen, hunting amongst the shadows here. It moves like a silhouette, appearing and disappearing at the sound of a dreaded bell. It\'s impossible to track it. Several times it has caught me without me even seeing it closing in. Often convinced I have my back covered, it has promptly materialized right behind me to strike from close range. Stay still and watch the fog. Don\'t move, don\'t blink and for god\'s sake don\'t breathe. If you can control your fear long enough and can show self control, sometimes it is possible to see its shimmer as it glides forward if caught at just the right light. I pray for your safety."},{"id":"cannibal","name":"Bubba Sawyer","range":32,"location":"None","description":"Whether Killers perform their heinous acts by the compulsions of their diseased minds, or if they are forced into them by external pressures, has long been a matter of debate. But for one Killer, nature and nurture are inextricably linked. Leatherface kills not from a desire to exert his will over others, to satisfy carnal urges, or even to quiet the voices in his head. He kills because he is scared. Scared that others will hurt him; scared that his family will be displeased with him, scared that their shared willingness to eat human flesh will be discovered."},{"id":"plague","name":"Adiris","range":32,"location":"Red Forest","description":"When she was five years old, Adiris, the youngest of a family of seven, was left on the brick-red burning steps of the Temple of Purgation at the centre of Babylon. To process her shock and sorrow, she held onto the belief that the Gods had a plan for her. Her new life was one of quiet servitude. She would tend to the gardens, prepare ceremonial meals, and polish ceremonial incense burners. At night, she would pray for a sign that would reveal her purpose."},{"id":"hillbilly","name":"Max Thompson Jr.","range":32,"location":"Coldwind Farm","description":"A most terrible man to behold. His physique is all twisted and disfigured as of by some awful accident."},{"id":"freddy","name":"Frederick \\"Freddy\\" Charles Krueger","range":0,"location":"Springwood","description":"This place plays tricks on your mind\u2026constantly I question whether I dream or if I am awake. This most recent horrid ghoul seems to bridge that gap \u2013 between the states of being awake or asleep. I saw him hunting another poor soul, someone who was not as lucky as me. A man with a hat and a claw clad hand, a scarred man of sorts. He spotted me and what actually happened next is still a mystery to me. Dreams took over, and I was sure to die. But I woke up. Not like in the manner where I awake at the campfire, but instead I just woke up\u2026inside this wretched forest, with memories of nightmares within. I am now afraid to sleep, but also to stay awake.\u201d"},{"id":"ghost","name":"Danny \\"Jed Olsen\\" Johnson","range":0,"location":"None","description":""},{"id":"sally","name":"Sally Smithson","range":0,"location":"Crotus Prenn Asylum","description":"A new varmint has entered the arena. I spotted her as she, somehow, moved through a wall. Clad in bandages that tell an untold tale of something horrid. This...nurse as it seems, brings me new angst during my lonely nights, as my mind runs amok."},{"id":"pig","name":"Amanda Young","range":0,"location":"Gideon Meat Plant","description":"At first I actually believed that it was a pig that slept in front of me on the ground. An animal that somehow had eluded the banalities of my old life and managed to end up at this forsaken and forgotten place. But then it rose, from crouch to standing, with its lifeless eyes nailed to my person. I ran, as I have so brutally learnt to do. My curiosity halted my escape after a few feet and I hid in a cabinet. The Pig moved like a predator \u2013 and I saw: a human body wearing a pig\u2019s head as ornament. It walked by the cabinet and its snout was just a few inches away from me. I held my breath, aching for freedom. A sudden sound caught the pig\u2019s attention and it walked away. But not without giving me a last, final glance, as if it wanted to inform me that I was given a second chance. I will not get a third."},{"id":"demog","name":"Unknown","range":0,"location":"Hawkins National Laboratory","description":"A blooming mouth full of needle-like teeth for a face, large, curved, razor-sharp claws, and powerful legs to pounce on victims, make The Demogorgon a frightening monster to face in any dimension. It is a nightmare of unrestrained, feral rage as it hunts down its prey and rips it to pieces, devouring every last morsel of flesh and gore, leaving nothing for scavengers. The creature is untouched by any sense of compassion or restraint. Looming over its victim, it shows no doubt or mercy, just the pure instinct of its insatiable blood lust as it delivers the deathblow. A perfect hunter, The Demogorgon is a macabre testament to the horrors lurking in the Upside Down and why it was choice pickings for The Entity."},{"id":"myers","name":"Michael Myers","range":0,"location":"Haddonfield","description":"Something, or rather someone, is here now. I\'ve never seen this... Shape before. A man hiding behind a mask. He comes with a determination. But more worrying, he comes with an apparent grasp of the hunt. He does not strike me as someone who even went unwillingly to this place. Is there more to this being than I can fathom?"},{"id":"clown","name":"Kenneth \\"Jeffrey Hawk\\" Chase","range":0,"location":"Crotus Prenn Asylum","description":"As I journeyed through the foggy veils that demarcate the realms of this place, I saw that, for the first time, I was not alone. Something traversed these forgotten byways, its bright colors still clearly visible, even through the muting effect of the mist that roiled between us. As we emerged into a new, yet somehow familiar, place, I saw it clearly for the first time: a carney\'s caravan, pulled by something that appeared to be a horse but was, to my eyes, older and more terrible. I watched from the trees as a crack appeared at the doorway and a warm, golden light spilled forth into this desolate place. The effect was, I suspect, deliberately inviting, but the figure that emerged was anything but: its costume a hodge-podge of ringmaster, clown and other fairground attire. Its face was a nightmare in greasepaint, a caricature of a smile slashed across its flabby lips. At its waist were a collection of what looked for all the world like fingers. But what creature would be so monstrous as to collect such trophies? The Clown surveyed its new surrounding and its gaze lit on me. A rictus split its face in two and it nodded at me before returning to the caravan. I suspect that it prefers its victims to be less aware than I, and I thanked the stars for that."},{"id":"oni","name":"Kazan Yamaoka","range":0,"location":"Yamaoka Estate","description":"Honouring his family name was never enough for Kazan Yamaoka. He wanted to surpass his father\'s reputation and end what he saw as the thinning of samurai culture with farmers often posing as samurai. His father tried to turn Kazan\'s attention to more noble pursuits, but Kazan refused to heed his advice, and borrowing his father\'s Katana, he embarked on a dark pilgrimage to prove his worth and rid Japan of impostors. Ignoring the code that had been taught to him, Kazan killed impostors in the hills and the valleys, on the beaches and in the woodland."},{"id":"hag","name":"Lisa Sherwood","range":0,"location":"Backwater Swamp","description":"A new terror stalks the darkness; her appearance strikes me as more intense than the others after but a glimpse of her haggard silhouette. Twisted and torn in unspeakable ways, with greyish dead skin stretched out over her emaciated body. Her arm is a horrid overgrown deformity capable of slashing through both flesh and bone alike. Her very presence speaks of endless torture similar to mine. I wonder - did she refuse the entity\'s calling until broken or did she wish for this?"},{"id":"spirit","name":"Rin Yamaoka","range":0,"location":"Yamaoka Estate","description":"She inherited incredible fury from her ancestors. The wrath that flows through her veins is her legacy. The terrible pain she suffered set it off. Swift and lethal, The Spirit exacts her revenge endlessly."},{"id":"caleb","name":"Caleb Quinn","range":0,"location":"Grave of Glenvale","description":"Born in the dust-ridden badlands of the American Midwest, Caleb Quinn was son to struggling Irish immigrants. On the edge of the frontier, sickness, famine, and death were common sights, and pioneers contended for whatever scraps they could claim while tycoons feasted. Caleb\'s father, once an engineer, had few options to ply his trade as businesses posted a common sign: No Irish Need Apply. His antiquated tools laid untouched for years until Caleb uncovered them. Noticing his son\'s interest in the trade, he gifted him his old wrench."},{"id":"herman","name":"Herman Carter","range":0,"location":"L\xe9ry\'s Memorial Institute","description":"I have difficulty keeping my sanity. Each day, this altering world provides me with new trials. A man wearing the robes of a doctor crossed my path. From afar, I witness him walking around, searching.. But he was not...normal. Eyes and mouth pried open, in a painful and disturbing way. Where do these fiends stem from? I do not trust him, he looks like he wants to bring pain, not healing? I will stay away, it is the wisest thing to do."},{"id":"legion","name":"Frank Morrison/ Julie Kostenko/ Susie/ Joey","range":0,"location":"Ormond","description":"Frank Morrison was nineteen and had little to show for it. He\'d stopped attending school after being kicked out of the basketball team for shoving a referee into the stands. Yet Frank was a man of potential, who could light up a room despite his bleak childhood. At six years old, he\'d been taken away from Calgary to start a circuit of foster homes. No matter how many times he\'d lashed out, threw tantrums and got into fights, they\'d kept moving him to new, unfamiliar houses. His last move had been three years prior when his last foster dad, Clive Andrews, had picked him up from the adoption centre. They\'d been on the road for seven hours before reaching a small bungalow in Ormond. It would be the longest time they\'d spend together. Clive was too busy trading cheques from Family Services for drinks at the bar."}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.39148db4.chunk.js.map