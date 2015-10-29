(function(window, angular) {
  window.getDependency = function() {
    if ( !angular ) {
      console.warn('No AngularJS version detected.');
      return;
    } else {
      var dep = window.prompt('What would you like to get? (e.g. $rootScope, $rcAlerts, etc.)');

      if ( !!dep ) {
        try {
          var alias = dep;
          if ( dep.indexOf(', ') > -1 ) {
            var deps = dep.split(/\s*,\s*/);
            dep = deps.shift();
            alias = deps.shift();
          }
          window[alias] = angular.element(window.$0 || window.document.body).injector().get(dep);
          console.info(alias + ' is now available in the Developer Console. Enjoy!');
          return window[alias];
        } catch(exception) {
          throw exception;
        }
      } else {
        console.log('You did not provide an AngularJS dependency!');
      }
    }
  }
})(window, window.angular);
