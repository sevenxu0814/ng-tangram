import { InjectionToken } from '@angular/core';

export class NtPaginationConfig {
  previousLabel: string = 'Previous';
  nextLabel: string = 'Next';
  size: number = 3;
  pageSize: number = 10;
  previousSkipLabel: string = 'Goto';
  nextSkipLabel: string = '';
}

export const NT_PAGINATION_CONFIG = new InjectionToken<NtPaginationConfig>('nt-pagination-config');
