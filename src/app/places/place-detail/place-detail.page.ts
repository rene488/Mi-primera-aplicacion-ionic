import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { PlacesService } from '../places.service';
import {AlertController} from '@ionic/angular'
import { Place } from '../place.model';



@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService, private router: Router, private alertCtrl: AlertController) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // redirect
      const recipeId = paramMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId);
    })
  }

  async deletePlace() {

    const alertElement = await this.alertCtrl.create({
      header: 'Are your sure, you want to delete it?',
      message: 'Be careful',
      buttons: [
        { 
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesService.detetePlace(this.place.id);
            this.router.navigate(['/places'])
          }
        }
      ]
    });
    await alertElement.present();
    
  }
}
