exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 4167:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Footer_Footer; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(2821);
// EXTERNAL MODULE: ./src/components/Header/HeaderStyles.js
var HeaderStyles = __webpack_require__(6226);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Footer/FooterStyles.js

const FooterWrapper = external_styled_components_default().section.withConfig({
  displayName: "FooterStyles__FooterWrapper",
  componentId: "sc-1ifsifd-0"
})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ", "{padding:0 16px 48px;width:calc(100vw - 32px);}"], props => props.theme.breakpoints.sm);
const LinkItem = external_styled_components_default().a.withConfig({
  displayName: "FooterStyles__LinkItem",
  componentId: "sc-1ifsifd-1"
})(["font-size:24px;font-weight:bold;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:0.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ", "{font-size:16px;line-height:28px;display:flex;}@media ", "{font-size:18px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialIconsContainer = external_styled_components_default().div.withConfig({
  displayName: "FooterStyles__SocialIconsContainer",
  componentId: "sc-1ifsifd-2"
})(["max-width:1040px;display:flex;justify-content:space-between;@media ", "{display:flex;justify-content:space-between;}@media ", "{display:flex;width:100%;flex-direction:grid;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CompanyContainer = external_styled_components_default().div.withConfig({
  displayName: "FooterStyles__CompanyContainer",
  componentId: "sc-1ifsifd-3"
})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ", "{flex-direction:column;align-items:baseline;}@media ", "{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Slogan = external_styled_components_default().p.withConfig({
  displayName: "FooterStyles__Slogan",
  componentId: "sc-1ifsifd-4"
})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:11px;line-height:30px;@media ", "{font-size:16px;line-height:28px;}@media ", "{line-height:22px;font-size:14px;min-width:100px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialContainer = external_styled_components_default().div.withConfig({
  displayName: "FooterStyles__SocialContainer",
  componentId: "sc-1ifsifd-5"
})(["display:flex;align-items:center;@media ", "{justify-content:center;padding-right:16px;flex-wrap:wrap;}"], props => props.theme.breakpoints.md);
const LinkList = external_styled_components_default().ul.withConfig({
  displayName: "FooterStyles__LinkList",
  componentId: "sc-1ifsifd-6"
})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ", "{padding:32px 0 16px;}@media ", "{width:100%;padding:32px 0 16px;gap:16px;}@media ", "{width:100%;padding:32px 4px 16px;gap:5px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const LinkColumn = external_styled_components_default().div.withConfig({
  displayName: "FooterStyles__LinkColumn",
  componentId: "sc-1ifsifd-7"
})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]);
const LinkTitle = external_styled_components_default().h4.withConfig({
  displayName: "FooterStyles__LinkTitle",
  componentId: "sc-1ifsifd-8"
})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ", "{font-size:10px;line-height:12px;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js







const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(LinkList, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LinkColumn, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LinkTitle, {
          children: "LET'S WORK TOGETHER"
        }), /*#__PURE__*/jsx_runtime_.jsx(LinkItem, {
          href: "mailto:toussaint.kevin3@gmail.com",
          children: "toussaint.kevin3@gmail.com"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SocialIconsContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CompanyContainer, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Slogan, {
          children: "Inspired by Enyel Sequeira"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(HeaderStyles/* SocialIcons */.HE, {
        href: "https://github.com/NivekDevv",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillGithub */.RrF, {
          size: "3rem"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(HeaderStyles/* SocialIcons */.HE, {
        href: "www.linkedin.com/in/kevintoussaint3",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiFillLinkedin */._iD, {
          size: "3rem"
        })
      })]
    })]
  });
};

/* harmony default export */ var Footer_Footer = (Footer);

/***/ }),

/***/ 6226:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": function() { return /* binding */ Container; },
/* harmony export */   "Dr": function() { return /* binding */ Span; },
/* harmony export */   "iZ": function() { return /* binding */ Div1; },
/* harmony export */   "sA": function() { return /* binding */ Div2; },
/* harmony export */   "hQ": function() { return /* binding */ Div3; },
/* harmony export */   "OL": function() { return /* binding */ NavLink; },
/* harmony export */   "HE": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* unused harmony exports ContactDropDown, NavProductsIcon */
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], props => props.theme.breakpoints.sm);
const Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "HeaderStyles__Span",
  componentId: "sc-9w0vkp-1"
})(["font-size:2rem;"]);
const Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-2"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], props => props.theme.breakpoints.sm);
const Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], props => props.theme.breakpoints.sm);
const Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-4"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], props => props.theme.breakpoints.sm); // Navigation Links

const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-5"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], props => props.theme.breakpoints.sm); /// DropDown Contact

const ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-6"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__/* .IoIosArrowDropdown */ .U0j).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-7"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], ({
  isOpen
}) => isOpen ? "1" : ".75", ({
  isOpen
}) => isOpen ? "scaleY(-1)" : "scaleY(1)", props => props.theme.breakpoints.sm); // Social Icons

const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-8"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

/***/ }),

/***/ 3605:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ei": function() { return /* binding */ Img; },
/* harmony export */   "T5": function() { return /* binding */ GridContainer; },
/* harmony export */   "$h": function() { return /* binding */ BlogCard; },
/* harmony export */   "oY": function() { return /* binding */ TitleContent; },
/* harmony export */   "Ef": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "tg": function() { return /* binding */ CardInfo; },
/* harmony export */   "rv": function() { return /* binding */ UtilityList; },
/* harmony export */   "Ew": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "PS": function() { return /* binding */ TagList; },
/* harmony export */   "Vp": function() { return /* binding */ Tag; }
/* harmony export */ });
/* unused harmony export Intro */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;transition:0.2s ease;@media ", "{width:100%;}&:hover{transform:scale(1.1);}"], props => props.theme.breakpoints.sm);
const TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-3"
})(["text-align:center;z-index:20;width:100%;margin-top:7%;"]);
const HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-4"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:0.5rem 0;font-size:", ";"], props => props.title ? "3rem" : "2rem");
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:\"Droid Serif\",serif;font-size:13px;font-style:italic;line-height:18px;"]);
const CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-7"
})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ", "{padding:0.3rem;}"], props => props.theme.breakpoints.sm);
const UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
const ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "l76idc-9"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-10"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-11"
})(["color:#d8bfbf;font-size:1.5rem;"]);

/***/ }),

/***/ 7817:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": function() { return /* binding */ projects; },
/* harmony export */   "G": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
const projects = [{
  title: "Mening",
  description: "Mening is an MVP which was built as part as my final examination. This app allows you to create surveys, or box ideas, and to share them with your community. Mening enables people to share their ideas, or answer polls.",
  image: "/images/mening.png",
  tags: ["Mongo", "Express", "React", "Node"],
  source: "https://mening-app.herokuapp.com/",
  visit: "https://github.com/NivekDevv/Mening",
  id: 0
}, {
  title: "This Portfolio",
  description: "This portfolio was built with React.JS and next. Many styled-components was created to be used everywhere on the app. This website is entirely responsive and i used ityped for the dynamic text on the hero.",
  image: "/images/portfolio.png",
  tags: ["React", "Next", "Styled-Components"],
  source: "https://kevin-toussaint.com/",
  visit: "https://github.com/NivekDevv/Portfolio",
  id: 3
}, {
  title: "MorningNews",
  description: "MorningNews is a web app built with React, NodeJS+Express and NewsAPI. MorningNews allows you to check the news from different sources and in different languages. Just select an article and read it later.",
  image: "/images/morningnews1.png",
  tags: ["React", "Node", "NewsAPI", "MongoDB "],
  source: "https://mooorning-news.herokuapp.com",
  visit: "https://github.com/NivekDevv/Morning-News",
  id: 1
}, {
  title: "LocaPic",
  description: "LocaPic is a mobile application that combines geolocation and live chat! You can add some points of interest and find them in the 'POI' section. This app uses the following components: react native maps for the map, and socket.io for the live chat.",
  image: "/images/capture.png",
  tags: ["React Native", "Redux", "Socket.io"],
  source: "https://github.com/NivekDevv/LocaPic",
  visit: "https://github.com/NivekDevv/LocaPic",
  id: 2
}, {
  title: "MyMoviz",
  description: "MyMoviz is a full-stack application directly connected to an API to retrieve movies information. The application provides a list of the newly released movies and allows you to save them in a private wishlist. You can rate the movies, and see their average rating.",
  image: "/images/mymoviz.png",
  tags: ["React", "Reactstrap", "Axios"],
  source: "https://my-moviez.herokuapp.com/",
  visit: "https://github.com/NivekDevv/MyMoviz",
  id: 4
}, {
  title: "More on my github",
  description: "You can find the rest of my projects directly on my github, feel free to take a look !",
  image: "/images/github.png",
  tags: ["GitHub"],
  source: "https://github.com/NivekDevv",
  visit: "https://github.com/NivekDevv",
  id: 5
}];
const TimeLineData = [{
  year: 1996,
  text: "Started my life"
}, {
  year: 2005.2014,
  text: "Played videos games and started being passionated by digital technologies"
}, {
  year: 2020,
  text: "Production of music videos for artists"
}, {
  year: 2021,
  text: "Started learning web development"
}, {
  year: 2022,
  text: "Looking for professional experience"
}];

/***/ }),

/***/ 4719:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LayoutStyles__Container",
  componentId: "mzu455-0"
})(["max-width:1280px;width:100%;margin:auto;"]);

/***/ }),

/***/ 6805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": function() { return /* binding */ Section; },
/* harmony export */   "NZ": function() { return /* binding */ SectionTitle; },
/* harmony export */   "_Q": function() { return /* binding */ SectionTitle2; },
/* harmony export */   "r4": function() { return /* binding */ SectionText; },
/* harmony export */   "uZ": function() { return /* binding */ SectionText2; },
/* harmony export */   "dv": function() { return /* binding */ SectionDivider; },
/* harmony export */   "mJ": function() { return /* binding */ Btn3; },
/* harmony export */   "jp": function() { return /* binding */ ButtonBack; },
/* harmony export */   "Bn": function() { return /* binding */ ButtonFront; }
/* harmony export */ });
/* unused harmony exports SectionSubText, SecondaryBtn, LinkContainer, LinkIconImg */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], props => props.grid ? "grid" : "flex", props => props.row ? "row" : "column", props => props.nopadding ? "0" : "32px 48px 0", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.nopadding ? "0" : "16px 16px 0");
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? "65px" : "56px", props => props.main ? "72px" : "56px", props => props.main ? "58px 0 16px" : "0", props => props.theme.breakpoints.md, props => props.main ? "56px" : "48px", props => props.main ? "56px" : "48px", props => props.main ? "40px 0 12px" : "0", props => props.theme.breakpoints.sm, props => props.main ? "28px" : "32px", props => props.main ? "32px" : "40px", props => props.main ? "16px 0 8px" : "0");
const SectionTitle2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "GlobalComponents__SectionTitle2",
  componentId: "sc-6qzy6y-2"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;margin-left:36%;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? "65px" : "56px", props => props.main ? "72px" : "56px", props => props.main ? "58px 0 16px" : "0", props => props.theme.breakpoints.md, props => props.main ? "56px" : "48px", props => props.main ? "56px" : "48px", props => props.main ? "40px 0 12px" : "0", props => props.theme.breakpoints.sm, props => props.main ? "28px" : "32px", props => props.main ? "32px" : "40px", props => props.main ? "16px 0 8px" : "0");
const SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-3"
})(["max-width:950px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:420px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionText2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionText2",
  componentId: "sc-6qzy6y-4"
})(["max-width:650px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:420px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-5"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], props => props.colorAlt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #F4743B 0%, #25283D 100%)", props => props.divider ? "4rem 0" : "", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-6"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-7"
})(["color:#fff;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Btn3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__Btn3",
  componentId: "sc-6qzy6y-8"
})(["color:#fff;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;font-weight:600;margin-bottom:82px;margin-left:48%;font-size:45px;line-height:2px;width:fit-content;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{position:fixed;left:-800px;margin-bottom:64px;padding:1px 1px;width:7%;font-size:39px;line-height:3px;}@media ", "{position:fixed;left:-400px;margin-bottom:40px;display:flex;padding:2px;width:10%;font-size:29px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-9"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:20px;margin-bottom:", ";}"], ({
  alt
}) => alt ? "150px" : "262px", ({
  alt
}) => alt ? "52px" : "64px", ({
  alt
}) => alt ? "25px" : "30px", ({
  alt,
  form
}) => alt || form ? "0" : "0 0 80px", ({
  alt
}) => alt ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)" : "linear-gradient(170deg, #122C34 0%, #F4743B 100%)", ({
  disabled
}) => disabled ? ".5" : "1", props => props.theme.breakpoints.md, ({
  alt
}) => alt ? "150px" : "184px", ({
  alt
}) => alt ? "52px" : "48px", ({
  alt
}) => alt ? "26px" : "22px", ({
  alt
}) => alt ? "0" : "64px", props => props.theme.breakpoints.sm, ({
  alt
}) => alt ? "0" : "32px");
const ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-10"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:0.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00dbd8 0%,#b133ff 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:20px;}"], ({
  alt
}) => alt ? "linear-gradient(270deg, #BBE6E4 0%, #945DD6 100%)" : "linear-gradient(270deg, #F4743B 0%, #122C34 100%)", ({
  disabled
}) => disabled ? ".5" : "1", ({
  alt
}) => alt ? "25px" : "30px", ({
  disabled
}) => disabled ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)" : "none", props => props.theme.breakpoints.md, ({
  alt
}) => alt ? "26px" : "22px", props => props.theme.breakpoints.sm);
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-11"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], ({
  large
}) => large ? "24px" : "16px", props => props.theme.breakpoints.md, ({
  large
}) => large ? "16px" : "8px", props => props.theme.breakpoints.sm, ({
  large
}) => large ? "0" : "8px");
const LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-12"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], ({
  large
}) => large ? "32px" : "24px", props => props.theme.breakpoints.md, ({
  nav
}) => nav ? "16px" : "24px", props => props.theme.breakpoints.sm, ({
  large
}) => large ? "32px" : "16px");

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;