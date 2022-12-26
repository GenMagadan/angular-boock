import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { NotAuthGuard } from './auth/not-auth.guard';
import { ArticlesComponent } from './pages/articles/articles.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BoockComponent } from './pages/boock/boock.component';
import { ExitComponent } from './pages/exit/exit.component';
import { HomeComponent } from './pages/home/home.component';
import { JournalsComponent } from './pages/journals/journals.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'boock',
    component: BoockComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'authors',
    component: AuthorsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'journals',
    component: JournalsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'exit',
    component: ExitComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
