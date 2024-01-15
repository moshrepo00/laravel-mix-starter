import Alpine from 'alpinejs'
import testLogger from './components/utils.js'
import $ from "jquery";
import 'tom-select/dist/css/tom-select.css';
import TomSelect from 'tom-select';
window.TomSelect = TomSelect;

var config = {};
const selectElem = document.querySelector('#tom-select-it');

console.log(selectElem)
new TomSelect(selectElem,config);

Alpine.start()

console.log('alpinejs ', Alpine);


var _ = require('lodash');


console.log('lodash ', _);

testLogger();





