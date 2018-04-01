import * as $ from 'jquery'

export default class {
    constructor() {

    }

    hello() {
        $('body').append($('<input id="myInput"/>'));
        $("input").keyup(event => {
            //type any code inside this callback
            //will raise the error
        });
    }
}