"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var ItcAccordion = /*#__PURE__*/function () {
  function ItcAccordion(target, config) {
    _classCallCheck(this, ItcAccordion);
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    var defaultConfig = {
      alwaysOpen: true,
      duration: 350
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  _createClass(ItcAccordion, [{
    key: "addEventListener",
    value: function addEventListener() {
      var _this = this;
      this._el.addEventListener('click', function (e) {
        var elHeader = e.target.closest('.menu-footer__title');
        if (!elHeader) {
          return;
        }
        if (window.matchMedia("(min-width: 540px)").matches) {
          return ItcAccordion;
        }
        if (!_this._config.alwaysOpen) {
          var elOpenItem = _this._el.querySelector('.menu-footer__column_show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? _this.toggle(elOpenItem) : null;
          }
        }
        _this.toggle(elHeader.parentElement);
      });
    }
  }, {
    key: "show",
    value: function show(el) {
      var elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || el.classList.contains('menu-footer__column_show')) {
        return;
      }
      elBody.style['display'] = 'block';
      var height = elBody.offsetHeight;
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = "height ".concat(this._config.duration, "ms ease");
      elBody.classList.add('collapsing');
      el.classList.add('menu-footer__column_slidedown');
      elBody.offsetHeight;
      elBody.style['height'] = "".concat(height, "px");
      window.setTimeout(function () {
        elBody.classList.remove('collapsing');
        el.classList.remove('menu-footer__column_slidedown');
        elBody.classList.add('collapse');
        el.classList.add('menu-footer__column_show');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
  }, {
    key: "hide",
    value: function hide(el) {
      var elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || !el.classList.contains('menu-footer__column_show')) {
        return;
      }
      elBody.style['height'] = "".concat(elBody.offsetHeight, "px");
      elBody.offsetHeight;
      elBody.style['display'] = 'block';
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = "height ".concat(this._config.duration, "ms ease");
      elBody.classList.remove('collapse');
      el.classList.remove('menu-footer__column_show');
      elBody.classList.add('collapsing');
      window.setTimeout(function () {
        elBody.classList.remove('collapsing');
        elBody.classList.add('collapse');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
  }, {
    key: "toggle",
    value: function toggle(el) {
      el.classList.contains('menu-footer__column_show') ? this.hide(el) : this.show(el);
    }
  }]);
  return ItcAccordion;
}();
new ItcAccordion(document.querySelector('.accordion'), {
  alwaysOpen: false
});
