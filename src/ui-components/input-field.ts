import { UIElement } from "./ui-element";

export class InputField implements UIElement {
  label: string;
  placeholder: string;
  width: number;
  height: number;
  tags: string[];
  group: string;
  optional: boolean;
  validationTime: number;
  validationType: "api" | "none" | "local";
  criticalInformation: boolean;
  averageTimeToFill: number;
  averageTimeToCorrect: number;
  fontSize: number;
  form: boolean;

  constructor({
    label,
    placeholder,
    width,
    height,
    tags,
    group,
    optional,
    validationTime,
    validationType,
    criticalInformation,
    averageTimeToFill,
    averageTimeToCorrect,
    fontSize,
    form,
  }: {
    label?: string;
    placeholder?: string;
    width?: number | string;
    height?: number | string;
    tags?: string;
    group?: string;
    optional?: boolean;
    validationTime?: number;
    validationType?: "api" | "none" | "local";
    criticalInformation?: boolean;
    averageTimeToFill?: number;
    averageTimeToCorrect?: number;
    fontSize?: number;
    form?: boolean;
  }) {
    this.label = label || "Input Field";
    this.placeholder = placeholder || "";
    if (!width) this.width = 200;
    else this.width = parseInt(width.toString());
    if (!height) this.height = 30;
    else this.height = parseInt(height.toString());
    if (tags && tags.length > 0) this.tags = tags.split(",");
    else this.tags = [];
    this.group = group || "default";
    this.optional = optional || false;
    this.validationTime = validationTime || 0;
    this.validationType = validationType || "none";
    this.criticalInformation = criticalInformation || false;
    if (averageTimeToFill)
      this.averageTimeToFill = this.generateTimeToFill(averageTimeToFill);
    else this.averageTimeToFill = this.generateTimeToFill(20);
    if (averageTimeToCorrect)
      this.averageTimeToCorrect =
        this.generateTimeToCorrect(averageTimeToCorrect);
    else this.averageTimeToCorrect = this.generateTimeToCorrect(20);
    this.fontSize = fontSize || 14;
    this.form = form || false;
  }

  render() {
    console.log(`
            <input type="text" placeholder="${this.placeholder}" style="width: ${this.width}px; height: ${this.height}px; font-size: ${this.fontSize}px;">
        `);
  }

  generateTimeToFill(level: number) {
    return Math.floor(Math.random() * (1000 * level));
  }

  generateTimeToCorrect(level: number) {
    return Math.floor(Math.random() * (1000 * level));
  }

  toJSON() {
    return {
      label: this.label,
      placeholder: this.placeholder,
      width: this.width,
      height: this.height,
      tags: this.tags,
      collection: this.group,
      optional: this.optional,
      validationTime: this.validationTime,
      validationType: this.validationType,
      criticalInformation: this.criticalInformation,
      averageTimeToFill: this.averageTimeToFill,
      averageTimeToCorrect: this.averageTimeToCorrect,
      fontSize: this.fontSize,
      form: this.form,
      type: "input-field",
    };
  }
}
