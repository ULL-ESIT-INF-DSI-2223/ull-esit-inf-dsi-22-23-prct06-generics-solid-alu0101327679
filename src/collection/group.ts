import { Artist } from "./artist";
import { Discografy } from "./discografy";

export class Group extends Artist {
  // private names: string[]
  constructor(
    name: string,
    listeners: number,
    discografy: Discografy,
    private groupName: string,
    private nIntegrantes: number
  ) {
    super(name, listeners, discografy);
    groupName = name;
  }
  getName(): string {
    return this.groupName;
  }
  getIntegrantes(): number {
    return this.nIntegrantes
  }
}
