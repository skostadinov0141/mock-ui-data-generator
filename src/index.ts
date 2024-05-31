import { Command } from "commander";
import { Button } from "./ui-components/button";
import { InputField } from "./ui-components/input-field";
import * as fs from "fs";

const program = new Command();

program.name("ui-data-generator").description("Creates mock data simulating user interface interactions").version("0.0.1");

program
  .command("button")
  .description("Create a button UI element")
  .option("-S,     --save <filePath>", "Append the generated data to a file")
  .option("-o,     --output", "Output the generated data to the console")
  .option("-n,     --name <name>", "Name of the UI element")
  .option("-w,     --width <width>", "Width of the UI element")
  .option("-h,     --height <height>", "Height of the UI element")
  .option("-l,     --label <label>", "Label of the UI element")
  .option("-t,     --tags <tags>", "Tags of the UI element, separated by commas")
  .option("-g,     --group <group>", 'A strict collection of the UI element (default is "default")')
  .option("-ac,    --averageClicksPerDay <averageClicksPerDay>", "The level of average clicks per day for the UI element (higher is more clicks)")
  .option("-ttl,   --averageTimeToLeaveAfterClick <averageTimeToLeaveAfterClick>", "The average time to leave after clicking the UI element (higher is longer)")
  .option("-alt,   --averageLoadTime <averageLoadTime>", "The average load time of the UI element (higher is longer)")
  .action((options, _command) => {
    console.log("Creating a button...");
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
  });

program
  .command("input-field")
  .description("Create a input-field UI element")
  .option("-S,     --save <filePath>", "Append the generated data to a file")
  .option("-o,     --output", "Output the generated data to the console")
  .option("-l,     --label <label>", "Label of the UI element")
  .option("-p,     --placeholder <placeholder>", "Placeholder of the UI element")
  .option("-w,     --width <width>", "Width of the UI element")
  .option("-h,     --height <height>", "Height of the UI element")
  .option("-t,     --tags <tags>", "Tags of the UI element, separated by commas")
  .option("-g,     --group <group>", 'A strict collection of the UI element (default is "default")')
  .option("-op,    --optional", "Whether the UI element is optional")
  .option("-vt,    --validationTime <validationTime>", "The time it takes to validate the UI element")
  .option("-vty,   --validationType <validationType>", 'The type of validation for the UI element (default is "none")')
  .option("-ci,    --criticalInformation", "Whether the UI element contains critical information")
  .option("-atf,   --averageTimeToFill <averageTimeToFill>", "The average time to fill the UI element")
  .option("-atc,   --averageTimeToCorrect <averageTimeToCorrect>", "The average time to correct the UI element")
  .option("-fs,    --fontSize <fontSize>", "The font size of the UI element")
  .option("-f,     --form", "Whether the UI element is part of a form")
  .action((options, _command) => {
    console.log("Creating a input-field...");
    const inputField = new InputField({
      label: options.label,
      placeholder: options.placeholder,
      width: options.width,
      height: options.height,
      tags: options.tags,
      group: options.group,
      optional: options.optional,
      validationTime: options.validationTime,
      validationType: options.validationType,
      criticalInformation: options.criticalInformation,
      averageTimeToFill: options.averageTimeToFill,
      averageTimeToCorrect: options.averageTimeToCorrect,
      fontSize: options.fontSize,
      form: options.form,
    });
    if (options.save) {
      saveDataToFile(inputField, options.save);
    }
    if (options.output) {
      // Output the data to the console
      console.log("Outputting data to console...");
      console.log(inputField.toJSON());
    }
  });

program.parse(process.argv);

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
