import { Component } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc } from '@angular/fire/firestore';
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
  PlayerData!: Observable<any>;
  PlayerModel!: {
    Account: string,
    Diamond: Number,
    Email: string,
    Gender: Number,
    Money: Number,
    Password: string,
    id: string,
  }[]
  constructor(private firestore: Firestore) {
    this.getData();
    this.getPlayer();
  }

  addData(f: any) {
    console.log(f.value);
    const userProfileCollection = collection(this.firestore, 'users');
    addDoc(userProfileCollection, f.value).then(() => {
      console.log('Data saved successfully');
    }).catch((err) => {
      console.log(err);
    })
  }
  addPlayer(f: any) {
    console.log(f.value);
    const userProfileCollection = collection(this.firestore, 'player');
    addDoc(userProfileCollection, f.value).then(() => {
      console.log('Data saved successfully');
    }).catch((err) => {
      console.log(err);
    })
  }

  getData() {
    const userProfileCollection = collection(this.firestore, 'users');
    collectionData(userProfileCollection, { idField: 'id' }).subscribe(val => {
      console.log(val);
    })
    this.userData = collectionData(userProfileCollection, { idField: 'id' });
  }

  getPlayer() {
    const userProfileCollection = collection(this.firestore, 'player');
    collectionData(userProfileCollection, { idField: 'id' }).subscribe(val => {
      console.log(val);
    })
    this.PlayerData = collectionData(userProfileCollection, { idField: 'id' });

  }

  updateData(id: string) {
    const docInstence = doc(this.firestore, 'users', id);
    const updateData = {
      Character: '機巴尼瑪'

    }
    updateDoc(docInstence, updateData).then(() => {
      console.log("dataupdate");
    }).catch((err) => {
      console.log(err);

    })
  }
  updateSignIn(id: string, money: number) {
    const docInstence = doc(this.firestore, 'player', id);
    const updateData = {
      Money: money + 1000

    }
    updateDoc(docInstence, updateData).then(() => {
      console.log("dataupdate");
    }).catch((err) => {
      console.log(err);

    })
  }


}
