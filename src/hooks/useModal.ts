import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleModal };
}
