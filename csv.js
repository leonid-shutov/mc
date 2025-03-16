class CSV {
  constructor({ headers, records }) {
    this.headers = headers;
    this.records = records;
  }

  static #ROW_DELIMITER = "\n";
  static #COLUMN_DELIMITER = ",";

  static #parseRow(row) {
    return row.split(this.#COLUMN_DELIMITER).map((x) => x.trim());
  }

  static #parseRecord({ record, headers }) {
    const entries = headers.map((header, index) => [header, record[index]]);
    return Object.fromEntries(entries);
  }

  static parse(data) {
    const rows = data.split(this.#ROW_DELIMITER);
    const headers = this.#parseRow(rows[0]);
    const records = rows.slice(1).map((row) => this.#parseRow(row));
    const parsedRecords = records.map((record) =>
      this.#parseRecord({ record, headers })
    );
    return new CSV({ headers, records: parsedRecords });
  }

  static #stringifyValues(values) {
    return values.join(this.#COLUMN_DELIMITER);
  }

  static #stringifyRecord({ record, headers }) {
    const orderedValues = headers.map((header) => record[header]);
    return this.#stringifyValues(orderedValues);
  }

  static stringify({ headers, records }) {
    const stringifiedHeaders = this.#stringifyValues(headers);
    const stringifiedRecords = records.map((record) =>
      this.#stringifyRecord({ record, headers })
    );
    const rows = [stringifiedHeaders, ...stringifiedRecords];
    return rows.join(this.#ROW_DELIMITER);
  }
}

module.exports = { CSV };
