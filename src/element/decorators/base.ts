import { BaseElement } from "../interface";

export class ElementDecorator implements BaseElement {
  protected component: BaseElement;

  constructor(component: BaseElement) {
    this.component = component;
  }

  public lookAround(): string {
    return this.component.lookAround();
  }
  public bendTheKnees(): string {
    return this.component.bendTheKnees();
  }
  public boringStuff(): string {
    return this.component.boringStuff();
  }
}
