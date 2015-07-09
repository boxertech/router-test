angular.module('app.primaryFeature', ['common'])
    .controller('PrimaryFeatureController', [PrimaryFeatureController]);

function PrimaryFeatureController(Listings) {
    console.log('primaryFeature.ctrl: ', Listings);

}

PrimaryFeatureController.$inject = ['Listings'];

