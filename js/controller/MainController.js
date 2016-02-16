app.controller('slideOutController', ['$scope', function($scope, $window) {

	$scope.show = false;
	$scope.arrow = 'up';
	$scope.myStyle = "";
	
	$scope.showAd = function(){
		if($scope.show){
			$scope.show = false;
			$scope.arrow ='up';
		} else{
			$scope.show = true;
			$scope.arrow ='down';
		}
	}
	
//	$scope.$on('SCROLL', function(event, data){
//		var int = +data;
//		int += 20;
//
//		$scope.myStyle = "bottom: " + int +"px";
//		console.log(myStyle);
//	});
	
}]);