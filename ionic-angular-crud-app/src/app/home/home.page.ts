import { Component, OnInit } from '@angular/core';
import { SongService } from './../shared/song.service';
import { Song } from '../shared/song';
import { AuthService } from '../auth/auth.service';
import { Storage } from  '@ionic/storage';
import { AuthResponse } from  './../auth/auth-response';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Songs:any=[]
  currentuser:any
  constructor(

    private songService: SongService,
    private authService:AuthService  ,
    private storage:Storage
  ) {

  }
  ngOnInit() {
    this.currentuser=this.authService.getUser()
    console.log("USER "+JSON.stringify(this.currentuser))
   }
  ionViewDidEnter() {
    this.songService.getSongList().subscribe((res) => {
      console.log(res)
      this.Songs = res;
    })
  }
  deleteSong(song:Song, i:number) {
    if (window.confirm('Do you want to delete user?')) {
      this.songService.deleteSong(song._id)
        .subscribe(() => {
          this.Songs.splice(i, 1);
          console.log('Song deleted!')
        }
        )
    }
  }
  loggedIn(){
    this.authService.isLoggedIn().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.authService.getUser().subscribe((username) => {
          console.log(username);
        });
      }
    });
  }
  logout(){
    return this.authService.logout()
  }
}
