import CarJoined from '../types/car-joined';

type StringOrNumber = string | number;

// type TableProps = {
//   title: string;
//   colums: StringOrNumber;
//   rowsData: StringOrNumber[];
// };

export default class MyTable {
  private colNames: string[];

  //   private props: TableProps;

  private _htmlTable: HTMLTableElement = document.createElement('table');

  private thead: HTMLTableSectionElement = document.createElement('thead');

  private tbody: HTMLTableSectionElement = document.createElement('tbody');

  constructor(private data: CarJoined[]) {
    this.colNames = Object.keys(data[0]);
    this.initialize();
  }

  private makeOneRow(dataRow: CarJoined): HTMLTableRowElement {
    // sukurti tr
    const trEl = document.createElement('tr');
    // sukurti td ir cikle sudeti i tr
    Object.values(dataRow).forEach((rowValue: StringOrNumber) => {
      const tdEl = document.createElement('td');
      tdEl.textContent = typeof rowValue === 'string' ? rowValue : String(rowValue);
      trEl.append(tdEl);
    });
    // grazinti tr
    return trEl;
  }

  private createTableBodyRows(): void {
    this.data.forEach((dataRow: CarJoined) => {
      const row: HTMLTableRowElement = this.makeOneRow(dataRow);
      this.tbody.append(row);
    });
    this._htmlTable.append(this.tbody);
  }

  private createTableHeaders() {
    const tr = document.createElement('tr');
    this.colNames.forEach((name: string) => {
      const th = document.createElement('th');
      th.textContent = name;
      tr.append(th);
    });
    this.thead.append(tr);
  }

  private initialize() {
    // sukurti table headers elementus
    this.createTableHeaders();
    this.createTableBodyRows();
    this._htmlTable.append(this.thead, this.tbody);
    this._htmlTable.className = 'table table-striped';
    const row = this.makeOneRow(this.data[0]);
    console.log('row ===', row);
    // sukurti table body
    // grazinti arba atvaizduoti table
  }

  get htmlTable(): HTMLTableElement {
    return this._htmlTable;
  }
}
