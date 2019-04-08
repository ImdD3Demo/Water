import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'barchart', component: BarchartComponent },
  { path: 'linechart', component: LinechartComponent },
  { path: 'CV', component: CvComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
