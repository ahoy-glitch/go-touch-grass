const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
// const myExtension = require('../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');
	let a = vscode.workspace.getConfiguration("go-touch-grass.time");
	console.log(a)


	test('Sample test', () => {
		a == a
	});
});
