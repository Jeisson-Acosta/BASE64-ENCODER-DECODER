import { useContext } from "react";
import { EncoderContext } from "../context/encoder";

export function useEncoderContext() {
  const context = useContext(EncoderContext);
  if (context === undefined) {
    throw new Error("No se puede acceder al Provider de File.");
  }
  return context;
}
