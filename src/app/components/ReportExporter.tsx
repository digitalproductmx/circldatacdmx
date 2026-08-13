import { motion } from "motion/react";
import { FileText, Download, Database } from "lucide-react";

interface ReportExporterProps {
  totalWaste: number;
  venueName: string;
  attendance: number;
  sustainabilityScore: number;
}

export function ReportExporter({
  totalWaste,
  venueName,
  attendance,
  sustainabilityScore,
}: ReportExporterProps) {
  const exportGovernmentReport = () => {
    const reportContent = `
EXECUTIVE REPORT - SEDEMA CDMX
CirclData - AI-assisted Waste Management Dashboard

EVENT DATA
Venue: ${venueName}
Attendance: ${attendance.toLocaleString()} attendees
Sustainability Score: ${sustainabilityScore}%

WASTE PROJECTION
Estimated Total: ${totalWaste} kg
- Organic: ${(Number(totalWaste) * 0.35).toFixed(2)} kg (35%)
- Recyclable: ${(Number(totalWaste) * 0.45).toFixed(2)} kg (45%)
- Non-Recyclable: ${(Number(totalWaste) * 0.2).toFixed(2)} kg (20%)

MANAGEMENT PLAN
- Containers deployed: 4 strategic units
- Optimization system: CirclData AI-assisted
- Regulatory compliance: ${sustainabilityScore >= 75 ? "APPROVED" : "ADJUSTMENTS REQUIRED"}

Generated on: ${new Date().toLocaleDateString()}
    `.trim();

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Environmental_Report_${venueName.replace(/\s+/g, "_")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportACVDataset = () => {
    const dataset = {
      event: venueName,
      date: new Date().toISOString(),
      attendance,
      total_waste_kg: Number(totalWaste),
      breakdown: {
        organic_kg: Number((Number(totalWaste) * 0.35).toFixed(2)),
        recyclable_kg: Number((Number(totalWaste) * 0.45).toFixed(2)),
        non_recyclable_kg: Number((Number(totalWaste) * 0.2).toFixed(2)),
      },
      sustainability_score: sustainabilityScore,
      methodology: "CirclData LCA v1.0",
    };

    const blob = new Blob([JSON.stringify(dataset, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `LCA_Dataset_${venueName.replace(/\s+/g, "_")}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/60 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <Download className="w-5 h-5 text-electric-blue" />
        <h3 className="text-gray-800 text-base sm:text-lg font-medium">Export Reports</h3>
      </div>

      <div className="space-y-3">
        <motion.button
          className="w-full bg-emerald-500 text-white p-4 rounded-xl shadow-lg flex items-center justify-between hover:bg-emerald-600 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={exportGovernmentReport}
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5" />
            <div className="text-left">
              <div className="font-medium">Environmental Report</div>
              <div className="text-xs opacity-90">Executive report for regulatory compliance</div>
            </div>
          </div>
          <Download className="w-4 h-4" />
        </motion.button>

        <motion.button
          className="w-full bg-blue-500 text-white p-4 rounded-xl shadow-lg flex items-center justify-between hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={exportACVDataset}
        >
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5" />
            <div className="text-left">
              <div className="font-medium">Life Cycle Assessment Dataset</div>
              <div className="text-xs opacity-90">JSON for Life Cycle Analysis</div>
            </div>
          </div>
          <Download className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}
