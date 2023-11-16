import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeContainerComponent } from './home-container/home-container.component';
import { AboutContainerComponent } from './about-container/about-container.component';


const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'about', component: AboutContainerComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
