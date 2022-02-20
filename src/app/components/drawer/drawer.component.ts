import { Component, ElementRef, ViewChild, Input } from "@angular/core";
import { DdsComponent } from "../../helpers/dds-component-shell";
import { setElementId } from "../../helpers/dds-helpers";

@Component({
  selector: `dds-drawer`,
  templateUrl: `./drawer.component.html`,
  styleUrls: [`./drawer.component.scss`]
})
export class DrawerComponent extends DdsComponent {
  @ViewChild("triggerContainer") triggerContainer: ElementRef<HTMLElement>;
  @Input() elementId: string;

  ngOnInit() {
    this.ddsInitializer = `Drawer`;
    this.elementId = setElementId(
      this.elementId,
      this.ddsInitializer.toLowerCase()
    );
  }

  openDrawer = (e: any) => {
    if (this.ddsComponent) this.ddsComponent.open();
  };
}
