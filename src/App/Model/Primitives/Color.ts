import ColorInterface from 'src/App/Interface/Primitives/ColorInterface';

export default class Color implements ColorInterface {
  private readonly _name: string
  hash = 's';
  constructor (name: string) {
    this._name = name;
  }

  get name (): string {
    return `${this._name}`;
  }
}
