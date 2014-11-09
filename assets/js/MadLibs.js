angular.module('MadLibs', ['ngMessages'])
  .controller('FormCtrl', ['$scope', function($scope) {

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