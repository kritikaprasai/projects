var movie = function watchMovie(moviename,callback)
{
	setTimeout(function()
	{
		callback({
			name:moviename

		})
	},2000);
}
module.exports= movie;