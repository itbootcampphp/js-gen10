import { generateList, generateListItem } from "./modules/list.js";
import { generateTable, generateTableRow, generateTableItem } from "./modules/table.js";

let ul = generateList(document.body);
generateListItem(ul, "images/p1.jpg");
generateListItem(ul, "images/p2.jpg");
generateListItem(ul, "images/p3.jpg");

let table = generateTable(document.body);
let tr = generateTableRow(table);
generateTableItem(tr, "images/p1.jpg");
generateTableItem(tr, "images/p2.jpg");
generateTableItem(tr, "images/p3.jpg");