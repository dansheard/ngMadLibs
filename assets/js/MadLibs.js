angular.module('MadLibs', ['ngMessages', 'ngAnimate'])
  .controller('FormCtrl', ['$scope', function($scope) {
  	$scope.submitted = false;
    $scope.formInputs = true;

  	$scope.model = {
    	gender: 'male',
			personName: '',
			jobTitle: '',
			tediousTask: '',
			dirtyTask: '',
			celebrity: '',
			uselessSkill: '',
			obnoxiousCelebrity: '',
			hugeNumber: '',
			adjective: '' 
		}

    $scope.submit = function(user) {
      if ( $scope.madLibsForm.$valid ) {
      	$scope.showMadLibs = true;
        $scope.formInputs = false;
			} else {
        $scope.formInputs = true;
				$scope.showMadLibs = false;
			}
    };

    $scope.sheHe = function() {
      if ($scope.model.gender == 'female') {
          return "she";
      }
      return "he";
    };

    $scope.herHis = function() {
      if ($scope.model.gender == 'female') {
          return "her";
      }
      return "his";
    };

    $scope.herHim = function() {
      if ($scope.model.gender == 'female') {
          return "her";
      }
      return "him";
    };

    $scope.reset = function() {
	    $scope.model = {};
	    $scope.madLibsForm.$setPristine();
	    $scope.submitted = false;
	    $scope.showMadLibs = false;
      $scope.formInputs = true;
	  };
  }]);