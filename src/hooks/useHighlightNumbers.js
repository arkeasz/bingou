import { useEffect, useRef } from "react";

const useHighlightNumbers = (ref, numbers) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.querySelectorAll(".picked").forEach(el => el.classList.remove("picked"));

      if (!numbers || numbers.length === 0) {
        return;
      }

      numbers.forEach(num => {
        const elements = ref.current.querySelectorAll(`.num-${num}`);
        elements.forEach(el => el.classList.add("picked"));
      });
    }
  }, [numbers, ref]);
};

export default useHighlightNumbers;
