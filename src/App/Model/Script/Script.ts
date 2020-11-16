import ScriptInterface from '../../Interface/Script/ScriptInterface';
import { LocalStorage } from 'quasar';
import Crypto from 'crypto';
import Icon from '../Primitives/Icon';
import IconInterface from 'src/App/Interface/Primitives/IconInterface';
import ColorInterface from 'src/App/Interface/Primitives/ColorInterface';
import Color from 'src/App/Model/Primitives/Color';
import ChildProcess from 'child_process'
import HashMapInterface from 'src/App/Interface/Primitives/HashMapInterface';

export default class Script implements ScriptInterface {
  private _id!: string;
  private _icon!: IconInterface;
  private readonly _name: string;
  private _color!: ColorInterface;
  private readonly _path: string;
  private localStorage: LocalStorage;

  constructor (name: string, path: string, localStorage: LocalStorage) {
    this._path = path;
    this._name = name;
    this.localStorage = localStorage;
    this.make();
    this.build();
  }

  private make () {
    const hash = Crypto.createHash('md5');
    hash.update(this.path);
    this._id = hash.digest('hex');
  }

  private build () {
    const script : { icon: '', color: ''} = this.localStorage.getItem(this.id) ?? { icon: '', color: '' };
    this._icon = new Icon(script.icon !== '' ? script.icon : 'cog');
    this._color = new Color(script.color !== '' ? script.color : 'red');
  }

  get id (): string {
    return this._id;
  }

  get icon (): IconInterface {
    return this._icon;
  }

  get name (): string {
    return this._name;
  }

  get color (): ColorInterface {
    return this._color;
  }

  get path (): string {
    return this._path;
  }

  public run () {
    ChildProcess.exec(`${this.scriptAgent} ${this.path}`, (error, stdout, stderr) => {
      console.log(error, stdout)
    });
  }

  private get scriptAgent () : string {
    const agentMap : HashMapInterface = {
      sh: '"C:\\Program Files\\Git\\bin\\bash.exe"',
      bat: 'start'
    };

    return agentMap[this.fileType];
  }

  private get fileType () : string {
    return this.path.split('.').reverse()[0];
  }
}
