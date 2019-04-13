const xlsx = require('xlsx');

async function loadCsv (filename) {
  if (!filename) {
    throw new TypeError();
  }

  const file = await xlsx.readFile(filename);
  console.log(file.Sheets.Sheet1['A2']);
}

loadCsv('../wer.xlsx');
