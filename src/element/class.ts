import { Element } from './interface';

export class BaseElementComponent implements Element {
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
