const shell = require('shelljs');

import { Log } from "../src/promptStyle";


export default function fetch(){
    let currentDirectory = shell.pwd().stdout.split('/')[shell.pwd().stdout.split('/').length-1];

    let testUrl = shell.exec(`git ls-remote https://github.com/chista-projects/${currentDirectory}`);

    
    if(testUrl.stdout !== ''){
        console.log('');
        console.log(`${Log.fg.cyan}Fetching data ...\n`);
        console.log('========================');
        console.log('\n\n');


        shell.exec(`yes "yes" | ls -la | rm -r * | rm -r .*`);

        
        shell.exec(`git clone https://github.com/chista-projects/${currentDirectory} . --quiet`);
        

        console.log('All set up 👌👌');
        console.log('');
        console.log('Enjoy!');
    } else {
        console.log('');
        console.log('');
        console.log(`${Log.fg.red}No projects available for this folder!`);
        console.log('Please, be placed on the right folder to fetch a given project.');
    }
}