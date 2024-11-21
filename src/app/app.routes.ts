import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ClientsDashboardComponent } from './features/clients-dashboard/clients-dashboard.component';
import { ErrorComponent } from './features/error/error.component';

export const routes: Routes = [{
    path: '',
    canActivate: [AuthGuard],
    children: [
        { path: 'home', component: HomeComponent },
        { path: 'clients-dashboard', component: ClientsDashboardComponent },
        { path: 'error', component: ErrorComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', component: NotFoundComponent },
    ]
}];
