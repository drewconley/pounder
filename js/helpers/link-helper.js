//Helper for returning Links
//(uses fixtures)
var LinkHelper = function() {
	base = this;

	base.randomInArray = function(array) {
		var index = Math.floor(Math.random() * array.length );		
		return array[index];
	};

	base.getSizeAvailability = function(domain) {
		var productId = base.randomInArray( productIds );
		var storeNumber = base.randomInArray( storeNumbers );			
		return domain + '/api/store/v1/sizeAvailability?webStoreId=20000&productId='+ productId +'&storeNumber='+storeNumber+'&json=true'; //&callback=jsonp1415811767067';
	};
	base.getProduct = function(domain) {
		var productId = base.randomInArray( productIds );	
		return domain + '/api/v1/product/'+ productId; //+'?callback=jsonp1415811797717';
	};

};

// Documentation. Add this to the readme:
// var lh = new LinkHelper();
// console.log( lh.getProduct('http://stg.api.famousfootwear.com') );
// console.log( lh.getSizeAvailability('http://stg.api.famousfootwear.com') );
