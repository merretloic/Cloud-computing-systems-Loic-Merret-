

export class Event {
    constructor(name, accountId, payload, creationDate) {
      this.accountId = accountId;
      this.name = name;
      this.payload = payload;
      this.creationDate = creationDate ?? new Date();
    }
  }