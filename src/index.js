"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var button_1 = require("./ui-components/button");
var program = new commander_1.Command();
program
    .name('ui-data-generator')
    .description('Creates mock data simulating user interface interactions')
    .version('0.0.1');
program
    .command("add")
    .description('Add a new UI element to generate data for')
    .option('-n, --name <name>', 'Name of the UI element')
    .option('-i, --id <id>', 'ID of the UI element')
    .option('-w, --width <width>', 'Width of the UI element')
    .option('-h, --height <height>', 'Height of the UI element')
    .option('-l, --label <label>', 'Label of the UI element')
    .option('-t, --tags <tags>', 'Tags of the UI element')
    .option('-c, --collection <collection>', 'Collection of the UI element')
    .option('-ac, --averageClicksPerDay <averageClicksPerDay>', 'The level of average clicks per day for the UI element (higher is more clicks)')
    .option('-ttl, --averageTimeToLeaveAfterClick <averageTimeToLeaveAfterClick>', 'The average time to leave after clicking the UI element (higher is longer)')
    .argument('<type>', 'Type of UI element to generate data for')
    .action(function (type, options) {
    switch (type) {
        case 'button':
            var button = new button_1.Button({
                id: options.id,
                width: options.width,
                height: options.height,
                label: options.label,
                tags: options.tags,
                collection: options.collection,
                averageClicksPerDay: options.averageClicksPerDay,
                averageTimeToLeaveAfterClick: options.averageTimeToLeaveAfterClick
            });
            console.log(button.toJSON());
            break;
    }
});
program.parse();
