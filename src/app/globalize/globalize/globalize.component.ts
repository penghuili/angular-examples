import { Component, OnInit } from '@angular/core';

import 'globalize/number';
import 'globalize/plural';
const numberingSystems = require('cldr-data/supplemental/numberingSystems.json');
const plurals = require('cldr-data/supplemental/plurals.json');
const likelySubtags = require('cldr-data/supplemental/likelySubtags.json');
// locale files
const deCldrNumbersData = require('cldr-data/main/de/numbers.json');
const enCldrNumbersData = require('cldr-data/main/en/numbers.json');
const zhCldrNumbersData = require('cldr-data/main/zh/numbers.json');
// globalize itself
const Globalize = require('globalize');

Globalize.load(
  numberingSystems,
  plurals,
  likelySubtags,
  deCldrNumbersData,
  enCldrNumbersData,
  zhCldrNumbersData,
);

@Component({
  selector: 'mst-globalize',
  template: 'In German {{ num }} is {{ parsed }}',
  styles: ['']
})
export class GlobalizeComponent implements OnInit {
  parsed: number;
  
  num = '1.0.0,59';

  ngOnInit() {
    Globalize.locale('de');
    const thousandSeparator = Globalize.cldr.main("numbers/symbols-numberSystem-latn/group");
    const replaced = this.num.replace(new RegExp(`\\${thousandSeparator}`, 'g'), '');
    this.parsed = Globalize.parseNumber(replaced);
  }

}
