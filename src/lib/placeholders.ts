/*!
 * Replaces placeholders with real content
 * Requires get() - https://vanillajstoolkit.com/helpers/get/
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param {String} template The template string
 * @param {String} local    A local placeholder to use, if any
 */

import get from './get';

type StringObject = {
  [key: string]: string;
};


const placeholders = function (template:string|Function, data:StringObject) {

	'use strict';

	// Check if the template is a string or a function
	let templateStr:string = typeof (template) === 'function' ? template() : template;
	if (['string', 'number'].indexOf(typeof template) === -1) throw 'PlaceholdersJS: please provide a valid template';

	// If no data, return template as-is
	if (!data) return templateStr;

	// Replace our curly braces with data
	templateStr = templateStr.replace(/\{\{([^}]+)\}\}/g, function (match) {

		// Remove the wrapping curly braces
		match = match.slice(2, -2);

		// Get the value
		var val = get(data, match.trim());

		// Replace
		if (!val) return '{{' + match + '}}';
		return val;

	});

	return templateStr;

};

export default placeholders;