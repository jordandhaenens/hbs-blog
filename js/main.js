"use strict";

let loader = require('./loader'),
	template = require('../templates/blog.hbs'),
	$ = require('jquery');
// require('../lib/node_modules/materialize-css/dist/js/materialize.js');


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