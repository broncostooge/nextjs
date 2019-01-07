webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);

var _jsxFileName = "C:\\Users\\broncostooge\\Desktop\\REACTJS APPS\\learnnextjs-demo\\pages\\index.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MyLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Steam Games for ", props.user.personaname), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.listOfGames.map(function (game, index) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: game.appid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: "http://media.steampowered.com/steamcommunity/public/images/apps/" + game.appid + "/" + game.img_icon_url + ".jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
      as: '/p/' + game.appid,
      href: '/post?id=' + game.appid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, game.name)));
  })));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var res, data, userRes, userData, listOfGames, userInformation;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=3F1EEFCCC0C8F311EFD50A76A5C26E68&steamid=76561197994457853&include_appinfo=1&format=json');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          _context.next = 8;
          return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=3F1EEFCCC0C8F311EFD50A76A5C26E68&steamids=76561197994457853');

        case 8:
          userRes = _context.sent;
          _context.next = 11;
          return userRes.json();

        case 11:
          userData = _context.sent;
          listOfGames = [];
          userInformation = {};
          data.response.games.map(function (game, index) {
            return listOfGames.push({
              appid: game.appid,
              name: game.name,
              playtime_forever: game.playtime_forever,
              img_icon_url: game.img_icon_url,
              img_logo_url: game.img_logo_url,
              has_community_visible_stats: game.has_community_visible_stats
            });
          });
          userData.response.players.map(function (player, index) {
            return userInformation = {
              steamid: player.steamid,
              communityvisibilitystate: player.communityvisibilitystate,
              profilestate: player.profilestate,
              username: player.personaname,
              lastlogoff: player.lastlogoff,
              profileurl: player.profileurl,
              avatar: player.avatar,
              avatarmedium: player.avatarmedium,
              avatarfull: player.avatarfull,
              personastate: player.personastate,
              primaryclanid: player.primaryclanid,
              timecreated: player.timecreated,
              personastateflags: player.personastateflags
            };
          });
          console.log(userInformation.steamid);
          return _context.abrupt("return", {
            listOfGames: listOfGames,
            user: userInformation
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.4834878ec725cef962ee.hot-update.js.map