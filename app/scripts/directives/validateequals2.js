'use strict';

/**
 * @ngdoc directive
 * @name psJwtApp.directive:validateEquals2
 * @description
 * # validateEquals2
 */
angular.module('psJwtApp')
  .directive('validateEquals2', function () {
    return {
      require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl){
             function validateEqual(value){
                var valid = (value === scope.$eval(attrs.validateEquals2));
                ngModelCtrl.$setValidity('equal', valid);
                return valid ? value : undefined;
             }

         ngModelCtrl.$parsers.push(validateEqual);
         ngModelCtrl.$formatters.push(validateEqual)

         scope.$watch(attrs.validateEquals2, function(){
          ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
         })
        }
    };
  });
