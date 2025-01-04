export default class GameSaving {
  constructor(saving) {
    const data = JSON.parse(saving);
    this.id = data.id;
    this.created = data.created;
    this.userInfo = {
      id: data.userInfo.id,
      name: data.userInfo.name,
      level: data.userInfo.level,
      points: data.userInfo.points
    };
  }
}