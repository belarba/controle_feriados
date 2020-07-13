class Holiday {
  ibgeCode: string;
  date: string;
  dateType: string;
  name: string;

  constructor({ ibgeCode, date, dateType, name }: Holiday) {
    this.ibgeCode = ibgeCode;
    this.date = date;
    this.dateType = dateType;
    this.name = name;
  }
}

export default Holiday;
