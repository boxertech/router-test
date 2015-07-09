angular.module('app.primaryFeature', [])
    .directive('primaryFeature', [PrimaryFeatureComponent]);

function PrimaryFeatureComponent() {
    return {
        templateUrl: 'components/primaryFeature/primaryFeature.html',
        controller: function() {
            console.log('primaryFeature.dir.');
        },
        link: function() {
            console.log('primaryFeature.link.');
        },
        scope: {},
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm'
    };
}


