angular.module('common', [])
    .factory('Listings', Listings);

function Listings() {

    return {
        getAllListings,
        getSomeListings,
        getState,
        getFeatureListings
    };

    var count = 0;

    var Listings = function($http, $q) {
        var listings = [];
        const api = 'http://localhost:3000/listings';

        var getAllListings = function() {
            return $http.get(api)
                .then(function(data) {
                    listings = data;
                });
        };

        var getState = function() {
            return listings;
        }

        //var getSomeListings = function(city) {
        //    return _.find(listings, {city});
        //};

        var getFeatureListings = function(start, end) {
            console.log('getFeatureListings');
            var featured = [];
            var deferred = $q.defer();

            getAllListings().then(function() {
                listings.forEach(function(listing) {
                    if (listing.featured === true) {
                        featured.push(listing);
                    }
                });

                deferred.resolve(featured.slice(start, end));
            })

            return deferred.promise;
        };
    };

}