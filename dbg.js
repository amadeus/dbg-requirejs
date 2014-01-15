// dbg.js a simple console.log wrapper
// https://github.com/amadeus/dbg-requirejs
// MIT License

define(function(){

var global = this,

	// Get the real console or set to null for easy boolean checks
	realConsole = global.console || null,

	// Method used when dbg is disabled
	fn = function(){},

	// Supported console methods
	consoleMethods = [
		'log', 'error', 'warn', 'info', 'count', 'debug', 'profileEnd',
		'trace', 'dir', 'dirxml', 'assert', 'time', 'profile', 'timeEnd',
		'group', 'groupEnd'
	],

	// Disabled Console
	disabledConsole = {

		// Enables dbg, if it exists, otherwise it just provides disabled
		enable: function(quiet){
			global.dbg = realConsole ? realConsole : disabledConsole;
		},

		// Disable dbg
		disable: function(){
			global.dbg = disabledConsole;
		}

	}, name, i;

// Setup disabled console and provide fallbacks on the real console
for (i = 0; i < consoleMethods.length;i++){
	name = consoleMethods[i];
	disabledConsole[name] = fn;
	if (realConsole && !realConsole[name]) {
		realConsole[name] = fn;
	}
}

// Add enable/disable methods
if (realConsole) {
	realConsole.disable = disabledConsole.disable;
	realConsole.enable  = disabledConsole.enable;
}

return realConsole;

});