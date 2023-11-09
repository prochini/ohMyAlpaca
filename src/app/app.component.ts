import { Component } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ALPACA';
  value = 3;
  userData!: Observable<any>;
  constructor(private firestore: Firestore) {
    this.getData();
  }






  async addData(f: any) {
    console.log(f.value);
    const userProfileCollection = collection(this.firestore, 'users');
    console.log(userProfileCollection);

    addDoc(userProfileCollection, f.value).then(() => {
      console.log('Data saved successfully');

    }).catch((err) => {
      console.log(err);

    })
  }

  getData() {
    const userProfileCollection = collection(this.firestore, 'users');

    collectionData(userProfileCollection).subscribe(val => {
      console.log(val);

    })

    this.userData = collectionData(userProfileCollection);
  }

}
