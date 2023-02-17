export default class FilterSelect {
  // vidines FilterSelect savybes
  // div, label, select, optionsArray
  // constructor argumentu gauti brands
  private selectContainer: HTMLDivElement = document.createElement('div');

  private selectLabel: HTMLLabelElement = document.createElement('label');

  private select: HTMLSelectElement = document.createElement('select');

  private _optionsArray: string[];

  constructor(private optionsArr: string[]) {
    this._optionsArray = optionsArr;
  }

  private initialize() {}
}
