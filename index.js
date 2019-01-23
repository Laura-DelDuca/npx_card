#!/usr/bin/env node

//console.log('doing business');

// Infos:
// https://studioelsa.se/blog/open-source-oss-npx-business-card/

const chalk = require ('chalk');
const boxen = require ('boxen');

const frame = {
    borderColor: 'green',
    borderStyle: 'double',
    margin: {
        top: 4,
        bottom: 4,
        left: 8,
        right: 8
    },
    padding: 1
};

const card = '\n' +
    chalk.green ('                         Laura') + ' ' + chalk.green.bold('Del Duca') + '\n\n' +
    chalk.blue.bold('My studies :') + ' ' + 'Modern languages and litteratures' + chalk.blue(' @ ULG') + '\n' +
    '             Web development' + chalk.blue(' @ BeCode') + '\n\n' + 
    chalk.white('      Wanna find me ?') + '\n' +
    chalk.green.bold('==> Github :') + ' ' + '    https://github.com/' + chalk.green.italic('Laura-DelDuca') + '\n' +
    chalk.yellow.bold('==> npm :') + ' ' + '       https://www.npmjs.com/' + chalk.yellow.italic('~lauradelduca1990') + '\n' +
    chalk.red.bold('==> Linkedin') + ' ' + '    https://www.linkedin.com/in/' + chalk.red.italic('laura-del-duca-887367172/') + '\n'




console.log(boxen(card, frame));



//'\n'