import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GalleryImage } from '../interfaces/galeria.interface';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  private image!: GalleryImage;
  private galleryImages: GalleryImage[] = [];
  private gallery$: BehaviorSubject<GalleryImage[]> = new BehaviorSubject(this.galleryImages);
  private gallerySelected$: BehaviorSubject<GalleryImage> = new BehaviorSubject(this.image);

  constructor() { }

  getGallery(): Observable<GalleryImage[]> {
    return this.gallery$.asObservable();
  }

  getImageSelected(): Observable<GalleryImage> {
    return this.gallerySelected$.asObservable();
  }

  createGallery(): void {
    this.galleryImages = [];
    for (let i = 1; i <= 22; i++) {
      this.galleryImages.push(
        {
          src: `assets/foto-tegamar-${i}.jpg`,
          marco: `assets/marco-tegamar-${i}.jpg`,
          position: i-1,
          alt: `Image ${i}`,
          first: (i === 1),
          last: (i === 22)
        }
      )
      this.gallery$.next(this.galleryImages);
    }
  }

  selectImage(position: number) : void {
    if (position >= 0 && position < this.galleryImages.length) {
      this.gallerySelected$.next(this.galleryImages[position]);
    }
  }
}
