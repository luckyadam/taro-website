webpackJsonp([4],{"49":function(e,t,n){Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=s(n(0)),i=n(5),r=n(1),l=s(n(6));s(n(89));function s(e){return e&&e.__esModule?e:{"default":e}}n(92);var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.showTip=function(){e.state.tip||(e.setState({"tip":!0}),setTimeout(function(){e.setState({"tip":!1})},1600))},e.playVideo=function(){e.state.play||e.setState({"play":!0})},e.stopVideo=function(){e.state.play&&e.setState({"play":!1})},e.state={"tip":!1,"play":!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].Component),a(t,[{"key":"render","value":function(){return function(){var e=i.isLocaleChinese.call(this);return o["default"].createElement("div",{"className":"banner"},o["default"].createElement("div",{"className":"banner_main"},o["default"].createElement(l["default"],{"show":this.state.tip}),o["default"].createElement("h1",{"className":"banner_tit"},"Hi, I'm Taro"," "),o["default"].createElement("h2",{"className":"banner_desc"},o["default"].createElement(r.FormattedMessage,{"id":"banner_desc"})),o["default"].createElement("div",{"className":"banner_btns"},e&&o["default"].createElement("a",{"className":"toDoc","href":"https://nervjs.github.io/taro/"},"起步"),o["default"].createElement("a",{"className":"toGithub","href":"https://github.com/NervJS/taro","target":"_blank"},"GitHub"))),o["default"].createElement("div",{"className":"banner_quickstart"},o["default"].createElement("pre",{"className":"banner_code_main","style":"color: rgb(169, 183, 198); background: rgb(40, 43, 46); display: block; overflow-x: auto; padding: 30px; border-radius: 4px;"},o["default"].createElement("code",null,o["default"].createElement("span",{"style":"color: rgb(128, 128, 128);"},"/** Quick Start With NPM Or Yarn **/"),o["default"].createElement("br",null),"$ npm install -g @tarojs/cli",o["default"].createElement("br",null),"$ yarn global add @tarojs/cli"))))}}()}]),t}();t["default"]=c},"89":function(e,t,n){Object.defineProperty(t,"__esModule",{"value":!0});var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),r=(a=i)&&a.__esModule?a:{"default":a};n(90);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["default"].Component),o(t,[{"key":"render","value":function(){return function(){var e=this.props,t=e.play,n=e.pause,a=this.refs.video,o=document.getElementsByTagName("body")[0],i=document.getElementsByTagName("html")[0];return t?(a&&(a.play(),a.currentTime=0),o.style=i.style="width: 100%;height: 100%;overflow:hidden;"):(o.style=i.style="",a&&a.pause()),r["default"].createElement("div",{"className":t?"video":"video hide"},r["default"].createElement("video",{"src":"http://storage.jd.com/index/nerv_720p.mp4","ref":"video","preload":"auto"}),r["default"].createElement("span",{"className":"video_close","onClick":n}))}}()}]),t}();t["default"]=l},"90":function(e,t,n){var a=n(91);"string"==typeof a&&(a=[[e.i,a,""]]);var o={"transform":void 0};n(48)(a,o);a.locals&&(e.exports=a.locals)},"91":function(e,t,n){(e.exports=n(47)(undefined)).push([e.i,'.video{position:fixed;top:0;bottom:0;margin:auto;z-index:999;width:100%;height:100%;overflow:hidden;opacity:1;-webkit-transition:all .5s ease;-o-transition:all .5s ease;-moz-transition:all .5s ease;transition:all .5s ease}.video video{width:100%}.video.hide{opacity:0;z-index:-1}.video_close{width:30px;height:30px;display:inline-block;position:absolute;right:20px;top:20px;-moz-border-radius:50%;border-radius:50%;border:2px solid #999;cursor:pointer;-webkit-transition:all .3s ease;-o-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease}.video_close:hover{border-color:#ccc}.video_close:hover::after,.video_close:hover::before{background-color:#ccc}.video_close::after,.video_close::before{width:16px;height:2px;background-color:#999;content:"";display:block;position:relative;left:7px}.video_close::before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:15px}.video_close::after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);top:13px}',""])},"92":function(e,t,n){var a=n(93);"string"==typeof a&&(a=[[e.i,a,""]]);var o={"transform":void 0};n(48)(a,o);a.locals&&(e.exports=a.locals)},"93":function(e,t,n){(e.exports=n(47)(undefined)).push([e.i,".banner{position:relative;top:0;width:100%;min-width:1190px;height:500px;background:url("+n(94)+') 0 0/100% 100% no-repeat #191a1e}.banner_main{color:#fff;text-align:center;padding:175px 0 0}.banner_code_main{width:400px;font-size:14px;text-align:center;margin:0 auto;position:relative;top:80px}.banner_tit{font-family:Seravek,"Sans-serif";font-size:50px;width:320px;position:relative;margin:0 auto;text-align:center}.banner_desc{font-weight:300;font-size:17px;line-height:.5}.banner_play_btn{width:40px;height:40px;display:inline-block;background-image:url('+n(95)+');background-repeat:no-repeat;-moz-background-size:100% auto;background-size:100% auto;position:absolute;top:20px;margin-left:10px;cursor:pointer;-webkit-transition:all .3s ease;-o-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease;opacity:.5}.banner_play_btn:hover{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:1}.banner_btns{width:280px;margin:32px auto 0}.banner_btns a{font-size:14px;-moz-border-radius:20px;border-radius:20px;width:125px;height:38px;line-height:38px;display:inline-block;color:#fff;z-index:10;position:relative;background-color:#4573de;-webkit-transition:all .3s ease;-o-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease}.banner_btns a::before{position:relative;top:4px;margin-right:8px;background-repeat:no-repeat;content:"";display:inline-block;width:18px;height:18px;-moz-background-size:100%;background-size:100%}.banner_btns a:hover{color:#fff;background-color:#3361d8}.banner_btns .toDoc{margin-right:18px}.banner_btns .toDoc::before{background-image:url('+n(96)+")}.banner_btns .toGithub::before{background-image:url("+n(97)+")}",""])},"94":function(e,t,n){e.exports=n.p+"static/images/banner.jpg"},"95":function(e,t,n){e.exports=n.p+"static/images/icon_video.png"},"96":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUY4RjM2MkVEMzhBMTFFNzlDRUZFREZCMzZCODNEMjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUY4RjM2MkZEMzhBMTFFNzlDRUZFREZCMzZCODNEMjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RjhGMzYyQ0QzOEExMUU3OUNFRkVERkIzNkI4M0QyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RjhGMzYyREQzOEExMUU3OUNFRkVERkIzNkI4M0QyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pnu1MGkAAANxSURBVHjazFuBdaQgEF1TgSXYwdnB0kHs4Ozg0kHsYO0gdhCvguxVIFeBdqCpwIM7fJmdGxAVBN6b6NsI+Pd/hmFgk4uHMs9zLi5XYfKaAYNlUMbV9VeSJPwSaxGgnoW9Cxvn/WVUbTzHAioV9moJ6q65N4GVbaexAZuENcJKYQzV+1vQZ0w926i6YYGKjgphPfEiDQZE1OXSVp5hqi1c+rX2XYC7aYBlHvrKNEBvviTZEWMqO0ExGTFmO2eSlS4fSVKOkzLAuC/RGO3UdHQYHHQk/HCjx9+HIweUH5Flj8Cll8BFvRc/LFc05qIAZwK5tYE6VnAGkPWWeQ46lDwSMKlmTELHw7aOuzICcIVyJqMGZImCgdTUWAXnuQhYe4dqMjwL58nK1CCcErIIWIOlWAkG4NSRrrHXRMLaUlqLuo2RxdDsaVhbHF1qUf+BRZPnbCJhbVWaKywW8B+ttas9hzVraRJLrf+JAp1MkbBmLU2i7elBpmqyPE2eFqxtlqZBpvmT+AxK8u6bNXErbY2Zn0mStDu7ghjYk0rtwVSeF9bEpRdmw8qnsCMRFMSQPUQBnsC9bUwdFg76/IrGYOzpabxtKa2jfr+WUb5iTxT6VSgoduY112LTC9FR56iTZRrgmsjfhzRxYowEyB1LMzcsb1xLk5sA3n1I05Ahcy5NnUQHl06GkibxzKtLaRqcDHc6TZikCWLF3nfkhKeJxkWgbZKm+t8NybLwBI49JKLEnxcXORidNAnWWp9ZOoTnxUmwjaTJzmbNFGzTS4z90qxDsKbJTExOFrxAmoNKG5zOms2Cd1fKAtWrQrG2mrJAMrVKOiFpjqFY0ySdpsNpQ116L9Q+hk3aMLVlkVgGBWFNx572S0Ysflh4qqCsgff5WE3dAxYH08QPmA7KmiZwH7a62lETU6aR7PbiLXZmW7H2cqLBfcag27wBqlk8RgWSAMf3NhIdSArc7vcitoiPn005PuY6p1vsmrMpZQBwpbczO4RcZzX3ZCcAy9A85+/kB/KuS3nzeBiPyorXvr9RhoIBCJRZ5C07i/YpYMNpe5dKspXhAKt8we/CrlQyCH12FfZD1dFtYVchXbYO6EyMWerelMqvopl/1QqjsQRrAtW4jHETX/PV5d/GqnQ+8l6y8A099luYXJguPyu4+/hZwR8BBgDZg0mTyZ6m3AAAAABJRU5ErkJggg=="},"97":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUY4RjM2MkFEMzhBMTFFNzlDRUZFREZCMzZCODNEMjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUY4RjM2MkJEMzhBMTFFNzlDRUZFREZCMzZCODNEMjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODVFMDhFOUQyODIxMUU3OUNFRkVERkIzNkI4M0QyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODVFMDhFQUQyODIxMUU3OUNFRkVERkIzNkI4M0QyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgdB9YMAAAO5SURBVHjazFmNdZwwDAYWKBuUTBA2KBuUDUImODYInSB0grsNSic4MsGRCbhOcHQCaqdyogr/CDB31Xt6JAe2JVv+9MkOA88yjmMsHveG169hGA4+xws9GJyIx1ehGWjsaCIdaEF/CofOwS1EGP4g9DSuF9nHw7UN74kRg9BGaCk0gzCahBa8K+HbgfTRb+qI6DwVeiSDtkLzFX3m0AcWOUbq2/hC6IUYnnieHOyIHKvw1fmehEq+4SrnJLT2Po1vdbG9BQyT1dj7MP5wA5Q7LHYCkOJmxhucKOdsKCVNcGMByFWScuJPYfzZgudffO4HW5/w7qxyhaujyuUtCa8fMjmtMDwjuaVgREWl5ULgfQ9c5rvgKKVpSYH7YJG85hHaSiInc0SKeJHkP51QyXte4f89cCcskhvlhnFr8dhB27sJKUSzP9jCA0Fci5Z2jbS4T0eYDXQVIvTNDp41k/K24rsEZv43+l3+/QL6DVT9T797FH1ksIJ22vzXpprY+g9VUJI44ral8AqzU3I4DMRziVcZIU3jou7IzlwHVS3DgBp1EntCICU14/tu4iwiaiUDNbznCEIdMmaSveggKnU0VpDXbZAH1MweZyTaVDHAN5nRMAs8C1ld10S+74MI8DoAfLaJ2jS/BCK0vh2APhVKuSZI2ZpGpNjmyJZFeAdPzsHAex7glm9JcD3h7q+3FYj/g5k3zrDL0YiTBYl83tDwuX230YL4TLYoLYEBJIgcsiTiei9QAieucoPZLwgi2eTehL8xs8S7bJDILpwSllCPjP6QzyBTJ49c6ISovItMThMvSuMcMlWQA6inJYdcMBlP5MCsYLSrMfEMSbVzFvF3x3ECuPknArMd6IA2fUCyawqakNqgIPvMNHYPbT+qRiPP/uBAk4Ib2hw0h7RzZIAZjZmrZq5bEKU9GhpdTHsEgKAiRyCKtXbktwa+zRaE3dFYtxDvMo2Bg4uJklONg+GosPLAVnNXtdNbHDRCqA0KMQQvdECdV3VcLytL5dRrVmlnq6vJPstmGl+x25KaN7M4qFZjcs3EKESyhaFTcxNLhwxMLQ5qxZcDgICX2WUsNBxQuCSa9zU6lMKHU14cgDF6BLfp3E2TklBJuUu91gEy8+O49M6MwKfscLe1AwQMhtUHCDAbZ3KLmPh2AFAKn1Sfvd1WapKRlGfsyFIHwPBnzYGv//s4zS2iuiPYITjtGMeCJ2hz1HCjzW5B8WpUFhKXc7i8xvDqGregOnrRzLm1J7fzzdoL7T8CDACXngVnIHvhmAAAAABJRU5ErkJggg=="}});