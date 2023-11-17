import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeContainerComponent } from './home-container/home-container.component';
import { AboutContainerComponent } from './about-container/about-container.component';
import { ForIfComponent } from './for-if/for-if.component';


const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'about', component: AboutContainerComponent },
  { path: 'for-if', component: ForIfComponent }, // Add this line for the ForIfComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
