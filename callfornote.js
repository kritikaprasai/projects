var call= function callForNote(sub,callback)
{
	setTimeout(function()
	{
		callback ({
			note:sub
		});
	},1000);
}
module.exports = call;