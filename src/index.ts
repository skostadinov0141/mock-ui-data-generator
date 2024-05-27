import { Command } from "commander";
const program = new Command();

program
    .name('ui-data-generator')
    .description('Creates mock data simulating user interface interactions')
    .version('0.0.1');

program
    .command("add")
    .description('Add a new UI element to generate data for')
    .requiredOption('-n, --name <name>', 'Name of the UI element')
    .argument('<type>', 'Type of UI element to generate data for')
    .action((type: string, options) => {
        console.log(`Adding new UI element: ${type}`);
        console.log(`Name: ${options.name}`);
    });

program.parse();