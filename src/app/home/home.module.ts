import { NavigationModule } from './../navigation/navigation.module';
import { PublicHomeComponent } from './public-home/public-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule, RouterModule, NavigationModule],
    declarations: [HomeComponent, PublicHomeComponent],
    exports: [HomeComponent, PublicHomeComponent]
})

export class HomeModule { }

