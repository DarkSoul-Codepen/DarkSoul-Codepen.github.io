/**
 * @return {Generator<number>}
 */
export var fibGenerator = function* () {
    let current = 0;
    let next = 1;
    while (true) {
      yield current;
      [current, next] = [next, next + current];
     
      }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */