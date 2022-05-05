import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './blastune/explore/explore.component';
import { FreeComponent } from './blastune/free/free.component';
import { LoginComponent } from './login/login.component';
import { HotSelectComponent } from './blastune/hot-select/hot-select.component';
import { SelectionsComponent } from './blastunes/selections/selections.component';
import { HomeComponent } from './home/home.component';
import { TuneboxComponent } from './home/tunebox/tunebox.component';
import { MusicDetailHeaderComponent } from './music-detail/music-detail-header/music-detail-header.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { MusicComponent } from './music/music.component';
import { SettingsComponent } from './settings/settings.component';
import { StartComponent } from './start/start.component';
import { TestComponent } from './test/test.component';
import { VideoComponent } from './video/video.component';

import { ExploresComponent } from './explores/explores.component';
import { ExplorePopComponent } from './explores/exploress/explore-pop/explore-pop.component';
import { CommunitiesComponent } from './explores/communities/communities.component';

import { ListComponent } from './spotlight/list/list.component';
import { PlaylistComponent } from './spotlight/playlist/playlist.component';
import { CommentComponent } from './spotlight/comment/comment.component';
import { HideComponent } from './spotlight/hide/hide.component';

import { RadiosComponent } from './radios/radios.component';
import { PopComponent } from './radios/pop/pop.component';
import { BestComponent } from './radios/best/best.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { MainComponent } from './admin/main/main.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AccountComponent } from './admin/account/account.component';
import { AlbumComponent } from './admin/album/album.component';
import { AplaylistsComponent } from './admin/aplaylists/aplaylists.component';
import { SongComponent } from './admin/song/song.component';
import { ArtistComponent } from './admin/artist/artist.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'music', component: MusicComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'list', component: ListComponent },
      { path: 'music', component: MusicComponent },
      { path: 'select', component: SelectionsComponent },
      { path: 'hot', component: HotSelectComponent },
      { path: 'explore', component: ExploreComponent },
      { path: 'video', component: VideoComponent },
      { path: 'tune', component: TuneboxComponent },
      { path: 'test', component: TestComponent },
      { path: 'music-detail-header', component: MusicDetailHeaderComponent },
      { path: 'stream-music', component: MusicDetailHeaderComponent },
      { path: 'explores', component: ExploresComponent },
      { path: 'explores-pop', component: ExplorePopComponent },
      { path: 'more', component: CommunitiesComponent },

      { path: 'spot', component: PlaylistComponent },

      { path: 'radios', component: RadiosComponent },
      { path: 'pop', component: PopComponent },
      { path: 'best', component: BestComponent }

    ]

  },
  {
    path: 'main', component: MainComponent,
    children: [
      {path:'dashboard',component:DashboardComponent},
      {path: 'account',component:AccountComponent},
      {path: 'album',component:AlbumComponent},
      {path: 'aplaylist',component:AplaylistsComponent},
      {path: 'song',component:SongComponent},
      {path: 'artist',component:ArtistComponent},
      { path: 'explores', component: ExploresComponent },
      { path: 'radios', component: RadiosComponent }, 
      { path: 'list', component: ListComponent },     

    ]},
    {path: 'aplaylist',component:AplaylistsComponent},
  {path:'admin',component:AdminSidebarComponent},
  {path:'dash',component:DashboardComponent},
  { path: 'log-in', component: LoginComponent },
  { path: '', component: StartComponent },
  { path: 'start', redirectTo: '' },
  
  { path: 'spot', component: PlaylistComponent },
  { path: 'com', component: CommentComponent },
  { path: 'hide', component: HideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
