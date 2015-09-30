	angular
		.module('todoApp')
		.controller('ToDoController', ToDoController);

	ToDoController.$inject = ['$scope', 'Projects', '$ionicModal'];
	function ToDoController($scope, Projects, $ionicModal) {
		
		// Create our modal
		$ionicModal.fromTemplateUrl('templates/new-task.html', function(modal) {
			$scope.taskModal = modal;
		}, {
			scope: $scope
		});

		$scope.newTask = function() {
			$scope.taskModal.show();
		};
	
		$scope.closeNewTask = function() {
			$scope.taskModal.hide();
		}
		
		$scope.createTask = function (task) {
			console.log('TodoController.createTask');		
			// if (!$scope.activeProject || !task) {
			// 	return;
			// }

			$scope.taskModal.hide();
		}
	}