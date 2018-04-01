import * as $ from 'jquery'

export default class {
    constructor() {

    }

    hello() {
        $('body').append($('<input id="myInput"/>'));
    }
}