class EasterSundayService {
  public execute(year: number) {
    var X = 0;
    var Y = 0;

    var a = year % 19;
    var b = Math.floor(year / 100);
    var c = year % 100;
    var d = Math.floor(b / 4);
    var e = b % 4;
    var f = Math.floor((b + 8) / 25);
    var g = Math.floor((b - f + 1) / 3);
    var h = (19 * a + b - d - g + 15) % 30;
    var i = Math.floor(c / 4);
    var k = c % 4;
    var L = (32 + 2 * e + 2 * i - h - k) % 7;
    var m = Math.floor((a + 11 * h + 22 * L) / 451);
    var month = Math.floor((h + L - 7 * m + 114) / 31) - 1;
    var day = 1 + (h + L - 7 * m + 114) % 31;

    return new Date(year, month, day, 0, 0, 0, 0);
  }
}

export default EasterSundayService;
