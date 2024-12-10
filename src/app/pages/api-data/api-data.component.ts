import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class ApiDataComponent implements OnInit {
  imageUrl: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchRandomImage();
  }

  fetchRandomImage(): void {
    this.apiService.getApiData().subscribe((response: any) => {
      this.imageUrl = response.message; // Assign the image URL from API response
      console.log(this.imageUrl);
    });
  }
}
