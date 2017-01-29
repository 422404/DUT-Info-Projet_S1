angular.module('app', [], function($locationProvider) {
    $locationProvider.html5Mode(true);
});

angular.module('app', []).controller('ctrl', function ($scope, $location, $window, $timeout) {
    $scope.param= '';
    $scope.theme= 'custom';
      
    /* reception parametres */
	/* si pas de parametre on on renvoie une chaine vide au lieu de #undefined
	   si le caractère 'r' est en début de paramètre alors c'est que l'on passe une couleur 
	   'rgba(r, g, b, a)' il ne faut donc pas rajouter le '#' de '#RRGGBB' */
    $scope.colorBackground = ($location.search().fond ? ($location.search().fond[0] == 'r' ? '' : '#') + $location.search().fond : '');
    $scope.colorInputBackground = $scope.colorBackground;
	$scope.colorHeader = ($location.search().entete ? ($location.search().entete[0] == 'r' ? '' : '#') + $location.search().entete : '');
	$scope.colorInputHeader = $scope.colorHeader;
	$scope.colorArticle = ($location.search().article ? ($location.search().article[0] == 'r' ? '' : '#') + $location.search().article : '');
	$scope.colorInputArticle = $scope.colorArticle;
	$scope.colorText = ($location.search().texte ? ($location.search().texte[0] == 'r' ? '' : '#') + $location.search().texte : '');
	$scope.colorInputText = $scope.colorText;

    /* envoi paramètres */
    $scope.reload = function() {
        /* sur certains navigateurs comme firefox la fonction reload() est executee avant updateLink() */
        $timeout(function() {
            $window.location.reload();
        }, 100);
    }
        
    $scope.updateLink = function() {
        /* on modifie les liens pour garder "en mémoire" les couleurs choisies */
        $scope.param = '';
        var tmp = '';
        var paramCnt = 0;

        if($scope.theme == 'custom') {
            /* palette personnalisée */
            if($scope.colorInputBackground) {
                tmp = 'fond=' + $scope.colorInputBackground;
                paramCnt++;
            }     
            if($scope.colorInputHeader) {
                /* si le paramètre précédent est initialisé on ajoute un '&' pour séparer */
                tmp += (paramCnt ? '&' : '') + 'entete=' + $scope.colorInputHeader;
                paramCnt++;
            }
			if($scope.colorInputArticle) {
                tmp += (paramCnt ? '&' : '') + 'article=' + $scope.colorInputArticle;
                paramCnt++;
            }
			if($scope.colorInputText) {
                tmp += (paramCnt ? '&' : '') + 'texte=' + $scope.colorInputText;
                paramCnt++;
            }
        }
        else if($scope.theme) {
            /* si on a pas choisi de thème personnalisé on renseigne la palette du thème en paramètre */
            switch($scope.theme) {
            case 'green': $scope.colorInputBackground = '#008080';
                          $scope.colorInputHeader = '#20b2aa';
						  $scope.colorInputArticle = 'rgba(64, 226, 210, 0.5)';
						  $scope.colorInputText = '#ffffff';
                          break;
			
			case 'red':   $scope.colorInputBackground = '#660000';
                          $scope.colorInputHeader = '#990000';
						  $scope.colorInputArticle = 'rgba(197, 0, 0, 0.5)';
						  $scope.colorInputText = '#ffffff';
                          break;
            }
            
            if ($scope.theme != 'red') { /* le thème rouge est celui par défaut */
                tmp = 'fond=' + $scope.colorInputBackground + '&entete=' + $scope.colorInputHeader;
			    tmp += '&article=' + $scope.colorInputArticle + '&texte=' + $scope.colorInputText;
                paramCnt++;
			}
			else $scope.param = '#';
        }

            
        /* on ne veut pas de '#' dans l'url (sinon ils sont échappés en %23) 
		   tant qu'il y en a on les supprime */
        if(paramCnt) {
            while (tmp.indexOf("#") !== -1) {
                tmp = tmp.replace('#', '');
            }
            $scope.param = '#/?' + tmp;
        }
    }
	$scope.updateLink();
});