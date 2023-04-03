import { Log } from "../src/promptStyle";


export default function help(){
    console.log('');
    console.log('Here is a list of arguments to pass in:');
    
    console.log('------------------------------------------------------------------');
    console.log('------------------------------------------------------------------');

    console.log('');
    console.log('');
    console.log(`  ${Log.bg.yellow}-f ${Log.reset} or ${Log.bg.yellow}--fetch${Log.reset}    fetch project within the corresponding folder${Log.reset}`);
    console.log(`  ${Log.bg.yellow}-t ${Log.reset} or ${Log.bg.yellow}--test${Log.reset}     test your code`);
}