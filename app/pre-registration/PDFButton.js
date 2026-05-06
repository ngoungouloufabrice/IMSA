"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PreInscriptionPDF from "./PreInscriptionPDF";

export default function PDFButton({ data, fileName }) {
  return (
    <PDFDownloadLink
      document={<PreInscriptionPDF {...data} />}
      fileName={fileName}
    >
      {({ loading }) => (
        <button
          className="w-full p-4 bg-[var(--primary)] text-white rounded-sm font-bold text-base cursor-pointer transition-all flex items-center justify-center gap-3 shadow-[0_4px_15px_#00008b26] hover:bg-[var(--secondary)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_#00008b33] active:translate-y-0 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Génération en cours…
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger le PDF
            </>
          )}
        </button>
      )}
    </PDFDownloadLink>
  );
}
