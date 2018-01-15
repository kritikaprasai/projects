var call = require('./callForNote');
	call('Javascript',function(note){
		console.log("Note is now ready");
		console.log("And it is:", note);
	});

var movie = require('./watchMovie');
	movie('shashwank Redemption',function(name){
		console.log("Enjoying a movie and its name is:",name);
		console.log("Take bath");
	});

var shop = require('./shopping');
	shop('overcoat',function(name){
		console.log("Enjoying shopping and item bought is:",name);
		console.log("Have some sancks");
	});

var car = require('./carServicing');
	car(function(done){
		console.log('Car serivicing is:', done);
		var print = require('./printNote');
	    print('OOP',function(name){
			console.log('Note is now printed and  its finally  time to start studying:',name);
		});
	});




console.log('This is called below call for note');