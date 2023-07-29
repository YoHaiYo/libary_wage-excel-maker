const XlsxPopulate = require('xlsx-populate');

async function colorCell() {
  try {
    // Load the workbook
    const workbook = await XlsxPopulate.fromFileAsync('D:/FrontEnd_WEB/toastui-practice/out1.xlsx');

    // Select the worksheet (assuming it's the first sheet, index 0)
    const sheet = workbook.sheet(0);

    // Select cell A1
    const cellA1 = sheet.cell('A1');

    // Set the background color to orange (Hex code: #FFA500)
    cellA1.style('fill', 'FFA500');

    // Save the updated workbook
    await workbook.toFileAsync('D:/FrontEnd_WEB/toastui-practice/out1.xlsx');

    console.log('Cell A1 has been colored with orange!');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Call the function to color cell A1 with orange
colorCell();
