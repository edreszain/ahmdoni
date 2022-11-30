(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9515],{562559:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(667294),s=a(867631),r=a.n(s),o=a(112690),n=a(19121),l=a(494349),d=a(773285),h=a(780280),c=a(883119),u=a(969315),p=a(179888),y=a(785893);function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const b=(e,t)=>{if(t){const a="control"===t?"v3.pinimg.com":"v2.pinimg.com";return e.replace("v.pinimg.com",a)}return e},S=(e,t)=>"string"==typeof e?b(e,t):Array.isArray(e)?((e,t)=>e[0].src&&t?[{...e[0],src:b(e[0].src,t)}]:e)(e,t):e;class P extends i.PureComponent{constructor(...e){super(...e),m(this,"state",{canPlayVideo:!1,isManifestParsed:!1,playbackState:p.Cy.DEFAULT}),m(this,"errorRetryCount",1),m(this,"firstFragBuffered",!1),m(this,"hasPlaybackStarted",!1),m(this,"hasVideoSessionStarted",!1),m(this,"hasVideoSessionEnded",!1),m(this,"hls",null),m(this,"fragStartupTime",{}),m(this,"lastLevelSwitchKbps",null),m(this,"lastStallTime",null),m(this,"lastPauseTime",null),m(this,"logSessionStartOnNextPlay",!1),m(this,"playerId",""),m(this,"videoSessionId",""),m(this,"videoVisibleTime",null),m(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",downloadedKiloBytes:0,errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numberOfStalls:0,numberOfSeeks:0,playbackStartTimestamp:null,segments:[],srcString:"string"==typeof this.props.src?b(this.props.src,this.props.quicExpGroup):b(this.props.src[0].src,this.props.quicExpGroup),totalStallDurationMs:0,totalPauseDurationMs:0,videoCreatedTime:null}),m(this,"initializeHls",(()=>{this.destroyHls();const{src:e,hlsConfig:t,quicExpGroup:a}=this.props,i=new(r())(t),s=S(e,a);i.loadSource(s),this.videoPlayerRef&&i.attachMedia(this.videoPlayerRef.video),i.on(r().Events.FRAG_BUFFERED,this.handleHlsFragBuffered),i.on(r().Events.FRAG_CHANGED,this.handleHlsFragChanged),i.on(r().Events.FRAG_LOADING,this.handleHlsFragLoading),i.on(r().Events.FRAG_LOADED,this.handleHlsFragLoaded),i.on(r().Events.MANIFEST_PARSED,(()=>{this.setState({isManifestParsed:!0})})),i.on(r().Events.LEVEL_SWITCHED,this.handleHlsLevelSwitched),i.on(r().Events.ERROR,this.handleHlsError),this.hls=i})),m(this,"destroyHls",(()=>{const{hls:e}=this;e&&e.destroy()})),m(this,"addSegment",(e=>{const{segments:t}=this.playbackPerformance,a=t&&t[t.length-1];if(this.hls&&t.length&&a&&a.uri!==e.url){this.updateWatchDurationForCurrentSegment();const a=this.videoPlayerRef&&this.videoPlayerRef.video,i=this.hls&&this.hls.levels||{},s="number"==typeof e.level?i[e.level]:{},r=this.fragStartupTime[e.url];let o=-1;r&&r.startLoadTime&&r.endLoadTime&&(o=r.endLoadTime-r.startLoadTime);const n={indicatedKbps:s.bitrate/p.bR,duration:e.duration,level:e.level,lastStartPlayTime:this.getCurrentVideoTime(),numServerAddressChange:-1,observedKbps:this.hls&&this.hls.bandwidthEstimate/p.bR||-1,playbackStartDate:Date.now(),serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:o,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a&&a.clientWidth||-1,viewportHeight:a&&a.clientHeight||-1,watchedDurationMs:0};t.push(n)}})),m(this,"initializeSegments",(e=>{const{contextLogData:t={}}=this.props,{is_closeup_video:a=!1}=t,{segments:i}=this.playbackPerformance;if(!i.length)if(this.hls&&this.videoPlayerRef&&this.videoPlayerRef.video&&e){if(!i.length&&"number"==typeof e.level){const t=this.videoPlayerRef&&this.videoPlayerRef.video,a=this.hls.levels,s="number"==typeof e.level?a[e.level]:{},r=this.fragStartupTime[e.url];let o=-1;r&&r.startLoadTime&&r.endLoadTime&&(o=r.endLoadTime-r.startLoadTime),this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/p.bR;const n={indicatedKbps:s.bitrate/p.bR,duration:e.duration,level:e.level,lastStartPlayTime:null,numServerAddressChange:-1,observedKbps:this.hls.bandwidthEstimate/p.bR||-1,playbackStartDate:null,serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:o,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:t.clientWidth,viewportHeight:t.clientHeight,watchedDurationMs:0};i.push(n)}}else(0,u.tE)("initializeSegmentsFailed",!0,a)})),m(this,"getCurrentVideoTime",(()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*p.gJ:null)),m(this,"handleCanPlayVideo",(e=>{const{contextLogData:t={},onReady:a,playing:i}=this.props,{is_closeup_video:s=!1}=t,{canPlayVideo:r}=this.state;(0,u.tE)("handleCanPlayVideo",!0,s,{firstCanPlayEvent:!r,playing:i}),this.playbackPerformance.hasFatalError=!1,r||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),a&&a(e)})),m(this,"handleEnded",(e=>{const{loop:t,onEnded:a}=this.props,{segments:i}=this.playbackPerformance,s=i&&i[i.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),s&&(s.lastStartPlayTime=0),this.fragStartupTime={}):t||this.logPlaybackPerformance(p.$f,{initiator:"videoEnded",loop:t}),this.setState({playbackState:p.Cy.ENDED}),a&&a(e)})),m(this,"handleHlsError",((e,t)=>{var a;const{contextLogData:i={}}=this.props,{is_closeup_video:s=!1}=i;if(this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${t.details}`,t.fatal){var o,n,l,d;this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.errorName=t.type,this.playbackPerformance.errorReason=t.details,this.playbackPerformance.errorCode=t.response&&t.response.code?t.response.code:0;const e={errorName:t.type,errorReason:t.details,errorRetryCount:this.errorRetryCount,errorMessage:(null===(o=t.err)||void 0===o||null===(n=o.message)||void 0===n?void 0:n.slice(0,50))||"unknown",errorResponse:(null===(l=t.response)||void 0===l||null===(d=l.text)||void 0===d?void 0:d.slice(0,50))||"unknown",playbackState:this.state.playbackState};if((0,u.tE)("fatalError",!0,s,e),this.errorRetryCount>0)switch(this.errorRetryCount-=1,t.type){case r().ErrorTypes.NETWORK_ERROR:if(t.details===r().ErrorDetails.MANIFEST_LOAD_ERROR||t.details===r().ErrorDetails.MANIFEST_LOAD_TIMEOUT||t.details===r().ErrorDetails.MANIFEST_LOAD_PARSING_ERROR){var h;const{src:e,quicExpGroup:t}=this.props,a=S(e,t);null===(h=this.hls)||void 0===h||h.loadSource(a)}else{var c;null===(c=this.hls)||void 0===c||c.startLoad()}break;case r().ErrorTypes.MEDIA_ERROR:null===(a=this.hls)||void 0===a||a.recoverMediaError()}}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:p.Cy.FAILED})})),m(this,"handleHlsFragBuffered",((e,t)=>{this.firstFragBuffered||(this.initializeSegments(t.frag),this.firstFragBuffered=!0)})),m(this,"handleHlsFragChanged",((e,t)=>{this.addSegment(t.frag)})),m(this,"handleHlsFragLoading",((e,t)=>{var a;const i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&!this.fragStartupTime[i]&&(this.fragStartupTime[i]={startLoadTime:new Date})})),m(this,"handleHlsFragLoaded",((e,t)=>{var a;t.frag&&t.frag.loaded&&(this.playbackPerformance.downloadedKiloBytes+=t.frag.loaded/p.Fm);const i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&this.fragStartupTime[i]&&this.fragStartupTime[i].startLoadTime&&(this.fragStartupTime[i].endLoadTime=new Date)})),m(this,"handleHlsLevelSwitched",(()=>{this.hls&&this.hls.bandwidthEstimate&&(this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/p.bR)})),m(this,"handleLoadedMetadata",(()=>{this.setState({playbackState:p.Cy.LOADED_METADATA})})),m(this,"handleLoadStart",(()=>{this.playbackPerformance.loadStartTime=new Date,this.setState({playbackState:p.Cy.LOAD_START})})),m(this,"handleLoadedData",(()=>{this.setState({playbackState:p.Cy.LOADED_DATA})})),m(this,"handlePlaying",(()=>{this.playbackPerformance.hasFatalError=!1,this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.updatePauseDuration(),this.setState({playbackState:p.Cy.PLAYING})})),m(this,"handleUserPause",(e=>{const{onControlsPause:t}=this.props;this.lastPauseTime=new Date,t&&t(e)})),m(this,"handleVideoPause",(()=>{this.state.playbackState!==p.Cy.STALLING&&this.state.playbackState!==p.Cy.SEEKING&&(this.updateWatchDurationForCurrentSegment(),this.lastPauseTime||this.updateStallDuration()),this.setState({playbackState:p.Cy.PAUSED})})),m(this,"handleSeeking",(()=>{this.playbackPerformance.numberOfSeeks+=1;const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==p.Cy.ENDED&&this.setState({playbackState:p.Cy.SEEKING})})),m(this,"handleStalled",(()=>{null===this.lastStallTime&&this.state.playbackState!==p.Cy.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numberOfStalls+=1),this.setState({playbackState:p.Cy.STALLING})})),m(this,"handleTimeUpdate",(e=>{const{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===p.Cy.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())})),m(this,"resetPlaybackMetrics",(()=>{this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastLevelSwitchKbps=null,this.lastStallTime=null,this.lastPauseTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;const e={...this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],lastStartPlayTime:null,playbackStartDate:null,switchBitrateKbps:-1,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.downloadedKiloBytes=0,this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numberOfStalls=0,this.playbackPerformance.numberOfSeeks=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[e]})),m(this,"setLastSegmentStartPlayTime",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())})),m(this,"setLastSegmentPlaybackStartDate",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())})),m(this,"setPlaybackStartTime",(()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)})),m(this,"setVideoPlayerRef",(e=>{const{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){const e=this.videoPlayerRef.video;e.addEventListener("loadedmetadata",this.handleLoadedMetadata),e.addEventListener("loadeddata",this.handleLoadedData),e.addEventListener("pause",this.handleVideoPause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}})),m(this,"updateStallDuration",(()=>{null!==this.lastStallTime&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.lastStallTime,this.lastStallTime=null)})),m(this,"updatePauseDuration",(()=>{if(null!==this.lastPauseTime){const e=this.lastPauseTime;this.playbackPerformance.totalPauseDurationMs+=new Date-e,this.lastPauseTime=null}})),m(this,"updateWatchDurationForCurrentSegment",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,i=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof i&&"number"==typeof a){const e=i-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}})),m(this,"logPlaybackPerformance",((e,t)=>{const{contextLogData:a={},userId:i,isAutoPlay:s,logContextEvent:r}=this.props,{is_closeup_video:o=!1}=a,{canPlayTime:n,detailedErrors:l,downloadedKiloBytes:d,errorCode:h,errorName:c,errorReason:y,hasFatalError:m,playbackStartTimestamp:b,totalPauseDurationMs:S,totalStallDurationMs:P,segments:g,srcString:v,loadStartTime:f,numberOfStalls:k,numberOfSeeks:D}=this.playbackPerformance,E=this.videoPlayerRef&&this.videoPlayerRef.video,T=e===p.DR,R=T&&!this.hasVideoSessionStarted,L=!T&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(this.hls&&E&&(R||L)){var C;let R=-1;n&&f&&(R=n>f?n-f:0);let L=-1;n&&this.videoVisibleTime&&(L=n>this.videoVisibleTime?n-this.videoVisibleTime:0),T&&(this.videoSessionId=(0,p.Y7)(i),this.playerId=this.playerId||(0,p.EB)());const w={autoplaying:s,averageVideoKbps:-1,detailedErrors:l,downloadedKiloBytes:d,isCellular:!1,errorCode:h,errorName:c,errorReason:y,fatalError:m,nativeVideoDurationMs:E.duration*p.gJ||-1,numberOfStalls:k,numberOfSeeks:D,overallPausedDurationMs:S,overallBufferDurationMs:P,overallWatchedDurationMs:-1,rebufferRate:-1,playbackSessionId:this.videoSessionId,playbackStartTimestamp:b||-1,segments:[],sessionMark:e,screenPixelScale:null!==(C=window)&&void 0!==C&&C.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:E.clientWidth,startupPlayerHeight:E.clientHeight,startupTimeMs:R,startupLatencyMs:L,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:E.videoWidth,startupVariantHeight:E.videoHeight,videoUrl:v};if(!T&&g.length){const e=this.hls.levels,t=g[0];this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();const a=g.reduce(((t,a)=>{if(a&&"number"==typeof a.level&&e&&e.length>0){return t+(e[a.level]||{}).bitrate*(a.watchedDurationMs||0)/p.gJ}return t}),0),i=g.reduce(((e,t)=>e+(t.watchedDurationMs||0)),0);let s=null,r=0,o=0;do{r+=g[o].watchedDurationMs,s=s||g[o].level,o+=1}while(o<g.length&&g[o].level===s);w.startupVariantKbps=t.indicatedKbps,w.startupVariantWatchedDurationMs=r,w.startupVariantWidth=t.sourceWidth,w.startupVariantHeight=t.sourceHeight,w.startupPlayerWidth=t.viewportWidth,w.startupPlayerHeight=t.viewportHeight,w.overallWatchedDurationMs=i,i>0?(w.averageVideoKbps=a/(i/p.gJ),w.rebufferRate=this.playbackPerformance.totalStallDurationMs/i):0===i&&(w.averageVideoKbps=-1,w.rebufferRate=-1,w.errorName="invalid_watch_duration"),w.segments=g}else w.errorName="invalid_watch_duration";(0,u.ZP)(w,!0,o,{playbackState:this.state.playbackState,...t});const{clientTrackingParams:_,component:M,durationNs:V,element:A,objectId:I,pairId:O,viewData:F,view:x,viewParameter:N,...W}=a;r({aux_data:{...W,is_closeup_video:o,playback_session_id:this.videoSessionId},clientTrackingParams:_,component:M,duration_ns:V,element:A,event_data:{videoPerformanceData:w},event_type:3606,object_id_str:I,pair_id:O,view_data:F,view_parameter:N,view_type:x}),T?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),(0,u.tE)(T?"sessionStart":"sessionEnd",!0,o,{playbackState:this.state.playbackState,...t})}}))}componentDidMount(){const{contextLogData:e={},playing:t}=this.props,{is_closeup_video:a=!1}=e;this.playbackPerformance.videoCreatedTime=new Date,this.initializeHls(),(0,u.tE)("videoMounted",!0,a),t&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(p.DR,{initiator:"mount"}))}componentDidUpdate(e){const{loop:t,playing:a,src:i,visible:s,appInFocus:r}=this.props;var o,n;(typeof(o=e.src)!=typeof(n=i)||(Array.isArray(n)?o.length!==n.length||n.some(((e,t)=>!Array.isArray(o)||e.type!==o[t].type||e.src!==o[t].src)):n!==o))&&this.initializeHls(),e.appInFocus&&!r&&(this.logPlaybackPerformance(p.$f,{initiator:"update",loop:t}),this.logSessionStartOnNextPlay=!0),e.visible&&!1===s&&(this.logSessionStartOnNextPlay=!1,this.updatePauseDuration(),this.logPlaybackPerformance(p.$f,{initiator:"update",loop:t})),!1===e.visible&&!0===s&&(this.videoVisibleTime=this.videoVisibleTime||new Date,a?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(p.DR,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),a&&r&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(p.DR,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)}componentWillUnmount(){const{loop:e}=this.props;this.updatePauseDuration(),this.logPlaybackPerformance(p.$f,{initiator:"unmount",loop:e}),this.destroyHls()}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:n,backgroundColor:l,captions:d,controls:h,loop:u,loopOverride:p,onDurationChange:m,onFullscreenChange:b,onLoadedChange:P,onControlsPlay:g,onPlayheadDown:v,onPlayheadUp:f,onSeek:k,onVolumeChange:D,playbackRate:E,playing:T,playsInline:R,poster:L,preload:C,quicExpGroup:w,src:_,volume:M}=this.props,{canPlayVideo:V,isManifestParsed:A}=this.state,I=S(_,w);return(0,y.jsx)(c.nk,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:n,backgroundColor:l,captions:d,controls:h,loop:void 0===p?u:p,onDurationChange:m,onEnded:this.handleEnded,onFullscreenChange:b,onLoadStart:this.handleLoadStart,onLoadedChange:P,onControlsPause:this.handleUserPause,onControlsPlay:g,onPlaying:this.handlePlaying,onPlayheadDown:v,onPlayheadUp:f,onReady:this.handleCanPlayVideo,onSeek:k,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:D,onWaiting:this.handleStalled,playbackRate:E,onPlay:()=>{},onPlayError:()=>{},playing:A&&V&&T,playsInline:R,poster:L,preload:C,ref:this.setVideoPlayerRef,src:I,volume:M})}}const g=(0,i.memo)((function(e){const{country:t,isAuthenticated:a,isBot:i,isSocialBot:s,unauthId:r,userAgent:c}=(0,h.B)(),p=(0,o.Z)(),m=(0,n.Z)(),{browserName:b,browserVersion:S,isMobile:g}=c,{contextLogData:v={}}=e,{is_closeup_video:f=!1,view:k,viewParameter:D}=v,{checkExperiment:E}=(0,d.F)();let T=null;a&&(T=E("web_video_quic").group.length?E("web_video_quic").group:null);const{appUI:R}=(0,l.I)(),L=E("web_video_fail_to_start_fix").anyEnabled?R.appInFocus:e.appInFocus,C={browserName:b,browserVersion:S,country:t,isAuthenticated:a,isBot:i,is_closeup_video:f,isMobile:g,isSocialBot:s,view:k,viewParameter:D};return(0,u.r$)(C),(0,y.jsx)(P,{...e,userId:m.id||r,appInFocus:L,quicExpGroup:T,logContextEvent:p})}))},969315:(e,t,a)=>{a.d(t,{ZP:()=>c,r$:()=>d,tE:()=>h});var i=a(311560),s=a(172071),r=a(179888);const o=["isCellular","videoUrl","sessionMark"];let n={},l="";const d=e=>{const{browserName:t,browserVersion:a,country:s,isAuthenticated:r,isBot:o,isMobile:d,isSocialBot:h,view:c="unknown",viewParameter:u="unknown"}=e;l=(h?"socialBot":o&&"bot")||"nonbot";const p=(0,i.Z)(s);n={browserName:t,browserVersion:(null==a?void 0:a.split(".")[0])||"0",isAuthenticated:r,isMobile:d,region:p,view:c,viewParameter:u}};function h(e,t,a,i={}){const r=a?"closeup":"nonCloseup",o=t?"hls":"nonHls",d={...i,...n},h=`web.video.${o}.${l}.${r}.${e}`;s.Z.increment(h,1,d)}function c(e,t,a,i={}){const d=a?"closeup":"nonCloseup",h=t?"hls":"nonHls",c=e.sessionMark===r.DR?"sessionStart":"sessionEnd",u={...i,...n};if(Object.entries(e).forEach((([t,a])=>{const i=`web.video.${h}.${l}.${d}.${c}.${t}`,r=parseInt(a,10),n="number"==typeof r?r:-1;var p;if(!o.includes(t))if(t.includes("fatalError")&&!0===a){const{errorCode:t,errorName:a,errorReason:r}=e;s.Z.increment(i,1,{errorCode:t,errorName:a,errorReason:r,...u})}else if(t.includes("Width")||t.includes("Height")){const e=(p=n)<0?"negative":0===p?"zero":p<200?"xs":p<400?"s":p<600?"m":p<800?"l":p<1e3?"xl":p<1200?"xxl":"over1200";s.Z.increment(i,1,{dimensionBucket:e,...u})}else if("numberOfStalls"===t){let e=a;n>1e3?e="over1000":n>10?e="over10":n<0&&(e="negative"),s.Z.increment(i,1,{numberOfStalls:e,...u})}else"screenPixelScale"===t?s.Z.increment(i,1,{screenPixelScale:a||-1,...u}):n>=0?(0===n&&s.Z.increment(`${i}.zero`,1,u),s.Z.timing(i,n,1),s.Z.timing(`${i}_with_tags`,n,1,u)):n<0&&s.Z.increment(`${i}.negative`,1,u)})),e.sessionMark!==r.DR){const{rebufferRate:t,screenPixelScale:a,startupLatencyMs:i,startupVariantWidth:r,startupPlayerWidth:o}=e,n=`web.video.${h}.${l}.${d}.${c}`;if("number"==typeof r&&"number"==typeof o&&"number"==typeof a){const e=1.5*r>a*o;s.Z.increment(`${n}.upscaled.${e?"good":"bad"}`,1,u)}"number"==typeof i&&s.Z.increment(`${n}.startupLatency.${i<500?"good":"bad"}`,1,u),"number"==typeof t&&s.Z.increment(`${n}.rebufferRate.${t<.01?"good":"bad"}`,1,u)}}},179888:(e,t,a)=>{a.d(t,{$f:()=>r,Cy:()=>d,DR:()=>s,EB:()=>u,Fm:()=>l,Y7:()=>c,bR:()=>n,gJ:()=>o,lG:()=>h});var i=a(172045);const s=1,r=2,o=1e3,n=1e3,l=1e3,d=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),h=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4});function c(e){return e+"-"+(0,i.Z)()}function u(){return(0,i.Z)()}},288273:(e,t,a)=>{a.r(t),a.d(t,{VideoWrapper:()=>f,default:()=>k,getPlaylistSourceSrc:()=>v});var i=a(667294),s=a(19121),r=a(494349),o=a(407043),n=a(773285),l=a(780280),d=a(883119),h=a(969315),c=a(179888),u=a(785893);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e,t){if(!e||void 0===e)return"undefined";if("string"==typeof e){let a=e;if(t){const i="control"===t?"v3.pinimg.com":"v2.pinimg.com";a=e.replace("v.pinimg.com",i)}return a}if(Array.isArray(e)&&e[0].src){let a=e[0].src;if(t){const e="control"===t?"v3.pinimg.com":"v2.pinimg.com";a=a.replace("v.pinimg.com",e)}return a}return"unsupported_type_"+typeof e}class m extends i.Component{constructor(...e){super(...e),p(this,"state",{canPlayVideo:!1,playbackState:c.Cy.DEFAULT}),p(this,"errorRetryCount",2),p(this,"hasSegmentStarted",!1),p(this,"hasPlaybackStarted",!1),p(this,"hasVideoSessionStarted",!1),p(this,"hasVideoSessionEnded",!1),p(this,"lastStallTime",null),p(this,"lastPauseTime",null),p(this,"logSessionStartOnNextPlay",!1),p(this,"playerId",""),p(this,"videoSessionId",""),p(this,"videoVisibleTime",null),p(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numberOfStalls:0,numberOfSeeks:0,playbackStartTimestamp:null,segments:[],srcString:y(this.props.src,this.props.quicExpGroup),totalStallDurationMs:0,totalPauseDurationMs:0}),p(this,"componentDidMount",(()=>{const{contextLogData:e={},playing:t}=this.props,{is_closeup_video:a=!1}=e;(0,h.tE)("videoMounted",!1,a),t&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(c.DR,{initiator:"mount"}))})),p(this,"componentDidUpdate",(e=>{const{playing:t,visible:a,appInFocus:i}=this.props;e.appInFocus&&!i&&(this.logPlaybackPerformance(c.$f,{initiator:"update"}),this.logSessionStartOnNextPlay=!0),e.visible&&!1===a&&(this.logSessionStartOnNextPlay=!1,this.updatePauseDuration(),this.logPlaybackPerformance(c.$f,{initiator:"update"})),!1===e.visible&&!0===a&&(this.videoVisibleTime=this.videoVisibleTime||new Date,t?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(c.DR,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),t&&i&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(c.DR,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)})),p(this,"addSegment",(()=>{const{canPlayTime:e,loadStartTime:t,segments:a,srcString:i}=this.playbackPerformance;let s=-1;e&&t&&0===a.length&&(s=e>t?e-t:0);const r=this.videoPlayerRef&&this.videoPlayerRef.video,o={indicatedKbps:-1,duration:r&&r.duration*c.gJ||-1,lastStartPlayTime:null,level:-1,numServerAddressChange:-1,observedKbps:-1,playbackStartDate:null,serverAddress:"",sourceWidth:-1,sourceHeight:-1,startupTimeMs:s,switchBitrateKbps:-1,uri:i,viewportWidth:r&&r.clientWidth||-1,viewportHeight:r&&r.clientHeight||-1,watchedDurationMs:0};a.push(o)})),p(this,"getCurrentVideoTime",(()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*c.gJ:0)),p(this,"getVideoResourceTiming",(()=>{var e,t;if(null!==(e=window)&&void 0!==e&&null!==(t=e.performance)&&void 0!==t&&t.getEntriesByName&&this.playbackPerformance.srcString){const e=window.performance.getEntriesByName(this.playbackPerformance.srcString);return e.length>0&&e[0]||null}return null})),p(this,"handleCanPlayVideo",(e=>{const{contextLogData:t={},onReady:a,playing:i,videoStartTime:s}=this.props,{is_closeup_video:r=!1}=t,{canPlayVideo:o}=this.state;(0,h.tE)("handleCanPlayVideo",!1,r,{firstCanPlayEvent:!o,playing:i}),this.playbackPerformance.hasFatalError=!1,o||(this.playbackPerformance.canPlayTime=new Date,null!=s&&this.videoPlayerRef&&this.videoPlayerRef.video&&(this.videoPlayerRef.video.currentTime=s)),this.setState({canPlayVideo:!0}),a&&a(e)})),p(this,"handleEnded",(e=>{const{loop:t,onEnded:a}=this.props,{segments:i}=this.playbackPerformance,s=i&&i[i.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),s&&(s.lastStartPlayTime=0),this.hasSegmentStarted=!1):t||this.logPlaybackPerformance(c.$f,{initiator:"videoEnded",loop:t}),this.setState({playbackState:c.Cy.ENDED}),a&&a(e)})),p(this,"handleError",(()=>{var e,t,a,i,s,r,o,n;const{contextLogData:l={}}=this.props,{is_closeup_video:d=!1}=l,u=this.videoPlayerRef&&this.videoPlayerRef.video;(null==u||null===(e=u.error)||void 0===e?void 0:e.code)!==c.lG.MEDIA_ERR_ABORTED&&(this.playbackPerformance.hasFatalError=!0),this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${(null==u||null===(t=u.error)||void 0===t?void 0:t.message)||""}`,this.playbackPerformance.errorCode=(null==u||null===(a=u.error)||void 0===a?void 0:a.code)||0,this.playbackPerformance.errorName=(null==u||null===(i=u.error)||void 0===i||null===(s=i.message)||void 0===s?void 0:s.slice(0,100))||"unknown",this.playbackPerformance.errorReason=(null==u||null===(r=u.error)||void 0===r||null===(o=r.message)||void 0===o?void 0:o.slice(0,100))||"unknown";const p={errorName:this.playbackPerformance.errorCode,errorReason:this.playbackPerformance.errorName,errorRetryCount:this.errorRetryCount,playbackState:this.state.playbackState,networkState:(null==u?void 0:u.networkState)||"unknown"};switch((0,h.tE)("fatalError",!1,d,p),null==u||null===(n=u.error)||void 0===n?void 0:n.code){case c.lG.MEDIA_ERR_ABORTED:break;case c.lG.MEDIA_ERR_NETWORK:case c.lG.MEDIA_ERR_DECODE:case c.lG.MEDIA_ERR_SRC_NOT_SUPPORTED:default:this.errorRetryCount>0&&(null==u||u.load(),this.errorRetryCount-=1)}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:c.Cy.FAILED})})),p(this,"handleLoadedMetadata",(()=>{this.setState({playbackState:c.Cy.LOADED_METADATA})})),p(this,"handleLoadStart",(()=>{this.playbackPerformance.loadStartTime=new Date,this.setState({playbackState:c.Cy.LOAD_START})})),p(this,"handleLoadedData",(()=>{this.setState({playbackState:c.Cy.LOADED_DATA})})),p(this,"handlePlaying",(()=>{this.playbackPerformance.hasFatalError=!1,this.setPlaybackStartTime(),this.hasSegmentStarted||this.addSegment(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.updatePauseDuration(),this.setState({playbackState:c.Cy.PLAYING})})),p(this,"handleUserPause",(e=>{const{onControlsPause:t}=this.props;this.lastPauseTime=new Date,t&&t(e)})),p(this,"handleVideoPause",(()=>{this.state.playbackState!==c.Cy.STALLING&&this.state.playbackState!==c.Cy.SEEKING&&(this.updateWatchDurationForCurrentSegment(),this.lastPauseTime||this.updateStallDuration()),this.setState({playbackState:c.Cy.PAUSED})})),p(this,"handleSeeking",(()=>{this.playbackPerformance.numberOfSeeks+=1;const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==c.Cy.ENDED&&this.setState({playbackState:c.Cy.SEEKING})})),p(this,"handleStalled",(()=>{null===this.lastStallTime&&this.state.playbackState!==c.Cy.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numberOfStalls+=1,this.setState({playbackState:c.Cy.STALLING}))})),p(this,"handleTimeUpdate",(e=>{const{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===c.Cy.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())})),p(this,"resetPlaybackMetrics",(()=>{this.hasSegmentStarted=!0,this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastStallTime=null,this.lastPauseTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;const e={...this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],lastStartPlayTime:null,playbackStartDate:null,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numberOfStalls=0,this.playbackPerformance.numberOfSeeks=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[e]})),p(this,"setLastSegmentStartPlayTime",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())})),p(this,"setLastSegmentPlaybackStartDate",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())})),p(this,"setPlaybackStartTime",(()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)})),p(this,"setVideoPlayerRef",(e=>{const{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){const e=this.videoPlayerRef.video;e.addEventListener("loadedmetadata",this.handleLoadedMetadata),e.addEventListener("loadeddata",this.handleLoadedData),e.addEventListener("pause",this.handleVideoPause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}})),p(this,"updateStallDuration",(()=>{if(null!==this.lastStallTime){const e=this.lastStallTime;this.playbackPerformance.totalStallDurationMs+=new Date-e,this.lastStallTime=null}})),p(this,"updatePauseDuration",(()=>{if(null!==this.lastPauseTime){const e=this.lastPauseTime;this.playbackPerformance.totalPauseDurationMs+=new Date-e,this.lastPauseTime=null}})),p(this,"updateWatchDurationForCurrentSegment",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,i=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof i&&"number"==typeof a){const e=i-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}})),p(this,"logPlaybackPerformance",((e,t)=>{const{contextLogData:a={},userId:i,isAutoPlay:s,logContextEvent:r}=this.props,{is_closeup_video:o=!1}=a,{canPlayTime:n,detailedErrors:l,errorCode:d,errorName:u,errorReason:p,hasFatalError:y,loadStartTime:m,totalPauseDurationMs:b,totalStallDurationMs:S,numberOfStalls:P,numberOfSeeks:g,playbackStartTimestamp:v,segments:f,srcString:k}=this.playbackPerformance,D=this.videoPlayerRef&&this.videoPlayerRef.video,E=e===c.DR,T=E&&!this.hasVideoSessionStarted,R=!E&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(D&&(T||R)){var L;let T=-1;n&&m&&(T=n>m?n-m:0);let R=-1;n&&this.videoVisibleTime&&(R=n>this.videoVisibleTime?n-this.videoVisibleTime:0),E&&(this.videoSessionId=(0,c.Y7)(i),this.playerId=this.playerId||(0,c.EB)());const C=this.getVideoResourceTiming(),w={averageVideoKbps:-1,autoplaying:s,detailedErrors:l,downloadedKiloBytes:"number"==typeof(null==C?void 0:C.decodedBodySize)&&C.decodedBodySize/c.Fm||0,errorCode:d,errorName:u,errorReason:p,fatalError:y,isCellular:!1,nativeVideoDurationMs:D.duration*c.gJ||-1,numberOfStalls:P,numberOfSeeks:g,overallPausedDurationMs:b,overallBufferDurationMs:S,overallWatchedDurationMs:-1,rebufferRate:-1,playbackSessionId:this.videoSessionId,playbackStartTimestamp:v||-1,segments:[],sessionMark:e,screenPixelScale:null!==(L=window)&&void 0!==L&&L.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:D.clientWidth,startupPlayerHeight:D.clientHeight,startupTimeMs:T,startupLatencyMs:R,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:D.videoWidth,startupVariantHeight:D.videoHeight,videoUrl:k};if(!E){this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();const e=f.reduce(((e,t)=>e+(t.watchedDurationMs||0)),0);w.overallWatchedDurationMs=e,w.startupVariantWatchedDurationMs=e,w.segments=this.playbackPerformance.segments,0===e?(w.errorName="invalid_watch_duration",w.rebufferRate=-1):w.rebufferRate=S/e}(0,h.ZP)(w,!1,o,{playbackState:this.state.playbackState,...t});const{view:_,viewParameter:M,component:V,element:A,objectId:I,...O}=a;r({event_type:3606,event_data:{videoPerformanceData:w},view_type:_,view_parameter:M,component:V,element:A,object_id_str:I,aux_data:{...O,is_closeup_video:o,playback_session_id:this.videoSessionId}}),E?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),(0,h.tE)(E?"sessionStart":"sessionEnd",!1,o,{playbackState:this.state.playbackState,...t})}}))}componentWillUnmount(){const{loop:e}=this.props;this.updatePauseDuration(),this.logPlaybackPerformance(c.$f,{initiator:"unmount",loop:e})}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:n,captions:l,controls:h,loop:c,loopOverride:p,objectFit:m,onDurationChange:b,onFullscreenChange:S,onLoadedChange:P,onControlsPlay:g,onPlayheadDown:v,onPlayheadUp:f,onSeek:k,onVolumeChange:D,playbackRate:E,playing:T,playsInline:R,poster:L,preload:C,src:w,volume:_}=this.props,{canPlayVideo:M}=this.state;return(0,u.jsx)(d.nk,{autoplay:M&&T,accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:n,captions:l,controls:h,loop:void 0===p?c:p,objectFit:m,onDurationChange:b,onEnded:this.handleEnded,onError:this.handleError,onFullscreenChange:S,onLoadedChange:P,onLoadStart:this.handleLoadStart,onControlsPause:this.handleUserPause,onControlsPlay:g,onPlaying:this.handlePlaying,onPlayheadDown:v,onPlayheadUp:f,onReady:this.handleCanPlayVideo,onSeek:k,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:D,onWaiting:this.handleStalled,playbackRate:E,onPlay:()=>{},onPlayError:()=>{},playing:M&&T,playsInline:R,poster:L,preload:C,ref:this.setVideoPlayerRef,src:y(w,this.props.quicExpGroup),volume:_})}}const b=(0,i.memo)((function(e){const{logContextEvent:t}=(0,o.v)(),{country:a,isAuthenticated:i,isBot:d,isSocialBot:c,unauthId:p,userAgent:y}=(0,l.B)(),{browserName:b,browserVersion:S,isMobile:P}=y,{contextLogData:g={}}=e,{is_closeup_video:v=!1,view:f,viewParameter:k}=g,{appUI:{appInFocus:D}}=(0,r.I)(),{checkExperiment:E}=(0,n.F)();let T=null;i&&(T=E("web_video_quic").group.length?E("web_video_quic").group:null);const R=(0,s.Z)(),L={browserName:b,browserVersion:S,country:a,isAuthenticated:i,isBot:d,is_closeup_video:v,isMobile:P,isSocialBot:c,view:f,viewParameter:k};return(0,h.r$)(L),(0,u.jsx)(m,{...e,userId:R.id||p,appInFocus:D,quicExpGroup:T,logContextEvent:t})}));var S=a(562559),P=a(366284);function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const v=e=>{if(Array.isArray(e)){const t=e.find((e=>"video/m3u8"===e.type));return t?t.src:void 0}return RegExp("m3u8$").test(e)?e:void 0};class f extends i.PureComponent{constructor(e){super(e),g(this,"componentDidUpdate",((e,t)=>{var a;e.videoStartTime&&this.props.videoStartTime&&e.videoStartTime<this.props.videoStartTime&&null!==(a=this.videoPlayerRef)&&void 0!==a&&a.video&&(this.videoPlayerRef.video.currentTime=this.props.videoStartTime)})),g(this,"setVideoPlayerRef",(e=>{e&&(this.videoPlayerRef=e)})),g(this,"handleOnEnded",(({event:e})=>{const{loop:t,onLoop:a,onEnded:i}=this.props;i&&(i({event:e}),this.videoPlayerRef&&this.videoPlayerRef.video&&t&&(this.videoPlayerRef.video.play(),a&&a()))}));const t=v(e.src);this.state={useHlsVideo:!e.preferMp4&&!(0,P.G6)(e.requestContext.userAgent.browserName)&&!!t}}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:n,appInFocus:l,backgroundColor:d,captions:h,contextLogData:c,controls:p,hlsConfig:y,isAutoPlay:m,loop:P,objectFit:g,onDurationChange:f,onEnded:k,onFullscreenChange:D,onLoadedChange:E,onControlsPause:T,onControlsPlay:R,onPlayheadDown:L,onPlayheadUp:C,onReady:w,onSeek:_,onTimeChange:M,onVolumeChange:V,playbackRate:A,playing:I,playsInline:O,poster:F,preferMp4:x,preload:N,src:W,videoStartTime:B,visible:H,volume:U}=this.props,{useHlsVideo:K}=this.state,$=v(W),G={...y,startPosition:B||-1},z=!k&&P;return K&&$?(0,u.jsx)(S.Z,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:n,appInFocus:l,backgroundColor:d,captions:h,contextLogData:c,controls:p,hlsConfig:G,isAutoPlay:m,loop:P,loopOverride:z,onDurationChange:f,onEnded:this.handleOnEnded,onFullscreenChange:D,onLoadedChange:E,onControlsPause:T,onControlsPlay:R,onPlayheadDown:L,onPlayheadUp:C,onReady:w,onSeek:_,onTimeChange:M,onVolumeChange:V,playbackRate:A,onPlay:()=>{},onPlayError:()=>{},playing:I,playsInline:O,poster:F,preload:N,setVideoRef:this.setVideoPlayerRef,src:$,visible:H,volume:U}):(0,u.jsx)(b,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:n,captions:h,contextLogData:c,controls:p,isAutoPlay:m,loop:P,loopOverride:z,objectFit:g,onDurationChange:f,onEnded:this.handleOnEnded,onFullscreenChange:D,onLoadedChange:E,onControlsPause:T,onControlsPlay:R,onPlayheadDown:L,onPlayheadUp:C,onReady:w,onSeek:_,onTimeChange:M,onVolumeChange:V,playbackRate:A,onPlay:()=>{},onPlayError:()=>{},playing:I,playsInline:O,poster:F,preload:N,setVideoRef:this.setVideoPlayerRef,src:x?W:$||W,videoStartTime:B,visible:H,volume:U})}}function k(e){const{appUI:{appInFocus:t}}=(0,r.I)(),a=(0,l.B)();return(0,u.jsx)(f,{...e,appInFocus:t,requestContext:a})}},559230:(e,t,a)=>{a.d(t,{HJ:()=>s,VS:()=>i,iM:()=>r});const i=2,s="V_HLSV3_MOBILE",r=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/9515-2a65f4caba9e7dde.mjs.map