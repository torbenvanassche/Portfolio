import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { RouterModule, Router } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './page-components/project/project.component';
import { ProgressbarComponent } from './page-components/progressbar/progressbar.component';
import { ProgressbarListComponent } from './page-components/progressbar-list/progressbar-list.component';
import { SearchComponent } from './page-components/search/search.component';
import { SearchService } from './services/search.service';
import { TypewriteComponent } from './page-components/typewrite/typewrite.component';
import { TooltipComponent } from './page-components/tooltip/tooltip.component';
import { SkillsComponent } from './page-components/skills/skills.component';
import { DeputyDonutComponent } from './pages/deputy-donut/deputy-donut.component';
import { ThreejsComponent } from './page-components/threejs/threejs.component';
import { InfopanelComponent } from './pages/infopanel/infopanel.component';
import { ComponentNavigationService } from './services/component-navigation.service';
import { HttpClientModule } from '@angular/common/http';
import { ThreejsWrapperComponent } from './page-components/threejs-wrapper/threejs-wrapper.component';
import { DataService } from './services/data.service';
import { ProjectBaseComponent } from './pages/project-base/project-base.component';
import { ColorCorrectionComponent } from './pages/color-correction/color-correction.component';
import { ThreejsCityComponent } from './pages/threejs-city/threejs-city.component';
import { UnityMetadataHiderComponent } from './pages/unity-metadata-hider/unity-metadata-hider.component';
import { PlexDownloadManagerComponent } from './pages/plex-download-manager/plex-download-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    ProjectsComponent,
    AboutComponent,
    ProjectComponent,
    ProgressbarComponent,
    ProgressbarListComponent,
    SearchComponent,
    TypewriteComponent,
    TooltipComponent,
    SkillsComponent,
    DeputyDonutComponent,
    ThreejsComponent,
    InfopanelComponent,
    ThreejsWrapperComponent,
    ProjectBaseComponent,
    ColorCorrectionComponent,
    ThreejsCityComponent,
    UnityMetadataHiderComponent,
    PlexDownloadManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [SearchService, ComponentNavigationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }
}
