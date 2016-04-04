'use strict'

const nibbles = [   0xF6, 0xEE, 0xED, 0xEB, 0xDE, 0xDD, 0xDB, 0xBE, 
                    0xBD, 0xBB, 0xB7, 0x7E, 0x7D, 0x7B, 0x77, 0x6F ];
                    
const findNibble = symbol => {
    for( var i = 0; i < 16; i++) {
        if(symbol === nibbles[i]) {
            return i;
        }
    }
    return 0;
};