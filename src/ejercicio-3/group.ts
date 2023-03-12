import { Artist } from "./artist";
import { Discografy } from "./discografy";
import { CD } from "./cd";
import { Disco_Single } from "./disco_single";

export class Group extends Artist {
  // private names: string[]
  constructor(
    name: string,
    listeners: number,
    discografy: Discografy<CD | Disco_Single>,
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
