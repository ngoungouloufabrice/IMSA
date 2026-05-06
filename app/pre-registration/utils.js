import { filieres } from "./data";

export const formatDate = (d) => {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  return `${day}-${m}-${y}`;
};

export const getSpecialiteLabel = (specialite, niveau) => {
  const filiere = filieres.find((f) => f.specialites.includes(specialite));
  if (filiere) return `${niveau} ${filiere.nom} (${specialite})`;
  if (specialite === "Autre") return `${niveau} — Autre`;
  return "";
};
