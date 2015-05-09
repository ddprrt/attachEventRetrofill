attachEvent Retrofill
=====================

Relieve old memories and install the `attachEvent` retrofill! 

With IE gone and Edge coming up, Microsoft will remove all those [features we loved to hate](https://blogs.windows.com/msedgedev/2015/05/06/a-break-from-the-past-part-2-saying-goodbye-to-activex-vbscript-attachevent/) and stick completely on web standards. 

This makes all your `addEvent` wrapper functions [of old](http://jsfiddle.net/desandro/HFffq/) totally obsolete. Don't let that happen and install the `attachEvent` retrofill now! :smiley_cat:

## Compatibility

* IE9+! Because the older one's already support it :metal:
* Other browsers!

## Usage

Add this script to your site. Use it:

```javascript
window.attachEvent('onmousemove', function() {
  alert('I will not let you close this tab');
});
```
