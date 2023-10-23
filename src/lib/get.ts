/*!
 * Get an object value from a specific path
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object}       obj  The object
 * @param  {String|Array} path The path
 * @param  {*}            def  A default value to return [optional]
 * @return {*}                 The value
 */

type StringObject = {
  [key: string]: string;
};

const get = function (obj:StringObject, path: string|string[], def?:any) {

	/**
	 * If the path is a string, convert it to an array
	 * @param  {String|Array} path The path
	 * @return {Array}             The path array
	 */
	var stringToPath = function (path:string|string[]) {

		// If the path isn't a string, return it
		if (typeof path !== 'string') return path;

		// Create new array
		var output:string[] = [];

		// Split to an array with dot notation
		path.split('.').forEach(function (item) {

			// Split to an array with bracket notation
			item.split(/\[([^}]+)\]/g).forEach(function (key:string) {

				// Push to the new array
				if (key.length > 0) {
					output.push(key);
				}

			});

		});

		return output;

	};

	// Get the path as an array
	path = stringToPath(path);

	// Cache the current object
	var currentObj:StringObject = obj;
	var current:string = ''

	// For each item in the path, dig into the object
	for (var i = 0; i < path.length; i++) {

		// If the item isn't found, return the default (or null)
		if (!currentObj[path[i]]) return def;

		// Otherwise, update the current  value
		current = currentObj[path[i]];

	}

	return current;

};

export default get;
