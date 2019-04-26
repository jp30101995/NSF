import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
//import {ToastComponent} from '../shared/toast/toast.component';
import { PersonNode } from '../personnode/personnode.interface';
import { FamilyTree } from './familytree.class';
import { Subscription } from 'rxjs';
//import {Store} from '../shared/services/store.service';
//import {TreeService} from '../services/tree.service';
import { Store } from 'src/app/shared/services/store.services';
import { TreeService } from 'src/app/shared/services/tree.service';

@Component({
  selector: 'app-familytree',
  templateUrl: './familytree.component.html',
  styleUrls: ['./familytree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FamilyTreeComponent implements OnInit, OnDestroy {

  storeSub: Subscription;
  isLoading = true;
  private persons = [];
  private tree: FamilyTree;
  private treeExists = false;
  private showCreateRootDialog = false;
  public root: PersonNode;

  constructor(
    private treeService: TreeService,
    private store: Store
  ) {
    debugger;
  }

  ngOnInit() {
    // Set dummy default for root node
    this.root = {
      _id: null,
      is_root: true,
      data: {
        deletable: false,
        name: '',
        node_open: false
      },
      parent: null,
      children: []
    };

    // fetch all nodes
    this.treeService.getPersons().subscribe(
      (data: any) => {
        this.isLoading = false;
      },
      err => console.log(err),
      () => {
      }
    );
    debugger;
    // Subscribe to changes in the store's data
    this.storeSub = this.store.changes
      .map(data => data.tree)
      .subscribe(
        tree => {
          this.tree = tree;
          this.root = tree._root;
          if (this.tree._root._id !== null) {
            this.treeExists = true;
            this.isLoading = false;
          } else {
            this.treeExists = false;
          }
        },
        err => console.log(err),
        () => {
        }
      );
  }

  // unsubscribe form the store to prevent memory leakage
  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  // On updating any child node (direct or indirect), reset the tree
  onUpdateTree($event) {
    this.treeService.getPersons().subscribe(
    );
  }

  // create the root node
  addRoot() {
    this.treeService.addPerson(this.root).subscribe(
      res => {
        //this.toast.setMessage('Success', 'success');
        this.showCreateRootDialog = false;
        this.treeExists = true;
      },
      err => console.log(err)
    );
  }

  // close the creator dialog
  closeRootCreatorDialog() {
    this.showCreateRootDialog = false;
  }

  // show the creator dialog
  createRoot() {
    this.showCreateRootDialog = true;
  }

  getRoot() {
    return this.root;
  }

  getTree() {
    return this.tree;
  }

  getTreeExistence() {
    return this.treeExists;
  }

  getToastMessage() {
    //return this.toast.message;
  }

  shouldShowCreateRootDialog() {
    return this.showCreateRootDialog;
  }
}
