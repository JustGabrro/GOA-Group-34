function number(busStops) {
    let people = 0;
    for (let i = 0; i < busStops.length; i++) {
      let [on, off] = busStops[i];
      people += on - off;
    }
    return people;
  }