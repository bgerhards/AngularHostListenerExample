import { Component, HostListener } from '@angular/core';
import { EventListenerService } from './event-listener.service';
import { GlobalDataManagerService } from './global-data-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-activity-monitor';

  constructor(private eventListenerService: EventListenerService, public gds: GlobalDataManagerService) {
  }

  @HostListener('window:click') windowClick() {
    this.eventListenerService.userActivity();
    this.gds.clicks++;
  }

  @HostListener('window:keydown') keypress() {
    this.gds.keypresses++;
    this.eventListenerService.userActivity();
  }
}
