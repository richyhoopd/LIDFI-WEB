import { useState } from "react";

// ─── DATOS OFICIALES DE PENSIÓN GARANTIZADA ─────────────────────────────────
const PENSION_DATA = {
  "1-1.99": {
    average: "$5,125.24",
    groups: [
      {
        age: "60 años",
        rows: [
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
          { sbc: "$1,250 o más", amount: "$4,312" },
        ],
      },
      {
        age: "61 años",
        rows: [
          { sbc: "$1,000", amount: "$3,223" },
          { sbc: "$1,025", amount: "$3,335" },
          { sbc: "$1,050", amount: "$3,449" },
          { sbc: "$1,075", amount: "$3,563" },
          { sbc: "$1,100", amount: "$3,676" },
          { sbc: "$1,125", amount: "$3,790" },
          { sbc: "$1,150", amount: "$3,902" },
          { sbc: "$1,175", amount: "$4,016" },
          { sbc: "$1,200", amount: "$4,130" },
          { sbc: "$1,225", amount: "$4,243" },
          { sbc: "$1,250 o más", amount: "$4,357" },
        ],
      },
      {
        age: "62 años",
        rows: [
          { sbc: "$1,000", amount: "$3,257" },
          { sbc: "$1,025", amount: "$3,381" },
          { sbc: "$1,050", amount: "$3,494" },
          { sbc: "$1,075", amount: "$3,608" },
          { sbc: "$1,100", amount: "$3,722" },
          { sbc: "$1,125", amount: "$3,834" },
          { sbc: "$1,150", amount: "$3,948" },
          { sbc: "$1,175", amount: "$4,062" },
          { sbc: "$1,200", amount: "$4,175" },
          { sbc: "$1,225", amount: "$4,289" },
          { sbc: "$1,250 o más", amount: "$4,403" },
        ],
      },
      {
        age: "63 años",
        rows: [
          { sbc: "$1,000", amount: "$3,312" },
          { sbc: "$1,025", amount: "$3,426" },
          { sbc: "$1,050", amount: "$3,540" },
          { sbc: "$1,075", amount: "$3,653" },
          { sbc: "$1,100", amount: "$3,767" },
          { sbc: "$1,125", amount: "$3,880" },
          { sbc: "$1,150", amount: "$3,993" },
          { sbc: "$1,175", amount: "$4,107" },
          { sbc: "$1,200", amount: "$4,221" },
          { sbc: "$1,225", amount: "$4,334" },
          { sbc: "$1,250 o más", amount: "$4,447" },
        ],
      },
      {
        age: "64 años",
        rows: [
          { sbc: "$1,000", amount: "$3,358" },
          { sbc: "$1,025", amount: "$3,472" },
          { sbc: "$1,050", amount: "$3,585" },
          { sbc: "$1,075", amount: "$3,699" },
          { sbc: "$1,100", amount: "$3,813" },
          { sbc: "$1,125", amount: "$3,925" },
          { sbc: "$1,150", amount: "$4,039" },
          { sbc: "$1,175", amount: "$4,152" },
          { sbc: "$1,200", amount: "$4,266" },
          { sbc: "$1,225", amount: "$4,380" },
          { sbc: "$1,250 o más", amount: "$4,492" },
        ],
      },
      {
        age: "65 años o más",
        rows: [
          { sbc: "$1,000", amount: "$3,403" },
          { sbc: "$1,025", amount: "$3,517" },
          { sbc: "$1,050", amount: "$3,631" },
          { sbc: "$1,075", amount: "$3,744" },
          { sbc: "$1,100", amount: "$3,857" },
          { sbc: "$1,125", amount: "$3,971" },
          { sbc: "$1,150", amount: "$4,084" },
          { sbc: "$1,175", amount: "$4,198" },
          { sbc: "$1,200", amount: "$4,312" },
          { sbc: "$1,225", amount: "$4,437" },
          { sbc: "$1,250 o más", amount: "$4,538" },
        ],
      },
    ],
  },
  "2-2.99": {
    average: "$8,542.07",
    groups: [
      {
        age: "60 años",
        rows: [
          { sbc: "$1,000", amount: "$4,130" },
          { sbc: "$1,025", amount: "$4,277" },
          { sbc: "$1,050", amount: "$4,424" },
          { sbc: "$1,075", amount: "$4,572" },
          { sbc: "$1,100", amount: "$4,720" },
          { sbc: "$1,125", amount: "$4,867" },
          { sbc: "$1,150", amount: "$5,014" },
          { sbc: "$1,175", amount: "$5,162" },
          { sbc: "$1,200", amount: "$5,310" },
          { sbc: "$1,225", amount: "$5,457" },
          { sbc: "$1,250 o más", amount: "$5,604" },
        ],
      },
      {
        age: "61 años",
        rows: [
          { sbc: "$1,000", amount: "$4,188" },
          { sbc: "$1,025", amount: "$4,336" },
          { sbc: "$1,050", amount: "$4,484" },
          { sbc: "$1,075", amount: "$4,632" },
          { sbc: "$1,100", amount: "$4,778" },
          { sbc: "$1,125", amount: "$4,926" },
          { sbc: "$1,150", amount: "$5,074" },
          { sbc: "$1,175", amount: "$5,222" },
          { sbc: "$1,200", amount: "$5,368" },
          { sbc: "$1,225", amount: "$5,516" },
          { sbc: "$1,250 o más", amount: "$5,664" },
        ],
      },
      {
        age: "62 años",
        rows: [
          { sbc: "$1,000", amount: "$4,248" },
          { sbc: "$1,025", amount: "$4,395" },
          { sbc: "$1,050", amount: "$4,543" },
          { sbc: "$1,075", amount: "$4,690" },
          { sbc: "$1,100", amount: "$4,838" },
          { sbc: "$1,125", amount: "$4,985" },
          { sbc: "$1,150", amount: "$5,133" },
          { sbc: "$1,175", amount: "$5,280" },
          { sbc: "$1,200", amount: "$5,428" },
          { sbc: "$1,225", amount: "$5,575" },
          { sbc: "$1,250 o más", amount: "$5,723" },
        ],
      },
      {
        age: "63 años",
        rows: [
          { sbc: "$1,000", amount: "$4,307" },
          { sbc: "$1,025", amount: "$4,455" },
          { sbc: "$1,050", amount: "$4,601" },
          { sbc: "$1,075", amount: "$4,749" },
          { sbc: "$1,100", amount: "$4,897" },
          { sbc: "$1,125", amount: "$5,045" },
          { sbc: "$1,150", amount: "$5,191" },
          { sbc: "$1,175", amount: "$5,339" },
          { sbc: "$1,200", amount: "$5,487" },
          { sbc: "$1,225", amount: "$5,635" },
          { sbc: "$1,250 o más", amount: "$5,781" },
        ],
      },
      {
        age: "64 años",
        rows: [
          { sbc: "$1,000", amount: "$4,366" },
          { sbc: "$1,025", amount: "$4,513" },
          { sbc: "$1,050", amount: "$4,661" },
          { sbc: "$1,075", amount: "$4,808" },
          { sbc: "$1,100", amount: "$4,956" },
          { sbc: "$1,125", amount: "$5,103" },
          { sbc: "$1,150", amount: "$5,251" },
          { sbc: "$1,175", amount: "$5,398" },
          { sbc: "$1,200", amount: "$5,545" },
          { sbc: "$1,225", amount: "$5,693" },
          { sbc: "$1,250 o más", amount: "$5,841" },
        ],
      },
      {
        age: "65 años o más",
        rows: [
          { sbc: "$1,000", amount: "$4,424" },
          { sbc: "$1,025", amount: "$4,572" },
          { sbc: "$1,050", amount: "$4,720" },
          { sbc: "$1,075", amount: "$4,867" },
          { sbc: "$1,100", amount: "$5,014" },
          { sbc: "$1,125", amount: "$5,162" },
          { sbc: "$1,150", amount: "$5,310" },
          { sbc: "$1,175", amount: "$5,457" },
          { sbc: "$1,200", amount: "$5,604" },
          { sbc: "$1,225", amount: "$5,752" },
          { sbc: "$1,250 o más", amount: "$5,900" },
        ],
      },
    ],
  },
  "3-3.99": {
    average: "$11,958.00",
    groups: [
      {
        age: "60 años",
        rows: [
          { sbc: "$1,000", amount: "$5,082" },
          { sbc: "$1,025", amount: "$5,264" },
          { sbc: "$1,050", amount: "$5,446" },
          { sbc: "$1,075", amount: "$5,627" },
          { sbc: "$1,100", amount: "$5,809" },
          { sbc: "$1,125", amount: "$5,991" },
          { sbc: "$1,150", amount: "$6,171" },
          { sbc: "$1,175", amount: "$6,353" },
          { sbc: "$1,200", amount: "$6,535" },
          { sbc: "$1,225", amount: "$6,717" },
          { sbc: "$1,250 o más", amount: "$6,898" },
        ],
      },
      {
        age: "61 años",
        rows: [
          { sbc: "$1,000", amount: "$5,155" },
          { sbc: "$1,025", amount: "$5,337" },
          { sbc: "$1,050", amount: "$5,518" },
          { sbc: "$1,075", amount: "$5,700" },
          { sbc: "$1,100", amount: "$5,882" },
          { sbc: "$1,125", amount: "$6,064" },
          { sbc: "$1,150", amount: "$6,244" },
          { sbc: "$1,175", amount: "$6,426" },
          { sbc: "$1,200", amount: "$6,608" },
          { sbc: "$1,225", amount: "$6,789" },
          { sbc: "$1,250 o más", amount: "$6,971" },
        ],
      },
      {
        age: "62 años",
        rows: [
          { sbc: "$1,000", amount: "$5,228" },
          { sbc: "$1,025", amount: "$5,409" },
          { sbc: "$1,050", amount: "$5,591" },
          { sbc: "$1,075", amount: "$5,773" },
          { sbc: "$1,100", amount: "$5,955" },
          { sbc: "$1,125", amount: "$6,135" },
          { sbc: "$1,150", amount: "$6,317" },
          { sbc: "$1,175", amount: "$6,498" },
          { sbc: "$1,200", amount: "$6,680" },
          { sbc: "$1,225", amount: "$6,862" },
          { sbc: "$1,250 o más", amount: "$7,044" },
        ],
      },
      {
        age: "63 años",
        rows: [
          { sbc: "$1,000", amount: "$5,300" },
          { sbc: "$1,025", amount: "$5,482" },
          { sbc: "$1,050", amount: "$5,664" },
          { sbc: "$1,075", amount: "$5,845" },
          { sbc: "$1,100", amount: "$6,027" },
          { sbc: "$1,125", amount: "$6,208" },
          { sbc: "$1,150", amount: "$6,389" },
          { sbc: "$1,175", amount: "$6,571" },
          { sbc: "$1,200", amount: "$6,753" },
          { sbc: "$1,225", amount: "$6,935" },
          { sbc: "$1,250 o más", amount: "$7,116" },
        ],
      },
      {
        age: "64 años",
        rows: [
          { sbc: "$1,000", amount: "$5,373" },
          { sbc: "$1,025", amount: "$5,555" },
          { sbc: "$1,050", amount: "$5,736" },
          { sbc: "$1,075", amount: "$5,918" },
          { sbc: "$1,100", amount: "$6,099" },
          { sbc: "$1,125", amount: "$6,280" },
          { sbc: "$1,150", amount: "$6,462" },
          { sbc: "$1,175", amount: "$6,644" },
          { sbc: "$1,200", amount: "$6,826" },
          { sbc: "$1,225", amount: "$7,007" },
          { sbc: "$1,250 o más", amount: "$7,188" },
        ],
      },
      {
        age: "65 años o más",
        rows: [
          { sbc: "$1,000", amount: "$5,446" },
          { sbc: "$1,025", amount: "$5,627" },
          { sbc: "$1,050", amount: "$5,809" },
          { sbc: "$1,075", amount: "$5,991" },
          { sbc: "$1,100", amount: "$6,171" },
          { sbc: "$1,125", amount: "$6,353" },
          { sbc: "$1,150", amount: "$6,535" },
          { sbc: "$1,175", amount: "$6,717" },
          { sbc: "$1,200", amount: "$6,898" },
          { sbc: "$1,225", amount: "$7,080" },
          { sbc: "$1,250 o más", amount: "$7,261" },
        ],
      },
    ],
  },
  "4-4.99": {
    average: "$15,375.00",
    groups: [
      {
        age: "60 años",
        rows: [
          { sbc: "$1,000", amount: "$6,036" },
          { sbc: "$1,025", amount: "$6,251" },
          { sbc: "$1,050", amount: "$6,467" },
          { sbc: "$1,075", amount: "$6,683" },
          { sbc: "$1,100", amount: "$6,898" },
          { sbc: "$1,125", amount: "$7,114" },
          { sbc: "$1,150", amount: "$7,330" },
          { sbc: "$1,175", amount: "$7,545" },
          { sbc: "$1,200", amount: "$7,760" },
          { sbc: "$1,225", amount: "$7,975" },
          { sbc: "$1,250 o más", amount: "$8,191" },
        ],
      },
      {
        age: "61 años",
        rows: [
          { sbc: "$1,000", amount: "$6,122" },
          { sbc: "$1,025", amount: "$6,337" },
          { sbc: "$1,050", amount: "$6,553" },
          { sbc: "$1,075", amount: "$6,769" },
          { sbc: "$1,100", amount: "$6,984" },
          { sbc: "$1,125", amount: "$7,200" },
          { sbc: "$1,150", amount: "$7,416" },
          { sbc: "$1,175", amount: "$7,631" },
          { sbc: "$1,200", amount: "$7,847" },
          { sbc: "$1,225", amount: "$8,063" },
          { sbc: "$1,250 o más", amount: "$8,277" },
        ],
      },
      {
        age: "62 años",
        rows: [
          { sbc: "$1,000", amount: "$6,208" },
          { sbc: "$1,025", amount: "$6,423" },
          { sbc: "$1,050", amount: "$6,639" },
          { sbc: "$1,075", amount: "$6,855" },
          { sbc: "$1,100", amount: "$7,070" },
          { sbc: "$1,125", amount: "$7,286" },
          { sbc: "$1,150", amount: "$7,502" },
          { sbc: "$1,175", amount: "$7,717" },
          { sbc: "$1,200", amount: "$7,933" },
          { sbc: "$1,225", amount: "$8,149" },
          { sbc: "$1,250 o más", amount: "$8,364" },
        ],
      },
      {
        age: "63 años",
        rows: [
          { sbc: "$1,000", amount: "$6,295" },
          { sbc: "$1,025", amount: "$6,509" },
          { sbc: "$1,050", amount: "$6,725" },
          { sbc: "$1,075", amount: "$6,941" },
          { sbc: "$1,100", amount: "$7,156" },
          { sbc: "$1,125", amount: "$7,372" },
          { sbc: "$1,150", amount: "$7,588" },
          { sbc: "$1,175", amount: "$7,803" },
          { sbc: "$1,200", amount: "$8,019" },
          { sbc: "$1,225", amount: "$8,235" },
          { sbc: "$1,250 o más", amount: "$8,450" },
        ],
      },
      {
        age: "64 años",
        rows: [
          { sbc: "$1,000", amount: "$6,381" },
          { sbc: "$1,025", amount: "$6,597" },
          { sbc: "$1,050", amount: "$6,812" },
          { sbc: "$1,075", amount: "$7,028" },
          { sbc: "$1,100", amount: "$7,242" },
          { sbc: "$1,125", amount: "$7,458" },
          { sbc: "$1,150", amount: "$7,674" },
          { sbc: "$1,175", amount: "$7,889" },
          { sbc: "$1,200", amount: "$8,105" },
          { sbc: "$1,225", amount: "$8,321" },
          { sbc: "$1,250 o más", amount: "$8,536" },
        ],
      },
      {
        age: "65 años o más",
        rows: [
          { sbc: "$1,000", amount: "$6,467" },
          { sbc: "$1,025", amount: "$6,683" },
          { sbc: "$1,050", amount: "$6,898" },
          { sbc: "$1,075", amount: "$7,114" },
          { sbc: "$1,100", amount: "$7,330" },
          { sbc: "$1,125", amount: "$7,545" },
          { sbc: "$1,150", amount: "$7,760" },
          { sbc: "$1,175", amount: "$7,975" },
          { sbc: "$1,200", amount: "$8,191" },
          { sbc: "$1,225", amount: "$8,407" },
          { sbc: "$1,250 o más", amount: "$8,622" },
        ],
      },
    ],
  },
  "5+": {
    average: "$17,084.00",
    groups: [
      {
        age: "60 años",
        rows: [
          { sbc: "$1,000", amount: "$6,989" },
          { sbc: "$1,025", amount: "$7,239" },
          { sbc: "$1,050", amount: "$7,488" },
          { sbc: "$1,075", amount: "$7,738" },
          { sbc: "$1,100", amount: "$7,987" },
          { sbc: "$1,125", amount: "$8,237" },
          { sbc: "$1,150", amount: "$8,487" },
          { sbc: "$1,175", amount: "$8,736" },
          { sbc: "$1,200", amount: "$8,986" },
          { sbc: "$1,225", amount: "$9,235" },
          { sbc: "$1,250 o más", amount: "$9,485" },
        ],
      },
      {
        age: "61 años",
        rows: [
          { sbc: "$1,000", amount: "$7,088" },
          { sbc: "$1,025", amount: "$7,338" },
          { sbc: "$1,050", amount: "$7,588" },
          { sbc: "$1,075", amount: "$7,837" },
          { sbc: "$1,100", amount: "$8,087" },
          { sbc: "$1,125", amount: "$8,336" },
          { sbc: "$1,150", amount: "$8,586" },
          { sbc: "$1,175", amount: "$8,835" },
          { sbc: "$1,200", amount: "$9,085" },
          { sbc: "$1,225", amount: "$9,335" },
          { sbc: "$1,250 o más", amount: "$9,584" },
        ],
      },
      {
        age: "62 años",
        rows: [
          { sbc: "$1,000", amount: "$7,188" },
          { sbc: "$1,025", amount: "$7,439" },
          { sbc: "$1,050", amount: "$7,688" },
          { sbc: "$1,075", amount: "$7,938" },
          { sbc: "$1,100", amount: "$8,187" },
          { sbc: "$1,125", amount: "$8,437" },
          { sbc: "$1,150", amount: "$8,686" },
          { sbc: "$1,175", amount: "$8,936" },
          { sbc: "$1,200", amount: "$9,186" },
          { sbc: "$1,225", amount: "$9,435" },
          { sbc: "$1,250 o más", amount: "$9,685" },
        ],
      },
      {
        age: "63 años",
        rows: [
          { sbc: "$1,000", amount: "$7,288" },
          { sbc: "$1,025", amount: "$7,538" },
          { sbc: "$1,050", amount: "$7,788" },
          { sbc: "$1,075", amount: "$8,037" },
          { sbc: "$1,100", amount: "$8,287" },
          { sbc: "$1,125", amount: "$8,536" },
          { sbc: "$1,150", amount: "$8,786" },
          { sbc: "$1,175", amount: "$9,035" },
          { sbc: "$1,200", amount: "$9,285" },
          { sbc: "$1,225", amount: "$9,534" },
          { sbc: "$1,250 o más", amount: "$9,784" },
        ],
      },
      {
        age: "64 años",
        rows: [
          { sbc: "$1,000", amount: "$7,388" },
          { sbc: "$1,025", amount: "$7,637" },
          { sbc: "$1,050", amount: "$7,887" },
          { sbc: "$1,075", amount: "$8,136" },
          { sbc: "$1,100", amount: "$8,386" },
          { sbc: "$1,125", amount: "$8,636" },
          { sbc: "$1,150", amount: "$8,885" },
          { sbc: "$1,175", amount: "$9,135" },
          { sbc: "$1,200", amount: "$9,384" },
          { sbc: "$1,225", amount: "$9,635" },
          { sbc: "$1,250 o más", amount: "$9,885" },
        ],
      },
      {
        age: "65 años o más",
        rows: [
          { sbc: "$1,000", amount: "$7,488" },
          { sbc: "$1,025", amount: "$7,738" },
          { sbc: "$1,050", amount: "$7,987" },
          { sbc: "$1,075", amount: "$8,237" },
          { sbc: "$1,100", amount: "$8,487" },
          { sbc: "$1,125", amount: "$8,736" },
          { sbc: "$1,150", amount: "$8,986" },
          { sbc: "$1,175", amount: "$9,235" },
          { sbc: "$1,200", amount: "$9,485" },
          { sbc: "$1,225", amount: "$9,734" },
          { sbc: "$1,250 o más", amount: "$9,984" },
        ],
      },
    ],
  },
};

const TABS = [
  { id: "1-1.99", label: "1 a 1.99 UMA" },
  { id: "2-2.99", label: "2 a 2.99 UMA" },
  { id: "3-3.99", label: "3 a 3.99 UMA" },
  { id: "4-4.99", label: "4 a 4.99 UMA" },
  { id: "5+", label: "5 UMA en adelante" },
];

// ─── Iconos ─────────────────────────────────────────────────────────────────
const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4M16 2v4M3 10h18M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.25s ease",
    }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const DollarIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ opacity: 0.4 }}
  >
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

  const currentData = PENSION_DATA[activeTab as keyof typeof PENSION_DATA];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <div style={{ padding: "48px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Label */}
          <h2
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#6b7a8d",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "12px",
            }}
          >
            Selecciona tu rango de UMA
          </h2>

          {/* Tabs */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "6px",
              backgroundColor: "#eef1f4",
              padding: "6px",
              borderRadius: "10px",
              marginBottom: "28px",
            }}
          >
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
                    backgroundColor: isActive
                      ? "#fff"
                      : hoverTab === tab.id
                      ? "#e4e8ec"
                      : "transparent",
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
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "24px",
              backgroundColor: "#f7f9fb",
              border: "1px solid #e2e6ea",
              borderRadius: "12px",
              marginBottom: "24px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "13px",
                  color: "#6b7a8d",
                  fontWeight: 600,
                  margin: "0 0 4px",
                }}
              >
                Promedio Mensual
              </p>
              <p
                style={{
                  fontSize: "34px",
                  fontWeight: 800,
                  color: NAVY,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                {currentData.average}
              </p>
            </div>
            <span style={{ color: "#b0b8c4" }}>
              <DollarIcon />
            </span>
          </div>

          {/* Acordeones */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "40px",
            }}
          >
            {currentData.groups.map((group: any) => {
              const isOpen = openAge === group.age;
              const isHover = hoverAccordion === group.age;
              return (
                <div
                  key={group.age}
                  style={{
                    border: "1px solid #e2e6ea",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  }}
                >
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
                    <div
                      style={{ display: "flex", alignItems: "center", gap: "14px" }}
                    >
                      <span style={{ color: "#9aa5b4" }}>
                        <CalendarIcon />
                      </span>
                      <div style={{ textAlign: "left" }}>
                        <p
                          style={{
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "#1e2a3a",
                            margin: 0,
                          }}
                        >
                          {group.age}
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "#9aa5b4",
                            margin: "2px 0 0",
                          }}
                        >
                          {group.rows.length} montos disponibles
                        </p>
                      </div>
                    </div>
                    <span style={{ color: "#9aa5b4" }}>
                      <ChevronIcon open={isOpen} />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        borderTop: "1px solid #eef1f4",
                        padding: "4px 20px 12px",
                      }}
                    >
                      {group.rows.map((row: any, idx: number) => (
                        <div
                          key={idx}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "9px 0",
                            borderBottom:
                              idx < group.rows.length - 1
                                ? "1px solid #f0f2f4"
                                : "none",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "13px",
                              color: "#5a6a7a",
                              fontWeight: 600,
                            }}
                          >
                            SBC {row.sbc}
                          </span>
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: 700,
                              color: NAVY,
                            }}
                          >
                            {row.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Instrucciones */}
          <div
            style={{
              padding: "24px",
              backgroundColor: "#f7f9fb",
              border: "1px solid #e2e6ea",
              borderRadius: "12px",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: NAVY,
                margin: "0 0 14px",
              }}
            >
              ¿Cómo usar esta tabla?
            </h3>
            {[
              "Selecciona tu rango de UMA en las pestañas superiores",
              "Haz clic en tu edad para expandir y ver todos los montos",
              "Encuentra el Salario Base de Cotización (SBC) que corresponde a tu situación",
              "El monto mostrado es tu pensión garantizada mensual",
            ].map((text, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "10px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#3b82f6",
                    minWidth: "20px",
                  }}
                >
                  {i + 1}.
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#5a6a7a",
                    lineHeight: 1.5,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}