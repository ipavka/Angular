import { Component, OnInit } from '@angular/core';
import { ValueService } from '../services/value.service';
import { Observable } from 'rxjs';
import { PrettyLoggerService } from '../services/pretty-logger.service';

@Component({
  selector: 'ins-for-services',
  templateUrl: './for-services.component.html',
  styleUrls: ['./for-services.component.scss'],
})
export class ForServicesComponent implements OnInit {
  comValue$ = new Observable(); // поток

  constructor(private valueService: ValueService, private prettyLogger: PrettyLoggerService) {}

  ngOnInit(): void {
    this.comValue$ = this.valueService.value$;
  }

  addValueHandler() {
    this.valueService.add();
    this.prettyLogger.logSeverity('success add()', 'success');
    this.prettyLogger.logSeverity('info add()', 'info');
  }
}
