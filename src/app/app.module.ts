import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';

import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { StartComponent } from './start/start.component';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { FreeComponent } from './blastune/free/free.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TooltipModule } from 'primeng/tooltip';
import { MusicComponent } from './music/music.component';
import { SettingsComponent } from './settings/settings.component';
import { TabViewModule } from 'primeng/tabview';
import { OverviewComponent } from './settings/overview/overview.component';
import { PlatlistComponent } from './settings/platlist/platlist.component';
import { ActivityComponent } from './settings/activity/activity.component';
import { FavouritesComponent } from './settings/favourites/favourites.component';
import { LoginComponent } from './login/login.component';
import { SelectionsComponent } from './blastunes/selections/selections.component';
import { MenubarModule } from 'primeng/menubar';
import { HotSelectComponent } from './blastune/hot-select/hot-select.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ExploreComponent } from './blastune/explore/explore.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { FreeStreamingComponent } from './home/free-streaming/free-streaming.component';
import { MusicVideoComponent } from './home/music-video/music-video.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { TuneboxComponent } from './home/tunebox/tunebox.component';
import { TestComponent } from './test/test.component';
import { SidebarModule } from 'primeng/sidebar';

import { MusicDetailComponent } from './music-detail/music-detail.component';
import { MusicDetailHeaderComponent } from './music-detail/music-detail-header/music-detail-header.component';
import { TrackComponent } from './music-detail/music-detail-header/track/track.component';
import { LyricsComponent } from './music-detail/music-detail-header/lyrics/lyrics.component';
import { SimilarTrackComponent } from './music-detail/music-detail-header/similar-track/similar-track.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AccountComponent } from './admin/account/account.component';
import { AlbumComponent } from './admin/album/album.component';
import { ArtistComponent } from './admin/artist/artist.component';
import { AplaylistsComponent } from './admin/aplaylists/aplaylists.component';
import { SongComponent } from './admin/song/song.component';


import { ExploresComponent } from './explores/explores.component';
import { ExploressComponent } from './explores/exploress/exploress.component';
import { PlaylistsComponent } from './explores/exploress/playlists/playlists.component';
import { CommunitiesComponent } from './explores/communities/communities.component';
import { LatestComponent } from './explores/latest/latest.component';
import { ExplorePlaylistComponent } from './explores/explore-playlist/explore-playlist.component';
import { ExplorePopComponent } from './explores/exploress/explore-pop/explore-pop.component';
import { TraksComponent } from './explores/exploress/explore-pop/traks/traks.component';
import { CommentssComponent } from './explores/exploress/explore-pop/commentss/commentss.component';
import { AlbumsComponent } from './explores/exploress/explore-pop/albums/albums.component';
import { ArtsComponent } from './explores/exploress/explore-pop/arts/arts.component';
import { PlaylistComponent } from './spotlight/playlist/playlist.component';
import { ListComponent } from './spotlight/list/list.component';
import { CommentComponent } from './spotlight/comment/comment.component';
import { HideComponent } from './spotlight/hide/hide.component';
import { RadiosComponent } from './radios/radios.component';
import { PopComponent } from './radios/pop/pop.component';
import { BestComponent } from './radios/best/best.component';
import {FileUploadModule} from 'primeng/fileupload';

import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { AccordionModule } from 'primeng/accordion';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MainComponent } from './admin/main/main.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FreeComponent,
    MusicComponent,
    SettingsComponent,
    OverviewComponent,
    PlatlistComponent,
    ActivityComponent,
    FavouritesComponent,
    LoginComponent,
    SelectionsComponent,
    HotSelectComponent,
    ExploreComponent,
    VideoComponent,
    HomeComponent,
    FreeStreamingComponent,
    MusicVideoComponent,
    SidebarComponent,
    TuneboxComponent,
    TestComponent,
    MusicDetailComponent,
    MusicDetailHeaderComponent,
    TrackComponent,
    LyricsComponent,
    SimilarTrackComponent,
    MainContentComponent,
    ExploresComponent,
    ExploressComponent,
    PlaylistsComponent,
    CommunitiesComponent,
    LatestComponent,
    ExplorePlaylistComponent,
    ExplorePopComponent,
    TraksComponent,
    CommentssComponent,
    AlbumsComponent,
    ArtsComponent,
    PlaylistComponent,
    ListComponent,
    CommentComponent,
    HideComponent,
    RadiosComponent,
    PopComponent,
    BestComponent,

    AdminSidebarComponent,
    DashboardComponent,
    MainComponent,
    AccountComponent,
    AlbumComponent,
    ArtistComponent,
    AplaylistsComponent,
    SongComponent,
    TopbarComponent,
    
  ],
  imports: [
    TabViewModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    MessageModule,
    TabMenuModule,
    CardModule,
    PanelModule,
    InputTextareaModule,
    RadioButtonModule,
    InputTextModule,
    CheckboxModule,
    TableModule,
    CalendarModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ButtonModule,
    TabViewModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    DividerModule,
    ToolbarModule,
    DropdownModule,
    AvatarModule,
    AvatarGroupModule,
    TooltipModule,
    TabViewModule,
    MenubarModule,
    TieredMenuModule,
    SidebarModule,
    MenuModule,
    AccordionModule,
		 RadioButtonModule,
     InputTextModule,
		 CheckboxModule,
     TableModule,
     CalendarModule,
     DialogModule,
     MultiSelectModule,
     ContextMenuModule,
     ButtonModule,
     TabViewModule,
     ToastModule,
     InputTextModule,
     ProgressBarModule,
     ReactiveFormsModule,
     HttpClientModule,
     FormsModule,
     CarouselModule,
     DividerModule,
     ToolbarModule,
     DropdownModule,
     AvatarModule,
     AvatarGroupModule,
     TooltipModule,
     TabViewModule,
     MenubarModule,
     TieredMenuModule,
     SidebarModule, 
     MenuModule,
     AccordionModule,
     FileUploadModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
