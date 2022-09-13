import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeBodyComponent } from './resume-body/resume-body.component';
import { MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { YellowSliceComponent } from './yellow-slice/yellow-slice.component';
import { GreenCircleComponent } from './green-circle/green-circle.component';
import { RedDonutComponent } from './red-donut/red-donut.component';
import { BlueSquareComponent } from './blue-square/blue-square.component';
import { CareerSectionComponent } from './career-section/career-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { AwardsComponent } from './awards/awards.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeBodyComponent,
    ToolbarComponent,
    YellowSliceComponent,
    GreenCircleComponent,
    RedDonutComponent,
    BlueSquareComponent,
    CareerSectionComponent,
    EducationSectionComponent,
    TechnicalSkillsComponent,
    AwardsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
