export default class FootballPlayer {
  constructor(
    passerRating=0,
    rushingYards=0,
    receivingYards=0,
    totalTackles=0,
    interceptions=0,
    fieldGoals=0,
    avgPunt=0,
    avgKickOffReturn=0,
    avgPuntReturn=0
  ) {}

  public static createQB(passerRating, rushingYards): FootballPlayer {
    return new FootballPlayer(passerRating, rushingYards)
  }

  public static createRB(receivingYards, totalTackles): FootballPlayer {
    return new FootballPlayer(0, 0, receivingYards, totalTackles)
  }
}
