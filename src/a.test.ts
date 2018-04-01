import A from './a'
import * as $ from 'jquery'
import * as assert from 'assert'

it('runs', () => {
    const a = new A();
    a.hello();

    let expectedQty = 15;
    let input = $("#myInput");
    input.val(expectedQty);
    input.trigger("keyup");
    assert.equal(expectedQty, input.val());
});