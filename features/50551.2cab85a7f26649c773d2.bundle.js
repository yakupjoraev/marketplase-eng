"use strict";(self.webpackChunkwebapp=self.webpackChunkwebapp||[]).push([[50551],{10555:function(e,n,t){t.d(n,{d:function(){return f}});var a=t(67294),r=t(87051),o=t(66012),u=t(70807),i=t(61555),l=t(75026),c=t(91290),m=t(10898),s=t(11042),d=t(56367),f=a.memo((function(e){var n=(0,o.FY)(m.cmOwnUser,(function(){return{loaded:m.cmOwnUser.loaded()&&m.cmOwnUser.loadAvatars(),primaryAvatars:m.cmOwnUser.user().primaryAvatars(e.gameBrand)}}),[e.gameBrand]),t=(0,o.FY)(d.Yi,(function(){return r.aW.gameAvatarMeta(e.gameBrand)}),[e.gameBrand]),f=function(){return 0!==n.primaryAvatars.length?c.x.spawnEditAvatarModal(e.gameBrand):c.x.spawnAddAvatarModal(e.gameBrand)};if(!n.loaded)return null;var p=0!==n.primaryAvatars.length?t.editLabel:t.addLabel,g=0!==n.primaryAvatars.length?i.y.Setting:i.y.UserAdd;return e.icon?a.createElement(s.F2,{onClick:f,tooltip:p,type:g,size:e.iconSize,linkBrand:e.linkBrand}):e.contextMenuItem?a.createElement(l.E,{onClick:f,text:p,iconType:g,size:e.contextMenuSize}):a.createElement(u.R,{onClick:f,brand:e.linkBrand,text:p})}))},3725:function(e,n,t){t.d(n,{d0:function(){return u},U6:function(){return i},q$:function(){return c}});var a=t(67294),r=t(11042),o=t(70807),u=r.Tg.Medium,i=o.B.White;function l(e){return a.createElement(r.F2,{type:e.type,onClick:e.onClick,toView:e.toView,size:u,linkBrand:i,linkUseTouch:!0})}var c=a.memo(l)},50551:function(e,n,t){t.d(n,{H:function(){return a},M:function(){return I}});var a,r=t(94184),o=t.n(r),u=t(67294),i=t(2266),l=t(70807),c=t(52513),m=t(73251),s=t(52476),d=t(73713),f=t(3557),p=t(65160),g=t(86784),v=t(18447),y=t(23586),h=t(70375);function L(e){var n,t=(0,d.J)(e.gameBrandOrId,(function(e){var n,t;return{loaded:e.loaded(),coverSrcSet:s.Cu.getImageSrcSet(f.O.Cover,null===(n=e.arenaImageResources())||void 0===n?void 0:n.CoverImageId),overviewHref:null===(t=e.navLinks())||void 0===t?void 0:t.overviewHref,data:e.data()}})),r=function(){var n;null===(n=e.onClickOverride)||void 0===n||n.call(e,e.gameBrandOrId)},L=e.target||g.S.inPortal()?"_self":void 0;return u.createElement(c.bZ,{className:o()(m.j.className(e.size||a.Default))},u.createElement(y.S,{gameBrand:null===(n=t.data)||void 0===n?void 0:n.GameBrand,contextMenuProps:{trigger:[h.mr.ContextMenu],customTrigger:u.createElement(c.bZ,{className:"hover-scale--105"},u.createElement(l.R,{href:t.overviewHref,target:L,onClick:e.onClickOverride?r:null,toView:e.toViewOverride},u.createElement(p.P,{loaded:t.loaded,thumbnailSrcSet:t.coverSrcSet,ratio:i.w._6x8,borderRadius:g.S.inPortal()?c.sW.Large:c.sW.Base})))}}),e.showTitle&&u.createElement(c.bZ,{marginTop:c.eD.Small},u.createElement(v.O,{gameBrandOrId:e.gameBrandOrId,nameProps:{target:L,toViewOverride:e.toViewOverride,onClickOverride:e.onClickOverride?r:null}})))}!function(e){e.Default="w--100",e.XSmall="w--8rem",e.Small="w--14rem",e.Medium="w--17rem",e.Large="w--25rem"}(a||(a={}));var I=u.memo(L)},18447:function(e,n,t){t.d(n,{O:function(){return u}});var a=t(67294),r=t(20383),o=t(73713);var u=function(e){var n=(0,o.J)(e.gameBrandOrId,(function(e){var n;return{loaded:e.loaded(),title:e.title(),overviewHref:null===(n=e.navLinks())||void 0===n?void 0:n.overviewHref}}));return a.createElement(r.D,{loaded:n.loaded,text:n.title,href:n.overviewHref,baseProps:e.nameProps,children:e.children})}},23586:function(e,n,t){t.d(n,{S:function(){return I}});var a=t(67294),r=t(66012),o=t(91264),u=t(26435),i=t(10555),l=t(59924),c=t(89975),m=t(10898),s=t(5336),d=t(97171),f=t(73713),p=t(75026),g=t(37109),v=t(61555),y=t(61189),h=t(87051);function L(e){var n,t,L,I,B,C=(0,f.J)(e.gameBrand,(function(e){return{stsFeatureEnabled:e.featureEnabled(o.Sf.Permission.Tournament_Sts_Feature),title:e.title(),slug:e.slug()}})),M=(0,r.FY)(m.cmOwnUser,(function(){return{mayCreateLeague:m.cmOwnUser.may(o.Sf.Permission.League_Create),mayCreateTournament:s.sU.mayCreateTournament(e.gameBrand,C.stsFeatureEnabled)}}),[C.stsFeatureEnabled,e.gameBrand]),w=M.mayCreateTournament||M.mayCreateLeague,x=(0,y.P)(o.IH.Routing.ArenaViewIds.GameIndex,{gameSlug:C.slug},(function(e){return e.url()}));return a.createElement(u.N,{gameBrand:e.gameBrand,baseProps:e.contextMenuProps},a.createElement(l.K,null,a.createElement(p.E,{onClick:function(){return(0,g.w)({title:C.title,text:"The home of competitive ".concat(C,"."),url:x})},text:"Share",iconType:v.y.Share,size:null===(n=e.contextMenuProps)||void 0===n?void 0:n.size}),a.createElement(p.E,{toView:h.aW.toView(C.slug),text:"Go to game",iconType:v.y.Game,size:null===(t=e.contextMenuProps)||void 0===t?void 0:t.size})),w&&a.createElement(l.K,{separator:!0},M.mayCreateTournament&&a.createElement(c.K,{gameBrand:e.gameBrand,contextMenuItem:!0,contextMenuItemProps:{size:null===(L=e.contextMenuProps)||void 0===L?void 0:L.size}}),M.mayCreateLeague&&a.createElement(d.I,{gameBrand:e.gameBrand,contextMenuItem:!0,contextMenuItemProps:{size:null===(I=e.contextMenuProps)||void 0===I?void 0:I.size}})),a.createElement(l.K,{separator:!0},a.createElement(i.d,{gameBrand:e.gameBrand,contextMenuItem:!0,contextMenuSize:null===(B=e.contextMenuProps)||void 0===B?void 0:B.size})))}var I=a.memo(L)},97171:function(e,n,t){t.d(n,{I:function(){return s}});var a=t(67294),r=t(91264),o=t(61555),u=t(34211),i=t(66012),l=t(10898),c=t(91938);function m(e){return(0,i.FY)(l.cmOwnUser,(function(){return{mayCreateLeague:l.cmOwnUser.may(r.Sf.Permission.League_Create)}})).mayCreateLeague?a.createElement(c.B,{contextMenuItem:e.contextMenuItem,contextMenuItemProps:e.contextMenuItemProps,buttonProps:e.buttonProps,iconType:o.y.Trophy,onClick:function(){return(0,u.P)(e.gameBrand)},text:e.text||"Create League"}):null}var s=a.memo(m)},34211:function(e,n,t){t.d(n,{P:function(){return g},K:function(){return v}});t(12419);var a=t(92137),r=t(6610),o=t(5991),u=t(10379),i=t(46070),l=t(77608),c=t(87757),m=t.n(c),s=(t(66992),t(41539),t(88674),t(78783),t(33948),t(39714),t(20555)),d=t(39743),f=t(60185);function p(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,l.Z)(e);if(n){var r=(0,l.Z)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return(0,i.Z)(this,t)}}function g(e){d.tE.open({id:d.qq.League_Create,component:Promise.all([t.e(64749),t.e(84992),t.e(71752),t.e(15),t.e(83322)]).then(t.bind(t,6687)),params:{gameBrand:e}})}var v=function(e){(0,u.Z)(t,e);var n=p(t);function t(e){return(0,r.Z)(this,t),n.call(this,e,"league_collection")}return(0,o.Z)(t,[{key:"editTimezone",value:function(e,n){return s.Z.to("api/League/League/EditTimezone").query("LeagueId",e).query("Timezone",n).call()}},{key:"createSeason",value:function(){var e=(0,a.Z)(m().mark((function e(n){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.to("api/League/Season/Create").body({LeagueId:n}).call();case 2:f.$.browseTo("/Leagues/Index/"+n);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}],[{key:"editMetaData",value:function(e,n){return s.Z.to("api/League/League/EditMetaData").query("LeagueId",e).body(n).call()}},{key:"removeImage",value:function(e,n){return s.Z.to("api/League/League/remove_image").query("leagueId",e).query("type",n).call()}},{key:"editLeagueAnnouncements",value:function(e,n){return s.Z.to("api/League/League/EditLeagueAnnouncements").query("LeagueId",e).body(n).call()}},{key:"seedSeason",value:function(e){return s.Z.to("api/League/Season/Seed").query("seasonId",e).call()}},{key:"seedManually",value:function(e,n){return s.Z.to("api/League/Season/Seed_Manually").body({TeamIds:e,SeasonId:n}).call()}},{key:"completeSeason",value:function(e){return s.Z.to("api/League/Season/Complete").query("seasonId",e).call()}},{key:"createPhase",value:function(e,n){return s.Z.to("api/League/Phase/Create").query("seasonId",e).body({Type:n}).call()}},{key:"startPhase",value:function(e){return s.Z.to("api/League/Phase/Start").query("phaseId",e).call()}},{key:"completePhase",value:function(e){return s.Z.to("api/League/Phase/Complete").query("phaseId",e).call()}},{key:"seedPhases",value:function(e,n){return s.Z.to("api/League/Season/SeedPhases").query("seasonId",e).query("phaseOrder",n.toString()).call()}}]),t}(t(5535).g)},6977:function(e,n,t){t.d(n,{i:function(){return v},Y:function(){return y}});t(12419);var a=t(6610),r=t(5991),o=t(10379),u=t(46070),i=t(77608),l=(t(66992),t(51532),t(41539),t(78783),t(33948),t(54747),t(69826),t(15725)),c=t(35856),m=t(87051),s=t(90540),d=t(5535),f=t(69747),p=t(66012);function g(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,i.Z)(e);if(n){var r=(0,i.Z)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return(0,u.Z)(this,t)}}var v=function(e){(0,o.Z)(t,e);var n=g(t);function t(e){var r;return(0,a.Z)(this,t),(r=n.call(this,e,"page_admin"))._pageLimitationsGameBrandMap=new Map,r._pageLimitationsGameRealmMap=new Map,r.mayCreateTournamentInGameBrand=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!r._pageLimitations.load())return!1;var t=null!==(e=r._pageLimitationsGameBrandMap.get(n))&&void 0!==e?e:r._pageLimitationsGameBrandMap.get(null);return(null===t||void 0===t?void 0:t.Limitation)>0},r.mayCreateVanillaTournamentInGameRealm=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!r._pageLimitations.load())return!1;var t=null!==(e=r._pageLimitationsGameRealmMap.get(n))&&void 0!==e?e:r._pageLimitationsGameRealmMap.get(null);return(null===t||void 0===t?void 0:t.Limitation)>0&&"tournament"===(null===t||void 0===t?void 0:t.Namespace)},r._pageAuxMembers=new c.n(r._scope,(function(){return r.loaded()}),"page_aux_member",(function(){return r.data().AuxMemberIds})),r._pageLimitations=new c.n(r._scope,(function(){return r.loaded()}),"page_limitation",(function(){return r.data().LimitIds})),r._adapter.addDataCallback((function(e){r._pageAuxMembers.update(),r._pageLimitations.update()})),r._pageLimitations.addDataCallback((function(e){r._pageLimitationsGameBrandMap.clear(),r._pageLimitationsGameRealmMap.clear(),e.forEach((function(e){var n=e.GameRealm?m.aW.gameBrand(e.GameRealm):null;r._pageLimitationsGameBrandMap.get(n)&&"tournament"!==e.Namespace||r._pageLimitationsGameBrandMap.set(n,e),r._pageLimitationsGameRealmMap.get(e.GameRealm)&&"tournament"!==e.Namespace||r._pageLimitationsGameRealmMap.set(e.GameRealm||null,e)}))})),r}return(0,r.Z)(t,[{key:"auxMembers",value:function(){return this._pageAuxMembers.objects()}},{key:"limits",value:function(){return this._pageLimitations.objects()}},{key:"rolesSelection",value:function(){return l.wv.pageRoles()}},{key:"hasAccess",value:function(e,n,t){if(!f._.isAuthenticated())return!1;var a=this.auxMembers().find((function(e){return e.UserId===f._.ownUserId()}));return s.o.hasAccess(e,n,null===a||void 0===a?void 0:a.Role,t)}}]),t}(d.g);function y(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(0,p.$$)(e,"page_admin",v,n,t)}},89975:function(e,n,t){t.d(n,{K:function(){return v}});var a=t(67294),r=t(66012),o=t(10898),u=t(91264),i=t(61555),l=t(5336),c=t(29376),m=t(6977),s=t(73713),d=t(3725),f=t(91938),p=t(69747);function g(e){var n=(0,r.FY)(o.cmOwnUser,(function(){return{mayCreateTournament:o.cmOwnUser.may(u.Sf.Permission.Tournament_Create),hasCreateUserTournamentFeature:o.cmOwnUser.hasFeature(u.Sf.Permission.Tournament_CreateUserTournament_Feature)}})),t=(0,c.e)(e.pageId,(function(e){return{mayCreateTournamentAsPage:e.mayCreateTournament()}})),g=(0,m.Y)(e.pageId,(function(n){return{mayCreateTournamentInGameBrand:n.mayCreateTournamentInGameBrand(e.gameBrand)}}),[e.gameBrand]),v=(0,s.J)(e.gameBrand,(function(e){return e.featureEnabled(u.Sf.Permission.Tournament_Sts_Feature)})),y=n.mayCreateTournament||t.mayCreateTournamentAsPage&&g.mayCreateTournamentInGameBrand,h=!e.gameBrand||v,L=t.mayCreateTournamentAsPage||n.hasCreateUserTournamentFeature&&!e.pageId,I=y||h&&L;if(!p._.isAuthenticated()||!I&&!e.alwaysShow)return null;var B=function(){(0,l.D$)({isBlueprint:!1,gameBrand:e.gameBrand,pageId:t.mayCreateTournamentAsPage?e.pageId:null})};return e.mobileHeaderIcon?a.createElement(d.q$,{onClick:B,type:i.y.Plus}):a.createElement(f.B,{contextMenuItem:e.contextMenuItem,contextMenuItemProps:e.contextMenuItemProps,buttonProps:e.buttonProps,onClick:B,text:e.text||"Create Tournament",iconType:i.y.TournamentFormat})}var v=a.memo(g)}}]);