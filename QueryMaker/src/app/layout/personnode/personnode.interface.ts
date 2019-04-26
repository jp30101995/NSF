import { PersonNodeData } from './personnode-data.interface';

export interface PersonNode {
    _id: any;
    is_root: boolean;
    data: PersonNodeData;
    parent: any;
    children: Array<PersonNode>;
}
