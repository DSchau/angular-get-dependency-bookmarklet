(function() {
  window.getDependency = getDependency;
  function getDependency(strDep, el, scope) {
    el = el || window.document.body;
    if (!window.angular) {
      console.warn('No AngularJS version detected.');
      return;
    }
    var dep = strDep || window.prompt('What would you like to get? (e.g. $rootScope, $state, etc.)');

    if (!!dep) {
      try {
        var angularDep = getAngularDependency(dep, window.$0 || el, scope);
        if (window[angularDep.alias]) {
          console.warn('Replacing an existing global. Uh-oh!');
        }
        window[angularDep.alias] = angularDep.dep;
        console.info(angularDep.alias + ' is now available in the Developer Console. Enjoy!');
        return window[angularDep.alias];
      } catch (exception) {
        throw exception;
      }
    } else {
      console.log('You did not provide an AngularJS dependency!');
    }
  }

  function getAngularDependency(str, el, scope) {
    scope = scope || window;
    var argExpr = /\([^\)]*\)/
    var args = (str.match(argExpr)||[]).pop();
    var chain = str.replace(args, '').split('.');
    var dep = chain.shift().split(/\s+/).shift(),
      alias = /[^,]\s\w+/.test(str) ? str.split(/\s+/).pop() : dep,
      fn = angular.noop;

    try {
      dep = angular.element(el).injector().get(dep);
      if ( args ) {
        var fnCallExpr = /\([^\)]*\)/;
        args = args.replace(/\(|\)/g, '').split(/\s*,\s*/).map(function(arg) {
          return scope[arg] || eval(arg);
        });
        fn = dep;
        if ( !!chain.length ) {
          chain[chain.length-1] = chain[chain.length-1].replace(fnCallExpr, '');
          while ( chain.length ) {
            fn = fn[chain.shift()];
          }
        }
        (fn||angular.noop).apply(scope, args);
      }
    } catch(e) {
      throw e;
    }
    return {
      alias: alias,
      dep: dep,
      fn: fn
    };
  }
})();