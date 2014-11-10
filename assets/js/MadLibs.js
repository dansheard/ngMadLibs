angular.module('MadLibs', ['ngMessages'])
  .controller('FormCtrl', ['$scope', function($scope) {
  	$scope.submitted = false;

    $scope.submit = function(user) {
      if ( $scope.madLibsForm.$valid ) {
      	$scope.showMadLibs = true;
			} else {
				$scope.showMadLibs = false;
			}
    };

    $scope.reset = function() {
	    $scope.model = {};
	    $scope.madLibsForm.$setPristine();
	    $scope.submitted = false;
	    $scope.showMadLibs = false;
	  };

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

  }]);