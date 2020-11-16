import IconInterface from 'src/App/Interface/Primitives/IconInterface';

export default class Icon implements IconInterface {
  private readonly _name: string
  constructor (name: string) {
    this._name = name;
  }

  get name (): string {
    return `mdi-${this._name}`;
  }
}
