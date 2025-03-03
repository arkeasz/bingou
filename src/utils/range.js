const range = (start, stop, step = 1) => {
    if (stop === undefined) {
      [start, stop] = [0, start];
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
    }

    return Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);
};

export default range;
