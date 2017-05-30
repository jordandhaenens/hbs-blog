"use strict";

let $ = require('jquery');

function getJSON(){
	return new Promise(function(resolve, reject){
		console.log('promise is starting');
		$.ajax({
			url: ('./js/articles.json')
		}).done(function(data){
			resolve(data);
		}).fail(function(error){
			reject(error);
		});
	});
}







module.exports = {getJSON};