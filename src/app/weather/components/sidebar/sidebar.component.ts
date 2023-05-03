import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public queryLocation: string = '';
  @Input() sidebarVisible: boolean = false;
  @Output() onQueryLocation: EventEmitter<string> = new EventEmitter();

  searchLocation() {
    this.onQueryLocation.emit(this.queryLocation);
    this.queryLocation = '';
  }

}
