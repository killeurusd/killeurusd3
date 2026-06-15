"use client";

import { useRouter } from "next/navigation";
import { PATHS, type PageKey } from "./nav";

// Remplace l'ancien `navigate('checkout')` du SPA : pousse une vraie URL.
export function useGo() {
  const router = useRouter();
  return (key: PageKey) => router.push(PATHS[key]);
}
