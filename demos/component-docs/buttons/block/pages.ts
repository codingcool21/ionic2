import {Page} from 'ionic/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: 'buttons/block/block.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class BlockPage {
    constructor() {

    }
}