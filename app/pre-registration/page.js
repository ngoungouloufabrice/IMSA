"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { formatDate, getSpecialiteLabel } from "./utils";
import { filieres } from "./data";

// ─── Import dynamique pour éviter le SSR crash ───────────────────────────────
const PDFButton = dynamic(() => import("./PDFButton"), { ssr: false });

// ─── Page principale ──────────────────────────────────────────────────────────
export default function App() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [lieuNaissance, setLieuNaissance] = useState("");
  const [specialite, setSpecialite] = useState("");
  const [niveau, setNiveau] = useState("");
  const [sexe, setSexe] = useState("");
  const [serieBac, setSerieBac] = useState("");
  const [anneeObtention, setAnneeObtention] = useState("");
  // Calcul automatique de l'année académique
  const getCurrentAcademicYear = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0-11
    // Si on est avant Septembre (mois 8), l'année académique a commencé l'année précédente
    if (month < 8) {
      return `${year - 1}-${year}`;
    }
    return `${year}-${year + 1}`;
  };

  const [anneeAcademique, setAnneeAcademique] = useState(getCurrentAcademicYear());
  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0]; // pour bloquer les dates futures

  const validateForm = () => {
    const newErrors = {};
    if (!sexe) newErrors.sexe = "Le sexe est obligatoire";
    if (!nom) newErrors.nom = "Le nom est obligatoire";
    if (!prenom) newErrors.prenom = "Le prénom est obligatoire";
    if (!dateNaissance) newErrors.dateNaissance = "La date de naissance est obligatoire";
    if (!lieuNaissance) newErrors.lieuNaissance = "Le lieu de naissance est obligatoire";
    if (!specialite) newErrors.specialite = "La spécialité est obligatoire";
    if (!niveau) newErrors.niveau = "Le niveau d'études est obligatoire";
    if ((niveau === "Licence 1" || niveau === "Licence 2")) {
      if (!serieBac) newErrors.serieBac = "La série du BAC est obligatoire";
      if (!anneeObtention) newErrors.anneeObtention = "L'année d'obtention est obligatoire";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid =
    nom && prenom && dateNaissance && lieuNaissance && specialite && niveau && sexe &&
    ((niveau !== "Licence 1" && niveau !== "Licence 2") || (serieBac && anneeObtention));

  const inputClass = (field) =>
    `w-full bg-white border ${errors[field] ? "border-red-500" : "border-[var(--border-light)]"
    } rounded-sm p-3 font-sans text-base text-[var(--foreground)] outline-none transition-all focus:border-[var(--primary)] focus:ring-4 focus:ring-[#00008b0d]`;

  return (
    <main className="min-h-screen bg-[var(--bg-soft)] text-[var(--foreground)] font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] min-h-screen">

        {/* ── FORMULAIRE ── */}
        <aside className="bg-white border-r border-[var(--border-light)] p-6 sm:p-8 lg:p-12 overflow-y-auto lg:sticky lg:top-0 lg:h-screen shadow-[10px_0_30px_#00000005]">
          <h1 className="font-serif text-3xl text-[var(--foreground)] mt-16 mb-2 font-bold">
            Pré-inscription
          </h1>
          <p className="text-sm text-[var(--text-muted)] mb-10 font-normal">
            Générez votre demande de pré-inscription officielle.
          </p>

          <div className="space-y-6">

            {/* Niveau */}
            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-[var(--primary)] flex justify-between">
                Niveau d'études <span className="text-red-500">*</span>
              </label>
              <select
                className={inputClass("niveau")}
                value={niveau}
                onChange={(e) => {
                  setNiveau(e.target.value);
                  if (errors.niveau) setErrors({ ...errors, niveau: null });
                }}
              >
                <option value="" disabled>Choisir un niveau…</option>
                <optgroup label="Premier Cycle (Licence)">
                  <option value="Licence 1">Licence 1</option>
                  <option value="Licence 2">Licence 2</option>
                  <option value="Licence 3">Licence 3</option>
                </optgroup>
                <optgroup label="Second Cycle (Master)">
                  <option value="Master 1">Master 1</option>
                  <option value="Master 2">Master 2</option>
                </optgroup>
              </select>
              {errors.niveau && <span className="text-red-500 text-[10px] font-medium">{errors.niveau}</span>}
            </div>

            {(niveau === "Licence 1" || niveau === "Licence 2") && (
              <div className="flex flex-col gap-2.5">
                <label className="text-xs font-semibold tracking-wider uppercase text-[var(--primary)] flex justify-between">
                  Sexe <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6 mt-1">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="sexe"
                      value="MASCULIN"
                      checked={sexe === "MASCULIN"}
                      onChange={(e) => setSexe(e.target.value)}
                      className="w-4 h-4 accent-[var(--primary)]"
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[var(--primary)] transition-colors">Masculin</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="sexe"
                      value="FEMININ"
                      checked={sexe === "FEMININ"}
                      onChange={(e) => setSexe(e.target.value)}
                      className="w-4 h-4 accent-[var(--primary)]"
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[var(--primary)] transition-colors">Féminin</span>
                  </label>
                </div>
                {errors.sexe && <span className="text-red-500 text-[10px] font-medium">{errors.sexe}</span>}
              </div>
            )}


            {/* Nom */}
            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-[var(--primary)] flex justify-between">
                Nom(s) <span className="text-red-500">*</span>
              </label>
              <input
                className={inputClass("nom")}
                placeholder="Ex : NGOUNGOULOU YACOUBAH"
                value={nom}
                onChange={(e) => {
                  setNom(e.target.value.toUpperCase());
                  if (errors.nom) setErrors({ ...errors, nom: null });
                }}
              />
              {errors.nom && <span className="text-red-500 text-[10px] font-medium">{errors.nom}</span>}
            </div>

            {/* Prénom */}
            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-[var(--primary)] flex justify-between">
                Prénom(s) <span className="text-red-500">*</span>
              </label>
              <input
                className={inputClass("prenom")}
                placeholder="Ex : Fabrice Junior"
                value={prenom}
                onChange={(e) => {
                  setPrenom(e.target.value);
                  if (errors.prenom) setErrors({ ...errors, prenom: null });
                }}
              />
              {errors.prenom && <span className="text-red-500 text-[10px] font-medium">{errors.prenom}</span>}
            </div>

            {/* Date + Lieu */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2.5">
                <label className="text-xs font-semibold tracking-wider uppercase text-[var(--primary)] flex justify-between">
                  Date de naissance <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  max={today}
                  className={inputClass("dateNaissance")}
                  value={dateNaissance}
                  onChange={(e) => {
                    setDateNaissance(e.target.value);
                    if (errors.dateNaissance) setErrors({ ...errors, dateNaissance: null });
                  }}
                />
                {errors.dateNaissance && <span className="text-red-500 text-[10px] font-medium">{errors.dateNaissance}</span>}
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-xs font-semibold tracking-wider uppercase text-[var(--primary)] flex justify-between">
                  Lieu de naissance <span className="text-red-500">*</span>
                </label>
                <input
                  className={inputClass("lieuNaissance")}
                  placeholder="Ex : Libreville"
                  value={lieuNaissance}
                  onChange={(e) => {
                    setLieuNaissance(e.target.value);
                    if (errors.lieuNaissance) setErrors({ ...errors, lieuNaissance: null });
                  }}
                />
                {errors.lieuNaissance && <span className="text-red-500 text-[10px] font-medium">{errors.lieuNaissance}</span>}
              </div>
            </div>

            {/* Spécialité */}
            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-[var(--primary)] flex justify-between">
                Filière & Spécialité <span className="text-red-500">*</span>
              </label>
              <select
                className={inputClass("specialite")}
                value={specialite}
                onChange={(e) => {
                  setSpecialite(e.target.value);
                  if (errors.specialite) setErrors({ ...errors, specialite: null });
                }}
              >
                <option value="" disabled>Choisir une formation…</option>
                {filieres.map((filiere) => (
                  <optgroup key={filiere.nom} label={filiere.nom}>
                    {filiere.specialites.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </optgroup>
                ))}
                <option value="Autre">Autre</option>
              </select>
              {errors.specialite && <span className="text-red-500 text-[10px] font-medium">{errors.specialite}</span>}
            </div>

            {/* Série de BAC + Année (uniquement L1/L2) */}
            {(niveau === "Licence 1" || niveau === "Licence 2") && (
              <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs font-semibold tracking-wider uppercase text-[var(--primary)] flex justify-between">
                    Série de BAC <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass("serieBac")}
                    placeholder="Ex : Série D"
                    value={serieBac}
                    onChange={(e) => setSerieBac(e.target.value)}
                  />
                  {errors.serieBac && <span className="text-red-500 text-[10px] font-medium">{errors.serieBac}</span>}
                </div>
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs font-semibold tracking-wider uppercase text-[var(--primary)] flex justify-between">
                    Année Obtention <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputClass("anneeObtention")}
                    placeholder="Ex : 2023"
                    value={anneeObtention}
                    onChange={(e) => setAnneeObtention(e.target.value)}
                  />
                  {errors.anneeObtention && <span className="text-red-500 text-[10px] font-medium">{errors.anneeObtention}</span>}
                </div>
              </div>
            )}

            {/* Année Académique (Automatique) */}
            <div className="flex flex-col gap-2.5">
              <label className="text-xs font-semibold tracking-wider uppercase text-[var(--primary)]">
                Année Académique
              </label>
              <div className="h-[45px] flex items-center px-4 bg-gray-50 border border-[var(--border-light)] rounded-xl font-bold text-[var(--primary)]">
                {anneeAcademique}
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[var(--border-light)] my-8" />

          {isFormValid ? (
            <PDFButton
              data={{
                nom,
                prenom,
                dateNaissance,
                lieuNaissance,
                specialite,
                niveau,
                sexe,
                serieBac,
                anneeObtention,
                anneeAcademique,
              }}
              fileName={`preinscription-${nom.toLowerCase()}-${prenom.toLowerCase()}.pdf`}
            />
          ) : (
            <button
              className="w-full p-4 bg-[var(--primary)] text-white rounded-sm font-bold text-base cursor-pointer transition-all flex items-center justify-center gap-3 shadow-[0_4px_15px_#00008b26] hover:bg-[var(--secondary)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_#00008b33] active:translate-y-0"
              onClick={() => {
                validateForm();
                alert("Veuillez remplir tous les champs obligatoires avant de générer le document.");
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger le PDF
            </button>
          )}

          <p className="text-xs text-[var(--text-muted)] mt-4 text-center leading-relaxed">
            Le document sera téléchargé directement<br />au format PDF, texte sélectionnable.
          </p>
        </aside>

        {/* ── APERÇU VISUEL ── */}
        <section className="hidden lg:flex bg-[var(--bg-soft)] p-10 lg:p-16 items-start justify-center">
          <div
            className="w-[794px] min-h-[1123px] bg-white text-[#111] text-[13px] p-10 lg:p-14 shadow-[0_30px_100px_#00000014] relative flex flex-col"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            {/* En-tête */}
            <div className="text-center mb-4 leading-relaxed text-[14px]">
              Institut de Management et des Sciences Appliquées (<strong>IMSA</strong>)<br />
              Cabinet du Président Fondateur (<strong>CPF</strong>)<br />
              Département Administratif et Financier (<strong>DAF</strong>)<br />
              Pôle Académique et Pédagogique (<strong>PAP</strong>)
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/imsa-logo-officiel.png"
                alt="Logo IMSA"
                width={200}
                height={96}
                style={{ height: '96px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            {/* Titre */}
            <div className={`${niveau === "Licence 1" || niveau === "Licence 2" ? "bg-[#90caf9]" : ""} border-2 border-black py-2 mb-8`}>
              <div className="text-center text-[22px] font-bold tracking-widest uppercase">
                {niveau === "Licence 1" || niveau === "Licence 2" ? "ATTESTATION DE PRE-INSCRIPTION" : "DEMANDE DE PRE-INSCRIPTION"}
              </div>
            </div>

            {niveau === "Licence 1" || niveau === "Licence 2" ? (
              <>
                {/* ── Aperçu Modèle 1 ── */}
                <p className="mb-4 leading-relaxed">
                  Le Chargé des Etudes et de la Pédagogie (CEP) du Pôle Académique et Pédagogique (PAP) de
                  l'Institut de Management et des Sciences Appliquées (IMSA), Campus Damas - Sciences et
                  Techniques, atteste que l'étudiant(e) :
                </p>

                <div className="border border-black mb-8">
                  {[
                    { label: "Sexe:", value: sexe },
                    { label: "Nom(s):", value: nom },
                    { label: "Prénom(s):", value: prenom },
                    { label: "Date et lieu de naissance:", value: dateNaissance ? `${formatDate(dateNaissance)} à ${lieuNaissance}` : "" },
                    { label: "Série de BAC et Année d'Obtention:", value: serieBac ? `Série ${serieBac} Baccalauréat obtenu en ${anneeObtention}` : "" },
                    { label: "Est Préinscrit(e) en:", value: getSpecialiteLabel(specialite, niveau) },
                    { label: "Année académique:", value: anneeAcademique },
                  ].map((row, i, arr) => (
                    <div key={row.label} className={`grid grid-cols-[250px_1fr] min-h-[35px] items-center ${i === arr.length - 1 ? "" : "border-b border-black"}`}>
                      <div className="pl-4 font-bold border-r border-black h-full flex items-center">{row.label}</div>
                      <div className="pl-4 uppercase font-bold">{row.value || "...................."}</div>
                    </div>
                  ))}
                </div>

                <p className="mb-8 leading-relaxed">
                  A solliciter une pré-inscription dans notre établissement. La présente attestation est délivrée à la
                  demande de l'intéressé(e) pour servir et faire valoir ce que de droit.
                </p>

                <div className="flex flex-col items-end mt-8 mb-10 pr-12">
                  <p className="text-[14px]">Fait à Libreville le {new Date().toLocaleDateString('fr-FR')}</p>
                  <div className="relative mt-1">
                    <p className="font-bold underline text-[14px]">Le Chargé des Etudes et de la Pédagogie</p>
                    <img
                      src="/cachet-imsa.png"
                      alt=""
                      className="absolute -top-16 -right-10 w-44 h-44 opacity-80 rounded-full pointer-events-none object-contain"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* ── Aperçu Modèle 2 ── */}
                <div className="mb-8">
                  {[
                    { label: "Nom(s):", value: nom },
                    { label: "Prénom(s):", value: prenom },
                    { label: "Date et lieu de naissance:", value: dateNaissance ? `${formatDate(dateNaissance)} à ${lieuNaissance}` : "" },
                    { label: "Spécialité:", value: getSpecialiteLabel(specialite, niveau) },
                  ].map((row, i, arr) => (
                    <div key={row.label} className="grid grid-cols-[250px_1fr] min-h-[35px] items-center">
                      <div className="pl-4 font-bold h-full flex items-center">{row.label}</div>
                      <div className="pl-4 uppercase font-bold">{row.value || "...................."}</div>
                    </div>
                  ))}
                </div>

                {/* Corps */}
                <p className="font-bold mb-4 leading-relaxed">
                  Veuillez compléter votre dossier de pré-inscription en ajoutant les éléments suivants pour que
                  votre pré-inscription soit prise en compte :
                </p>

                <ol className="list-decimal pl-10 mb-8 space-y-1">
                  <li>Justificatif des derniers résultats universitaires : Relevés de notes ou/et Attestation Tenant Lieu de diplôme ou le Diplôme lui-même.</li>
                  <li>Lettre de motivation adressée au Président Fondateur.</li>
                  <li>Un curriculum vitae détaillé précisant votre cursus (obligatoire à partir de la licence 3).</li>
                  <li>La somme de <strong>20 000 FCFA</strong> pour les frais de dossiers</li>
                </ol>

                {/* Consignes */}
                <div className="border border-gray-400 p-6 mb-8">
                  <p className="font-bold text-[15px] mb-6 tracking-wide">CONSIGNES</p>
                  <div className="space-y-4">
                    <div className="flex gap-4 text-justify pl-4">
                      <span className="flex-shrink-0">•</span>
                      <span>Vous pouvez soit scanner et envoyer votre dossier de pré-inscription à l'adresse <strong>dep@imsa-school.com</strong> ou le déposer directement à l'Institut de Management et des Sciences Appliquées Situé à la Cité Damas</span>
                    </div>
                    <div className="flex gap-4 text-justify pl-4">
                      <span className="flex-shrink-0">•</span>
                      <span>Le paiement des frais de dossier peut également s'effectuer par Airtel money au numéro <strong>+241.74.99.33.28 enregistré sous le nom Romuald AKENDENGUE</strong> avec les frais, dans ce cas, vous devez nous faire parvenir via WhatsApp (074.99.33.28), votre nom et la capture d'écran du dépôt en précisant le motif de votre dépôt (Frais d'étude de dossier).</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Footer */}
            <div className="mt-auto">
              <p className="text-[10px] text-center mb-1">
                <strong>NB : Vous devez vous présenter à l'accueil de l'IMSA (campus damas), sans rendez-vous, pour procéder à votre inscription administrative.</strong>
              </p>
              <div className="h-px bg-black w-full mb-1" />
              <div className="text-[8px] text-center text-gray-600 leading-tight">
                Ecole Supérieure reconnue sous le n° 000812/MESRSTT/CAB-M, SASU au capital de 2.000.000 FCFA, RCCM : GA-LBV-01-2020-B17-00002,<br />
                NIF : 49432 P, Cité Damas, Avenue Pr. Célestin NGUEMBY MBINA, N°693, BP :6745 (Libreville-Gabon), Tél.: +241.74.99.33.28 / +241.66.22.33.19,<br />
                E-mail:info@imsa-school.com / www.imsa-school.com , Compte BGFI BANK : 41049750011 - 92 / Compte UBA : 81101100150 - 47
              </div>
            </div>
          </div>
        </section>

      </div >
    </main >
  );
}