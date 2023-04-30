import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSongPage } from './add-song.page';

const routes: Routes = [
  {
    path: '',
    component: AddSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSongPageRoutingModule {}
