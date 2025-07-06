import { useRef } from "react";

const useTextareaAutoResize = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleInputResize = () => {
    const element = ref.current;
    if (element) {
      element.style.height = "auto";
      element.style.height = `${element.scrollHeight}px`;
    }
  };

  return [ref, handleInputResize] as const;
};

export default useTextareaAutoResize;
