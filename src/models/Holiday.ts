class Holiday {
  ibgeCode: string;
  date: string;
  dateType: string;
  name: string;

  constructor(ibgeCode: string, date: string, dateType: string, name: string) {
    this.ibgeCode = ibgeCode;
    this.date = date;
    this.dateType = dateType;
    this.name = name;
  }
}

export default Holiday;
