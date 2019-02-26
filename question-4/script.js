/**
 * @name insert_Row
 * @description insert row in the table
 * @author (Mohd hassaan)
 * @date 2019-02-26
 */
function insert_Row() {
    const table = document.getElementById("sampleTable");

    const row = table.insertRow(table.rows.length);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    const rowsLenght = table.rows.length;

    cell1.innerHTML = `Row${rowsLenght} Cell1`;
    cell2.innerHTML = `Row${rowsLenght} Cell2`;
}

