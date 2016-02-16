app.controller('carController', ['$scope', function($scope, $window) {

	$scope.cars = [
	    {
	    	cor: 'vermelho',
	    	url: 'views/img/vermelho.png',
	    	exibir: true
	    },
	    {
	    	cor: 'prata',
	    	url: 'views/img/prata.png',
	    	exibir: false
	    },
	    {
	    	cor: 'preto',
	    	url: 'views/img/preto.png',
	    	exibir: false
	    },
	];
	
	$scope.infos = [
        {
        	titulo: 'Motor',
        	descricao: 'Motor motor motr motor',
        	top: '-5px',
        	right: '135px',
        	showDescricao: false 
        },
        {
        	titulo: 'Porta',
        	descricao: 'Porta porta porta',
        	top: '0px',
        	right: '410px',
        	showDescricao: false 
        },
        {
        	titulo: 'Rodas',
        	descricao: 'Rodas rodas rodas',
        	top: '60px',
        	right: '300px',
        	showDescricao: false 
        },
        
	];
	
	$scope.showDescricao = function(data){
		$scope.infos[data].showDescricao = !$scope.infos[data].showDescricao;
	}
	
	$scope.changeColor = function(color){
		angular.forEach($scope.cars, function(value, key){
			if(value.cor == color){
				$scope.cars[key].exibir = true;
			} else{
				$scope.cars[key].exibir = false;
			}
		});
	}	
	
	$(function() {
		$('.pop-up').hide();
		$('.pop-up').fadeIn(500);		  
		$('.close-button').click(function (e){ 
			$('.pop-up').fadeOut(500);
			$('#overlay').removeClass('blur-in');
			$('#overlay').addClass('blur-out');
			e.stopPropagation();
		});
		
		$('.img-container').css('bottom', '30px');
		$('.background-02').css('bottom', '0px');
		
		setTimeout(function() {
			$('.img_').css('-webkit-filter', 'brightness(100%)');
			$('.background-02').css('-webkit-filter', 'brightness(100%)');
		}, 3000);
		
		setTimeout(function() {
			$('.info').css('visibility', 'visible');
			$('.colors').css('visibility', 'visible');
			$('.texto').css('visibility', 'visible');
		}, 6000);
		
	});	
}]);

