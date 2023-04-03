import arg from "arg";
import inquirer from "inquirer";


import fetch from "../functions/fetch";
import help from "../functions/help";
import intro from "../functions/intro";
import test from "../functions/test";


import { Log } from "./promptStyle";

const shell = require('shelljs');

function parseArgumentsIntoOptions(rawArgs){
    /* Function that allows processing of arguments into options */
    const args = arg(
        { //Arguments that we are expecting to see
            '--help': Boolean,
            '--fetch': Boolean,
            '--test': Boolean,
            //Their corresponding aliases
            '-h': '--help',
            '-f': '--fetch',
            '-t': '--test',
        },
        { //Arguments that we want to use which is the third one (those entered below)
            argv: rawArgs.slice(2),
        }
    );
    return {
        //template: args._[0], //i.e. first argument pasted in
        help: args['--help'] || false, //i.e. help will correspond to the entered argument '--help'
        fetch: args['--fetch'] || false,
        test: args['--test'] || false,
    }
}





async function promptForMissingOptions(options){
    const defaultTemplate = 'JS'; //Specification of a default template

    if(options.skipPrompts){
        /* We'll take the options we have so far
        and we'll set the template either equal to
        the one which's specified or the default one (defaultTemplate) */
        return {
            ... options,
            template: options.template || defaultTemplate
        }
    }

    /* Setup of a list of questions to help the user fill in the
    missing parameters */
    const questions = [];
    if (!options.template){
        questions.push({
            type: 'list',
            name: 'template',
            message: 'Please choose which project template to use',
            choices: ['JS', 'TS'],
            default: defaultTemplate
        });
    }

    if (!options.git){
        questions.push({
            type: 'confirm',
            name: 'git',
            message: 'Initialize a git repository?',
            default: false,
        });
    }

    if (!options.help){
        questions.push({
            type: '',
            name: 'help',
            message: 'test',
            default: false,
        });
    }


    const answers = await inquirer.prompt(questions);

    return {
        ... options,
        template: options.template || answers.template,
        git: options.git || answers.git,
    }
}








export async function cli(args) {
    if(JSON.stringify(args.slice(2)) === JSON.stringify([])){
        intro();
    }

    //We process the options:
    let options = parseArgumentsIntoOptions(args);


    //options = await promptForMissingOptions(options);
    //console.log(options);
    if(options.help){
        help();
    }

    if(options.fetch){
        fetch();
    }

    if(options.test){
        test();
    }
    
}