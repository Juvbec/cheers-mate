(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09b43a96"],{"226b":function(e,s,t){},"22ed":function(e,s,t){e.exports=t.p+"img/user.d6759143.png"},"80c2":function(e,s,t){"use strict";var r=t("226b"),a=t.n(r);a.a},f9cd:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("section",{staticClass:"user-details-container"},[r("div",{staticClass:"user-header flex"},[e.user?r("img",{staticClass:"user-image",attrs:{src:e.user.img?e.user.img:t("22ed"),"max-height":"150px"}}):e._e(),r("h1",[e._v(e._s(e.user.fullName)+", "+e._s(e.user.age))])]),r("div",{staticClass:"user-details-cheers"},[e.userCheers.length?e._e():r("h1",[e._v("No events to show yet")]),e.upcomingEvents?r("h1",{staticClass:"events-headline"},[e._v("Upcoming events")]):e._e(),e._l(e.userCheers,function(s){return s.date>e.currDate?r("section",{key:s.date,staticClass:"cards"},[r("div",{staticClass:"cheer-card"},[r("cheer-preview",{attrs:{cheer:s}})],1)]):e._e()}),e.pastEvents?r("h1",{staticClass:"events-headline"},[e._v("Past events")]):e._e(),e._l(e.userCheers,function(s){return s.date<e.currDate?r("section",{key:s._id,staticClass:"cards"},[r("cheer-preview",{attrs:{cheer:s}})],1):e._e()})],2),r("div",{staticClass:"user-contact"})])},a=[],n=(t("cadf"),t("551c"),t("097d"),t("2d82")),c=t("4b87"),i={created:function(){var e=this;this.loadUser().then(function(s){e.checkEvents()})},data:function(){return{user:{},userCheers:[],currDate:Date.now(),pastEvents:!1,upcomingEvents:!1}},methods:{loadUser:function(){var e=this,s=this.$route.params.userId;return n["a"].getById(s).then(function(s){e.user=s.user,e.userCheers=s.cheers,console.log(s.cheers),console.log(e.currDate)})},checkEvents:function(){for(var e=0;e<this.userCheers.length;e++){var s=this.userCheers[e];s.date>this.currDate&&(this.upcomingEvents=!0),s.date<this.currDate&&(this.pastEvents=!0)}}},components:{cheerPreview:c["a"]}},u=i,o=(t("80c2"),t("2877")),h=Object(o["a"])(u,r,a,!1,null,"52d81746",null);h.options.__file="user-details.vue";s["default"]=h.exports}}]);
//# sourceMappingURL=chunk-09b43a96.58e68d14.js.map