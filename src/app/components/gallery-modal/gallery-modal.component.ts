import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GalleryImage } from 'src/app/interfaces/galeria.interface';
import { GaleriaService } from '../../services/galeria.service';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit, OnDestroy {

  public image!: GalleryImage;
  private subscription!: Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private readonly galleryService: GaleriaService
  ) {}

  ngOnInit(): void {
    this.getImageSelected();
  }

  getImageSelected(): void {
    this.subscription = this.galleryService
      .getImageSelected()
      .subscribe((image: GalleryImage) => {
        this.image = image;
        this.ref.detectChanges();
      });
  }

  changeImg(move: number): void {
    const position = this.image.position + move;
    this.galleryService.selectImage(position);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
