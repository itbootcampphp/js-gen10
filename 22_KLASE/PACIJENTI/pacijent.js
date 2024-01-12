class Pacijent {
    constructor(i, v, t) {
      this.ime = i;
      this.visina = v;
      this.tezina = t;
    }
    set ime(i) {
      this._ime = i;
    }
    set visina(v) {
      if (0 < v && v < 250) {
        this._visina = v;
      } else {
        this._visna = 165;
      }
    }
    set tezina(t) {
      if (0 < t && t < 550) {
        this._tezina = t;
      } else {
        this._tezina = 100;
      }
    }
    get ime() {
      return this._ime;
    }
    get visina() {
      return this._visina;
    }
    get tezina() {
      return this._tezina;
    }
    stampaj() {
      console.log(
        `Ime pacijenta: ${this.ime}, Visina pacijenta: ${this.visina}, Tezina pacijenta: ${this.tezina}`
      );
    }
    bmi() {
      let vrednost = this.tezina / (this.visina / 100) ** 2;
      // console.log(`BMI vrednost pacijenta je: ${vrednost}`);
      return vrednost;
    }
    kritican() {
      if (this.bmi() < 15 || this.bmi() > 40) {
        return true;
      }
      return false;
    }
}
export default Pacijent;