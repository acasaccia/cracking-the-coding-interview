"use strict";

var sll = require('../../02-linked-lists/lib/single-linked-list');
var dll = require('../../02-linked-lists/lib/double-linked-list');
var module = require('../../02-linked-lists/2.5');

describe('sum_lists', function(){

    it('should just work�', function(){

        var list1 = new sll();

        list1.append(7);
        list1.append(1);
        list1.append(6);

        var list2 = new sll();

        list2.append(5);
        list2.append(9);
        list2.append(2);

        expect(module.sum_lists(list1, list2).display()).toBe("2 -> 1 -> 9");

    });

});

describe('sum_dllists', function(){

    it('should just work�', function(){

        var list1 = new dll();

        list1.append(6);
        list1.append(1);
        list1.append(7);

        var list2 = new dll();

        list2.append(2);
        list2.append(9);
        list2.append(5);

        expect(module.sum_dllists(list1, list2).display()).toBe("9 -> 1 -> 2");

    });

});