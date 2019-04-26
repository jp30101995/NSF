import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FamilytreeRoutingModule } from './familytree-routing.module';

import { FamilyTreeComponent } from './familytree.component';
import { NodeEditorComponent } from '../nodeeditor/nodeeditor.component';
import { PersonNodeComponent } from '../personnode/personnode.component';
import { NodeCreatorComponent } from '../nodecreator/nodecreator.component';
import { Store } from 'src/app/shared/services/store.services';
import { StoreHelper } from 'src/app/shared/services/store_helper.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { TreeService } from 'src/app/shared/services/tree.service';

@NgModule({
  declarations: [
    FamilyTreeComponent,
    NodeEditorComponent,
    PersonNodeComponent,
    NodeCreatorComponent
  ],
  imports: [
    CommonModule,
    FamilytreeRoutingModule,
    FormsModule
  ],
  providers: [ApiService,
    Store,
    StoreHelper,
    TreeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [FamilyTreeComponent]
})
export class FamilytreeModule { }
