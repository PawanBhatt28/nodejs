const _ = require('lodash');

const items = [1,[2,[7,8],[3,[4]]]] ;

const flatArray = _.flattenDeep(items);
console.log(flatArray);