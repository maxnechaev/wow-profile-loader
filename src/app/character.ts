export class Character {
  name: string;
  realm: string;
  battlegroup: string;
  class: number;
  race: number;
  gender: number;
  level: number;
  achievementPoints: number;
  thumbnail: string;
  spec: {
    name: string;
    role: string;
    backgroundImage: string;
    icon: string;
    description: string;
    order: number
  };
  guild: string;
  guildRealm: string;
  lastModified: number;
}
