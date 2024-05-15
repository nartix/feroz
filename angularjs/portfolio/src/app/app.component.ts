import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$ = this.loadingService.isLoading$;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    // this.isLoading$.subscribe((isLoading) => {
    //   console.log('isLoading:', isLoading);
    // });

    // Bootstrap tooltip initialization
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  }
}
