import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./views/index/index.component";
import {ResultsComponent} from "./views/results/results.component";

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'results', component: ResultsComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
