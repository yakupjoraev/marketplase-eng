"use strict";(self.webpackChunkwebapp=self.webpackChunkwebapp||[]).push([[98600],{34930:function(e,t,r){r.d(t,{q:function(){return p}});r(12419);var n=r(6610),a=r(5991),i=r(10379),o=r(46070),u=r(77608),s=(r(69826),r(21249),r(41539),r(39714),r(91264)),l=r(91908),d=r(5535),c=r(66012);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var m=function(e){(0,i.Z)(r,e);var t=f(r);function r(e){return(0,n.Z)(this,r),t.call(this,e,s.oy.Challenge.TiersMetaDataViewModel.namespace)}return(0,a.Z)(r,[{key:"tiers",value:function(){var e,t;return null!==(e=null===(t=this.data())||void 0===t?void 0:t.Tiers)&&void 0!==e?e:[]}},{key:"getTierNumeral",value:function(e){var t;return null===(t=this.tiers().find((function(t){return t.Tier===e})))||void 0===t?void 0:t.TierNumeral}},{key:"displayName",value:function(e){if(this.loaded())return e>0?"Tier ".concat(this.getTierNumeral(e)):"Unranked"}},{key:"badgeBrand",value:function(e){if(this.loaded()){if(e>0)switch(e){case 1:return l.$k.Tier1;case 2:return l.$k.Tier2;case 3:return l.$k.Tier3;case 4:return l.$k.Tier4;case 5:return l.$k.Tier5;case 6:return l.$k.Tier6;case 7:return l.$k.Tier7;case 8:return l.$k.Tier8;case 9:default:return l.$k.Tier9}return l.$k.Unranked}}},{key:"getTierOptions",value:function(){var e=this;return this.tiers().map((function(t){return{num:t.Tier,name:e.displayName(t.Tier)}}))}}]),r}(d.g);function p(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(0,c.$$)(null===e||void 0===e?void 0:e.toString(),s.oy.Challenge.TiersMetaDataViewModel.namespace,m,t,r)}},93640:function(e,t,r){r.d(t,{Q:function(){return m}});r(12419);var n=r(6610),a=r(5991),i=r(10379),o=r(46070),u=r(77608),s=(r(69826),r(91264)),l=r(5535),d=r(66012);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var f=function(e){(0,i.Z)(r,e);var t=c(r);function r(e){return(0,n.Z)(this,r),t.call(this,e,s.oy.Challenge.TierCollectionViewModel.user_namespace)}return(0,a.Z)(r,[{key:"getTier",value:function(e){if(this.loaded()){var t=this.getTierViewModel(e);if(t)return t.Tier}}},{key:"getTierViewModel",value:function(e){if(this.loaded())return this.data().Tiers.find((function(t){return t.GameBrand===e}))}},{key:"getTierNumeral",value:function(e){var t=this.getTierViewModel(e);return t?t.TierNumeral:""}}]),r}(l.g);function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(0,d.$$)(e,"tier",f,t,r)}},46140:function(e,t,r){r.d(t,{C:function(){return s}});var n=r(67294),a=r(34930),i=r(91908),o=r(753);function u(e){var t=(0,a.q)(e.gameBrand,(function(t){return{displayName:t.displayName(e.tierNumber),badgeBrand:t.badgeBrand(e.tierNumber)}}),[e.tierNumber]);return n.createElement(i.os,{onClick:function(){o.L.spawnTiersModal(e.gameBrand)},size:e.size,text:t.displayName,brand:t.badgeBrand,tooltip:e.tooltip,bordered:!0})}var s=n.memo(u)},22219:function(e,t,r){r.d(t,{v:function(){return f},q:function(){return m}});r(12419);var n=r(6610),a=r(5991),i=r(10379),o=r(46070),u=r(77608),s=r(29376),l=r(28395),d=r(66012);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var f=function(e){(0,i.Z)(r,e);var t=c(r);function r(e){var a;return(0,n.Z)(this,r),(a=t.call(this,e))._catalog=new l.V(a._scope),a._adapter.addDataCallback((function(e){e.SubscriptionCatalogId&&a._catalog.initById(e.SubscriptionCatalogId)})),a}return(0,a.Z)(r,[{key:"hasCatalog",value:function(){return this.loaded()&&!!this.catalogId()}},{key:"catalogId",value:function(){var e;return null===(e=this.data())||void 0===e?void 0:e.SubscriptionCatalogId}},{key:"isEmpty",value:function(){return this._catalog.isEmpty()}},{key:"hasSubscription",value:function(){return this._catalog.hasSubscription()}},{key:"offeringIds",value:function(){var e;return null===(e=this._catalog.data())||void 0===e?void 0:e.OfferingIds}},{key:"offerings",value:function(){return this._catalog.offerings()}},{key:"perks",value:function(){return this._catalog.perks()}}]),r}(s.T);function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(0,d.$$)(e,"pageSubscriptionCatalog",f,t,r)}},98600:function(e,t,r){r.d(t,{M:function(){return w}});r(66992),r(41539),r(88674),r(78783),r(33948),r(21249);var n=r(67294),a=r(20383),i=r(77013),o=r(91264),u=r(27547),s=r(26294),l=r(91908),d=r(28791),c=(r(92222),r(19601),r(66012)),f=r(29376),m=r(10898),p=r(22219),v=(r(12419),r(6610)),g=r(5991),b=r(66213),h=r(10379),y=r(46070),k=r(77608),I=r(71578),B=r(5535),T=r(69747);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,k.Z)(e);if(t){var a=(0,k.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,y.Z)(this,r)}}var C=function(e){(0,h.Z)(r,e);var t=x(r);function r(e){return(0,v.Z)(this,r),t.call(this,e,"subscription_user_summary")}return(0,g.Z)(r,[{key:"orderingIds",value:function(){return this.loaded()?this.data().SubscriptionHandles.map((function(e){return e.OfferingId})):[]}},{key:"isSubscriber",value:function(e){return(0,I.xM)(this.orderingIds(),e.offeringIds()).length>0}},{key:"initById",value:function(e){return this._adapter.noRealtime(T._.ownUserId()!==e),(0,b.Z)((0,k.Z)(r.prototype),"initById",this).call(this,e),this}}]),r}(B.g),S=n.memo((function(e){var t=(0,f.e)(e.pageId,(function(t){return{loaded:t.loaded(),name:t.name(),auxMember:t.auxMember(e.userId)}}),[e.userId]),r=(0,c.Lx)((function(t){var r=new p.v(t).initById(e.pageId),n=new C(t).initById(e.userId);return t.subscribeVoid(m.cmOwnUser),{catalog:r,userSummary:n}}),(function(e){var t=e.catalog,r=e.userSummary;return{hasSubscriptions:m.cmOwnUser.hasFeature(o.Sf.Permission.Subscription_Feature),isSubscriber:r.isSubscriber(t)}}));if(!t.loaded)return null;if(!t.auxMember&&!r.isSubscriber)return n.createElement(n.Fragment,null,e.extraBadges);if(!t.auxMember&&r.isSubscriber&&r.hasSubscriptions)return n.createElement(d.sf,{flex:d.Gr.None},n.createElement(l.os,{size:e.badgeSize,text:"Subscriber",tooltip:"Subscribed to ".concat(t.name),brand:l.$k.Subscriber}));var a=function(){var e,r="";switch(null===(e=t.auxMember)||void 0===e?void 0:e.Role){case o.oy.AuxRole.CoAdmin:return{text:r="Admin",tooltip:"".concat(t.name," ").concat(r),brand:l.$k.Admin};case o.oy.AuxRole.LiteAdmin:return{text:r="Mod",tooltip:"".concat(t.name," ").concat(r),brand:l.$k.Moderator,bordered:!0};case o.oy.AuxRole.Caster:return{text:r="Caster",tooltip:"".concat(t.name," ").concat(r),brand:l.$k.Caster,bordered:!0};default:return null}}();return null===a?null:n.createElement(d.sf,{flex:d.Gr.None},n.createElement(l.os,Object.assign({size:e.badgeSize},a)))})),R=r(41640),E=r(52513),$=n.lazy((function(){return Promise.all([r.e(24736),r.e(91290),r.e(85005),r.e(49174),r.e(76814)]).then(r.bind(r,93294))}));function Z(e){var t,r,f=(0,i.Q)(e.userId,(function(e){var t,r;return{loaded:e.loaded(),name:e.name(),isVerified:e.isVerified(),hasAnyRoleBadge:e.hasAnyRoleBadge(),verificationTooltip:e.verificationTooltip(),showCountry:null===(t=e.data())||void 0===t?void 0:t.ShowCountry,country:null===(r=e.data())||void 0===r?void 0:r.Country,isBot:e.isBot()}})),m=(0,c.FY)(R._s,(function(){return{globalPageId:R._s.globalPageId()}})),p=(null===(t=e.nameProps)||void 0===t?void 0:t.badgeSize)||l.$B.Small,v=[];return f.hasAnyRoleBadge&&v.push(n.createElement(u.o,{userId:e.userId,badgeSize:p})),m.globalPageId&&!f.hasAnyRoleBadge&&v.push(n.createElement(S,{key:m.globalPageId,pageId:m.globalPageId,userId:e.userId,badgeSize:p,extraBadges:e.badge})),e.gameBrand&&v.push(n.createElement(s.o,{userId:e.userId,gameBrand:e.gameBrand,size:p})),e.isCaptain&&v.push(n.createElement(l.os,{brand:l.$k.Captain,size:p,text:"Captain",bordered:!0})),e.isChallengeHost&&v.push(n.createElement(l.os,{brand:l.$k.Gray,size:p,text:"Host",tooltip:"The host is responsible for setting up the game by creating it, making sure all players are in the lobby and starting it when everyone is ready.",bordered:!0})),f.isBot&&v.push(n.createElement(l.os,{brand:l.$k.Purple,size:p,text:"Bot"})),n.createElement(a.D,{loaded:f.loaded,toView:{id:o.IH.Routing.ArenaViewIds.UserHome,params:{userId:e.userId}},text:f.name,verified:f.isVerified,verifiedTooltip:f.verificationTooltip,popoverOverlay:n.createElement(n.Suspense,{fallback:null},n.createElement($,{userId:e.userId,gameBrand:e.gameBrand})),popoverOverlayWidth:E.Q2._30rem,disablePopover:null===(r=e.popoverProps)||void 0===r?void 0:r.disablePopover,baseProps:e.nameProps,children:(0,I.tQ)(v)?void 0:n.createElement(d.sf,{gutter:d.Yz.XSmall,alignItems:d.W6.Center},v.map((function(e,t){return n.createElement(d.sf,{key:t,flex:d.Gr.None},e)})))})}var w=n.memo(Z)},27547:function(e,t,r){r.d(t,{o:function(){return l}});var n=r(67294),a=r(77013),i=r(91908),o=r(28791),u=r(56367);function s(e){var t=(0,u.mY)(["user","translations"]).t,r=(0,a.Q)(e.userId,(function(e){return{loaded:e.loaded(),hasAnyRoleBadge:e.hasAnyRoleBadge(),isEmployee:e.isEmployee(),isAdmin:e.isAdmin(),isModerator:e.isModerator(),isCaster:e.isCaster()}}));if(!r.loaded||!r.hasAnyRoleBadge)return null;var s=null;return r.isAdmin?s={tooltip:t("user.badge.admin.tooltip"),text:t("translations.roles.admin",{ns:"translations"}),brand:i.$k.CmAdmin}:r.isModerator?s={tooltip:t("user.badge.mod.tooltip"),text:t("user.badge.mod.text"),brand:i.$k.CmModerator,bordered:!0}:r.isCaster?s={tooltip:t("user.badge.caster.tooltip"),text:t("translations.roles.caster",{ns:"translations"}),brand:i.$k.CmCaster,bordered:!0}:r.isEmployee&&(s={tooltip:t("user.badge.employee.tooltip"),text:t("user.badge.employee.text"),brand:i.$k.CmEmployee,bordered:!0}),n.createElement(o.sf,{gutter:o.Yz.XSmall,alignItems:o.W6.Center},n.createElement(o.sf,{flex:o.Gr.None},n.createElement(i.os,{tooltip:s.tooltip,text:s.text,brand:s.brand,bordered:s.bordered,size:e.badgeSize})))}var l=n.memo(s)},26294:function(e,t,r){r.d(t,{o:function(){return l}});var n=r(67294),a=r(91264),i=r(46140),o=r(93640),u=r(77013),s=r(73713),l=n.memo((function(e){var t=(0,u.Q)(e.userId,(function(e){return{loaded:e.loaded(),username:e.name()}})),r=(0,s.J)(e.gameBrand,(function(e){return{shortTitle:e.shortTitle(),tiersEnabled:e.featureEnabled(a.Sf.Permission.Stats_Tiers_Feature)}})),l=(0,o.Q)(e.userId,(function(t){return{tierLoaded:t.loaded(),tierNumber:t.getTier(e.gameBrand)}}),[e.gameBrand]);return l.tierLoaded&&t.loaded&&r.tiersEnabled?n.createElement(i.C,{gameBrand:e.gameBrand,tierNumber:l.tierNumber,tooltip:"Tiers represent the skill level of players from ranked  games played on Challengermode.",size:e.size}):null}))}}]);