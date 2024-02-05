import { BaseElement } from "./interface";

export class BaseElementComponent implements BaseElement {
  lookAround(): string {
    return "i'm looking Around";
  }
  bendTheKnees(): string {
    return "i'm bending The Knees";
  }
  boringStuff(): string {
    return "i'm doing boring Stuff";
  }
}
