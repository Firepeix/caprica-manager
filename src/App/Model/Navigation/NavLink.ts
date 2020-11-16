import { NavLinkInterface } from 'src/App/Interface/Navigation/NavLinkInterface'
import IconInterface from 'src/App/Interface/Primitives/IconInterface';
import LinkInterface from 'src/App/Interface/Primitives/LinkInterface';

export default class NavLink implements NavLinkInterface {
  private readonly _name: string;
  private readonly _icon: IconInterface;
  private readonly _link: LinkInterface;

  constructor (name: string, icon: IconInterface, link: LinkInterface) {
    this._icon = icon;
    this._link = link;
    this._name = name;
  }

  get name () {
    return this._name;
  }

  get icon (): IconInterface {
    return this._icon;
  }

  get link (): LinkInterface {
    return this._link;
  }
}
