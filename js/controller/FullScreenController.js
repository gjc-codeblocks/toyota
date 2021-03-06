app.controller('fullScreenController', ['$scope', function($scope, $window) {

	$scope.cores = [
	    {
	    	nome: "Preto Atitude",
	    	cor: "atitude",
	    },
	    {
	    	nome: "Branco Perolizado",
	    	cor: "branco",
	    },
	    {
	    	nome: "Cinza Granito",
	        cor: "granito",
	    },
	    {
	    	nome: "Prata Névoa",
	        cor: "nevoa",
	    },
	    {
	    	nome: "Branco Polar",
	        cor: "polar",
	    },
	    {
	    	nome: "Marrom Urban",
	    	cor: "urban",
	    },
	];
	
	$scope.sectedColor = function(color){		
		if($(window).width() > 400){
			$('.carro').css({
				"background":"url('views/img/sw4_"+ color +".png')",
				"background-size": "113%",
				"background-position-x": "2%",
				"background-position-y": "5%",
				"-webkit-filter":"brightness(100%)",
				"opacity": "1",
			});
		} else{
			$('.carro').css({
				"background":"url('views/img/sw4_"+ color +".png')",
				"background-size": "230%",
				"background-position-x": "73%",
				"background-position-y": "80%",
				"-webkit-filter":"brightness(100%)",
				"opacity": "1",
			});			
		}
	}

	$scope.focusColor = function(color){
		angular.forEach($scope.cores, function(value, key){
			if(value.cor == color){
				$scope.cores[key].hover = true;
			} else{
				$scope.cores[key].hover = false;
			}
		});
	}
	$scope.unfocusColor = function(){
		angular.forEach($scope.cores, function(value, key){
			$scope.cores[key].hover = false;
		});
	}
	
	
	$(function() {

		$('body').css("background-color", "black");
		$('.close').click(function (e){
			$('body').removeAttr("style");
			$('.fullScreen').fadeOut(500);
			$('.adBlock').fadeOut(500);
			e.stopPropagation();
		});
		
		$('.mascara').delay(5000).animate({
			bottom: "100%",
		}, 3000, function(){}).fadeOut(1000);
		
		$('.head').delay(5000).animate({
			top: 0,
		}, 3000, function(){});
		
		$('.carro').delay(8000).fadeIn(1000);
		
		$('.toShow').delay(9000).fadeIn(1000);
		$('.toShowFlex').css("display", "flex").delay(9000).fadeIn(1000);
		
		
		$(window).resize(function(){
			adjustBanner();
		});
		
		var adjustBanner = function(){
			var oDiv = document.getElementById("FullScreen");
			
			var iWidth = window.innerWidth;
		    var iHeight = (iWidth * 0.625)+60; 
		    
		    oDiv.style.width = iWidth.toString() + "px";
		    oDiv.style.height = iHeight.toString() + "px";
		    oDiv.style.lineHeight = oDiv.style.height;
			
			if($('.fullScreen').width() >= $(window).width() && $('.fullScreen').width() > 400){
				var iWidth = window.innerWidth;
			    var iHeight = (iWidth * 0.494441)+60; 
			    
			    oDiv.style.width = iWidth.toString() + "px";
			    oDiv.style.height = iHeight.toString() + "px";
			    oDiv.style.lineHeight = oDiv.style.height;
			} 			
			if($('.fullScreen').height() >= $(window).height()){
				var iHeight = window.innerHeight; 
				var iWidth = iHeight / 0.494441;
			    
			    oDiv.style.width = iWidth.toString() + "px";
			    oDiv.style.height = iHeight.toString() + "px";
			    oDiv.style.lineHeight = oDiv.style.height;
			}
			
			if($(window).width() > 400){
				$('.content').height(iHeight - 60);
			} else {
				$('.fullScreen').height('100%');
				$('.content').height('100%');
			}
		};
		
		adjustBanner();
	});	
}]);


