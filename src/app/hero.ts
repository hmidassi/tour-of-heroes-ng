export class Hero{
  id: number;
  name: string;
  trueName: string;

  constructor(public name: string, public trueName: string){
    this.name=name;
    this.trueName=trueName;
  }
}
