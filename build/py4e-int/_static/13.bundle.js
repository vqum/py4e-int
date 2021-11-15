(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[13],{28902:(e,t,i)=>{!function(e){"use strict";e.defineMode("gas",(function(e,t){var i=[],n="",r={".abort":"builtin",".align":"builtin",".altmacro":"builtin",".ascii":"builtin",".asciz":"builtin",".balign":"builtin",".balignw":"builtin",".balignl":"builtin",".bundle_align_mode":"builtin",".bundle_lock":"builtin",".bundle_unlock":"builtin",".byte":"builtin",".cfi_startproc":"builtin",".comm":"builtin",".data":"builtin",".def":"builtin",".desc":"builtin",".dim":"builtin",".double":"builtin",".eject":"builtin",".else":"builtin",".elseif":"builtin",".end":"builtin",".endef":"builtin",".endfunc":"builtin",".endif":"builtin",".equ":"builtin",".equiv":"builtin",".eqv":"builtin",".err":"builtin",".error":"builtin",".exitm":"builtin",".extern":"builtin",".fail":"builtin",".file":"builtin",".fill":"builtin",".float":"builtin",".func":"builtin",".global":"builtin",".gnu_attribute":"builtin",".hidden":"builtin",".hword":"builtin",".ident":"builtin",".if":"builtin",".incbin":"builtin",".include":"builtin",".int":"builtin",".internal":"builtin",".irp":"builtin",".irpc":"builtin",".lcomm":"builtin",".lflags":"builtin",".line":"builtin",".linkonce":"builtin",".list":"builtin",".ln":"builtin",".loc":"builtin",".loc_mark_labels":"builtin",".local":"builtin",".long":"builtin",".macro":"builtin",".mri":"builtin",".noaltmacro":"builtin",".nolist":"builtin",".octa":"builtin",".offset":"builtin",".org":"builtin",".p2align":"builtin",".popsection":"builtin",".previous":"builtin",".print":"builtin",".protected":"builtin",".psize":"builtin",".purgem":"builtin",".pushsection":"builtin",".quad":"builtin",".reloc":"builtin",".rept":"builtin",".sbttl":"builtin",".scl":"builtin",".section":"builtin",".set":"builtin",".short":"builtin",".single":"builtin",".size":"builtin",".skip":"builtin",".sleb128":"builtin",".space":"builtin",".stab":"builtin",".string":"builtin",".struct":"builtin",".subsection":"builtin",".symver":"builtin",".tag":"builtin",".text":"builtin",".title":"builtin",".type":"builtin",".uleb128":"builtin",".val":"builtin",".version":"builtin",".vtable_entry":"builtin",".vtable_inherit":"builtin",".warning":"builtin",".weak":"builtin",".weakref":"builtin",".word":"builtin"},a={};var s=(t.architecture||"x86").toLowerCase();function o(e,t){for(var i,n=!1;null!=(i=e.next());){if("/"===i&&n){t.tokenize=null;break}n="*"===i}return"comment"}return"x86"===s?(n="#",a.ax="variable",a.eax="variable-2",a.rax="variable-3",a.bx="variable",a.ebx="variable-2",a.rbx="variable-3",a.cx="variable",a.ecx="variable-2",a.rcx="variable-3",a.dx="variable",a.edx="variable-2",a.rdx="variable-3",a.si="variable",a.esi="variable-2",a.rsi="variable-3",a.di="variable",a.edi="variable-2",a.rdi="variable-3",a.sp="variable",a.esp="variable-2",a.rsp="variable-3",a.bp="variable",a.ebp="variable-2",a.rbp="variable-3",a.ip="variable",a.eip="variable-2",a.rip="variable-3",a.cs="keyword",a.ds="keyword",a.ss="keyword",a.es="keyword",a.fs="keyword",a.gs="keyword"):"arm"!==s&&"armv6"!==s||(n="@",r.syntax="builtin",a.r0="variable",a.r1="variable",a.r2="variable",a.r3="variable",a.r4="variable",a.r5="variable",a.r6="variable",a.r7="variable",a.r8="variable",a.r9="variable",a.r10="variable",a.r11="variable",a.r12="variable",a.sp="variable-2",a.lr="variable-2",a.pc="variable-2",a.r13=a.sp,a.r14=a.lr,a.r15=a.pc,i.push((function(e,t){if("#"===e)return t.eatWhile(/\w/),"number"}))),{startState:function(){return{tokenize:null}},token:function(e,t){if(t.tokenize)return t.tokenize(e,t);if(e.eatSpace())return null;var s,l,c=e.next();if("/"===c&&e.eat("*"))return t.tokenize=o,o(e,t);if(c===n)return e.skipToEnd(),"comment";if('"'===c)return function(e,t){for(var i,n=!1;null!=(i=e.next());){if(i===t&&!n)return!1;n=!n&&"\\"===i}}(e,'"'),"string";if("."===c)return e.eatWhile(/\w/),l=e.current().toLowerCase(),(s=r[l])||null;if("="===c)return e.eatWhile(/\w/),"tag";if("{"===c)return"bracket";if("}"===c)return"bracket";if(/\d/.test(c))return"0"===c&&e.eat("x")?(e.eatWhile(/[0-9a-fA-F]/),"number"):(e.eatWhile(/\d/),"number");if(/\w/.test(c))return e.eatWhile(/\w/),e.eat(":")?"tag":(l=e.current().toLowerCase(),(s=a[l])||null);for(var u=0;u<i.length;u++)if(s=i[u](c,e,t))return s},lineComment:n,blockCommentStart:"/*",blockCommentEnd:"*/"}}))}(i(4631))},2568:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var n=i(21294);class r{constructor(e){this.component_ready_promise=new Promise((e=>this._component_ready_resolve_fn=e)),this.optional=!1,void 0===window.allComponents&&(window.allComponents=[]),window.allComponents.push(this),e&&(this.sid=e.sid,this.graderactive=e.graderactive,this.showfeedback=!0,e.timed&&(this.isTimed=!0),e.enforceDeadline&&(this.deadline=e.deadline),$(e.orig).data("optional")?this.optional=!0:this.optional=!1,e.selector_id&&(this.selector_id=e.selector_id),void 0!==e.assessmentTaken?this.assessmentTaken=e.assessmentTaken:this.assessmentTaken=!0,void 0!==e.timedWrapper?this.timedWrapper=e.timedWrapper:location.href.indexOf("doAssignment")>=0?this.timedWrapper=$("h1#assignment_name").text():this.timedWrapper=null,$(e.orig).data("question_label")&&(this.question_label=$(e.orig).data("question_label"))),this.jsonHeaders=new Headers({"Content-type":"application/json; charset=utf-8",Accept:"application/json"})}async logBookEvent(e){if(this.graderactive)return;let t;return e.course=eBookConfig.course,e.clientLoginStatus=eBookConfig.isLoggedIn,e.timezoneoffset=(new Date).getTimezoneOffset()/60,this.percent&&(e.percent=this.percent),eBookConfig.useRunestoneServices&&eBookConfig.logLevel>0&&(t=this.postLogMessage(e)),this.isTimed&&!eBookConfig.debug||console.log("logging event "+JSON.stringify(e)),this.selector_id&&(e.div_id=this.selector_id.replace("-toggleSelectedQuestion",""),e.event="selectquestion",e.act="interaction",this.postLogMessage(e)),"function"==typeof n.j.updateProgress&&"edit"!=e.act&&0==this.optional&&n.j.updateProgress(e.div_id),t}async postLogMessage(e){var t;let i=new Request(eBookConfig.ajaxURL+"hsblog",{method:"POST",headers:this.jsonHeaders,body:JSON.stringify(e)});try{let e=await fetch(i);if(!e.ok)throw new Error("Failed to save the log entry");t=e.json()}catch(e){this.isTimed&&alert(`Error: Your action was not saved! The error was ${e}`),console.log(`Error: ${e}`)}return t}async logRunEvent(e){let t="done";if(!this.graderactive){if(e.course=eBookConfig.course,e.clientLoginStatus=eBookConfig.isLoggedIn,e.timezoneoffset=(new Date).getTimezoneOffset()/60,(this.forceSave||"to_save"in e==0)&&(e.save_code="True"),eBookConfig.useRunestoneServices&&eBookConfig.logLevel>0){let i=new Request(eBookConfig.ajaxURL+"runlog.json",{method:"POST",headers:this.jsonHeaders,body:JSON.stringify(e)}),n=await fetch(i);if(!n.ok)throw new Error("Failed to log the run");t=await n.json()}return this.isTimed&&!eBookConfig.debug||console.log("running "+JSON.stringify(e)),"function"==typeof n.j.updateProgress&&0==this.optional&&n.j.updateProgress(e.div_id),t}}async checkServer(e,t=!1){let i=this;if(this.checkServerComplete=new Promise((function(e,t){i.csresolver=e})),this.useRunestoneServices||this.graderactive){let t={};if(t.div_id=this.divid,t.course=eBookConfig.course,t.event=e,this.graderactive&&this.deadline&&(t.deadline=this.deadline,t.rawdeadline=this.rawdeadline,t.tzoff=this.tzoff),this.sid&&(t.sid=this.sid),!eBookConfig.practice_mode&&this.assessmentTaken){let e=new Request(eBookConfig.ajaxURL+"getAssessResults",{method:"POST",body:JSON.stringify(t),headers:this.jsonHeaders});try{let i=await fetch(e);t=await i.json(),this.repopulateFromStorage(t),this.csresolver("server")}catch(e){try{this.checkLocalStorage()}catch(e){console.log(e)}}}else this.loadData({}),this.csresolver("not taken")}else this.checkLocalStorage(),this.csresolver("local");t&&this.indicate_component_ready()}indicate_component_ready(){this.containerDiv.classList.add("runestone-component-ready"),this._component_ready_resolve_fn()}loadData(e){return null}repopulateFromStorage(e){null!==e&&this.shouldUseServer(e)?(this.restoreAnswers(e),this.setLocalStorage(e)):this.checkLocalStorage()}shouldUseServer(e){if("T"===e.correct||0===localStorage.length||!0===this.graderactive||this.isTimed)return!0;let t,i=localStorage.getItem(this.localStorageKey());if(null===i)return!0;try{t=JSON.parse(i)}catch(e){return console.log(e.message),localStorage.removeItem(this.localStorageKey()),!0}if(e.answer==t.answer)return!0;let n=new Date(t.timestamp);return new Date(e.timestamp)>=n}localStorageKey(){return eBookConfig.email+":"+eBookConfig.course+":"+this.divid+"-given"}addCaption(e){if(!this.isTimed){var t=document.createElement("p");this.question_label?(this.caption=`Activity: ${this.question_label} ${this.caption}  <span class="runestone_caption_divid">(${this.divid})</span>`,$(t).html(this.caption),$(t).addClass(`${e}_caption`)):($(t).html(this.caption+" ("+this.divid+")"),$(t).addClass(`${e}_caption`),$(t).addClass(`${e}_caption_text`)),this.capDiv=t,this.containerDiv.appendChild(t)}}hasUserActivity(){return this.isAnswered}checkCurrentAnswer(){console.log("Each component should provide an implementation of checkCurrentAnswer")}async logCurrentAnswer(){console.log("Each component should provide an implementation of logCurrentAnswer")}renderFeedback(){console.log("Each component should provide an implementation of renderFeedback")}disableInteraction(){console.log("Each component should provide an implementation of disableInteraction")}toString(){return`${this.constructor.name}: ${this.divid}`}queueMathJax(e){"2"===MathJax.version.substring(0,1)?MathJax.Hub.Queue(["Typeset",MathJax.Hub,e]):MathJax.typesetPromise([e])}}window.RunestoneBase=r},2013:(e,t,i)=>{"use strict";i.r(t);var n=i(2568),r=i(4631),a=i.n(r);i(28902),i(5321),i(96876),i(54086),i(99762),i(15734),window.LPList={};class s extends n.Z{constructor(e){super(e),this.useRunestoneServices=e.useRunestoneServices,this.element=e.orig,this.containerDiv=this.element,this.divid=this.element.id,this.resultElement=$(this.element).siblings("textarea"),this.feedbackElement=$(this.element).siblings("div");let t=this;this.textAreas=[],$(".code_snippet").each((function(e,i){let n=a().fromTextArea(i,{lineNumbers:!0,mode:$(t.element).attr("data-lang"),indentUnit:4,matchBrackets:!0,autoMatchParens:!0,extraKeys:{Tab:"indentMore","Shift-Tab":"indentLess"}});$(n.getWrapperElement()).resizable({resize:function(){n.setSize($(this).width(),$(this).height()),n.refresh()}}),t.textAreas.push(n)})),$(this.element).click((e=>t.onSaveAndRun(e).then(null))),this.checkServer("lp_build",!0)}async onSaveAndRun(e){$(this.resultElement).val("Building..."),$(this.feedbackElement).text("").attr("");let t,i={code_snippets:this.textareasToData()};this.setLocalStorage({answer:i,timestamp:new Date});try{t=await this.logBookEvent({event:"lp_build",answer:JSON.stringify(i),path:window.location.href.replace(eBookConfig.app,"").slice(1),div_id:this.divid})}catch(e){return void $(this.feedbackElement).val("Error contacting server: {err}.").attr("class","alert alert-danger")}"answer"in t||(t.answer={}),t.answer.code_snippets=this.textareasToData(),this.displayAnswer(t),this.setLocalStorage(t)}displayAnswer(e){"errors"in e?$(this.feedbackElement).text(e.errors.join("<br>")).attr("class","alert alert-danger"):($(this.resultElement).val(e.answer.resultString),null==e.correct?$(this.feedbackElement).text("Response recorded.").attr("class","alert alert-success"):e.correct>=100?$(this.feedbackElement).text("Correct. Grade: "+e.correct+"%").attr("class","alert alert-success"):$(this.feedbackElement).text("Incorrect. Grade: "+e.correct+"%").attr("class","alert alert-danger"),$(this.resultElement).scrollTop(this.resultElement[0].scrollHeight))}textareasToData(){return $.map(this.textAreas,(function(e,t){return e.getValue()}))}dataToTextareas(e){$(this.textAreas).each((function(t,i){i.setValue((e.answer.code_snippets||"")[t]||"")}))}restoreAnswers(e){this.dataToTextareas(e),this.displayAnswer(e)}checkLocalStorage(){var e;if(localStorage.length>0){var t=this.localStorageKey(),i=localStorage.getItem(t);if(null!==i){try{e=JSON.parse(i)}catch(e){return console.log(e.message),void localStorage.removeItem(t)}this.restoreAnswers(e)}}}setLocalStorage(e){localStorage.setItem(this.localStorageKey(),JSON.stringify(e))}}$(document).bind("runestone:login-complete",(function(){$("[data-component=lp_build]").each((function(e){try{LPList[this.id]=new s({orig:this,useRunestoneServices:eBookConfig.useRunestoneServices})}catch(e){console.log(`Error rendering LP Problem ${this.id}`)}}))})),void 0===window.component_factory&&(window.component_factory={}),window.component_factory.lp_build=function(e){return new s(e)}}}]);
//# sourceMappingURL=13.bundle.js.map?v=c8794b6a660d97bfddca