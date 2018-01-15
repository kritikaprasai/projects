var car = function carServicing(cb)
{
	setTimeout(function()
	 {
		cb('completed');
	 },7000);
}
module.exports = car;