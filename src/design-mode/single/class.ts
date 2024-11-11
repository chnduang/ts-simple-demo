class SingleTon {
  public name: string;
  private static instance: any = null;

  constructor(name: string) {
    this.name = name;
  }

  static getInstance(name: string) {
    if (!this.instance) {
      this.instance = new SingleTon(name);
    }
    return this.instance;
  }
}

const ton1 = SingleTon.getInstance('test1');
const ton2 = SingleTon.getInstance('test2');

// console.log('test---', ton1.name, ton2.name);

export { SingleTon };
