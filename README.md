# Angular Get Dependency Bookmarklet

A bookmarkable function to get (and assign as a global) an Angular dependency.

## Installation

Copy and paste the following into a new bookmark, and save it to your bookmarks bar.

```javascript
javascript: (function() {var a = document.createElement("script");a.src = "https://rawgit.com/DSchau/angular-get-dependency-bookmarklet/master/angular-get-dependency-bookmarklet.js";a.onload=function(){window.getDependency()};document.head.appendChild(a)})();
```

## Usage

- Click the bookmarklet (or copy and paste the code as a Chrome snippet)
 - `body` is used as the source, but if $0 (e.g. a currently selected element) is available, that is used instead
- Type your dependency (e.g. `$rootScope`, `$state`, etc.)
 - Note that `$scope` is not available
- Note that the dependency is now available as a global
- ...
- Profit

## Advanced Usage

### Aliasing the global

`$rootScope rs`

The global `rs` will point to `$rootScope`, e.g. `rs.$on(...)`

### Calling a function in the prompt

```javascript
var timeoutLength = 5000;
var callback = function() {
  console.log('I will be called every ' + timeoutLength / 1000 + ' seconds');
};
```

Call the bookmarklet with `$interval(callback, timeoutLength)` to call the callback every 5 seconds.

Alternately, consider using `$rootScope.$apply(optionalFn)` to sync changes made locally (in scope) to the view!