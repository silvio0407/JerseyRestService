var app = angular.module('app', [ 'ui.mask' ]);
 
app.controller('painelInicialController', function($scope, $http) {
 $scope.showCadastro = false;
 $scope.noticia = montarObjNoticia();
 $scope.allNoticias = {};
 
 $scope.abreCadastroNoticia = function() {
        $scope.showCadastro = true;
 }
 
 $scope.cadastrarNovaNoticia = function() {
        var string = $scope.noticia.data;
        var month = string.substring(0,2);
        var day = string.substring(2,4);
        var year = string.substring(4,8);
        var data_final = month + '/' + day + '/' + year;
         
        $scope.noticia.data = data_final;
         
        $http.post('/devmedia_news_rest_web/rest/noticia/new', $scope.noticia)
               .success(function(data) {
                     alert("Cadastro efetuado com sucesso!");
                     $scope.showCadastro = false;
                     $scope.noticia = montarObjNoticia();
               }).error(function() {
                     alert("Falha ao cadastrar notícia!");
               });
 };
 
 $scope.listarNoticias = function(){
	 $http.get('/devmedia_news_rest_web/rest/noticia/listar')
	       .success(function(data){
	              $scope.allNoticias = data;
	       })
	       .error(function(){
	              alert("Falha em obter as notícias");
	       });
	};
	 
	$scope.listarNoticias();
});
 
function montarObjNoticia() {
 return {
        id : -1,
        titulo : "",
        descricao : "",
        texto : "",
        data : ""
 };
}