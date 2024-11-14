function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export default debounce

// Usage
// const remove = useCallback(debounce(() => {
//   setState([])
// }, 3500), [])