export default class FootballPlayer {
  constructor(
    passerRating,
    rushingYards,
    receivingYards,
    totalTackles,
    interceptions,
    fieldGoals,
    avgPunt,
    avgKickOffReturn,
    avgPuntReturn
  ) {}

  public static createQB(passerRating, rushingYards): FootballPlayer {
    return new FootballPlayer(passerRating, rushingYards, 0, 0, 0, 0, 0, 0, 0)
  }

  public static createRB(receivingYards, totalTackles): FootballPlayer {
    return new FootballPlayer(0, 0, receivingYards, totalTackles, 0, 0, 0, 0, 0)
  }
}
