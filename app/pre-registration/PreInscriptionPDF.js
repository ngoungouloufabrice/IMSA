import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { filieres } from "./data";
import { formatDate, getSpecialiteLabel } from "./utils";

// ─── Styles PDF ───────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 45,
    fontFamily: "Times-Roman",
    fontSize: 11,
    color: "#111",
  },

  // ── En-tête ──
  header: {
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 1.6,
    fontSize: 11,
  },
  headerBold: { fontFamily: "Times-Bold" },

  // ── Logo ──
  logoWrapper: { alignItems: "center", marginBottom: 10 },
  logo: { width: 75, height: 75, objectFit: "contain" },

  // ── Titres ──
  titleBoxBlack: {
    borderWidth: 2,
    borderColor: "#000",
    paddingVertical: 7,
    marginBottom: 14,
  },
  titleBoxBlue: {
    backgroundColor: "#90caf9",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 7,
    marginBottom: 14,
  },
  titleText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Times-Bold",
    letterSpacing: 2,
    color: "#000",
  },

  // ── Table avec bordures (modèle 1) ──
  tableBordered: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 14,
  },
  rowBordered: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    minHeight: 30,
    alignItems: "stretch",
  },
  rowBorderedLast: {
    flexDirection: "row",
    minHeight: 30,
    alignItems: "stretch",
  },
  cellLabel: {
    width: "38%",
    paddingLeft: 8,
    paddingVertical: 7,
    fontFamily: "Times-Roman",
    fontSize: 11,
    justifyContent: "center",
  },
  cellValue: {
    width: "62%",
    borderLeftWidth: 1,
    borderLeftColor: "#000",
    paddingLeft: 10,
    paddingRight: 8,
    paddingVertical: 7,
    fontFamily: "Times-Bold",
    fontSize: 11,
    justifyContent: "center",
  },

  // ── Table sans bordures (modèle 2) ──
  tableSimple: { marginBottom: 14 },
  rowSimple: {
    flexDirection: "row",
    minHeight: 26,
    alignItems: "flex-start",
    marginBottom: 4,
  },
  cellLabelSimple: {
    width: "38%",
    fontFamily: "Times-Roman",
    fontSize: 11,
    paddingTop: 2,
  },
  cellValueSimple: {
    width: "62%",
    fontFamily: "Times-Bold",
    fontSize: 11,
    paddingTop: 2,
  },

  // ── Corps modèle 2 ──
  bodyBold: {
    fontFamily: "Times-Bold",
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 10,
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 5,
    paddingLeft: 16,
  },
  listNum: { width: 16, fontSize: 11 },
  listText: { flex: 1, fontSize: 11, lineHeight: 1.4 },
  listBold: { fontFamily: "Times-Bold" },

  // ── Consignes ──
  consignesBox: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  consignesTitle: {
    fontFamily: "Times-Bold",
    fontSize: 12,
    marginBottom: 10,
    letterSpacing: 1,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 8,
    paddingLeft: 6,
  },
  bulletDot: { width: 12, fontSize: 11 },
  bulletText: { flex: 1, fontSize: 10, lineHeight: 1.5, textAlign: "justify" },
  bulletBold: { fontFamily: "Times-Bold" },

  // ── Signature (modèle 1) ──
  signatureRight: {
    marginTop: 20,
    alignItems: "flex-end",
    paddingRight: 20,
  },
  signatureLabel: {
    fontFamily: "Times-Bold",
    fontSize: 11,
    textDecoration: "underline",
    marginTop: 2,
  },
  stamp: {
    position: "absolute",
    width: 160,
    height: 160,
    opacity: 0.7,
    borderRadius: 80,
    top: -50,
    right: -20,
  },

  // ── Pied de page ──
  footerWrapper: { marginTop: "auto" },
  nbText: {
    fontFamily: "Times-Roman",
    fontSize: 9,
    textAlign: "center",
    marginBottom: 4,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#111",
    marginBottom: 4,
  },
  footerText: {
    fontSize: 7,
    color: "#555",
    textAlign: "center",
    lineHeight: 1.5,
  },
});


const today = new Date().toLocaleDateString("fr-FR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

// ─── Composant PDF ────────────────────────────────────────────────────────────
// ─── Sous-composants PDF ──────────────────────────────────────────────────────
const EnTete = () => (
  <>
    {/* En-tête */}
    <View style={s.header}>
      <Text>
        Institut de Management et des Sciences Appliquées (
        <Text style={s.headerBold}>IMSA</Text>){"\n"}
        Cabinet du Président Fondateur (
        <Text style={s.headerBold}>CPF</Text>){"\n"}
        Département Administratif et Financier (
        <Text style={s.headerBold}>DAF</Text>){"\n"}
        Pôle Académique et Pédagogique (
        <Text style={s.headerBold}>PAP</Text>)
      </Text>
    </View>

    {/* Logo */}
    <View style={s.logoWrapper}>
      <Image src="/imsa-logo-officiel.png" style={s.logo} />
    </View>
  </>
);

const Footer = () => (
  <View style={s.footerWrapper}>
    <Text style={s.nbText}>
      NB : Vous devez vous présenter à l'accueil de l'IMSA (campus damas), sans rendez-vous, pour procéder à votre inscription administrative.
    </Text>
    <View style={s.separator} />
    <Text style={s.footerText}>
      Ecole Supérieure reconnue sous le n° 000812/MESRSTT/CAB-M, SASU au capital de 2.000.000 FCFA, RCCM : GA-LBV-01-2020-B17-00002,{"\n"}
      NIF : 49432 P, Cité Damas, Avenue Pr. Célestin NGUEMBY MBINA, N°693, BP :6745 (Libreville-Gabon), Tél.: +241.74.99.33.28 / +241.66.22.33.19,{"\n"}
      E-mail: info@imsa-school.com / www.imsa-school.com , Compte BGFI BANK : 41049750011 - 92 / Compte UBA : 81101100150 - 47
    </Text>
  </View>
);

// ─── Composant PDF Principal ──────────────────────────────────────────────────
const PreInscriptionPDF = ({
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
}) => {
  const isModel1 = niveau === "Licence 1" || niveau === "Licence 2";

  // ── MODÈLE 1 : Attestation (Licence 1 & 2) ──────────────────────────────
  if (isModel1) {
    return (
      <Document title="Attestation de pré-inscription IMSA">
        <Page size="A4" style={s.page}>
          <EnTete />

          {/* Titre bleu */}
          <View style={s.titleBoxBlue}>
            <Text style={s.titleText}>ATTESTATION DE PRE-INSCRIPTION</Text>
          </View>

          {/* Paragraphe introductif */}
          <Text style={{ marginBottom: 12, lineHeight: 1.5, fontSize: 10 }}>
            Le Chargé des Etudes et de la Pédagogie (<Text style={{ fontFamily: "Times-Bold" }}>CEP</Text>
            ) du Pôle Académique et Pédagogique (<Text style={{ fontFamily: "Times-Bold" }}>PAP</Text>
            ) de l'Institut de Management et des Sciences Appliquées (<Text style={{ fontFamily: "Times-Bold" }}>IMSA</Text>
            ) , Campus Damas - Sciences et Techniques, atteste que l'étudiant(e) :
          </Text>

          {/* Table avec bordures */}
          <View style={s.tableBordered}>
            <View style={s.rowBordered}>
              <Text style={s.cellLabel}>Sexe:</Text>
              <Text style={s.cellValue}>{sexe || "...................."}</Text>
            </View>
            <View style={s.rowBordered}>
              <Text style={s.cellLabel}>Nom(s):</Text>
              <Text style={s.cellValue}>{nom || "...................."}</Text>
            </View>
            <View style={s.rowBordered}>
              <Text style={s.cellLabel}>Prénom(s):</Text>
              <Text style={s.cellValue}>{prenom || "...................."}</Text>
            </View>
            <View style={s.rowBordered}>
              <Text style={s.cellLabel}>Date et lieu de naissance:</Text>
              <Text style={s.cellValue}>
                {dateNaissance
                  ? `${formatDate(dateNaissance)} à ${lieuNaissance}`
                  : "...................."}
              </Text>
            </View>
            <View style={s.rowBordered}>
              <Text style={s.cellLabel}>Série de BAC et Année d'Obtention:</Text>
              <Text style={s.cellValue}>
                {serieBac
                  ? `Série ${serieBac} baccalauréat obtenu en ${anneeObtention}`
                  : "...................."}
              </Text>
            </View>
            <View style={s.rowBordered}>
              <Text style={s.cellLabel}>Est Préinscrit(e) en:</Text>
              <Text style={s.cellValue}>
                {niveau && specialite
                  ? getSpecialiteLabel(specialite, niveau)
                  : "...................."}
              </Text>
            </View>
            <View style={s.rowBorderedLast}>
              <Text style={s.cellLabel}>Année académique:</Text>
              <Text style={s.cellValue}>{anneeAcademique || "...................."}</Text>
            </View>
          </View>

          {/* Texte de clôture */}
          <Text style={{ marginBottom: 20, lineHeight: 1.5, fontSize: 10 }}>
            A solliciter une pré-inscription dans notre établissement. La présente attestation est
            délivrée à la demande de l'intéressé(e) pour servir et faire valoir ce que de droit.
          </Text>

          {/* Signature à droite avec Cachet superposé */}
          <View style={s.signatureRight}>
            <Text style={{ fontSize: 10 }}>Fait à Libreville le {today}</Text>
            <View style={{ position: "relative" }}>
              <Text style={s.signatureLabel}>Le Chargé des Etudes et de la Pédagogie</Text>
              <Image src="/cachet-imsa.png" style={s.stamp} />
            </View>
          </View>

          <Footer />
        </Page>
      </Document>
    );
  }

  // ── MODÈLE 2 : Demande (Licence 3, Master) ──────────────────────────────
  return (
    <Document title="Demande de pré-inscription IMSA">
      <Page size="A4" style={s.page}>
        <EnTete />

        {/* Titre noir */}
        <View style={s.titleBoxBlack}>
          <Text style={s.titleText}>DEMANDE DE PRE-INSCRIPTION</Text>
        </View>

        {/* Table simple sans bordures */}
        <View style={s.tableSimple}>
          <View style={s.rowSimple}>
            <Text style={s.cellLabelSimple}>Nom(s):</Text>
            <Text style={s.cellValueSimple}>{nom || "...................."}</Text>
          </View>
          <View style={s.rowSimple}>
            <Text style={s.cellLabelSimple}>Prénom(s):</Text>
            <Text style={s.cellValueSimple}>{prenom || "...................."}</Text>
          </View>
          <View style={s.rowSimple}>
            <Text style={s.cellLabelSimple}>Date et lieu de naissance:</Text>
            <Text style={s.cellValueSimple}>
              {dateNaissance
                ? `${formatDate(dateNaissance)} à ${lieuNaissance}`
                : "...................."}
            </Text>
          </View>
          <View style={s.rowSimple}>
            <Text style={s.cellLabelSimple}>Spécialité:</Text>
            <Text style={s.cellValueSimple}>
              {niveau && specialite
                ? getSpecialiteLabel(specialite, niveau)
                : "...................."}
            </Text>
          </View>
        </View>

        {/* Paragraphe corps */}
        <Text style={s.bodyBold}>
          Veuillez compléter votre dossier de pré-inscription en ajoutant les éléments suivants
          pour que votre pré-inscription soit prise en compte :
        </Text>

        {/* Liste numérotée */}
        <View style={{ marginBottom: 6 }}>
          {[
            "Justificatif des derniers résultats universitaires : Relevés de notes ou/et Attestation Tenant Lieu de diplôme ou le Diplôme lui-même.",
            "Lettre de motivation adressée au Président Fondateur.",
            "Un curriculum vitae détaillé précisant votre cursus (obligatoire à partir de la licence 3).",
            <>La somme de <Text style={s.listBold}>20 000 FCFA</Text> pour les frais de dossiers.</>,
          ].map((item, i) => (
            <View key={i} style={s.listItem}>
              <Text style={s.listNum}>{i + 1}.</Text>
              <Text style={s.listText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Consignes */}
        <View style={s.consignesBox}>
          <Text style={s.consignesTitle}>CONSIGNES</Text>
          <View style={s.bulletRow}>
            <Text style={s.bulletDot}>•</Text>
            <Text style={s.bulletText}>
              Vous pouvez soit scanner et envoyer votre dossier de pré-inscription à l'adresse{" "}
              <Text style={s.bulletBold}>dep@imsa-school.com</Text> ou le déposer directement à
              l'Institut de Management et des Sciences Appliquées Situé à la Cité Damas.
            </Text>
          </View>
          <View style={s.bulletRow}>
            <Text style={s.bulletDot}>•</Text>
            <Text style={s.bulletText}>
              Le paiement des frais de dossier peut également s'effectuer par Airtel money au numéro{" "}
              <Text style={s.bulletBold}>
                +241.74.99.33.28 enregistré sous le nom Romuald AKENDENGUE
              </Text>{" "}
              avec les frais, dans ce cas, vous devez nous faire parvenir via WhatsApp (074.99.33.28),
              votre nom et la capture d'écran du dépôt en précisant le motif de votre dépôt (Frais
              d'étude de dossier).
            </Text>
          </View>
        </View>

        <Footer />
      </Page>
    </Document>
  );
};

export default PreInscriptionPDF;