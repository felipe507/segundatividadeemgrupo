import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';
import { HttpClientModule } from '@angular/common/http';
import { ValorbitComponent } from './valorbit/valorbit.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { GitbhubService } from './gitbhub.service';
import { ValorbitService } from './valorbit.service';
import { TimerService } from './timer.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'github',component: GithubComponent},
      {path:'quemsomos',component: QuemsomosComponent},
      {path:'valorbit',component: ValorbitComponent},
    ])
     ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, QuemsomosComponent, GithubComponent, ValorbitComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GitbhubService, ValorbitService, TimerService]
})
export class AppModule { }
