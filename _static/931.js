"use strict";(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[931],{63931:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var s=i(72773),o=i(2568);class n extends o.Z{constructor(e){super(e),this.origOpts=e,this.questions=$(e.orig).data("questionlist"),this.proficiency=$(e.orig).data("proficiency"),this.minDifficulty=$(e.orig).data("minDifficulty"),this.maxDifficulty=$(e.orig).data("maxDifficulty"),this.points=$(e.orig).data("points"),this.autogradable=$(e.orig).data("autogradable"),this.not_seen_ever=$(e.orig).data("not_seen_ever"),this.selector_id=$(e.orig).first().attr("id"),this.primaryOnly=$(e.orig).data("primary"),this.ABExperiment=$(e.orig).data("ab"),this.toggleOptions=$(e.orig).data("toggleoptions"),this.toggleLabels=$(e.orig).data("togglelabels"),this.limitBaseCourse=$(e.orig).data("limit-basecourse"),e.orig.id=this.selector_id}async initialize(){let e=this,t={selector_id:this.selector_id};this.questions?t.questions=this.questions:this.proficiency&&(t.proficiency=this.proficiency),this.minDifficulty&&(t.minDifficulty=this.minDifficulty),this.maxDifficulty&&(t.maxDifficulty=this.maxDifficulty),this.points&&(t.points=this.points),this.autogradable&&(t.autogradable=this.autogradable),this.not_seen_ever&&(t.not_seen_ever=this.not_seen_ever),this.primaryOnly&&(t.primary=this.primaryOnly),this.ABExperiment&&(t.AB=this.ABExperiment),this.timedWrapper&&(t.timedWrapper=this.timedWrapper),this.toggleOptions&&(t.toggleOptions=this.toggleOptions),this.toggleLabels&&(t.toggleLabels=this.toggleLabels),this.limitBaseCourse&&(t.limitBaseCourse=eBookConfig.basecourse);let i=this.origOpts,o=this.selector_id;console.log("getting question source");let n,a=new Request(`${eBookConfig.new_server_prefix}/assessment/get_question_source`,{method:"POST",headers:this.jsonHeaders,body:JSON.stringify(t)}),l=await fetch(a),r=await l.json();if(r=r.detail,r.indexOf("No preview")>=0)throw alert(`Error: Not able to find a question for ${o} based on the criteria`),new Error(`Unable to find a question for ${o}`);if(i.timed){n=(0,s._G)(r,{timed:!0,selector_id:o,assessmentTaken:i.assessmentTaken});for(let t of i.rqa)if(t.question==e){t.question=n.question;break}e.realComponent=n.question,e.containerDiv=n.question.containerDiv,e.realComponent.selectorId=o}else{if(t.toggleOptions){var g=t.toggleLabels.replace("togglelabels:","").trim();if(g){g=g.split(",");for(var c=0;c<g.length;c++)g[c]=g[c].trim()}var d,p,u,h=this.questions.split(", "),m="";document.getElementById("component-preview")||(m+='<div id="component-preview" class="col-md-6 toggle-preview" style="z-index: 999;"><div id="toggle-buttons"></div><div id="toggle-preview"></div></div>'),m+='<label for="'+o+'-toggleQuestion" style="margin-left: 10px">Toggle Question:</label><select id="'+o+'-toggleQuestion">';var f=[];for(d=0;d<h.length;d++){switch((p=(await this.getToggleSrc(h[d])).split('data-component="')[1]).slice(0,p.indexOf('"'))){case"activecode":u="Active Write Code";break;case"clickablearea":u="Clickable Area";break;case"dragndrop":u="Drag n Drop";break;case"fillintheblank":u="Fill in the Blank";break;case"multiplechoice":u="Multiple Choice";break;case"parsons":u="Parsons Mixed-Up Code";break;case"shortanswer":u="Short Answer"}f[d]=u,m+='<option value="'+h[d]+'">',g&&g[d]?m+=g[d]:m+=u+" - "+h[d],0==d&&t.toggleOptions.includes("lock")&&(m+=" (only this question will be graded)"),m+="</option>"}m+='</select><div id="'+o+'-toggleSelectedQuestion">';var v=r.split('id="')[1];v=v.split('"')[0],r=m+r+"</div>"}if(await(0,s.l4)(r,o,{selector_id:o,is_toggle:this.toggleOptions,is_select:!0,useRunestoneServices:!0}),t.toggleOptions){$("#component-preview").hide();var y=document.getElementById(o+"-toggleQuestion");for(d=0;d<y.options.length;d++)if(y.options[d].value==v){y.value=v,$("#"+o).data("toggle_current",v),$("#"+o).data("toggle_current_type",f[0]);break}y.addEventListener("change",async function(){await this.togglePreview(y.parentElement.id,t.toggleOptions,f),this.logBookEvent({event:"view_toggle",act:y.value,div_id:y.parentElement.id})}.bind(this))}}return l}async getToggleSrc(e){let t=new Request(`${eBookConfig.new_server_prefix}/assessment/htmlsrc?acid=${e}`,{method:"GET"}),i=await fetch(t);return(await i.json()).detail}async togglePreview(e,t,i){$("#toggle-buttons").html("");var o=document.getElementById(e).getElementsByTagName("select")[0],n=o.options[o.selectedIndex].value,a=await this.getToggleSrc(n);(0,s.l4)(a,"toggle-preview",{selector_id:"toggle-preview",is_toggle:this.toggleOptions,is_select:!0,useRunestoneServices:!0});let l=document.createElement("button");if($(l).text("Close Preview"),$(l).addClass("btn btn-default"),l.addEventListener("click",function(){$("#toggle-preview").html(""),o.value=$("#"+e).data("toggle_current"),$("#component-preview").hide(),this.logBookEvent({event:"close_toggle",act:o.value,div_id:o.parentElement.id})}.bind(this)),$("#toggle-buttons").append(l),!t.includes("lock")){let s=document.createElement("button");if($(s).text("Select this Problem"),$(s).addClass("btn btn-primary"),$(s).click(async function(){await this.toggleSet(e,n,a,i),$("#component-preview").hide(),this.logBookEvent({event:"select_toggle",act:n,div_id:e})}.bind(this)),$("#toggle-buttons").append(s),t.includes("transfer")){var r=$("#"+e).data("toggle_current_type"),g=i[o.selectedIndex];if("Parsons Mixed-Up Code"==r&&"Active Write Code"==g){let t=document.createElement("button");$(t).text("Transfer Response"),$(t).addClass("btn btn-primary"),$(t).click(async function(){await this.toggleTransfer(e,n,a,i)}.bind(this)),$("#toggle-buttons").append(t)}}}$("#component-preview").show()}async toggleSet(e,t,i,o){var n=e+"-toggleSelectedQuestion",a=document.getElementById(e).getElementsByTagName("select")[0];document.getElementById(n).innerHTML="",await(0,s.l4)(i,n,{selector_id:n,is_toggle:this.toggleOptions,is_select:!0,useRunestoneServices:!0});let l=new Request(`${eBookConfig.new_server_prefix}/assessment/set_selected_question?metaid=${e}&selected=${t}`,{});await fetch(l),$("#toggle-preview").html(""),$("#"+e).data("toggle_current",t),$("#"+e).data("toggle_current_type",o[a.selectedIndex])}async toggleTransfer(e,t,i,s){for(var o,n,a,l,r,g,c=document.getElementById(e+"-toggleSelectedQuestion").querySelectorAll("div[class^='answer']")[0].getElementsByClassName("prettyprint lang-py"),d="",p=0;p<c.length;p++){a=0,l="",(o=c[p].classList[2])&&o.includes("indent")&&(a=parseInt(a)+parseInt(o.slice(6,o.length))),(n=c[p].parentElement.parentElement.style.left)&&(a=parseInt(a)+parseInt(n.slice(0,n.indexOf("px"))/30));for(var u=0;u<a;u++)l+="    ";r=c[p].getElementsByTagName("span"),g=0;for(var h=0;h<r.length;h++)"#text"==r[h].childNodes[0].nodeName&&(0==p&&0==g?(d+=l+r[h].innerHTML,g++):0!=g?(d+=r[h].innerHTML,g++):(d=(d=d+"\n                            "+l+r[h].innerHTML).replace("                            ",""),g++))}var m=i.slice(0,i.indexOf("<textarea")+i.split("<textarea")[1].indexOf(">")+10),f=i.slice(i.indexOf("</textarea>"),i.length);i=m+d+f,await this.toggleSet(e,t,i,s),$("#component-preview").hide()}}void 0===window.component_factory&&(window.component_factory={}),window.component_factory.selectquestion=function(e){return new n(e)},$(document).on("runestone:login-complete",(async function(){let e=document.querySelectorAll("[data-component=selectquestion]");for(let t of e)try{if(0==$(t).closest("[data-component=timedAssessment]").length){let e=new n({orig:t});await e.initialize()}}catch(e){console.log(`Error rendering New Exercise ${t.id}\n                         Details: ${e}`),console.log(e.stack)}}))}}]);
//# sourceMappingURL=931.js.map