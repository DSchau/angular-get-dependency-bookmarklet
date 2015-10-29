function getDependency(strDep, el) {
  el = el || window.document.body;
  if (!window.angular) {
    console.warn('No AngularJS version detected.');
    return;
  } else {
    var dep = strDep || window.prompt('What would you like to get? (e.g. $rootScope, $state, etc.)');

    if (!!dep) {
      try {
        var alias = dep;
        if (dep.indexOf(' ') > -1) {
          var deps = dep.split(/\s+/);
          dep = deps.shift();
          alias = deps.shift();
        }
        if (window[alias]) {
          console.warn('Replacing an existing global. Uh-oh!');
        }
        window[alias] = angular.element(window.$0 || el).injector().get(dep);
        console.info(alias + ' is now available in the Developer Console. Enjoy!');
        return window[alias];
      } catch (exception) {
        throw exception;
      }
    } else {
      console.log('You did not provide an AngularJS dependency!');
    }
  }
}