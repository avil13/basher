export class KeyCatcher {
  private static singletonInstance?: KeyCatcher;

  private namingKeyMap = {
    up: '\u001B\u005B\u0041',
    right: '\u001B\u005B\u0043',
    down: '\u001B\u005B\u0042',
    left: '\u001B\u005B\u0044',
    exit: '\u0003',
  };

  private mapOfCatchers = {};

  constructor() {
    if (KeyCatcher.singletonInstance) {
      return KeyCatcher.singletonInstance;
    }

    KeyCatcher.singletonInstance = this;

    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    stdin.on('data', this.onData);
  }

  private onData(key) {
    if (key === '\u0003') {
      // ctrl-c
      setTimeout(() => {
        process.exit();
      });
    }

    if (typeof this.mapOfCatchers[key] !== 'function') {
      return;
    }

    this.mapOfCatchers[key]();
  }

  setCatcher(key: string, callback: () => void | null) {
    key = this.namingKeyMap[key] || key;

    if (typeof this.mapOfCatchers[key] === 'function') {
      throw new Error(`Key is bind => ${arguments}`)
    }

    this.mapOfCatchers[key] = callback;
  }
}
