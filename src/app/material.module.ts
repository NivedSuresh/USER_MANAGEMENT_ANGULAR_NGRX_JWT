import { NgModule } from "@angular/core";

import {MatDialogModule} from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {MatInputModule} from "@angular/material/input"

@NgModule({
    exports: [
        MatCardModule,
        MatDialogModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class MaterialModule{

}
