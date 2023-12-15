import {
	clearChildren,
	createLink,
	createTextSpan,
	getLocalStoragePromise,
	setLocalStoragePromise,
	showWarningDialog
} from "../util";


export class Notes {
	private tile: HTMLDivElement;
	private parameters: string[];
	public name = "NOTE";
	
	constructor(tile, parameters)
	{
		this.tile = tile;
		this.parameters = parameters;
	}
	
	create_buffer()
	{
		CreateNotes(this.tile, this.parameters);
	}
	
	update_buffer(){}
	destroy_buffer(){}
}

const StorageName = "PMMG-Notes";

async function CreateNotes(tile: HTMLDivElement, parameters: any[])
{
	if (!tile) {
		throw new Error("Parameter 'tile' is required.");
	}
	if (!parameters) {
		throw new Error("Parameter 'parameters' is required.");
	}
	if (!parameters[0]) {
		throw new Error("Parameter 'parameters' must contain one or more values.");
	}

	clearChildren(tile);

	if (parameters.length == 1) {
		// Display table of notes and links to open each or delete each
		return await displayNotesList(tile);
	}

	// Display the specified note
	const noteName = parameters.slice(1).join("_");

	let nameDiv = document.createElement("div");
	nameDiv.classList.add("title", "note-title");
	nameDiv.textContent = noteName;
	nameDiv.style.paddingLeft = "10px";
	tile.append(nameDiv);

	const textbox = document.createElement("textarea");
	textbox.classList.add("pb-edit-div");
	textbox.contentEditable = "true";
	tile.appendChild(textbox);
	
	
	await displayStoredNote(textbox, noteName);
}

async function displayNotesList(tile: HTMLDivElement): Promise<void> {
	return getLocalStoragePromise(StorageName)
		.then(value => {
			generateNotesTable(value[StorageName], tile);
		});
}

function generateNotesTable(notesStorage: {[p: string]: any}, tile: HTMLDivElement) {
	if (!tile) {
		throw new Error("Parameter 'tile' is required.");
	}

	const notesTable = document.createElement("table");

	const thead = document.createElement("thead");
	const tr = document.createElement("tr");
	thead.append(tr);
	notesTable.append(thead);

	for (const title of ["Name", "Length", "Delete"]) {
		const th = document.createElement("th");
		th.textContent = title;
		th.style.paddingTop = "0";
		tr.append(th);
	}
	
	const tbody = document.createElement("tbody");
	notesTable.append(tbody);

	if (!notesStorage) {
		const tr = document.createElement("tr");
		tbody.append(tr);

		const td = document.createElement("td");
		td.colSpan = 3;
		td.textContent = "No Notes";
		tr.append(td);

		return;
	}

	const names = Array.from(Object.keys(notesStorage));
	
	names.forEach(noteName => {
		const noteText = notesStorage[noteName] as string;

		const row = document.createElement("tr");
		tbody.append(row);

		const nameColumn = document.createElement("td");
		const lengthColumn = document.createElement("td");
		const buttonsColumn = document.createElement("td");

		row.append(nameColumn, lengthColumn, buttonsColumn);

		const openNoteLink = createLink(noteName, "XIT NOTES_" + noteName);
		nameColumn.append(openNoteLink);
		
		const noteCounter = document.createElement("div");
		noteCounter.innerHTML = noteText;
		const innerText = noteCounter.textContent || "";
		let lengthText = `${innerText.length.toLocaleString()} character`;
		if (noteText.length != 1) lengthText += "s";
		lengthColumn.append(createTextSpan(lengthText));

		const deleteButton = document.createElement("button");
		deleteButton.classList.add("delete-button");
		deleteButton.textContent = "DELETE";

		deleteButton.addEventListener("click", function(){
			showWarningDialog(tile, `Are you sure you want to delete the note "${noteName}"?`, "Confirm", function(){
				saveNote(noteName, null)
					.then(() => {
						row.remove();
					});
			});
		});
		buttonsColumn.append(deleteButton);
	});

	tile.append(notesTable);
}

async function saveNote(noteName: string, noteText: string | null): Promise<void> {
	let storage = await getLocalStoragePromise(StorageName);

	if (!storage) {
		storage = {};
	}

	if (!noteText || noteText.length === 0) {
		storage[StorageName][noteName] = undefined;
	}
	else {
		storage[StorageName][noteName] = noteText;
	}

	return await setLocalStoragePromise(storage);
}

async function displayStoredNote(textbox: HTMLTextAreaElement, noteName: string){

	let storageValue = await getLocalStoragePromise(StorageName);
	let notesStorage = storageValue[StorageName];

	if (!notesStorage) {
		notesStorage = {};
	}

	var noteText = notesStorage[noteName] ?? "";
	
	
	textbox.addEventListener("input", () => {
		noteText = textbox.value;
		
		saveNote(noteName, noteText)
			.catch(reason => {
				console.error("Failed to save note to local storage: %o", reason);
			});
			
		console.log(noteText);
	});

	renderNoteText(textbox, noteText);
}

/*	// Leftover from attempt to add links

const regexp = new RegExp('([A-Z1-9]+?)\\.(CI1|IC1|AI1|NC1)', 'dg')

*/

function renderNoteText(textbox: HTMLTextAreaElement, noteText: string): void {
	textbox.value = noteText;
}

/* // Leftover from attempt to add links

function createNoteLink(text: string, command: string) {
	const link = document.createElement("span");
	link.setAttribute("data-command", command);
	link.textContent = text;
	link.title = text;
	link.classList.add("link", "note-link");

	// Wait, does this alone show buffers?

	// link.addEventListener("click", (ev) => {
	// 	console.log("Clicked on note link '%s' on elment %o", command, ev.target);
	// 	if (!showBuffer(command)) {
	// 		console.log("Failed to open buffer.");
	// 	}
	//
	// 	ev.preventDefault();
	// });

	return link;
}

*/