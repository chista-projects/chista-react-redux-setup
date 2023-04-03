const shell = require('shelljs');

import { Log } from "../src/promptStyle";



export default function test(){
    console.log('');
    console.log(`${Log.fg.magenta}Testing your code ...\n`);
    console.log('========================');
    console.log('\n\n');


    shell.exec(`yarn jest`);
}