(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(9),s=(n(19),n(1)),c=n(2),l=n(4),u=n(3),i=n(5),h=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"title"},"Welcome! Choose a Robot to reserve by pressing the reserve button and when you're done release it for others to use."))}}]),t}(o.a.Component),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={issue:""},n.handleChange=function(e){n.setState({issue:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={issue:n.state.issue};console.log(t),fetch("http://localhost:4000/api/issues",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log("Error:",e)}),n.setState({issue:""})},n.onEnterPress=function(e){"Enter"===e.key&&!1===e.shiftKey&&n.handleSubmit(e)},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("textarea",{type:"text",placeholder:"Describe your problem",onChange:this.handleChange,onKeyDown:this.onEnterPress,value:this.state.issue}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(o.a.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h3",null,this.props.Name),o.a.createElement("h3",null,this.props.Resin),o.a.createElement("h3",null,this.props.Status),o.a.createElement("button",{onClick:function(){return e.props.reserve(e.props.Name)}},"Reserve"),o.a.createElement("button",{onClick:function(){return e.props.release(e.props.Name)}},"Release"),o.a.createElement(b,null))}}]),t}(o.a.Component),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).reserve=function(e){console.log("reserve called by",e);for(var t=n.state.robots,r=0;r<t.length;r++)e===t[r].Name&&("Reserved"===t[r].Status?alert("Sorry Already Taken"):(t[r].Status="Reserved",fetch("http://localhost:4000/api/robots",{method:"POST",body:JSON.stringify(t[r]),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log("Error:",e)})));n.setState({robots:t})},n.release=function(e){console.log("release called by",e);for(var t=n.state.robots,r=0;r<t.length;r++)e===t[r].Name&&("Available"===t[r].Status?alert("Sorry Already Free"):(t[r].Status="Available",fetch("http://localhost:4000/api/robots",{method:"POST",body:JSON.stringify(t[r]),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log("Error:",e)})));n.setState({robots:t})},n.state={robots:[]},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:4000/api/robots",{method:"Get"}).then(function(e){return e.json()}).then(function(t){e.setState({robots:t}),console.log(t)}).catch(function(e){return console.log("Error:",e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h,null),this.state.robots.map(function(t){return o.a.createElement(p,{Name:t.Name,Resin:t.Resin,Status:t.Status,reserve:e.reserve,release:e.release,key:t.Name})}))}}]),t}(o.a.Component);Object(a.render)(o.a.createElement(f,null),document.getElementById("main"))}},[[10,2,1]]]);
//# sourceMappingURL=main.be4482a9.chunk.js.map