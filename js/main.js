"use strict";

let loader = require('./loader'),
	template = require('../templates/blog.hbs'),
	$ = require('jquery'),
	Handlebars = require('hbsfy/runtime');
// require('../lib/node_modules/materialize-css/dist/js/materialize.js');

// Handlebars.registerHelper('Tarsis', (id, number) => {
// 	console.log("id", id, "number", number);
// 	if (parseInt(number, 10) === id){
// 		return true;
// 	}
// });

function buildArticle(data){
	let article = template(data);
	console.log("article", article);
	$('.container').append(article);
}


loader.getJSON()
.then(function(data){
	console.log('data', data);
	buildArticle(data);
});