app.controller('loginController', function($scope, $http) {
 
   $scope.login = {
          usuario : "",
          senha : ""
   };
 
   $scope.efetuarLogin = function() {
          if ($scope.login.usuario == "" || $scope.login.senha == "") {
                 alert("Informe usuário e senha!");
                 return;
          }
 
          $http.post('/devmedia_news_rest_web/rest/login', 
          $scope.login).success(function(data) {
 
                 if (data.logado) {
                       window.location = "painel-inicial.html"
                 } else {
                       $("#modal-validacao").modal("show");
                       $scope.txtModal = "Usuário/Senha inválidos!";
                 }
          });
   }
});