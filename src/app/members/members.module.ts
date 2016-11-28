import { NavigationModule } from './../navigation/navigation.module';
import { MembersComponent } from './members.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule, NavigationModule],
    declarations: [MembersComponent],
    exports: [MembersComponent]
})

export class MembersModule { }

