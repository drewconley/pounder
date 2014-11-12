//Helper for returning Links
//(uses fixtures)
var LinkHelper = function() {
	base = this;

	base.randomStoreNumber = function() {
		var index = Math.floor(Math.random() * storeNumbers.length );		
		return storeNumbers[index];
	};

	base.getSizeAvailability = function(domain) {
		var storeNumber = base.randomStoreNumber();		
		return domain + '/api/store/v1/sizeAvailability?webStoreId=20000&productId='+'94198'+'&storeNumber='+storeNumber+'&json=true&callback=jsonp1415811767067';
	};
};

var lh = new LinkHelper();


console.log( lh.getSizeAvailability('http://stg.api.famousfootwear.com') );