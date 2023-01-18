// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const ms = require("ms");
let timeConfig = vscode.workspace.getConfiguration("go-touch-grass").get("time")



// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
let init = vscode.window.createStatusBarItem(
	vscode.StatusBarAlignment.Right,
	40
)
/**
 * 
 * @param {vscode.ExtensionContext} context 
 */

function activate(context) {
	

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('%c[GO-TOUCH-GRASS]', 'color: green');
	init.command = "go-touch-grass.init"
	init.text = "Init",
	init.tooltip = "Initiate the timer."
	init.show()

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	
	let disposable = vscode.commands.registerCommand('go-touch-grass.init', function () {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Initiated time!');
		setTimeout(() => {
			vscode.window.showInformationMessage("Break Time!")
		}, ms(String(timeConfig)))
	});

	let timerOpt = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Left,
		40
	)
	timerOpt.command = "go-touch-grass.timer"
	timerOpt.text = "Timer"
	timerOpt.tooltip = "Set a time."
	timerOpt.show()
	



	
	const timer = vscode.commands.registerCommand("go-touch-grass.timer", async function () {
		let ipt = await vscode.window.showInputBox({
			prompt: "TIME",
			title: "Put the rogramming time when you will have a break. USAGE: <NUMBER>h"
		})

		let input = String(ipt)
		


		if(!input.endsWith("h")) {
			return vscode.window.showErrorMessage("Args error, expected \"h\" at end")
		} else if (input.length > 3) {
			return vscode.window.showErrorMessage("Too long time.")
		}

		vscode.window.showInformationMessage("Teste passou")
	    vscode.workspace.getConfiguration("go-touch-grass").update("time", input, true)
	})
	
	
	context.subscriptions.push(disposable);
	// context.subscriptions.push(timerOpt)
	context.subscriptions.push(timer)
}

// This method is called when your extension is deactivated
function deactivate() {
	init.hide()
}

module.exports = {
	activate,
	deactivate
}
