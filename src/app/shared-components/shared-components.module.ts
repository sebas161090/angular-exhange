import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';


const components = [
    TopBarComponent,
    SideBarComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: components,
    exports: components
})
export class SharedComponentsModule { }
