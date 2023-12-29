import { useState } from "react";

export default function useModal() {
  const [isActive, setisActive] = useState(false);

  const toggleNotification = () => {
    if (!isActive) {
      setTimeout(() => {
        setisActive(false);
      }, 5000);
    }
    setisActive(!isActive);
  };

  return {
    isActive,
    toggleNotification
  };
}