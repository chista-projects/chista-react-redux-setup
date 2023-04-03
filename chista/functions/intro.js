import { Log } from "../src/promptStyle";

export default function intro(){
    console.log('\n\n');
    console.log(`${Log.fg.magenta}Chista CLI`);
    console.log('');
    console.log('Supporting platform for learning and testing codes.')
    console.log('\n\n\n');
    console.log('CLI developped by Zakstein & HedzDev');
    console.log('');
    console.log('=====================================================')
    console.log('');
    console.log('');
    console.log('List of arguments to pass in:');
    console.log('');
    console.log('  -h or --help           List of possible arguments to pass in');
    console.log('');
    console.log('');
    console.log('');
    console.log('  -f or --fetch          Fetch project within the corresponding folder');
    console.log('');
    console.log('');
    console.log('');
    console.log('  -t or --test           Test your code');
    console.log('');
    console.log('');
    console.log('');
}