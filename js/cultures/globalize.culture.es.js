/*
 * Globalize Culture es
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "es", "default", {
	name: "es",
	englishName: "Spanish",
	nativeName: "español",
	language: "es",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "NeuN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
				namesAbbr: ["dom","lun","mar","mié","jue","vie","sáb"],
				namesShort: ["do","lu","ma","mi","ju","vi","sá"]
			},
			months: {
				names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
				namesAbbr: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"d.C.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, dd' de 'MMMM' de 'yyyy H:mm",
				F: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
				M: "dd MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	},
	messages: {
	    "global_filteritems": "Filtrar resultados ...",
		"global_backbuttontext": "Atrás",
	    "global_loadmore": "Cargar siguientes",
	    "global_sitename": "yagoperez.com",
	    "global_copyright": "@yagoperez.com 2012",
	    "global_apponline": "La aplicación está conectada",
	    "global_appoffline": "No hay conexión de red en estos momentos",
		"global_categories" : "Categorías",
		"global_tags" : "Tags",
		"global_home" : "Inicio",	
		"global_searchformore" : "Más",
		"global_search" : "Buscar",				
		"global_unable_connect" : "No ha sido posible establecer una conexion. Inténtalo más tarde",
		
		"home_title": "Inicio",
		"home_latest_posts": "Ultimos posts",
		"home_menu" : "Menu",

		"post_comments" : "Comentarios",
		
		"categories_categories" : "Categorías",
		
		"tags_tags" : "Tags",
		
        "postsby_category" : "Categoría",
        "postsby_tag" : "Tag",
		
		"search_resultstitle" : "Resultados para "
	}
});

}( this ));
