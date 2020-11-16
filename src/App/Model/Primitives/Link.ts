import LinkInterface from 'src/App/Interface/Primitives/LinkInterface';

export default class Link implements LinkInterface {
  name: string
  constructor (name: string) {
    this.name = name;
  }
}
