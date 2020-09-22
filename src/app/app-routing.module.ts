import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MatBoardComponent } from './mat-board/mat-board.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpCallComponent } from './http-call/http-call.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: MatBoardComponent},
    {path:'table', component: MatTableComponent},
    {path:'form', component: AngularFormComponent},
    {path:'charts', component: ChartsComponent},
    {path:'http', component: HttpCallComponent},
    {path:'**', component: PageNotFoundComponent}
];

@NgModule(

	{
		imports: [RouterModule.forRoot(routes)],
		exports: [RouterModule]
	}
)

export class AppRoutingModule{
}