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
- Type your dependency (e.g. `$rootScope`, `$rcAlerts`, etc.)
 - Note that `$scope` is not available
 - Additionally, the dependency can be aliased to a different variable like so: `$rcAlerts, alerts`--`alerts` is now a global