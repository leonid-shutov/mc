"use strict";

class Dataset {
  constructor(records) {
    this.records = records;
  }

  get firstRecord() {
    return this.records[0];
  }

  addColumn(columnName, mapfn) {
    this.records = this.records.map((record) => ({
      ...record,
      [columnName]: mapfn(record),
    }));
  }

  sortRecords(field) {
    this.records.sort((a, b) => (a[field] < b[field] ? 1 : -1));
  }
}

module.exports = { Dataset };
