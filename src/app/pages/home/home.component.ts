import { Component } from '@angular/core';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SidenavComponent,MatSidenavModule,DashboardComponent]
})
export class HomeComponent {
  

}
