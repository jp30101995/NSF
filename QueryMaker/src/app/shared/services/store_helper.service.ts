/**
 * Created by lon on 2/8/17.
 */
import { Injectable } from '@angular/core';
//import { Store } from './store.service';
//import { PersonNodeData } from '../personnode/personnode-data.interface';
//import { FamilyTree } from '../familytree/familytree.class';
//import { PersonNode } from '../personnode/personnode.interface';
import * as _ from 'underscore';
import { Store } from './store.services';
import { FamilyTree } from 'src/app/layout/familytree/familytree.class';
import { PersonNode } from 'src/app/layout/personnode/personnode.interface';

@Injectable()
export class StoreHelper {
    constructor(private store: Store) { }

    // http://stackoverflow.com/a/22072374/4931825; unflatten the array of nodes into a tree
    unflatten(array, parent = null, tree = null) {
        debugger;
        if (parent === null) {
            // We're at the root node
            parent = _.findWhere(array, { is_root: true });
            tree = new FamilyTree(parent);
        }

        let children = _.filter(array, (child: PersonNode) => {
            return child.is_root !== true && child.parent._id === parent._id;
        });

        if (!_.isEmpty(children)) {
            parent['children'] = children;
            _.each(children, (child) => {
                this.unflatten(array, child, tree); // populate each child node recursively
            });
        }
        return tree;
    };

    // update the tree
    updateTree(prop, state) {
        const currentState = this.store.getState();
        this.store.setState(Object.assign({}, currentState, { [prop]: state }));
    }

    // add a node to the tree
    addNode(prop, child, parent) {
        const currentState = this.store.getState();
        let state = currentState.tree;
        if (parent !== null) {
            state.add(child, parent, state.traverseDF);
        } else {
            state = new FamilyTree(child);
        }
        this.store.setState(Object.assign({}, currentState, { [prop]: state }));
    }

    // edit a node
    editNode(prop, child) {
        const currentState = this.store.getState();
        let state = currentState.tree;
        state.edit(child, state.traverseDF);
        this.store.setState(Object.assign({}, currentState, { [prop]: state }));
    }

    // find and delete a node; and invariably, its chidren
    findAndDelete(prop, child, parent) {
        const currentState = this.store.getState();
        let state = currentState.tree;
        if (parent !== null) {
            state.remove(child, parent, state.traverseDF);
            this.store.setState(Object.assign({}, currentState, { [prop]: state }));
        } else {
            this.store.purge();
        }
    }

    // reset the tree to its default state
    resetTree() {
        this.store.purge();
    }

    // flatten a node (to be deleted) to get an array of the node's id, the ids of all its (direct or indirect) children
    flatten(person: any) {
        const currentState = this.store.getState();
        let state = currentState.tree;
        return state.getFlattenedNode(person, state.traverseNodeDF);
    }
}
