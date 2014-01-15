# dbg


## Purpose

Provide an easy to type, safe for all browsers, and toggleable console wrapper.

Yes, it preserves line numbers.


## Usage

This version of dbg has been built as a [RequireJS](http://www.requirejs.org)
module. Simply require it how you would any other RequireJS module.

    dbg.log('look, this is a log');
    dbg.warn('it supports warnings and a heap of other methods as well as well!');
    dbg.info('just check the source for all supported methods');


### dbg.disable / dbg.enable

By default, dbg is disabled globally, but you can enable it so it lives on the
global or host (i.e. window) object.

    dbg.enable();

An enabled dbg will live on the global state. Once enabled, you can also
disable the global dbg instance, so it hides any globally called dbg.

Disabling is as simple as:

    dbg.disable();

All log messages and utility methods will work on supporting browsers, those that don't support them will simply execute silently.


License: [MIT-style licensea](http://en.wikipedia.org/wiki/MIT_License)
