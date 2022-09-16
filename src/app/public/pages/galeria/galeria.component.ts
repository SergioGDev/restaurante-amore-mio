import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { GalleryImage } from '../../../interfaces/galeria.interface';
import { GalleryModalComponent } from 'src/app/components/gallery-modal/gallery-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { GaleriaService } from '../../../services/galeria.service';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  columns = 3;
  gallery: GalleryImage[] = [];

  constructor(
    private dialog: MatDialog,
    private galleryService: GaleriaService,
    private mediaObserver: MediaObserver
  ) { }

  openDialog(position: number) {
    this.galleryService.selectImage(position);
    this.dialog.open(GalleryModalComponent, {panelClass: 'custom-dialog-container'})
  }

  ngOnInit(): void {
    this.galleryService.createGallery();
    this.mediaChange();
    this.getGallery();
    window.scroll({ 
      top: 0, 
      left: 0
    });
  }

  getGallery(): void {
    this.subscription.push(
      this.galleryService.getGallery().subscribe(
        gallery => this.gallery = gallery
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  private mediaChange(): void{
    this.subscription.push(
      this.mediaObserver.asObservable()
        .pipe(
          filter((changes: MediaChange[]) => changes.length > 0),
          map((changes: MediaChange[]) => changes[0])
        ).subscribe((change: MediaChange) => {
          switch(change.mqAlias) {
            case 'xs': {
              this.columns = 1;
              break;
            }
            case 'sm': {
              this.columns = 2;
              break;
            }
            default: {
              this.columns = 3;
              break;
            }
          }
        })
    );
  }
}
