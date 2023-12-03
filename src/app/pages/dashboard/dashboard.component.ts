import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import Chart from 'chart.js/auto';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [RouterOutlet, RouterLink, SidenavComponent]
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initStackedBarChart();
    this.initPieChart();
    this.initLineChart();
  }

  private initStackedBarChart() {
    const ctx = document.getElementById('stackedBarChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          { label: 'Series A', data: [65, 59, 80, 81, 56, 55, 40], backgroundColor: 'rgba(255, 99, 132, 0.5)' },
          { label: 'Series B', data: [28, 48, 40, 19, 86, 27, 90], backgroundColor: 'rgba(54, 162, 235, 0.5)' }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Stacked Bar Chart'
          }
        }
      }
    });
  }

  private initPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: 'Pie Chart',
          data: [300, 500, 100],
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Pie Chart'
          }
        }
      }
    });
  }

  private initLineChart() {
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          { label: 'Series A', data: [65, 59, 80, 81, 56, 55, 40], borderColor: 'rgba(255, 99, 132, 0.5)' },
          { label: 'Series B', data: [28, 48, 40, 19, 86, 27, 90], borderColor: 'rgba(54, 162, 235, 0.5)' }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Line Chart'
          }
        }
      }
    });
  }

}
