var shop = function shopping(shopItem,callback)
{
	setTimeout(function(){
		callback({
			name:shopItem
		})
	},4000);
}
module.exports = shop;
