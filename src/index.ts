import { Command } from "commander";
import { Button } from "./ui-components/button";
import * as fs from "fs";

const program = new Command();

program
  .name("ui-data-generator")
  .description("Creates mock data simulating user interface interactions")
  .version("0.0.1");

program
  .command("add")
  .description("Add a new UI element to generate data for")
  .option("-S, --save <filePath>", "Append the generated data to a file")
  .option("-o, --output", "Output the generated data to the console")
  .option("-n, --name <name>", "Name of the UI element")
  .option("-w, --width <width>", "Width of the UI element")
  .option("-h, --height <height>", "Height of the UI element")
  .option("-l, --label <label>", "Label of the UI element")
  .option("-t, --tags <tags>", "Tags of the UI element, separated by commas")
  .option(
    "-g, --group <group>",
    'A strict collection of the UI element (default is "default")',
  )
  .option(
    "-ac, --averageClicksPerDay <averageClicksPerDay>",
    "The level of average clicks per day for the UI element (higher is more clicks)",
  )
  .option(
    "-ttl, --averageTimeToLeaveAfterClick <averageTimeToLeaveAfterClick>",
    "The average time to leave after clicking the UI element (higher is longer)",
  )
  .option(
    "-alt, --averageLoadTime <averageLoadTime>",
    "The average load time of the UI element (higher is longer)",
  )
  .argument("<type>", "Type of UI element to generate data for")
  .action((type: string, options) => {
    switch (type) {
      case "button":
        const button = new Button({
          width: options.width,
          height: options.height,
          label: options.label,
          tags: options.tags,
          group: options.group,
          averageClicksPerDay: options.averageClicksPerDay,
          averageTimeToLeaveAfterClick: options.averageTimeToLeaveAfterClick,
          averageLoadTime: options.averageLoadTime,
        });
        if (options.save) {
          saveDataToFile(button, options.save);
        }
        if (options.output) {
          // Output the data to the console
          console.log("Outputting data to console...");
          console.log(button.toJSON());
        }
        break;

      default:
        console.error("Invalid type");
        break;
    }
  });

program.parse();

function saveDataToFile(plain: any, filePath: string): boolean {
  // Attempt to load the file first
  let data: any[];
  try {
    data = JSON.parse(fs.readFileSync(filePath).toString());
  } catch (error) {
    data = [];
  }
  // Save the data to a file
  console.log("Saving data to file...");
  data.push(plain.toJSON());
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("Data saved to file.");
    return true;
  } catch (error) {
    console.error("Error saving data to file");
    return false;
  }
}
