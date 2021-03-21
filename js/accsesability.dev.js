"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!function (interdeal, head, body) {
  var A11y =
  /*#__PURE__*/
  function () {
    function A11y() {
      _classCallCheck(this, A11y);

      if (this.instance) return this.instance = this;
      if (this.instance = interdeal.a11y = this, interdeal.version = this.version = "2.1.9", this.SetPolyfills(), this.AssignConst("isDev", !1), this.AssignConst("SHOW_TIMEOUT", 400), this.setValidMethods(), interdeal.isIframe = !interdeal.forceBtnAppearance && this.isIframe, this.isIframe && this.addClass(body, "INDisIframe"), this.initWindowEvents(), !this.IsSitekeyValid(interdeal.sitekey)) return !1;

      if (Object.defineProperty(window, "interdeal", {
        writable: !1
      }), this.GetBrowserDetails(), Object.keys(interdeal.domains || {}).length) {
        for (var e in interdeal.domains) {
          try {
            new URL(interdeal.domains[e]);
          } catch (t) {
            return void this.INDLog("%cNo ".concat(e, " domain specified%c"), this.LogPresets("red"));
          }
        }

        this.domains = interdeal.domains, this.INDLog("%c[IND]%c Version %c".concat(this.version, "%c"), "".concat(this.LogPresets(), " border-radius:3px 0 0 3px;"), this.LogPresets("green"), "".concat(this.LogPresets(), " border-radius:0 3px 3px 0"), ""), interdeal.getDefaultProp = this.GetDefaultProp, interdeal.addStyle = this.addStyle, this.initInterdealFunctions(), interdeal.Event = this.Event = this.GetDefaultProp("Event"), interdeal.JSON = this.JSON = this.GetDefaultProp("JSON"), this.keyCodes = this.setKeyCodes(), this.head = head, this.body = body, interdeal.mode = {}, interdeal.ShowMenu = interdeal.setNavigation = interdeal.ErrMenu = this.ErrMenu, interdeal.setLanguage(sessionStorage.getItem("INDcustomMenuLang-full-ISO") || interdeal.Menulang), interdeal.setPosition(interdeal.Position), this.getModeFromStroage(), this.initWrap(), this.LoadDefaults(), interdeal.LoadData = this.LoadData(), !interdeal.isMethodsSet && Object.keys(interdeal.mode).length && (this.isLoading = !0, interdeal.LoadData(interdeal.mode, function () {
          interdeal.a11y.isLoading = !1, interdeal.a11y.a11yBtn && interdeal.a11y.a11yBtn.removeAttribute("disabled");
        })), this.SetGlobalEvents(), interdeal.isDefined = !0;
      } else this.INDLog("%cNo domains specified%c", this.LogPresets("red"));
    }

    _createClass(A11y, [{
      key: "setValidMethods",
      value: function setValidMethods() {
        var _this$AssignConst;

        this.AssignConst("validMethods", (_this$AssignConst = {
          soundreder: "setNavigation",
          keyboard: "setNavigation",
          smartnav: "setNavigation",
          virtualKeyboard: "setVirtualKeyboard",
          dictionary: "setDictionary",
          textreader: "setTextReader",
          textmagnifier: "settextmagnifier",
          voicecmd: "setVoiceCommands",
          epilepsy: "setEpilepsy",
          customcolor: "setColorScheme",
          monochrome: "setColorScheme",
          blackwhite: "setColorScheme",
          whiteblack: "setColorScheme",
          fontsizeinc: "setFontSize",
          fontsizedec: "setFontSize",
          linesizedec: "setFontSize",
          linesizeinc: "setFontSize",
          wordsizeinc: "setFontSize",
          wordsizedec: "setFontSize"
        }, _defineProperty(_this$AssignConst, "textmagnifier", "settextmagnifier"), _defineProperty(_this$AssignConst, "readablefont", "setReadableFont"), _defineProperty(_this$AssignConst, "whitecursor", "setBigCursor"), _defineProperty(_this$AssignConst, "blackcursor", "setBigCursor"), _defineProperty(_this$AssignConst, "magnifier", "setZoom"), _defineProperty(_this$AssignConst, "links", "setHighlight"), _defineProperty(_this$AssignConst, "headers", "setHighlight"), _defineProperty(_this$AssignConst, "alttext", "setAltText"), _defineProperty(_this$AssignConst, "switchoff", "switchOff"), _defineProperty(_this$AssignConst, "statement", "statement"), _defineProperty(_this$AssignConst, "feedback", "feedback"), _defineProperty(_this$AssignConst, "hideButton", "hideA11yButton"), _defineProperty(_this$AssignConst, "readguide", "setReadGuide"), _defineProperty(_this$AssignConst, "focusmode", "setfocusMode"), _this$AssignConst));
      }
    }, {
      key: "IsNagichOnTop",
      value: function IsNagichOnTop() {
        return regeneratorRuntime.async(function IsNagichOnTop$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(new Promise(function (e, t) {
                  setTimeout(function () {
                    window.addEventListener("message", function t(i) {
                      window.removeEventListener("message", t), e(!!interdeal.ParseJSON(i.data).INDmessage);
                    }), window.top != window.self && window.top.postMessage('{"INDmessage" : "isNagichOnTop"}', "*"), setTimeout(function () {
                      return e(!1);
                    }, 2e3);
                  }, 1e3);
                }));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        });
      }
    }, {
      key: "initWindowEvents",
      value: function initWindowEvents() {
        window.addEventListener("message", function (e) {
          var t = interdeal.a11y.GetMsgData(e.data);

          if (!interdeal.isIframe && "isNagichOnTop" === t.INDmessage) {
            var _e = document.querySelectorAll("iframe[src]");

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _t = _step.value;

                _t.contentWindow.postMessage('{"INDmessage" : "isNagichOnTop"}', _t.src);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          !interdeal.a11y.validMethods[t.optName] || interdeal.a11y.validMethods[t.optName] != t.method || "INDactivate" !== t.INDmessage && "INDactivate" !== t.command || interdeal.LoadData(function () {
            var e = interdeal[t.method];
            "function" == typeof e && e(t.optName);
          });
        });
      }
    }, {
      key: "GetCookie",
      value: function GetCookie(e) {
        var t = ("; " + document.cookie).split("; " + e + "=");
        if (2 == t.length) return t.pop().split(";").shift();
      }
    }, {
      key: "IsSitekeyValid",
      value: function IsSitekeyValid(e) {
        return /^[a-fA-F0-9]{32}$/.test(e) ? !interdeal.isDefined || (this.INDLog("%c[IND] Duplicate Interdeal code; Installed " + interdeal.counter() + " times.%c", this.LogPresets("red")), !1) : (this.INDLog("%c[IND] SiteKey Error.%c", this.LogPresets("red")), !1);
      }
    }, {
      key: "AssignConst",
      value: function AssignConst(e, t) {
        Object.defineProperty(this, e, {
          value: t,
          writable: !1,
          enumerable: !0,
          configurable: !1
        }), Object.freeze(this[e]);
      }
    }, {
      key: "CreateElement",
      value: function CreateElement(e, t) {
        if ("string" == typeof e) {
          var i = document.createElement(e);
          if (t && "object" == _typeof(t)) for (var n in t) {
            var a = t[n];

            if ("object" == _typeof(a)) {
              var r;

              switch (n) {
                case "attributes":
                  r = "setAttribute";
                  break;

                case "style":
                  Object.assign(i.style, a);
                  continue;

                case "events":
                  r = "addEventListener";
                  break;
              }

              for (var s in a) {
                i[r](s, a[s]);
              }
            } else "string" == typeof a && (i["html" == n ? "innerHTML" : "text" == n ? "innerText" : "null"] = a);
          }
          return i;
        }

        this.INDLog("%c Non-string element. %c", this.LogPresets("red"));
      }
    }, {
      key: "SetGlobalEvents",
      value: function SetGlobalEvents() {
        var e = window.document;
        this.body.classList.contains("INDmenu-open") && interdeal.a11y.ToggleGlovalEvents(!0), e.addEventListener("keydown", function (e) {
          e.ctrlKey && e.which === interdeal.a11y.keyCodes.f10 && interdeal.a11y.a11yBtn.click(), e.ctrlKey && e.which === interdeal.a11y.keyCodes.f11 ? interdeal.quickAccess.blindShorcut.click() : e.which === interdeal.a11y.keyCodes.esc && interdeal.CloseMenu();
        });
      }
    }, {
      key: "ToggleGlovalEvents",
      value: function ToggleGlovalEvents(e) {
        var t = window.document;

        function i(e) {
          null != interdeal.menu.querySelector("#INDloader") || interdeal.a11y.isOrhas(interdeal.INDWrap, e.target) || interdeal.CloseMenu();
        }

        e ? (t.addEventListener("click", i), t.addEventListener("touchstart", i), t.addEventListener("focusin", i)) : (t.removeEventListener("click", i), t.removeEventListener("touchstart", i), t.removeEventListener("focusin", i));
      }
    }, {
      key: "GetDefaultProp",
      value: function GetDefaultProp(e) {
        if (!interdeal.iframe) {
          var _e2 = interdeal.iframe = this.CreateElement("iframe", {
            attributes: {
              title: "IND - Default Props"
            },
            style: {
              display: "none"
            }
          });

          document.body.appendChild(_e2);
        }

        return interdeal.iframe.contentWindow[e];
      }
    }, {
      key: "setKeyCodes",
      value: function setKeyCodes() {
        return {
          esc: 27,
          tab: 9,
          f10: 121,
          f11: 122
        };
      }
    }, {
      key: "SetPolyfills",
      value: function SetPolyfills() {
        Function.prototype.INDbind = function (e) {
          if ("function" != typeof this) throw new TypeError("Function.prototype.INDbind - Cannot bound to not callable Object");

          var t = Array.prototype.slice.call(arguments, 1),
              i = this,
              n = function n() {},
              a = function a() {
            return i.apply(this instanceof n && e ? this : e, t.concat(Array.prototype.slice.call(arguments)));
          };

          return n.prototype = this.prototype, a.prototype = new n(), a;
        };
      }
    }, {
      key: "INDLog",
      value: function INDLog() {
        interdeal.noLogs && !interdeal.a11y.isDev || (interdeal.isColorLog ? console.log.apply(console, arguments) : "string" == typeof arguments[0] ? console.log(arguments[0].replace(/%c/g, "")) : console.log(arguments[0]));
      }
    }, {
      key: "LogPresets",
      value: function LogPresets(e) {
        switch (e) {
          case "green":
            return "color: Black; background: #50e590; font-weight: bold; padding: 3px";

          case "red":
            return "color: White; background: #ca0808; font-weight: bold; padding: 3px;";

          case "yellow":
            return "color: Black; background: #e7ea04; font-weight: bold; padding: 3px;";

          case "purple":
            return "color: Black; background: #d800ff; font-weight: bold; padding: 3px;";

          case "cyan":
            return "color: Black; background: #00b9ff; font-weight: bold; padding: 3px;";

          case "pink":
            return "color: Black; background: #ff0082; font-weight: bold; padding: 3px;";

          default:
            return "color: White; background: #17384c; font-weight: bold; padding: 3px;";
        }
      }
    }, {
      key: "ParseJSON",
      value: function ParseJSON(e) {
        try {
          return interdeal.JSON.parse(e);
        } catch (e) {
          return !1;
        }
      }
    }, {
      key: "GetMsgData",
      value: function GetMsgData(e) {
        return this.ParseJSON(e) || e;
      }
    }, {
      key: "GetBrowserDetails",
      value: function GetBrowserDetails() {
        var e = interdeal.OS = (t = "Unknown OS", -1 != navigator.appVersion.indexOf("Win") && (t = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && (t = "MacOS"), -1 != navigator.appVersion.indexOf("X11") && (t = "UNIX"), -1 != navigator.appVersion.indexOf("Linux") && (t = "Linux"), {
          name: t
        });
        var t;
        var i = interdeal.browser = (a = navigator.userAgent, r = a.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(r[1]) ? {
          name: "Explorer",
          version: +((n = /\brv[ :]+(\d+)/g.exec(a) || [])[1] || "")
        } : "Chrome" === r[1] && null !== (n = a.match(/\b(OPR|Edge)\/(\d+)/)) ? {
          name: n[1].replace("OPR", "Opera"),
          version: +n[2]
        } : "MSIE" === r[1] && /compatible;/i.test(a) ? (n = /trident\/(\d)/i.exec(a) || [], {
          name: "Explorer",
          version: r[2] + " (Compatibility Mode, Orig: " + (+n[1] + 4) + ")"
        }) : (r = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (n = a.match(/version\/(\d+)/i)) && r.splice(1, 1, n[1]), {
          name: r[0],
          version: +r[1]
        }));
        var n, a, r;
        interdeal.isColorLog = !/explorer|edge/i.test(i.name), interdeal.isDesktop = !0, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (interdeal.isDesktop = !1), (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (interdeal.isDesktop = !1), this.INDLog("%c[IND]%c You are running %c".concat(e.name, "%c Operating system, %c").concat(i.name, "%c browser, version: %c").concat(i.version), "".concat(this.LogPresets(), " border-radius:3px 0 0 3px;"), this.LogPresets("green"), this.LogPresets(), this.LogPresets("green"), this.LogPresets(), this.LogPresets("green"), "".concat(this.LogPresets(), " border-radius:0 3px 3px 0")), interdeal.isAccChecker = /equalbot/i.test(navigator.userAgent);
      }
    }, {
      key: "SetLocale",
      value: function SetLocale(e, t) {
        t = void 0 === t || t, e = interdeal.setLanguage(e), t && (sessionStorage.setItem("INDcustomMenuLang", e), sessionStorage.setItem("INDcustomMenuLang-full-ISO", interdeal.fullLangISO));
        var i = interdeal.a11y.a11yBtn.querySelector(".INDhiddenText");
        document.querySelector("html").setAttribute("lang", e), interdeal.shortcuts && interdeal.shortcuts.setContents(), interdeal.a11y.a11yBtn.setAttribute("data-drag-content", "\n".concat(interdeal.a11y.locale[interdeal.a11y.countryCode].a11yBtn.drag)), i && (i.innerHTML = interdeal.a11y.locale[interdeal.a11y.countryCode].a11yBtn.txt), interdeal.locale && void 0 == interdeal.locale[this.a11y.countryCode] ? fetch("".concat(interdeal.domains.acc, "?").concat(interdeal.a11y.SerializeArgs({
          getLocale: !0,
          ver: interdeal.version,
          key: interdeal.sitekey,
          domainName: location.hostname.replace(/^www\./i, ""),
          tabletDetaction: interdeal.isDesktop ? "off" : "on",
          menuLang: this.a11y.countryCode,
          Position: interdeal.menuPos
        })), {
          method: "GET"
        }).then(function _callee(t) {
          var i;
          return regeneratorRuntime.async(function _callee$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = "interdeal.locale[interdeal.a11y.countryCode]=";
                  _context2.next = 3;
                  return regeneratorRuntime.awrap(t.text());

                case 3:
                  _context2.t1 = _context2.sent;
                  i = _context2.t0.concat.call(_context2.t0, _context2.t1);
                  interdeal.a11y.addScript(i), interdeal.RefreshModules(e);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          });
        })["catch"](function (e) {
          throw INDLog(e, "err"), e;
        }) : interdeal.RefreshModules && interdeal.RefreshModules(e);
      }
    }, {
      key: "InitButtonStyle",
      value: function InitButtonStyle() {
        var _this = this;

        var e, t, i, n, a, _r, _s, _o, d, _e3, _i, r, s, o;

        return regeneratorRuntime.async(function InitButtonStyle$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                a = function _ref(e) {
                  return n + e + interdeal.a11y.MakeHidden(i).outerHTML;
                };

                e = interdeal.btnStyle, t = this.a11yBtn, i = interdeal.a11y.locale[interdeal.a11y.countryCode].a11yBtn.txt;
                n = "\n\t\t\t<svg id=\"INDmenu-btn-moveArrow\" version=\"1.2\" baseProfile=\"tiny\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t\t\t\t\tx=\"0px\" y=\"0px\" width=\"52px\" height=\"52px\" viewBox=\"0 0 52 52\" xml:space=\"preserve\">\n\t\t\t\t<path fill=\"#010101\" d=\"M25.904,13.439c-0.189,0.022-0.364,0.109-0.498,0.244l-3.352,3.352c-0.346,0.307-0.378,0.836-0.07,1.183\n\t\t\t\t\tc0.307,0.347,0.836,0.378,1.182,0.071c0.027-0.023,0.053-0.049,0.076-0.076l1.92-1.92v6.361C25.156,23.098,25.557,23.51,26,23.51\n\t\t\t\t\tc0.442,0,0.844-0.412,0.838-0.855v-6.361l1.92,1.92c0.305,0.348,0.834,0.385,1.183,0.08s0.384-0.834,0.079-1.182\n\t\t\t\t\tc-0.023-0.027-0.049-0.053-0.075-0.076l-3.351-3.352C26.414,13.502,26.159,13.41,25.904,13.439z M17.525,21.809\n\t\t\t\t\tc-0.189,0.025-0.365,0.114-0.496,0.253l-3.352,3.351c-0.323,0.326-0.323,0.853,0,1.178l3.352,3.353\n\t\t\t\t\tc0.304,0.348,0.833,0.384,1.182,0.079c0.348-0.304,0.385-0.833,0.08-1.182c-0.023-0.026-0.049-0.053-0.075-0.077l-1.921-1.919h6.354\n\t\t\t\t\tc0.443,0.008,0.848-0.395,0.848-0.838c0-0.441-0.404-0.844-0.848-0.838h-6.354l1.921-1.928c0.331-0.324,0.337-0.854,0.015-1.186\n\t\t\t\t\tC18.047,21.867,17.787,21.775,17.525,21.809z M34.283,21.809c-0.462,0.05-0.794,0.463-0.745,0.922\n\t\t\t\t\tc0.02,0.193,0.108,0.373,0.247,0.51l1.919,1.928h-6.354c-0.029,0-0.058,0-0.086,0c-0.439,0.023-0.818,0.443-0.795,0.882\n\t\t\t\t\tc0.022,0.438,0.443,0.816,0.881,0.794h6.354l-1.919,1.919c-0.348,0.309-0.38,0.838-0.073,1.184c0.308,0.347,0.838,0.379,1.184,0.072\n\t\t\t\t\tc0.027-0.025,0.053-0.05,0.075-0.076l3.353-3.353c0.322-0.325,0.322-0.852,0-1.178l-3.353-3.351\n\t\t\t\t\tC34.793,21.875,34.538,21.782,34.283,21.809z M25.992,28.502c-0.442,0.005-0.839,0.413-0.83,0.855v6.353l-1.92-1.919\n\t\t\t\t\tc-0.178-0.187-0.433-0.279-0.689-0.254c-0.46,0.05-0.793,0.463-0.744,0.923c0.021,0.193,0.107,0.372,0.246,0.509l3.352,3.352\n\t\t\t\t\tc0.327,0.327,0.857,0.328,1.186,0.001c0,0,0.001-0.001,0.002-0.001l3.351-3.352c0.347-0.307,0.379-0.836,0.072-1.183\n\t\t\t\t\ts-0.838-0.379-1.184-0.071c-0.027,0.023-0.053,0.049-0.075,0.076l-1.92,1.919v-6.353C26.848,28.91,26.438,28.498,25.992,28.502z\"/>\n\t\t\t</svg>";

                if (!(e && e.icon && e.icon instanceof Object)) {
                  _context3.next = 28;
                  break;
                }

                _r = {
                  type: i,
                  shape: "circle",
                  outline: !1
                }, _s = Object.assign(_r, e.icon), _o = [], d = "";
                _context3.t0 = regeneratorRuntime.keys(_s);

              case 6:
                if ((_context3.t1 = _context3.t0()).done) {
                  _context3.next = 22;
                  break;
                }

                _e3 = _context3.t1.value;
                _context3.t2 = _e3;
                _context3.next = _context3.t2 === "type" ? 11 : _context3.t2 === "outline" ? 13 : _context3.t2 === "arrow" ? 15 : 18;
                break;

              case 11:
                "string" == typeof _s.type ? t.innerHTML = "".concat(n, "<span>").concat(_s.type, "</span>") : "number" == typeof _s.type && _o.push(fetch("".concat(this.domains.js, "assets/images/").concat(_s.type, ".svg")));
                return _context3.abrupt("break", 20);

              case 13:
                _s[_e3] && (d += "INDoutline-btn ");
                return _context3.abrupt("break", 20);

              case 15:
                _i = _s.arrow;

                if ("object" == _typeof(_i)) {
                  d += "INDarrow-btn INDarrow-".concat(_i.direction && "string" == typeof _i.direction && /(left|right|up|down)/.test(_i.direction.toLowerCase()) ? _i.direction.toLowerCase() : "right", "-btn INDarrow-").concat(_i.position && "string" == typeof _i.position && /(before|after)/.test(_i.position.toLowerCase()) ? _i.position.toLowerCase() : "before", "-btn");
                }

                return _context3.abrupt("break", 20);

              case 18:
                d += "IND".concat(_s[_e3], "-btn ");
                return _context3.abrupt("break", 20);

              case 20:
                _context3.next = 6;
                break;

              case 22:
                d.trim() && this.addClass(t, d.trim());

                _o.push(fetch("".concat(this.domains.js, "style/custombtnstyle.css")));

                _context3.next = 26;
                return regeneratorRuntime.awrap(Promise.all(_o).then(function (e) {
                  return Promise.all(e.map(function (e) {
                    return _this.HandleFetch(e);
                  }));
                }).then(function (e) {
                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = undefined;

                  try {
                    for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var _i2 = _step2.value;
                      "svg" == _i2.type && (t.innerHTML = a(_i2.data));
                    }
                  } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                        _iterator2["return"]();
                      }
                    } finally {
                      if (_didIteratorError2) {
                        throw _iteratorError2;
                      }
                    }
                  }
                })["catch"](function (e) {
                  404 == e.code && "svg" == e.type && (t.innerHTML = "".concat(n, "<span>").concat(i, "</span>"));
                }));

              case 26:
                _context3.next = 29;
                break;

              case 28:
                t.innerHTML = a("\n\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t\t\t\t\tviewBox=\"0 0 655.61 404.801\" enable-background=\"new 0 0 655.61 404.801\" xml:space=\"preserve\">\n\t\t\t\t\t<path d=\"M648.61,202.4c0,107.916-96.09,195.4-214.623,195.4H187.624\n\t\t\t\t\t\tC103.091,397.801,7,310.316,7,202.4l0,0C7,94.484,103.091,7,187.624,7h212.363C552.52,7,648.61,94.484,648.61,202.4L648.61,202.4z\"/>\n\t\t\t\t\t<path d=\"M177.979,283.354c11.381,21.244,33.839,35.699,59.637,35.703\n\t\t\t\t\t\tc37.355-0.006,67.631-30.279,67.635-67.635c0.002-22.354-10.872-42.229-27.592-54.512c-3.587-2.641-8.637-1.873-11.276,1.717\n\t\t\t\t\t\tc-2.639,3.588-1.87,8.637,1.717,11.275c12.763,9.404,21.019,24.465,21.019,41.52c-0.002,14.246-5.751,27.07-15.083,36.416\n\t\t\t\t\t\tc-9.346,9.336-22.17,15.082-36.419,15.086c-19.663,0.004-36.722-11.002-45.422-27.199v0.002c-2.104-3.926-6.994-5.402-10.921-3.297\n\t\t\t\t\t\tC177.349,274.535,175.873,279.426,177.979,283.354z M249.404,108.082c0-12.336-10.001-22.338-22.339-22.338\n\t\t\t\t\t\tc-12.337,0-22.338,10.002-22.338,22.338c0,12.338,10.001,22.34,22.338,22.34C239.403,130.422,249.404,120.42,249.404,108.082z\n\t\t\t\t\t\tM142.754,278.146c-3.06,4.754-1.687,11.088,3.067,14.148c1.714,1.104,3.634,1.631,5.532,1.631c3.365,0,6.661-1.658,8.618-4.697\n\t\t\t\t\t\tl31.724-49.287h42.194c0.098,0,0.193-0.014,0.29-0.016c1.114,0.209,2.262,0.322,3.437,0.322c10.279,0,18.612-8.334,18.612-18.615\n\t\t\t\t\t\tV155.24c0-10.281-8.333-18.615-18.612-18.615c-6.84,0-12.813,3.689-16.05,9.186l-25.235,25.236l-29.416,0.002\n\t\t\t\t\t\tc-4.625,0-8.373,3.748-8.373,8.375c0,4.625,3.748,8.377,8.373,8.377H199.8c2.205,0,4.365-0.895,5.924-2.453l13.278-13.279v47.396\n\t\t\t\t\t\th-32.891c-3.491,0-6.719,1.76-8.607,4.695L142.754,278.146z M129.093,167.498l17.998,38.471c0.665,1.422,2.084,2.324,3.653,2.324\n\t\t\t\t\t\th50.881c2.228,0,4.032-1.805,4.032-4.031c0-2.229-1.805-4.035-4.032-4.035H153.31l-16.912-36.148\n\t\t\t\t\t\tc-0.941-2.016-3.343-2.885-5.36-1.941C129.021,163.078,128.149,165.48,129.093,167.498z\"/>\n\t\t\t\t</svg>");

              case 29:
                if (e) r = e.vPosition, s = e.scale, o = e.color;
                r && (interdeal.isDesktop && void 0 != r[0] && r[0] != _typeof(void 0) && (t.style.top = Number(r[0]) ? "".concat(r[0], "px") : r[0]), interdeal.isDesktop || void 0 == r[1] || r[1] == _typeof(void 0) || (t.style.bottom = Number(r[1]) ? "".concat(r[1], "px") : r[1])), s && (interdeal.isDesktop && void 0 != s[0] && s[0] != _typeof(void 0) && this.CssVar(t, "--indscale", s[0]), interdeal.isDesktop || void 0 == s[1] || s[1] == _typeof(void 0) || this.CssVar(t, "--indscale", s[1])), o && ("object" == _typeof(o) ? (this.CssVar(t, "--indmaincolor", o.main), this.CssVar(t, "--indsecondcolor", o.second)) : this.CssVar(t, "--indmaincolor", o)), interdeal.draggable = 0 != interdeal.draggable, interdeal.draggable && this.initDragSystem();

              case 31:
              case "end":
                return _context3.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: "openMenu",
      value: function openMenu(e) {
        if (e && e.preventDefault(), !interdeal.a11y.hasClass(interdeal.a11y.a11yBtn, "INDdrag")) return interdeal.a11y.a11yBtn.setAttribute("aria-expanded", "true"), interdeal.a11y.ActivateBtn(function () {
          interdeal.menu.querySelector("#INDloader"), interdeal.ShowMenu(), setTimeout(function () {
            interdeal.a11y.ToggleGlovalEvents(!0);
          }, 100);
        }), !1;
      }
    }, {
      key: "InitButton",
      value: function InitButton() {
        var e = this.a11yBtn = document.querySelector("#INDmenu-btn");
        if (e) e.addEventListener("click", this.openMenu), e.addEventListener("keypress", this.openMenu);else {
          e = this.a11yBtn = this.CreateElement("button", {
            attributes: {
              id: "INDmenu-btn",
              "aria-expanded": "false",
              "aria-haspopup": "true",
              accesskey: "m",
              "data-drag-content": "\n".concat(interdeal.a11y.locale[interdeal.a11y.countryCode].a11yBtn.drag)
            },
            events: {
              click: this.openMenu,
              keypress: this.openMenu
            }
          }), this.isLoading && e.setAttribute("disabled", !0), this.addClass(this.body, "INDhasDragTooltip");
          var t = this.CreateElement("div", {
            attributes: {
              id: "INDbtnWrap"
            }
          });
          t.appendChild(e), this.INDWrap.appendChild(t), this.InitButtonStyle(), document.body.dispatchEvent(new this.Event("INDbuttonRevealed"));
        }
        this.INDWrap.style.display = "block";
      }
    }, {
      key: "initDragSystem",
      value: function initDragSystem() {
        var e = this;
        var t = 1.2;
        var i,
            n,
            a,
            r,
            s,
            o,
            d = new this.Event("INDdragEnd"),
            l = this.CssVar(this.a11yBtn, "--indscale") || 1;

        function c(t) {
          o = !1, document.removeEventListener("mousemove", p), document.removeEventListener("touchmove", p), setTimeout(function () {
            e.removeClass(e.a11yBtn, "INDdrag"), e.removeClass(document.body, "INDbtn-draging"), e.CssVar(e.a11yBtn, "--indscale", 1 === l ? "" : l), i && e.a11yBtn.dispatchEvent(d);
          }.INDbind(this));
        }

        function u(e) {
          var d = interdeal.a11y;
          var u = l * t;
          return o = !0, i = !1, setTimeout(function () {
            o && (s = this.getBoundingClientRect(), n = g(e), a = s.top, r = s.height * (l - 1) / 2, interdeal.a11y.addClass(this, "INDdrag"), interdeal.a11y.addClass(document.body, "INDbtn-draging"), d.CssVar(this, "--indscale", u), document.addEventListener("touchmove", p), document.addEventListener("mousemove", p));
          }.INDbind(this), 1e3), this.addEventListener("mouseup", c), this.addEventListener("touchend", c), document.addEventListener("mouseup", c), document.addEventListener("touchend", c), !1;
        }

        function p(e) {
          i = !0;
          var t = g(e);
          var o = s.height / 2;
          return m(t.x > window.innerWidth / 2 ? "right" : "left", Math.min(Math.max(a + t.y - n.y + r, r + o), window.innerHeight - o - s.height * l + r)), !1;
        }

        this.a11yBtn.setAttribute("data-INDdrag", !0), this.a11yBtn.addEventListener("mousedown", u), this.a11yBtn.addEventListener("touchstart", u), this.a11yBtn.addEventListener("INDdragEnd", function (e) {});
        var h = this.GetFromStorage("INDbtnPosition");

        function m(e, t) {
          interdeal.setPosition(e), Object.assign(interdeal.a11y.a11yBtn.style, {
            top: "".concat(t, "px"),
            bottom: "initial"
          }), interdeal.a11y.SetToStorage("INDbtnPosition", interdeal.JSON.stringify({
            x: e,
            y: t
          }));
        }

        function g(e) {
          return {
            x: (e = e.touches ? e.touches[0] : e).clientX,
            y: e.clientY
          };
        }

        h && m((h = interdeal.JSON.parse(h)).x, h.y);
      }
    }, {
      key: "getModeFromStroage",
      value: function getModeFromStroage() {
        if (this.GetCookie("_UserReference")) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.methodNames[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var t = _step3.value;
              var e = this.GetFromStorage(t);
              e && (interdeal.mode[t] = e);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }
    }, {
      key: "LoadDefaults",
      value: function LoadDefaults() {
        var _this2 = this;

        var e = [fetch("".concat(this.domains.js, "style/default.css")), fetch("".concat(this.domains.js, "style/btncolor.css")), fetch("".concat(this.domains.js, "assets/scripts/locale.js"))];
        Promise.all(e).then(function (e) {
          return Promise.all(e.map(function (e) {
            return _this2.HandleFetch(e);
          }));
        }).then(function _callee2(e) {
          return regeneratorRuntime.async(function _callee2$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.t0 = _this2.GetCookie("INDhideAccBtn") || sessionStorage.getItem("INDhideAccBtn");

                  if (_context4.t0) {
                    _context4.next = 8;
                    break;
                  }

                  _context4.t1 = interdeal.isIframe;

                  if (!_context4.t1) {
                    _context4.next = 7;
                    break;
                  }

                  _context4.next = 6;
                  return regeneratorRuntime.awrap(_this2.IsNagichOnTop());

                case 6:
                  _context4.t1 = _context4.sent;

                case 7:
                  _context4.t0 = _context4.t1;

                case 8:
                  if (!_context4.t0) {
                    _context4.next = 12;
                    break;
                  }

                  _this2.INDWrap.style.display = "block";
                  _context4.next = 13;
                  break;

                case 12:
                  _this2.InitButton();

                case 13:
                  interdeal.mode["INDNavigation"] || (interdeal.shortcuts = _this2.setShortcuts());
                  window.location.href.includes("#equalweb") && _this2.openMenu();

                case 15:
                case "end":
                  return _context4.stop();
              }
            }
          });
        }), interdeal.pdf && fetch("".concat(this.domains.js, "assets/scripts/pdf.js")).then(function (e) {
          _this2.HandleFetch(e);
        })["catch"](function (e) {});
      }
    }, {
      key: "HandleFetch",
      value: function HandleFetch(response) {
        return new Promise(function (resolve, reject) {
          var url = response.url,
              type = response.headers.get("Content-Type");
          response.ok || reject({
            url: url,
            type: url.match(/\.\w+$/)[0].replace(".", ""),
            code: response.status,
            status: response.statusText
          });
          var result = {};
          response.text().then(function (text) {
            switch (type) {
              case "image/svg+xml":
                result = {
                  success: !0,
                  type: "svg",
                  data: text
                };
                break;

              case "text/css":
                interdeal.a11y.addStyle(text), result = {
                  success: !0,
                  type: "style",
                  data: type
                };
                break;

              case "application/javascript":
                url.includes("locale.js") ? interdeal.a11y.locale = eval(text) : interdeal.a11y.addScript(text), result = {
                  success: !0,
                  type: "script",
                  data: type
                };
                break;

              default:
                break;
            }

            resolve(result);
          });
        });
      }
    }, {
      key: "MakeHidden",
      value: function MakeHidden(e, t) {
        var i = this.CreateElement("span", {
          attributes: {
            "class": "INDhiddenText"
          },
          text: e
        });
        return _typeof(t) == _typeof(void 0) ? i : !(!t instanceof HTMLElement) && (t.appendChild(i), t);
      }
    }, {
      key: "initInterdealFunctions",
      value: function initInterdealFunctions() {
        var e = this;
        interdeal.ParseJSON = this.ParseJSON, interdeal.counter = function () {
          var e = 2;
          return function () {
            return e++;
          };
        }(), interdeal.SetLocale = this.SetLocale, interdeal.CloseMenu = function (t) {
          e.menu.setAttribute("aria-hidden", !0), interdeal.a11y.ToggleGlovalEvents(!1), e.removeClass(document.body, "INDmenu-open"), interdeal.a11y.a11yBtn && interdeal.a11y.a11yBtn.setAttribute("aria-expanded", !1), interdeal.a11y.isOrhas(this.menu) && interdeal.a11y.a11yBtn.focus(), "function" == typeof t && t();
        }, interdeal.setPosition = function (t) {
          var i = interdeal.menuPos = t && t instanceof Array && 2 === t.length ? t[this.isDesktop ? 0 : 1] : t && /right|left/i.test(t) ? t.toLowerCase() : "rtl" === this.langDir ? "right" : "left";
          return e.removeClass(e.body, "INDpositionRight INDpositionLeft"), e.addClass(e.body, "IND".concat(e.camelCase("position-".concat(i)))), i;
        }, interdeal.setLanguage = function (t) {
          e.lang = interdeal.lang = t && /^(sl|ar|bg|ca|cs|da|de|el|en|en-GB|en-CA|en-AU|en-ZA|es|es-MX|et|eu|fr|gl|he|hr|it|ja|lt|lv|nb|nl|pl|pt|pt-PT|ro|ru|sk|sl|sv|tr|zh)$/i.test(t) ? t : "en";
          var i = e.lang.split("-");
          return i[0] = i[0].toLowerCase(), e.fullLangISO = interdeal.fullLangISO = 2 == i.length ? i.join("-") : i[0], e.lang = interdeal.lang = i[0], e.langDir = interdeal.langDir = "he" === e.lang || "ar" === e.lang ? "rtl" : "ltr", e.removeClass(e.body, "INDlangdirRTL INDlangdirLTR"), e.addClass(e.body, "INDlangdir".concat(this.langDir.toUpperCase())), e.lang;
        };
      }
    }, {
      key: "setShortcuts",
      value: function setShortcuts() {
        var e,
            t,
            i = this.CreateElement("ul");

        if (interdeal.quickAccess = this.CreateElement("div", {
          attributes: {
            id: "INDquickAccess"
          }
        }), interdeal.quickAccess.appendChild(i), this.INDWrap.appendChild(interdeal.quickAccess), interdeal.quickAccess.blindShorcut = t = this.CreateElement("button", {
          attributes: {
            accesskey: "b",
            "class": "INDshortcutBtn",
            tabindex: 1
          },
          events: {
            click: function click() {
              return interdeal.LoadData(function () {
                interdeal.setNavigation("soundreder");
              }), !1;
            }
          }
        }), (e = this.CreateElement("li")).appendChild(t), i.appendChild(e), interdeal.isDesktop) {
          var n = this.CreateElement("button", {
            attributes: {
              accesskey: "l",
              tabindex: 1
            },
            events: {
              click: function click() {
                return interdeal.LoadData(function () {
                  interdeal.setNavigation("keyboard");
                }), !1;
              }
            }
          });
          (e = this.CreateElement("li")).appendChild(n), i.appendChild(e);
        }

        var a = this.CreateElement("button", {
          attributes: {
            tabindex: 1
          },
          events: {
            click: function click() {
              return interdeal.a11y.a11yBtn.click(), !1;
            }
          }
        });
        (e = this.CreateElement("li")).appendChild(a), i.appendChild(e);
        var r = this.CreateElement("div", {
          attributes: {
            id: "INDblindNotif",
            tabindex: -1,
            "class": "INDhiddenText"
          }
        });

        function s() {
          var e = interdeal.a11y.locale[interdeal.a11y.countryCode];
          r.innerHTML = e.blindNotif.note + (interdeal.isDesktop ? " ".concat(e.blindNotif.keys) : ""), a.innerHTML = e.shortcuts.a11yMenu, n && (n.innerHTML = e.shortcuts.keyboard), t && (t.innerHTML = "".concat(e.shortcuts.blind.txt, "<span class=\"INDhiddenText\">").concat(e.shortcuts.blind.sup, "</span>"));
        }

        return interdeal.INDWrap.appendChild(r), setTimeout(function () {
          r.setAttribute("role", "alert"), interdeal.menu.getAttribute("aria-hidden") && r.focus();
        }, /safari/i.test(interdeal.browser.name) ? 2e3 : 1e3), this.body.addEventListener("keydown", function (e) {
          if (e.key && interdeal.a11y.keyCodes[e.key.toLocaleLowerCase()] === interdeal.a11y.keyCodes.tab && !e.shiftKey && (e.target === document.body || e.target === r) && !interdeal.mode["INDNavigation"]) return setTimeout(function () {
            document.querySelector("#INDquickAccess button").focus();
          }), !1;
        }), s(), {
          setContents: s,
          quickAccess: interdeal.quickAccess
        };
      }
    }, {
      key: "initWrap",
      value: function initWrap() {
        interdeal.INDWrap = this.INDWrap = this.CreateElement("div", {
          attributes: {
            id: "INDWrap",
            lang: this.lang,
            dir: this.langDir,
            "data-ind-version": this.version
          },
          style: {
            display: "none"
          }
        }), interdeal.dataWrap = this.dataWrap = this.CreateElement("div", {
          attributes: {
            id: "INDdata"
          },
          style: {
            display: "none"
          }
        }), interdeal.menu = this.menu = this.CreateElement("div", {
          attributes: {
            id: "INDmenu",
            "aria-hidden": !0
          }
        }), this.INDWrap.appendChild(this.menu), interdeal.modal = this.SetModal(), this.body[/googlebot/i.test(navigator.userAgent) ? "appendChild" : "prepend"](this.INDWrap);
        var e = "IND".concat(interdeal.isDesktop ? "Desktop" : "Mobile", " \n\t\t\t\t\t\t\t\tIND").concat(interdeal.browser.name.trim(), " \n\t\t\t\t\t\t\t\tINDlangdir").concat(this.langDir.toUpperCase().trim(), " \n\t\t\t\t\t\t\t\tIND").concat(this.camelCase("position-".concat(interdeal.menuPos)).trim());
        this.addClass(this.body, e.replace(/\s+/g, " "));
      }
    }, {
      key: "addClass",
      value: function addClass(e, t) {
        var _e$classList;

        !1 != "string" && (t = t.split(" "), (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(t)));
      }
    }, {
      key: "removeClass",
      value: function removeClass(e, t) {
        if (!1 == "string" || e == document) return;
        t = t.split(" ");
        var i = e.classList;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = i[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _e4 = _step4.value;
            t.includes(_e4) && i.remove(_e4);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }, {
      key: "hasClass",
      value: function hasClass(e, t) {
        return " ".concat(e.className, " ").replace(/[\n\t]/g, " ").indexOf(t) > -1;
      }
    }, {
      key: "addStyle",
      value: function addStyle(e, t) {
        if (e && "string" == typeof e && "" !== e) {
          var _i3 = interdeal.a11y.CreateElement("style", {
            attributes: t ? {
              id: t
            } : void 0,
            html: e
          });

          this.INDWrap.appendChild(_i3);
        } else this.INDLog("%c No style data provided.. %c", this.LogPresets("red"));
      }
    }, {
      key: "ActivateBtn",
      value: function ActivateBtn(e) {
        interdeal.isMethodsSet || (interdeal.menu.innerHTML = "\n\t\t\t\t\t<div id=\"INDloader\" role=\"status\" aria-busy=\"true\">\n\t\t\t\t\t\t<div class=\"INDloader\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t".trim(), this.CssVar(document.querySelector("#INDloader .INDloader"), "--indmaincolor", interdeal.btnStyle && interdeal.btnStyle.color ? interdeal.btnStyle.color.main : "darkblue"), this.CssVar(document.querySelector("#INDloader .INDloader"), "--indsecondcolor", interdeal.btnStyle && interdeal.btnStyle.color ? interdeal.btnStyle.color.second : "teal"), interdeal.menu.setAttribute("aria-hidden", !1)), interdeal.LoadData({
          menuLang: interdeal.fullLangISO
        }, e);
        var t = document.getElementsByTagName("iframe");
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = t[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _e5 = _step5.value;

            _e5.contentWindow.postMessage('{"INDmessage" : "INDactivate"}', "*");
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        return !1;
      }
    }, {
      key: "SerializeArgs",
      value: function SerializeArgs(e) {
        return Object.keys(e).map(function (t) {
          return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
        }).join("&");
      }
    }, {
      key: "LoadData",
      value: function LoadData() {
        var callback = function callback() {},
            pageTitle = interdeal.pageTitle = document.title,
            pageURL = interdeal.pageURL = null != document.querySelector("link[rel=canonical]") ? document.querySelector("link[rel=canonical]").href : document.location.href,
            userRef = this.GetCookie("_UserReference"),
            hostId = this.GetCookie("HostMasterID"),
            defaultData = {
          ver: interdeal.version,
          isNewSystem: !0,
          key: interdeal.sitekey,
          domainName: location.hostname.replace(/^www\./i, ""),
          pageURL: pageURL,
          tabletDetaction: interdeal.isDesktop ? "off" : "on",
          menuLang: interdeal.lang,
          Position: interdeal.menuPos,
          firstTime: !this.GetCookie("_UserReference"),
          pageTitle: pageTitle
        };

        return userRef && (defaultData["_UserReference"] = userRef), hostId && (defaultData["HostMasterID"] = hostId), function () {
          var data = "object" == _typeof(arguments[0]) ? arguments[0] : {};
          if ("function" == typeof arguments[0] ? callback = arguments[0] : "function" == typeof arguments[1] && (callback = arguments[1]), interdeal.isMethodsSet) callback();else {
            defaultData.menuLang = interdeal.a11y.countryCode;
            var obj = Object.assign(data, defaultData),
                args = interdeal.a11y.SerializeArgs(obj);
            fetch("".concat(interdeal.domains.acc, "?").concat(args), {
              method: "GET",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function _callee3(res) {
              var name, src, txt, dataNodes, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, node, e;

              return regeneratorRuntime.async(function _callee3$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return regeneratorRuntime.awrap(res.text());

                    case 3:
                      txt = _context5.sent;
                      interdeal.a11y.dataWrap.innerHTML = txt, interdeal.a11y.INDWrap.appendChild(interdeal.a11y.dataWrap);
                      dataNodes = interdeal.a11y.dataWrap.children;
                      _iteratorNormalCompletion6 = true;
                      _didIteratorError6 = false;
                      _iteratorError6 = undefined;
                      _context5.prev = 9;

                      for (_iterator6 = dataNodes[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        node = _step6.value;

                        if ("SCRIPT" == node.nodeName) {
                          if (interdeal.a11y.isDev) {
                            src = (node.innerText.trim().match(/(^\/\/#(.)+\n)|(^\/\*(.)+\*\/)/) || [""])[0];
                            e = src.trim().match(/\/(?:.(?!\/))+\.js$/);
                            name = e && e[0].replace("/", "");
                          }

                          try {
                            eval("".concat(node.innerHTML));
                          } catch (e) {
                            console.log("err");
                          }
                        }
                      }

                      _context5.next = 17;
                      break;

                    case 13:
                      _context5.prev = 13;
                      _context5.t0 = _context5["catch"](9);
                      _didIteratorError6 = true;
                      _iteratorError6 = _context5.t0;

                    case 17:
                      _context5.prev = 17;
                      _context5.prev = 18;

                      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                        _iterator6["return"]();
                      }

                    case 20:
                      _context5.prev = 20;

                      if (!_didIteratorError6) {
                        _context5.next = 23;
                        break;
                      }

                      throw _iteratorError6;

                    case 23:
                      return _context5.finish(20);

                    case 24:
                      return _context5.finish(17);

                    case 25:
                      callback();
                      _context5.next = 31;
                      break;

                    case 28:
                      _context5.prev = 28;
                      _context5.t1 = _context5["catch"](0);
                      interdeal.a11y.isDev && (interdeal.a11y.INDLog("%c Error at \"".concat(name || "Unknown", "\" : %c").concat(src && src.trim() || "Unknown"), interdeal.a11y.LogPresets("blue"), interdeal.a11y.LogPresets("green")), interdeal.a11y.INDLog(_context5.t1)), interdeal.GetErrorMessage ? interdeal.ErrMenu(interdeal.GetErrorMessage("Network Error")) : interdeal.ErrMenu('<h2 tabindex="0">&#9888; Network Error</h2>'), interdeal.a11y.INDLog("%cError : ".concat(_context5.t1), interdeal.a11y.LogPresets("red"));

                    case 31:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, null, null, [[0, 28], [9, 13, 17, 25], [18,, 20, 24]]);
            })["catch"](function (e) {
              interdeal.GetErrorMessage ? interdeal.ErrMenu(interdeal.GetErrorMessage("Loading Error")) : interdeal.ErrMenu('<h2 tabindex="0">&#9888; Loading Error</h2>'), interdeal.a11y.INDLog(e, "err");
            });
          }
        };
      }
    }, {
      key: "ErrMenu",
      value: function ErrMenu() {
        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }

        if (null != interdeal.menu.querySelector("#INDloader") || interdeal.menu.hasChildNodes()) {
          var t = interdeal.errors || {},
              i = e[0] || document.querySelector("#INDErrorMsg").innerHTML || "";
          i = i.trim().replace(/\{\{([^\}]+)\}\}/g, function (i, n) {
            return t[e[1] || n] ? t[e[1] || n] : "{{" + e[1] || n + "}}";
          }), interdeal.menu.setAttribute("aria-hidden", !0), interdeal.menu.innerHTML = "", interdeal.menu.innerHTML = "<div id=\"INDerror\" lang=\"en\" dir=\"ltr\">\n\t\t\t\t\t\t\t".concat(i || '<h2 tabindex="0">&#9888; Error</h2>', "\n\t\t\t\t\t\t</div>");
        }

        interdeal.a11y.addClass(document.body, "INDmenu-open"), interdeal.menu.setAttribute("aria-hidden", !1), setTimeout(function () {
          interdeal.menu.querySelector("h2").focus();
        }, 200);
      }
    }, {
      key: "CssVar",
      value: function CssVar(e, t, i) {
        return !(!e instanceof HTMLElement) && (void 0 === i ? getComputedStyle(e).getPropertyValue(t) : (e.style.setProperty(t, i), e));
      }
    }, {
      key: "addScript",
      value: function addScript(e, t) {
        if (e && "string" == typeof e && "" !== e) {
          var _i4 = this.CreateElement("script", {
            attributes: t ? {
              id: t
            } : void 0,
            html: e
          });

          this.INDWrap.appendChild(_i4);
        } else this.INDLog("%c No script data provided.. %c", this.LogPresets("red"));
      }
    }, {
      key: "camelCase",
      value: function camelCase(e) {
        return e.replace(/\W+(.)/g, function (e, t) {
          return t.toUpperCase();
        });
      }
    }, {
      key: "GetFromStorage",
      value: function GetFromStorage(e) {
        var t = localStorage.getItem(e);
        return "string" == typeof t ? t : this.ParseJSON(t);
      }
    }, {
      key: "SetToStorage",
      value: function SetToStorage(e, t) {
        localStorage.setItem(e, "string" == typeof t ? t : interdeal.JSON.stringify(t));
      }
    }, {
      key: "RemoveFromStorage",
      value: function RemoveFromStorage(e) {
        localStorage.removeItem(e);
      }
    }, {
      key: "isOrhas",
      value: function isOrhas(e, t) {
        return t = t || document.activeElement, e.contains(t) || e.isSameNode(t);
      }
    }, {
      key: "removeCookie",
      value: function removeCookie(e) {
        if (interdeal.currDomain) return document.cookie = "".concat(e, "=; path=/; domain=.").concat(interdeal.currDomain, "; expires=").concat(new Date(0).toUTCString()), document.cookie;
        this.INDLog("%c No domain found. %c", this.LogPresets("red"));
      }
    }, {
      key: "SetCookie",
      value: function SetCookie(e, t, i) {
        var n = new Date();
        document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(n.setDate(n.getDate() + 7), "; path=/;");
      }
    }, {
      key: "SetModal",
      value: function SetModal() {
        var e;
        var t = this.CreateElement("div", {
          attributes: {
            id: "INDpopup",
            style: "display:none",
            "aria-hidden": !0
          },
          events: {
            click: function (e) {
              interdeal.a11y.isOrhas(r, e.target) || s();
            }.INDbind(this),
            keydown: function (e) {
              if (e.which != this.keyCodes.esc) {
                if (e.which === this.keyCodes.tab) {
                  if (!e.shiftKey && a.isSameNode(e.target)) return i.focus(), !1;
                  if (e.shiftKey && $popupHeader.isSameNode(e.target)) return a.focus(), !1;
                }
              } else s();
            }.INDbind(this)
          }
        }),
            i = this.CreateElement("div", {
          attributes: {
            id: "INDpopupHead",
            role: "heading",
            "aria-level": 2,
            tabindex: 0
          },
          text: "Popup heading"
        }),
            n = this.CreateElement("div", {
          attributes: {
            id: "INDContent",
            "class": "INDpopupContent"
          }
        }),
            a = this.CreateElement("button", {
          attributes: {
            id: "INDCloseBtn",
            "class": "INDpopupConfirm",
            tabindex: 0
          },
          text: "Close",
          events: {
            click: s
          }
        }),
            r = this.CreateElement("div", {
          attributes: {
            role: "dialog",
            "aria-modal": !0,
            "aria-labelledby": "INDpopupHead",
            tabindex: 0
          }
        });

        function s() {
          t.removeAttribute("class", "open"), interdeal.a11y.removeClass(document.body, "INDmodalOpen"), t.setAttribute("aria-hidden", !0), (e && e !== document.body && "none" != e.style.display ? e : this.a11yBtn).focus();
        }

        return r.appendChild(i), r.appendChild(n), r.appendChild(a), t.appendChild(r), this.INDWrap.appendChild(t), setTimeout(function () {
          return t.removeAttribute("style");
        }, 1e3), window.onmessage = function (e) {
          var t = this.GetMsgData(e.data);
          0 === this.domains.acc.indexOf(e.origin) && "Close Me!" === t.INDmessage && s();
        }.INDbind(this), {
          open: function open(s, o, d) {
            if ("$IND" in window && o instanceof $IND && (o = o[0]), n.innerHTML = "", e = document.activeElement, interdeal.CloseMenu(), i.innerHTML = s || "Dialog", o && "string" != typeof o ? n.appendChild(o) : n.innerHTML = o || "", d) a.innerHTML = d;else {
              var _e6 = interdeal.a11y.locale[interdeal.a11y.countryCode].closeBtn.replace(/<<(.*)>>/, " ");

              a.appendChild(interdeal.a11y.MakeHidden(_e6));
            }
            interdeal.a11y.addClass(document.body, "INDmodalOpen"), interdeal.a11y.addClass(t, "open"), t.setAttribute("aria-hidden", !1), r.focus();
          },
          close: s,
          container: t
        };
      }
    }, {
      key: "isIframe",
      get: function get() {
        try {
          return window.self != window.top;
        } catch (e) {
          return !0;
        }
      }
    }, {
      key: "methodNames",
      get: function get() {
        return ["INDNavigation", "INDTextReader", "INDVoiceCmd", "INDEpilepsy", "INDColorScheme", "INDFontSize", "INDReadableFont", "INDBigCursor", "INDAltText", "INDHighlight", "INDVirtualKeyboard", "INDMagnifier", "INDdictionary", "INDfocusmode", "INDreadguide", "INDtextmagnifier"];
      }
    }, {
      key: "countryCode",
      get: function get() {
        return /^en-/i.test(interdeal.fullLangISO) ? interdeal.lang : interdeal.fullLangISO;
      }
    }]);

    return A11y;
  }();

  new A11y();
}(window.interdeal = window.interdeal || {}, document.head, document.body);