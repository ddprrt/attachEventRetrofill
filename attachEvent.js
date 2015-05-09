(function(ET) {
  ET.prototype.attachEvent = 
    ET.prototype.attachEvent || 
    function(ev, func) {
      return this.addEventListener(ev.substr(2), func);
    };

  ET.prototype.detachEvent = 
    ET.prototype.detachEvent ||
    function(ev, func) {
      return this.removeEventListener(ev.substr(2), func);
    };
})(EventTarget || function() {});
