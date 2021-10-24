const solution = (messages: String[]) => {
  class Emitter {
    messages: String[];
    event = (message: String) => {};

    constructor(messages = [] as String[]) {
      this.messages = messages;
      this.event = () => {};
    }

    setEvent(fn) {
      this.event = fn;
    }

    trigger() {
      this.messages.forEach((message) => this.event(message));
    }
  }

  class Receiver {
    messages: String[];
    constructor() {
      this.messages = [];
      this.ping = this.ping.bind(this);
    }

    ping(message: string) {
      this.messages.push(message);
    }
  }

  const myEmitter = new Emitter(messages);
  const myReceiver = new Receiver();

  myEmitter.setEvent(myReceiver.ping);
  myEmitter.trigger();

  return myReceiver.messages;
};

console.log(solution(["A", "B", "C"]));
