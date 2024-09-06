
import  ArrayBufferConverter   from './js/converter';

import getBuffer from './js/getBuffer';

const buffer = getBuffer(); 
const converter = new ArrayBufferConverter(); 
converter.load(buffer); 
console.log(converter.toString()); 


