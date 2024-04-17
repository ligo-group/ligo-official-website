"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = ({ className }: { className: string }) => {
  const {  setTheme } = useTheme();
  useEffect(() => setTheme('dark'), []);

  return (
    <>

    </>
  );
};

export default ThemeSwitcher;
