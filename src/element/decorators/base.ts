import { Element } from '../interface';

export class ElementDecorator implements Element {
  protected component: Element;

  constructor(component: Element) {
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
