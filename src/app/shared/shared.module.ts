
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { UserService } from './user/index';
import { ProjectService } from './project/index';
import { Configuration } from './configuration/index'
import { AuthGuard } from './guards/index';

/**
* Do not specify providers for modules that might be imported by a lazy loaded module.
*/

@NgModule({
    imports: [CommonModule, RouterModule]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [UserService, ProjectService, Configuration, AuthService, AuthGuard]
        };
    }
}