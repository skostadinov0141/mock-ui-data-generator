"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var program = new commander_1.Command();
program
    .name('ui-data-generator')
    .description('Creates mock data simulating user interface interactions')
    .version('0.0.1');
program
    .command("add")
    .description('Add a new UI element to generate data for')
    .requiredOption('-n, --name <name>', 'Name of the UI element')
    .argument('<type>', 'Type of UI element to generate data for')
    .action(function (type, options) {
    console.log("Adding new UI element: ".concat(type));
    console.log("Name: ".concat(options.name));
});
program.parse();
