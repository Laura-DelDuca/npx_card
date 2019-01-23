#!/usr/bin/env node

//console.log('doing business');

// https://studioelsa.se/blog/open-source-oss-npx-business-card/

const chalk = require ('chalk');
const boxen = require ('boxen');
const figlet = require ('figlet');

const frame = {
    borderColor: 'green',
    borderStyle: 'double',
    margin: {
        top: 0,
        bottom: 0,
        left: 4,
        right: 4
    },
    padding: 1
};

console.log(chalk.green.bold( figlet.textSync('                About Me:', {
    font: 'Standard',
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted',
})));

const card = '\n' +
    chalk.green ('                         Laura') + ' ' + chalk.green.bold('Del Duca') + '\n\n' +
    chalk.blue.bold('My studies :') + ' ' + 'Modern languages and litteratures' + chalk.blue(' @ ULG') + '\n' +
    '             Web development' + chalk.blue(' @ BeCode') + '\n\n' + 
    chalk.white('      Wanna find me ?') + '\n' +
    chalk.green.bold('==> Github :') + ' ' + '    https://github.com/' + chalk.green.italic('Laura-DelDuca') + '\n' +
    chalk.yellow.bold('==> npm :') + ' ' + '       https://www.npmjs.com/' + chalk.yellow.italic('~lauradelduca1990') + '\n' +
    chalk.red.bold('==> Linkedin :') + ' ' + '  https://www.linkedin.com/in/' + chalk.red.italic('laura-del-duca-887367172/') + '\n'

console.log(boxen(card, frame));

const cat1 = "  /\\___/\\" + '\n';
const cat2 = "(  o o  )" + '\n';
const cat3 = "/   *   \\ " + '\n';
const cat4 = "\\__\\_/__/ " + "\033[5m meow!\033[0m" + '\n';
const cat5 = "  /   \\ " + '\n';
const cat6 = " / ___ \\ " + '\n';
const cat7 = " \\/___\\/ " + '\n'; 

console.log(cat1, cat2, cat3, cat4, cat5, cat6, cat7);


//http://www.ascii-fr.com/-Chats-.html
//https://misc.flogisoft.com/bash/tip_colors_and_formatting (colors for text)
//     /\___/\
//    (  o o  )
//    /   *   \
//    \__\_/__/ meow!
//      /   \
//     / ___ \
//     \/___\/



//'\n'

