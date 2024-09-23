import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../../../fetch-api.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for NgFor

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent implements OnInit {
  shirts: any[] = [];

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit(): void {
    this.shirts = this.fetchApiService.getShirts();
  }

  redirectTo(url: string): void {
    window.open(url, '_blank'); // Opens the product page in a new tab
  }
}
