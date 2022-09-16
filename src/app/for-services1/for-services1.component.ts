import { Component, OnInit } from '@angular/core';
import { ValueService } from '../services/value.service';
import { PrettyLoggerService } from '../services/pretty-logger.service';

@Component({
  selector: 'ins-for-services1',
  templateUrl: './for-services1.component.html',
  styleUrls: ['./for-services1.component.scss'],
})
export class ForServices1Component implements OnInit {
  comValue1 = 0;

  constructor(private valueService: ValueService, private prettyLogger: PrettyLoggerService) {}

  ngOnInit(): void {
    // subscribe(подписка) avoid !!!
    this.valueService.value$.subscribe(value => {
      this.comValue1 = value;
    });
  }

  decValueHandler() {
    this.valueService.dec();
    this.prettyLogger.logSeverity('error dec()', 'error');
    this.prettyLogger.logSeverity('warning dec()', 'warning');
  }
}
