import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import {TopNavComponent} from '../shared/index';
import {SidebarComponent} from '../shared/index';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HomeComponent, TopNavComponent, SidebarComponent],
    exports: [HomeComponent, TopNavComponent, SidebarComponent]
})

export class HomeModule { }

