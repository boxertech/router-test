angular.module('app.main', [])
    .controller('SidebarController', [SidebarController]);

function SidebarController() {
    console.log('sidebar');
    var vm = this;
    //vm.primeFeature = data.listings.slice(0,1);

    var data =
    {
        "listings": [
        {
            "id": 1,
            "image": "image1.jpg",
            "address1": "1234 Briar Hills Dr.",
            "address2": "",
            "city": "Atlanta",
            "state": "GA",
            "zip": "30323",
            "price": "375000",
            "beds": 4,
            "baths": 3,
            "sqft": 1726,
            "lot": 0.3,
            "type": "Single Family",
            "built": 1950,
            "deck": true,
            "pool": false,
            "patio": true,
            "fireplace": true,
            "featured": true,
            "stories": 1,
            "taxes": 5340,
            "description": "This meticulously maintained ranch is tucked away just outside Morningside. The living room features custom plantation shutters and flows right into the the dining room and sunroom. The eat-in kitchen has white cabinets, stone counters, tile backsplash and access to the huge deck. The master suite, on the back of the main level, features a recently renovated ensuite bathroom. Two bedrooms and a bathroom complete the main level. Downstairs offers the fourth bedroom and an additional bathroom as well as two large living rooms w/ a wet bar that's perfect for any man cave."
        },
        {
            "id": 2,
            "image": "image2.jpg",
            "address1": "4321 Lenox Rd.",
            "address2": "",
            "city": "Atlanta",
            "state": "GA",
            "zip": "30324",
            "price": "350000",
            "beds": 3,
            "baths": 2,
            "sqft": 2254,
            "lot": 0.67,
            "type": "Single Family",
            "built": 1934,
            "deck": true,
            "pool": false,
            "patio": true,
            "fireplace": false,
            "featured": true,
            "stories": 2,
            "taxes": 5229,
            "description": "New Price Reflects 'AS IS' offers only. Newly remodeled search with stately designer touches throughout. Gorgeous, new master suite includes french doors opening to bright, open deck. Office/Library offers additional, expansive, private deck overlooking stream with views of meadow like, side yard. Dining room opens to charming, light filled sun room. This search offers 2 car detached garage, multiple garden areas for entertaining and ample parking for your guest. Close to Emory, Va. Highlands. Sq footage does not include new master suite addition."
        },
        {
            "id": 4,
            "image": "image4.jpg",
            "address1": "443 Lakeshore Dr.",
            "address2": "",
            "city": "Atlanta",
            "state": "GA",
            "zip": "30307",
            "price": "375000",
            "beds": 5,
            "baths": 3.5,
            "sqft": 2518,
            "lot": 0.3,
            "type": "Single Family",
            "built": 1986,
            "deck": true,
            "pool": false,
            "patio": false,
            "fireplace": false,
            "stories": 2,
            "taxes": 837,
            "description": ""
        },
        {
            "id": 5,
            "image": "image5.jpg",
            "address1": "2045 Desmond Dr.",
            "address2": "",
            "city": "Decatur",
            "state": "GA",
            "zip": "30033",
            "price": "359900",
            "beds": 3,
            "baths": 3,
            "sqft": 2964,
            "lot": 0.27,
            "type": "Single Family",
            "built": 1958,
            "deck": false,
            "pool": false,
            "patio": true,
            "fireplace": true,
            "featured": true,
            "stories": 1,
            "taxes": 4641,
            "description": "Renovated ranch with full finished daylight basement in the award winning Fernbank Elementary School district. The fantastic location is convenient to downtown Decatur, Emory University, Medlock Park Pool, CDC, VA Hospital, and interstate 85. Inviting curb appeal, brand new front walkway, gorgeous back flagstone patio with Koi pond, two car covered carport, fenced backyard. Renovated kitchen with granite and stainless, separate dining room with bay window, spacious great room, rich hardwood floors, gleaming newly glazed white bathroom tiles, terra cotta media room."
        },
        {
            "id": 6,
            "image": "image1.jpg",
            "address1": "1234 Briar Hills Dr.",
            "address2": "",
            "city": "Atlanta",
            "state": "GA",
            "zip": "30323",
            "price": "375000",
            "beds": 4,
            "baths": 3,
            "sqft": 1726,
            "lot": 0.3,
            "type": "Single Family",
            "built": 1950,
            "deck": true,
            "pool": false,
            "patio": true,
            "fireplace": true,
            "featured": true,
            "stories": 1,
            "taxes": 5340,
            "description": "This meticulously maintained ranch is tucked away just outside Morningside. The living room features custom plantation shutters and flows right into the the dining room and sunroom. The eat-in kitchen has white cabinets, stone counters, tile backsplash and access to the huge deck. The master suite, on the back of the main level, features a recently renovated ensuite bathroom. Two bedrooms and a bathroom complete the main level. Downstairs offers the fourth bedroom and an additional bathroom as well as two large living rooms w/ a wet bar that's perfect for any man cave."
        },
        {
            "id": 8,
            "image": "image2.jpg",
            "address1": "4321 Lenox Rd.",
            "address2": "",
            "city": "Atlanta",
            "state": "GA",
            "zip": "30324",
            "price": "350000",
            "beds": 3,
            "baths": 2,
            "sqft": 2254,
            "lot": 0.67,
            "type": "Single Family",
            "built": 1934,
            "deck": true,
            "pool": false,
            "patio": true,
            "fireplace": false,
            "stories": 2,
            "taxes": 5229,
            "description": "New Price Reflects 'AS IS' offers only. Newly remodeled search with stately designer touches throughout. Gorgeous, new master suite includes french doors opening to bright, open deck. Office/Library offers additional, expansive, private deck overlooking stream with views of meadow like, side yard. Dining room opens to charming, light filled sun room. This search offers 2 car detached garage, multiple garden areas for entertaining and ample parking for your guest. Close to Emory, Va. Highlands. Sq footage does not include new master suite addition."
        },
        {
            "id": 9,
            "image": "image4.jpg",
            "address1": "443 Lakeshore Dr.",
            "address2": "",
            "city": "Atlanta",
            "state": "GA",
            "zip": "30307",
            "price": "375000",
            "beds": 5,
            "baths": 3.5,
            "sqft": 2518,
            "lot": 0.3,
            "type": "Single Family",
            "built": 1986,
            "deck": true,
            "pool": false,
            "patio": false,
            "fireplace": false,
            "stories": 2,
            "taxes": 837,
            "description": ""
        },
        {
            "id": 10,
            "image": "image5.jpg",
            "address1": "2045 Desmond Dr.",
            "address2": "",
            "city": "Decatur",
            "state": "GA",
            "zip": "30033",
            "price": "359900",
            "beds": 3,
            "baths": 3,
            "sqft": 2964,
            "lot": 0.27,
            "type": "Single Family",
            "built": 1958,
            "deck": false,
            "pool": false,
            "patio": true,
            "fireplace": true,
            "stories": 1,
            "taxes": 4641,
            "description": "Renovated ranch with full finished daylight basement in the award winning Fernbank Elementary School district. The fantastic location is convenient to downtown Decatur, Emory University, Medlock Park Pool, CDC, VA Hospital, and interstate 85. Inviting curb appeal, brand new front walkway, gorgeous back flagstone patio with Koi pond, two car covered carport, fenced backyard. Renovated kitchen with granite and stainless, separate dining room with bay window, spacious great room, rich hardwood floors, gleaming newly glazed white bathroom tiles, terra cotta media room."
        }
    ]
    };

    vm.listings = data.listings;
    console.log('sidebar: ', vm.listings);
}

//MainController.$inject = ['Listings'];

