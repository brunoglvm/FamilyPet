import { useEffect } from "react";

export function PageTitle({ title }) {
  useEffect(() => {
    document.title = title ? `${title} - FamilyPet` : "FamilyPet";
  }, [title]);

  return null;
}
