import IconInterface from 'src/App/Interface/Primitives/IconInterface';
import ColorInterface from 'src/App/Interface/Primitives/ColorInterface';

export default interface ScriptInterface {
  id: string;
  icon: IconInterface;
  name: string;
  color: ColorInterface;
  path: string;
  run() : void;
}
