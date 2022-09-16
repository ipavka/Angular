import { Injectable } from '@angular/core';

type SeverityType = 'error' | 'success' | 'info' | 'warning';

@Injectable({
  providedIn: 'root',
})
export class PrettyLoggerService {
  logSeverity(message: string, type: SeverityType) {
    console.log(`%c${message}: `, this.getSeverity(type));
  }

  getSeverity(type: string) {
    switch (type) {
      case 'success':
        return 'background: green; color: white; border-radius: 12px; padding: 2px';
      case 'info':
        return 'background: blue; color: white; border-radius: 12px; padding: 2px';
      case 'error':
        return 'background: red; color: white; border-radius: 12px; padding: 2px';
      case 'warning':
        return 'background: orange; color: black; border-radius: 12px; padding: 2px';
      default:
        return '';
    }
  }
}
