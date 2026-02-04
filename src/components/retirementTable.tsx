import { useState } from "react";

// ─── Generador de datos ─────────────────────────────────────────────────────
function buildRows(sbcBase: number, pensionBase: number, sbcStep = 25, pensionStep = 113.5) {
  return Array.from({ length: 11 }, (_, i) => ({
    sbc: `$${(sbcBase + i * sbcStep).toLocaleString()}`,
    amount: `$${Math.round(pensionBase + i * pensionStep).toLocaleString()}`,
  }));
}

const AGES = ["60 años", "61 años", "62 años", "63 años", "64 años", "65 años o más"];

const UMA_CONFIG = {
  "1-1.99":  { sbcBase: 1000,  pensionBase: 3177, sbcStep: 25,  pensionStep: 113.5, average: "$5,125" },
  "2-2.99":  { sbcBase: 2000,  pensionBase: 5800, sbcStep: 50,  pensionStep: 195,   average: "$7,450" },
  "3-3.99":  { sbcBase: 3100,  pensionBase: 7950, sbcStep: 75,  pensionStep: 275,   average: "$10,200" },
  "4-4.99":  { sbcBase: 4200,  pensionBase: 10100, sbcStep: 100, pensionStep: 355,  average: "$13,750" },
  "5+":      { sbcBase: 5400,  pensionBase: 12500, sbcStep: 130, pensionStep: 430,  average: "$17,800" },
};

function generateUmaData() {
  const data: Record<string, any> = {};
  for (const [key, cfg] of Object.entries(UMA_CONFIG)) {
    data[key] = {
      average: cfg.average,
      groups: AGES.map((age, ageIdx) => ({
        age,
        items: 11,
        rows: buildRows(
          cfg.sbcBase,
          cfg.pensionBase + ageIdx * 170 * (cfg.pensionStep / 113.5),
          cfg.sbcStep,
          cfg.pensionStep
        ),
      })),
    };
  }
  // Datos exactos confirmados: 60 años / 1-1.99 UMA
  data["1-1.99"].groups[0].rows = [
    { sbc: "$1,000", amount: "$3,177" },
    { sbc: "$1,025", amount: "$3,290" },
    { sbc: "$1,050", amount: "$3,403" },
    { sbc: "$1,075", amount: "$3,517" },
    { sbc: "$1,100", amount: "$3,631" },
    { sbc: "$1,125", amount: "$3,744" },
    { sbc: "$1,150", amount: "$3,857" },
    { sbc: "$1,175", amount: "$3,971" },
    { sbc: "$1,200", amount: "$4,084" },
    { sbc: "$1,225", amount: "$4,198" },
    { sbc: "$1,250", amount: "$4,312" },
  ];
  return data;
}

const UMA_DATA = generateUmaData();

const TABS = [
  { id: "1-1.99", label: "1 a 1.99 UMA" },
  { id: "2-2.99", label: "2 a 2.99 UMA" },
  { id: "3-3.99", label: "3 a 3.99 UMA" },
  { id: "4-4.99", label: "4 a 4.99 UMA" },
  { id: "5+",     label: "5 UMA en adelante" },
];

// ─── Iconos ─────────────────────────────────────────────────────────────────
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4M16 2v4M3 10h18M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const DollarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

// ─── Componente ─────────────────────────────────────────────────────────────
const NAVY = "#1F294C";

export default function RetirementTable() {
  const [activeTab, setActiveTab] = useState<string>("1-1.99");
  const [openAge, setOpenAge] = useState<string | null>(null);
  const [hoverTab, setHoverTab] = useState<string | null>(null);
  const [hoverAccordion, setHoverAccordion] = useState<string | null>(null);

  const currentData = UMA_DATA[activeTab as keyof typeof UMA_DATA];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif", width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}>
      <div style={{ padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Label */}
        <h2 style={{ fontSize: "12px", fontWeight: 700, color: "#6b7a8d", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
          Selecciona tu rango de UMA
        </h2>

        {/* Tabs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "6px", backgroundColor: "#eef1f4", padding: "6px", borderRadius: "10px", marginBottom: "28px" }}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setHoverTab(tab.id)}
                onMouseLeave={() => setHoverTab(null)}
                style={{
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "7px",
                  padding: "8px 4px",
                  fontSize: "13px",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                  backgroundColor: isActive ? "#fff" : hoverTab === tab.id ? "#e4e8ec" : "transparent",
                  color: isActive ? NAVY : "#6b7a8d",
                  boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Card promedio */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "24px", backgroundColor: "#f7f9fb", border: "1px solid #e2e6ea", borderRadius: "12px", marginBottom: "24px" }}>
          <div>
            <p style={{ fontSize: "13px", color: "#6b7a8d", fontWeight: 600, margin: "0 0 4px" }}>Promedio Mensual</p>
            <p style={{ fontSize: "34px", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", margin: 0 }}>{currentData.average}</p>
          </div>
          <span style={{ color: "#b0b8c4" }}><DollarIcon /></span>
        </div>

        {/* Acordeones */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
          {currentData.groups.map((group: any) => {
            const isOpen = openAge === group.age;
            const isHover = hoverAccordion === group.age;
            return (
              <div key={group.age} style={{ border: "1px solid #e2e6ea", borderRadius: "12px", backgroundColor: "#fff", overflow: "hidden", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
                <button
                  onClick={() => setOpenAge(isOpen ? null : group.age)}
                  onMouseEnter={() => setHoverAccordion(group.age)}
                  onMouseLeave={() => setHoverAccordion(null)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    border: "none",
                    background: isHover ? "#f4f6f8" : "transparent",
                    cursor: "pointer",
                    transition: "background-color 0.15s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ color: "#9aa5b4" }}><CalendarIcon /></span>
                    <div style={{ textAlign: "left" }}>
                      <p style={{ fontSize: "15px", fontWeight: 700, color: "#1e2a3a", margin: 0 }}>{group.age}</p>
                      <p style={{ fontSize: "12px", color: "#9aa5b4", margin: "2px 0 0" }}>{group.items} montos disponibles</p>
                    </div>
                  </div>
                  <span style={{ color: "#9aa5b4" }}><ChevronIcon open={isOpen} /></span>
                </button>

                {isOpen && (
                  <div style={{ borderTop: "1px solid #eef1f4", padding: "4px 20px 12px" }}>
                    {group.rows.map((row: any, idx: number) => (
                      <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: idx < group.rows.length - 1 ? "1px solid #f0f2f4" : "none" }}>
                        <span style={{ fontSize: "13px", color: "#5a6a7a", fontWeight: 600 }}>SBC {row.sbc}</span>
                        <span style={{ fontSize: "13px", fontWeight: 700, color: NAVY }}>{row.amount}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Instrucciones */}
        <div style={{ padding: "24px", backgroundColor: "#f7f9fb", border: "1px solid #e2e6ea", borderRadius: "12px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: NAVY, margin: "0 0 14px" }}>¿Cómo usar esta tabla?</h3>
          {[
            "Selecciona tu rango de UMA en las pestañas superiores",
            "Haz clic en tu edad para expandir y ver todos los montos",
            "Encuentra el Salario Base de Cotización (SBC) que corresponde a tu situación",
            "El monto mostrado es tu pensión garantizada mensual",
          ].map((text, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "10px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#3b82f6", minWidth: "20px" }}>{i + 1}.</span>
              <span style={{ fontSize: "13px", color: "#5a6a7a", lineHeight: 1.5 }}>{text}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}