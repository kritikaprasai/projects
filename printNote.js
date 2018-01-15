var print = function printNote(note,callback)
{
	setTimeout(function(){
		callback({
			name:note
		});
	},6000);
}
module.exports = print;