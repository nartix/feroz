import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: '[app-employee-table-header]',
  templateUrl: './employee-table-header.component.html',
  styleUrls: ['./employee-table-header.component.scss'],
})
export class EmployeeTableHeaderComponent {
  @Input() sortKey: string;
  @Input() resetIcon: TemplateRef<any>;
  @Input() sortByIcon: TemplateRef<any>;
  @Output() sortClicked = new EventEmitter<string>();

  camelCaseSortKey: string;

  ngOnInit() {
    this.camelCaseSortKey = this.sortKey
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  sort() {
    this.sortClicked.emit(this.sortKey);
  }
}
