import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CityService } from "src/app/services/city.service";
import { City } from "src/app/models/city";
// import {
//   NgxGalleryOptions,
//   NgxGalleryImage,
//   NgxGalleryAnimation
// } from "ngx-gallery";
import { Photo } from "src/app/models/photo";

@Component({
  selector: "app-city-detail",
  templateUrl: "./city-detail.component.html",
  styleUrls: ["./city-detail.component.css"]
})
export class CityDetailComponent implements OnInit {
  city: City;
  photos: Photo[] = []; // null hatası almamak için boş bir array'e eşlendi.

  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params.id);
    });
  }

  getCityById(cityId) {
    console.log(cityId);
    this.cityService.getCityById(cityId).subscribe(response => {
      this.city = response;
      console.log("cityDetail: ", this.city);
    });
  }

  getPhotosByCity(cityId) {
    this.cityService.getPhotosByCity(cityId).subscribe(response => {
      this.photos = response;
      // this.setGallery();
    });
  }

  getImages() {
    const imageUrls = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.city.photos.length; i++) {
      imageUrls.push({
        small: this.city.photos[i].url,
        medium: this.city.photos[i].url,
        big: this.city.photos[i].url
      });
    }
    return imageUrls;
  }

  // setGallery() {
  //   this.galleryOptions = [
  //     {
  //       width: "600px",
  //       height: "400px",
  //       thumbnailsColumns: 4,
  //       imageAnimation: NgxGalleryAnimation.Slide
  //     },
  //     // max-width 800
  //     {
  //       breakpoint: 800,
  //       width: "100%",
  //       height: "600px",
  //       imagePercent: 80,
  //       thumbnailsPercent: 20,
  //       thumbnailsMargin: 20,
  //       thumbnailMargin: 20
  //     },
  //     // max-width 400
  //     {
  //       breakpoint: 400,
  //       preview: false
  //     }
  //   ];

  //   this.galleryImages = this.getImages();
  //   // [
  //   //   {
  //   //     small: "assets/1-small.jpg",
  //   //     medium: "assets/1-medium.jpg",
  //   //     big: "assets/1-big.jpg"
  //   //   },
  //   //   {
  //   //     small: "assets/2-small.jpg",
  //   //     medium: "assets/2-medium.jpg",
  //   //     big: "assets/2-big.jpg"
  //   //   },
  //   //   {
  //   //     small: "assets/3-small.jpg",
  //   //     medium: "assets/3-medium.jpg",
  //   //     big: "assets/3-big.jpg"
  //   //   }
  //   // ];
  // }
}
