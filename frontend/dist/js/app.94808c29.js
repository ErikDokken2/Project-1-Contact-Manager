(function(t){function e(e){for(var a,o,n=e[0],l=e[1],d=e[2],m=0,u=[];m<n.length;m++)o=n[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(u.length)u.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var c=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1184:function(t,e,s){},"1b2d":function(t,e,s){},"418d":function(t,e,s){"use strict";s("1184")},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}}),e("router-view")],1)},r=[],o=(s("5de5"),s("2877")),n={},l=Object(o["a"])(n,i,r,!1,null,null,null),d=l.exports,c=s("8c4f"),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("RegisterCard")],1)},u=[],v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-center p-5"},[e("div",{staticClass:"card",staticStyle:{width:"25rem"}},[t._m(0),e("form",[e("div",{staticClass:"form-outline needs-validation p-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control",attrs:{type:"email",id:"form2Example1"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}}),e("label",{staticClass:"form-label",attrs:{for:"form2Example1"}},[t._v("Username")])]),e("div",{staticClass:"form-outline needs-validation p-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"form-control",attrs:{type:"password",id:"form2Example2"},domProps:{value:t.pass},on:{input:function(e){e.target.composing||(t.pass=e.target.value)}}}),e("label",{staticClass:"form-label",attrs:{for:"form2Example2"}},[t._v("Password")]),e("div",{staticClass:"invalid-feedback validationMsg"})]),e("div",{staticClass:"form-outline mb-4 needs-validation p-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm_pass,expression:"confirm_pass"}],staticClass:"form-control",attrs:{type:"password",id:"form2Example3"},domProps:{value:t.confirm_pass},on:{input:function(e){e.target.composing||(t.confirm_pass=e.target.value)}}}),e("label",{staticClass:"form-label",attrs:{for:"form2Example3"}},[t._v("Confirm Password")]),e("div",{staticClass:"invalid-feedback validationMsg"})]),e("button",{staticClass:"btn btn-block mb-4",attrs:{type:"button"},on:{click:t.handleSubmit}},[t._v("Sign up")]),e("div",{staticClass:"text-center"},[e("p",[t._v("Already a member? ")]),t._v(" "),e("button",{staticClass:"btn bg-light mb-3",on:{click:function(e){return t.goTo()}}},[t._v("Sign in")])])])])])},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container p-2"},[e("h3",[t._v("Register")])])}],h=(s("14d9"),s("cee4")),f={name:"RegisterCard",props:{},data(){return{user:"",pass:"",confirm_pass:"",firstName:"",lastName:""}},methods:{goTo(){this.$router.push("/")},async handleSubmit(){if(this.pass!==this.confirm_pass){alert("Passwords don't match");var t=document.getElementById("form2Example2"),e=document.getElementById("form2Example3");return t.classList.add("is-invalid"),void e.classList.add("is-invalid")}try{const t=await h["a"].post("https://www.urimus3600.xyz/test/signup-check.php",{username:this.user,password:this.pass});t.data.error?alert(t.data.error):this.$router.push("/")}catch(s){console.error(s),alert("Error registering user")}}}},b=f,_=(s("b4e6"),Object(o["a"])(b,v,p,!1,null,"04c29579",null)),g=_.exports,y={name:"Home",components:{RegisterCard:g}},C=y,w=Object(o["a"])(C,m,u,!1,null,null,null),x=w.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("LoginCard")],1)},E=[],P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-center p-5"},[e("div",{staticClass:"card",staticStyle:{width:"25rem"}},[t._m(0),e("form",[e("div",{staticClass:"form-outline p-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control",attrs:{type:"email",id:"form2Example1"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}}),e("label",{staticClass:"form-label",attrs:{for:"form2Example1"}},[t._v("Username")]),e("div",{staticClass:"invalid-feedback validationMsg"},[t._v("Field is required.")])]),e("div",{staticClass:"form-outline mb-4 p-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"form-control",attrs:{type:"password",id:"form2Example2"},domProps:{value:t.pass},on:{input:function(e){e.target.composing||(t.pass=e.target.value)}}}),e("label",{staticClass:"form-label",attrs:{for:"form2Example2"}},[t._v("Password")]),e("div",{staticClass:"invalid-feedback validationMsg"},[t._v("Field is required.")])]),e("button",{staticClass:"btn btn-block mb-4",attrs:{type:"button"},on:{click:function(e){return t.handleSubmit()}}},[t._v("Sign in")]),e("div",{staticClass:"text-center"},[e("a",[t._v(" Not a member?")]),t._v(" "),e("button",{staticClass:"btn btn-block mb-3",on:{click:function(e){return t.goRegister()}}},[t._v("Register")])])])])])},L=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container p-2"},[e("h3",[t._v("Login")])])}],k={name:"LoginCard",props:{},data(){return{user:"",pass:"",users:[],flag:!1}},methods:{handleSubmit(){var t=document.getElementById("form2Example1"),e=document.getElementById("form2Example2");0===t.value.trim().length?(t.classList.remove("is-valid"),t.classList.add("is-invalid")):(t.classList.remove("is-invalid"),t.classList.add("is-valid")),0==e.value.trim().length?(e.classList.remove("is-valid"),e.classList.add("is-invalid")):(e.classList.remove("is-invalid"),e.classList.add("is-valid"));try{h["a"].post("https://www.urimus3600.xyz/test/login.php",{userName:this.user,password:this.pass}).then(t=>{console.log(t.data),t.data.success?alert("User logged in successfully"):alert("Failed to log in user")})}catch(s){console.error(s),alert("Error logging in user")}},goRegister(){this.$router.push("/register")}}},M=k,I=(s("418d"),Object(o["a"])(M,P,L,!1,null,"575e1afa",null)),S=I.exports,F={name:"Home",components:{LoginCard:S}},j=F,B=Object(o["a"])(j,N,E,!1,null,null,null),O=B.exports,D=function(){var t=this,e=t._self._c;return e("div",[e("Contact",{attrs:{users:t.users,username:t.username}})],1)},A=[],U=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"input-group text-center"},[e("div",{staticClass:"form-outline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{type:"search",id:"form1",placeholder:"Search"},domProps:{value:t.searchQuery},on:{input:[function(e){e.target.composing||(t.searchQuery=e.target.value)},t.searchContacts]}})]),t._m(0)])]),t._m(1),e("button",{on:{click:function(e){t.showFavorites=!t.showFavorites}}},[t._v("Favorites")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}},[t._v("Add User")]),e("div",[e("table",{staticClass:"table"},[t._m(2),e("tbody",t._l(t.searchResults.length>0?t.searchResults.slice(10*t.min,t.maxInd*t.page):t.filteredPeople.slice(10*t.min,t.maxInd*t.page),(function(s,a){return e("tr",{key:a},[e("i",{class:["fas","fa-star",s.isFavorite?"favorite":""],on:{click:function(e){return t.toggleFavorite(s.ID)}}}),e("td",[t._v(t._s(s.firstName))]),e("td",[t._v(t._s(s.lastName))]),e("td",[t._v(t._s(s.email))]),e("td",[t._v(t._s(s.phoneNumber))]),e("td",[t._v(t._s(s.birthday))]),e("td",[e("button",{staticClass:"btn btn-warning",attrs:{type:"button",id:"floated","data-bs-toggle":"modal","data-bs-target":"#exampleModal2"},on:{click:function(e){t.edit_id=s.ID,t.edit_first=s.firstName,t.edit_birthday=s.birthday,t.edit_email=s.email,t.edit_phone_number=s.phoneNumber,t.edit_last=s.lastName}}},[t._v("Edit")])]),e("td",[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal3"},on:{click:function(e){t.deleteID=s.ID}}},[t._v("Delete")])]),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal3",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(3,!0),e("div",{staticClass:"modal-body"},[e("h4",[t._v("Are you sure you want to delete?")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal",id:"nodelete"}},[t._v("No")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.deleteData(t.deleteID)}}},[t._v("Yes")])])])])])])])})),0)]),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(4),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"firstName"}},[t._v("First Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.new_first,expression:"new_first"}],staticClass:"form-control",attrs:{type:"text",id:"firstName"},domProps:{value:t.new_first},on:{input:function(e){e.target.composing||(t.new_first=e.target.value)}}}),e("div",{staticClass:"invalid-feedback validationMsg"},[t._v("Field is required.")])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"lastName"}},[t._v("Last Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.new_last,expression:"new_last"}],staticClass:"form-control",attrs:{type:"text",id:"lastName"},domProps:{value:t.new_last},on:{input:function(e){e.target.composing||(t.new_last=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"phoneNumber"}},[t._v("Phone Number")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.new_phone_number,expression:"new_phone_number"}],staticClass:"form-control",attrs:{type:"tel",id:"phoneNumber"},domProps:{value:t.new_phone_number},on:{input:function(e){e.target.composing||(t.new_phone_number=e.target.value)}}}),e("div",{staticClass:"invalid-feedback validationMsg"},[t._v("Enter a valid Phone Number")])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.new_email,expression:"new_email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.new_email},on:{input:function(e){e.target.composing||(t.new_email=e.target.value)}}}),e("div",{staticClass:"invalid-feedback validationMsg"},[t._v("Enter a valid Email")])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"birthday"}},[t._v("Birthday")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.new_birthday,expression:"new_birthday"}],staticClass:"form-control",attrs:{type:"date",id:"birthday"},domProps:{value:t.new_birthday},on:{input:function(e){e.target.composing||(t.new_birthday=e.target.value)}}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal",id:"closeModalBtn"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.add()}}},[t._v("Add User")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal2",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(5),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"editfirstName"}},[t._v("First Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit_first,expression:"edit_first"}],staticClass:"form-control",attrs:{type:"text",id:"editFirstName"},domProps:{value:t.edit_first},on:{input:function(e){e.target.composing||(t.edit_first=e.target.value)}}}),e("div",{staticClass:"invalid-feedback validationMsg"},[t._v("Field is required.")])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"lastName"}},[t._v("Last Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit_last,expression:"edit_last"}],staticClass:"form-control",attrs:{type:"text",id:"lastName"},domProps:{value:t.edit_last},on:{input:function(e){e.target.composing||(t.edit_last=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"editPhoneNumber"}},[t._v("Phone Number")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit_phone_number,expression:"edit_phone_number"}],staticClass:"form-control",attrs:{type:"tel",id:"editPhoneNumber"},domProps:{value:t.edit_phone_number},on:{input:function(e){e.target.composing||(t.edit_phone_number=e.target.value)}}}),e("div",{staticClass:"invalid-feedback validationMsg"},[t._v("Enter a valid Phone Number")])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"editEmail"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit_email,expression:"edit_email"}],staticClass:"form-control",attrs:{type:"email",id:"editEmail"},domProps:{value:t.edit_email},on:{input:function(e){e.target.composing||(t.edit_email=e.target.value)}}}),e("div",{staticClass:"invalid-feedback validationMsg"},[t._v("Enter a valid Email")])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"birthday"}},[t._v("Birthday")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit_email,expression:"edit_email"}],staticClass:"form-control",attrs:{type:"date",id:"birthday"},domProps:{value:t.edit_email},on:{input:function(e){e.target.composing||(t.edit_email=e.target.value)}}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal",id:"editClose"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.edit(t.edit_id)}}},[t._v("Edit")])])])])])]),e("button",{staticClass:"btn btn-primary ml-auto",attrs:{type:"button"},on:{click:function(e){return t.moveR()}}},[t._v(" < ")]),e("h5",[t._v(t._s(this.page))]),e("button",{staticClass:"btn btn-primary ml-auto",attrs:{type:"button"},on:{click:function(e){return t.moveL()}}},[t._v(">")])])},R=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-search"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("h1",[t._v("Users")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}}),e("th",{attrs:{scope:"col"}},[t._v("First")]),e("th",{attrs:{scope:"col"}},[t._v("Last")]),e("th",{attrs:{scope:"col"}},[t._v("Email")]),e("th",{attrs:{scope:"col"}},[t._v("Phone Number")]),e("th",{attrs:{scope:"col"}},[t._v("Birthday")]),e("th"),e("th")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Delete")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Add User")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Edit User")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],$=(s("7b17"),s("ab8b"),{name:"Contact",props:{users:Array,username:String},components:{},data(){return{searchQuery:"",searchResults:[],isUserAdded:!1,search:"",load:!1,flag:!0,flag2:!1,page:1,maxInd:10,min:0,maxPage:1,deleteID:null,new_phone_number:"",new_first:"",new_last:"",new_email:"",new_birthday:"",edit_id:0,edit_phone_number:"",edit_first:"",edit_last:"",edit_color:"",edit_email:"",edit_birthday:0,showFavorites:!1,new_id:0,modalData:{showModal:!1},editData:{showEdit:!1}}},methods:{async searchContacts(){},resetUserAdded(){this.isUserAdded=!1},moveL(){this.page!=this.maxPage&&(console.log("yo"),this.page=this.page+1,console.log(this.maxPage),this.min=this.min+1)},moveR(){1!=this.page&&(console.log("yo"),this.page=this.page-1,console.log(this.maxPage),this.min=this.min-1)},async edit(t){console.log(t);let e=!1;var s=document.getElementById("editEmail"),a=document.getElementById("editFirstName"),i=document.getElementById("editPhoneNumber");if(""===this.edit_first||/^\s*$/.test(this.edit_first)?(a.classList.add("is-invalid"),e=!0):a.classList.remove("is-invalid"),/[!@$%^&*=]/g.test(this.edit_phone_number)?(i.classList.add("is-invalid"),e=!0):i.classList.remove("is-invalid"),0==/\S+@\S+\.\S+/.test(this.edit_email)&&""!==this.edit_email?(s.classList.add("is-invalid"),e=!0):s.classList.remove("is-invalid"),!e){for(let e=0;e<this.users.length;e++)this.users[e].ID===t&&(this.users[e].firstName=this.edit_first,this.users[e].lastName=this.edit_last,this.users[e].email=this.edit_email,this.users[e].phoneNumber=this.edit_phone_number,this.users[e].birthday=this.edit_birthday);document.getElementById("editClose").click()}},async add(){let t=!1;var e=document.getElementById("email"),s=document.getElementById("firstName"),a=document.getElementById("phoneNumber");if(""===this.new_first||/^\s*$/.test(this.new_first)?(s.classList.add("is-invalid"),t=!0,this.isUserAdded=!1):s.classList.remove("is-invalid"),/[!@$%^&*=]/g.test(this.new_phone_number)?(a.classList.add("is-invalid"),t=!0,this.isUserAdded=!1):a.classList.remove("is-invalid"),0==/\S+@\S+\.\S+/.test(this.new_email)&&""!==this.new_email?(e.classList.add("is-invalid"),t=!0,this.isUserAdded=!1):e.classList.remove("is-invalid"),!t){let t=0,e=0;for(e;e<this.users.length;e++)t<this.users[e].ID&&(t=this.users[e].ID);this.new_id=t+1,this.users.push({ID:this.new_id,firstName:this.new_first,lastName:this.new_last,email:this.new_email,birthday:this.new_birthday,phoneNumber:this.new_phone_number,isFavorites:!1}),this.new_phone_number="",this.new_first="",this.new_last="",this.new_email="",this.new_birthday="",this.isUserAdded=!0,console.log(this.users),document.getElementById("closeModalBtn").click()}},toggleFavorite(t){this.users=this.users.map(e=>e.email===t?{...e,isFavorite:!e.isFavorite}:e)},async deleteData(t){console.log(t);try{let e=0;for(let s=0;s<this.users.length;s++)this.users[s].ID===t&&(e=s);this.users.splice(e,1),document.getElementById("nodelete").click()}catch(e){console.log(e)}}},computed:{filteredPeople(){return this.showFavorites?this.users.filter(t=>t.isFavorite):this.users},dismissAttribute(){return this.isUserAdded?"modal":""}},mounted(){this.users.length<10&&(console.log("hi"),this.min=0,this.maxInd=this.users.length,this.maxPage=1),this.users.length>10&&this.page<Math.floor(this.users.length/10+1)?(console.log("yep"),this.maxPage=Math.floor(this.users.length/10+1),this.maxInd=10):this.maxInd=Math.floor(this.users.length/10+1)}}),q=$,Q=(s("c7c7"),Object(o["a"])(q,U,R,!1,null,null,null)),T=Q.exports,H={name:"Contactview",components:{Contact:T},props:{users:{type:Array,required:!0},username:{type:String,required:!0}}},z=H,J=Object(o["a"])(z,D,A,!1,null,null,null),Y=J.exports;a["a"].use(c["a"]);const G=[{path:"/",name:"Home",component:O},{path:"/register",name:"Register",component:x},{path:"/contact",name:"Contactview",component:Y}],K=new c["a"]({mode:"history",base:"/",routes:G});var V=K,W=s("2f62");a["a"].use(W["a"]);var X=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:V,store:X,render:t=>t(d)}).$mount("#app")},"5de5":function(t,e,s){"use strict";s("bb58")},"82ff":function(t,e,s){},b4e6:function(t,e,s){"use strict";s("82ff")},bb58:function(t,e,s){},c7c7:function(t,e,s){"use strict";s("1b2d")}});
//# sourceMappingURL=app.94808c29.js.map