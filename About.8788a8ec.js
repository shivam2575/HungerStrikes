function e(e){return e&&e.__esModule?e.default:e}function n(e,n,t,s){Object.defineProperty(e,n,{get:t,set:s,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2,s=t.register;s("8QTYR",function(s,o){Object.defineProperty(s.exports,"__esModule",{value:!0,configurable:!0}),n(s.exports,"default",function(){return c});var r=t("ih19M"),i=t("bh6RR");t("fVbN5");var a=t("fDdI0"),d=t("5i2jk");class l extends e(i).Component{constructor(e){super(e),console.log("parent constructor")}componentDidMount(){this.intervalId=setInterval(()=>{console.log("parent component did mount")},1e3)}componentDidUpdate(){console.log("parent component did update")}componentWillUnmount(){clearInterval(this.intervalId)}render(){return console.log("parent render"),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"About Us"}),(0,r.jsx)(d.default.Consumer,{children:({username:e})=>(0,r.jsx)(a.default,{name:e,location:"Daman, DNH & DD"})}),(0,r.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),(0,r.jsx)(a.default,{name:"Mona",location:"My Heart"})]})}}var c=l}),s("fVbN5",function(e,n){t("ih19M"),t("bh6RR")}),s("fDdI0",function(s,o){n(s.exports,"default",function(){return d});var r=t("ih19M"),i=t("bh6RR");class a extends e(i).Component{constructor(e){super(e),this.state={userId:0,userId2:0},console.log(this.props.name+"child constructor")}componentDidMount(){console.log(this.props.name+"child component did mount")}componentDidUpdate(){console.log(this.props.name+"child component did update")}render(){let{name:e,location:n}=this.props,{userId:t}=this.state,{userId2:s}=this.state;return console.log(e+"child render"),(0,r.jsxs)("div",{className:"user-card border pad-5 mar-5",children:[(0,r.jsx)("h1",{children:"User Info - Class"}),(0,r.jsxs)("h2",{children:["User id: ",t]}),(0,r.jsxs)("h2",{children:["User id 2: ",s]}),(0,r.jsx)("button",{className:"mar-5",onClick:()=>{this.setState({userId:this.state.userId+1,userId2:this.state.userId2+1})},children:"Increase id"}),(0,r.jsx)("button",{className:"mar-5",onClick:()=>{this.setState({userId:this.state.userId-1})},children:"Decrease id"}),(0,r.jsxs)("h3",{children:["Name: ",e," Class"]}),(0,r.jsxs)("h3",{children:["Location: ",n]}),(0,r.jsx)("h3",{children:"Github: shivam2575"})]})}}var d=a});
//# sourceMappingURL=About.8788a8ec.js.map
