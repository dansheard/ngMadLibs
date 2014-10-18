angular.module('MadLibs', [])
			 	.controller('datactrl', function($scope) {
					$scope.model = {person_name: '',
													job_title: '',
													tedious_task: '',
													dirty_task: '',
													celebrity: '',
													useless_skill: '',
													obnoxious_celebrity: '',
													huge_number: '',
													adjective: '' }
});
