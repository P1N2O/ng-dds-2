import { Component, ElementRef, ViewChild, Input } from "@angular/core";
import { DdsComponent } from "../../helpers/dds-component-shell";
import { setElementId, Uuid } from "../../helpers/dds-helpers";

@Component({
  selector: `dds-modal`,
  templateUrl: `./modal.component.html`,
  styleUrls: [`./modal.component.scss`]
})
export class ModalComponent extends DdsComponent {
  @ViewChild("triggerContainer") triggerContainer: ElementRef<HTMLElement>;
  @Input() modalId: string;
  private modalTitleId: string;
  private modalTriggerId: string;

  ngOnInit() {
    this.ddsInitializer = `Modal`;
    this.modalTitleId = `${this.ddsInitializer}-title${Uuid()}`;
    this.modalTriggerId = `${this.ddsInitializer}-trigger${Uuid()}`;
    this.elementId = setElementId(
      this.elementId,
      this.ddsInitializer.toLowerCase()
    );
  }

  openModal = (e: any) => {
    if (this.ddsComponent) this.ddsComponent.open();
  };
}
