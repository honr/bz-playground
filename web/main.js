import {U, Util} from 'web/util';

export var o = Object.create(null);
o['u'] = new Util();
o['toast'] = o['u'].toast;
o['fail'] = o['u'].fail;
// o['toast'] = o.toast;
// o['fail'] = o.fail;

window['o'] = o;

window['u'] = U;
