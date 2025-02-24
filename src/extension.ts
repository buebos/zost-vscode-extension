import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "zost" is now active!');

	const disposable = vscode.commands.registerCommand(
		"zost.helloWorld",
		() => {
			vscode.window.showInformationMessage("Hello World from Zost!");
		},
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
