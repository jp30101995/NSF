import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyTreeRoutingModule } from './family-tree-routing.module';
import { FamilyTreeComponent } from './family-tree.component';
import { PersonNodeComponent } from '../person-node/person-node.component';
import { NodeCreatorComponent } from '../node-creator/node-creator.component';
import { NodeEditorComponent } from '../node-editor/node-editor.component';
import { Store } from 'src/app/shared/services/store.service';
import { StoreHelper } from 'src/app/shared/services/store_helper.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { TreeService } from 'src/app/shared/services/tree.service';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [FamilyTreeComponent,
    NodeEditorComponent,
    PersonNodeComponent,
    NodeCreatorComponent
  ],
  imports: [
    CommonModule,
    FamilyTreeRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [Store,
    StoreHelper,
    ApiService,
    TreeService,
    ToastComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FamilyTreeModule { }
