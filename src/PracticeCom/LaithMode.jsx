import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function LitheMode(){
   const [isdark, setisdark] = useState(false);

  const toggleTheme = () => {
    setisdark(!isdark);
  };
   useEffect(() => {
    if (isdark) {
      document.documentElement.classList.add("dark"); // <html class="dark">
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isdark]);
  return (
    <div className={`${isdark ? "dark" : ""} w-full h-screen bg-white text-black dark:bg-black dark:text-white flex justify-center items-center`}>
      <button onClick={toggleTheme}>
        {isdark ? <Sun /> : <Moon />}
      </button>
    </div>
    )
}