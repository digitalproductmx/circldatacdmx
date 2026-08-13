import { motion } from "motion/react";
import { Trash2, TrendingUp } from "lucide-react";

interface WastePredictionProps {
  attendance: number;
  foodPoints: number;
  duration: number;
}

export function WastePrediction({ attendance, foodPoints, duration }: WastePredictionProps) {
  const wastePerPerson = 0.5;
  const foodPointFactor = 0.3;
  const durationFactor = 0.15;

  const totalWaste = (
    attendance * wastePerPerson +
    foodPoints * foodPointFactor * duration +
    duration * durationFactor * attendance * 0.001
  ).toFixed(2);

  const organic = (Number(totalWaste) * 0.35).toFixed(2);
  const recyclable = (Number(totalWaste) * 0.45).toFixed(2);
  const nonRecyclable = (Number(totalWaste) * 0.2).toFixed(2);

  const bars = [
    { name: "Organic", value: Number(organic), color: "#F59E0B" },
    { name: "Recyclable", value: Number(recyclable), color: "#10B981" },
    { name: "Non-Recyclable", value: Number(nonRecyclable), color: "#FF6B6B" },
  ];

  const maxValue = Math.max(...bars.map((b) => b.value), 1);
  const chartHeight = 160;

  const monumentComparison =
    Number(totalWaste) > 5000
      ? "Equivalent to 2 Ángel de la Independencia monuments"
      : Number(totalWaste) > 2000
      ? "Equivalent to 1 Ángel de la Independencia monument"
      : "Equivalent to half an Ángel de la Independencia monument";

  return (
    <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/60 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <Trash2 className="w-5 h-5 text-coral-orange" />
        <h3 className="text-gray-800 text-base sm:text-lg font-medium">Waste Prediction</h3>
      </div>

      <motion.div
        className="bg-gradient-to-br from-coral-orange/10 to-lime-yellow/10 rounded-xl p-4 mb-4"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
        <div className="text-center">
          <div className="text-xs text-gray-600 mb-1 font-medium tracking-wide uppercase">Estimated Total</div>
          <div className="text-4xl sm:text-5xl font-bold text-coral-orange mb-2">
            {totalWaste} <span className="text-2xl">kg</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <TrendingUp className="w-4 h-4" />
            <span>{monumentComparison}</span>
          </div>
        </div>
      </motion.div>

      {/* Custom bar chart — no recharts to avoid internal SVG key conflicts */}
      <div className="mb-4 px-2">
        <div className="flex items-end gap-3" style={{ height: `${chartHeight + 40}px` }}>
          {bars.map((bar) => {
            const barH = Math.round((bar.value / maxValue) * chartHeight);
            return (
              <div key={bar.name} className="flex-1 flex flex-col items-center justify-end gap-1">
                <span className="text-xs font-semibold" style={{ color: bar.color }}>
                  {bar.value.toFixed(0)}
                </span>
                <div className="w-full flex items-end" style={{ height: `${chartHeight}px` }}>
                  <motion.div
                    className="w-full rounded-t-lg"
                    style={{ backgroundColor: bar.color }}
                    initial={{ height: 0 }}
                    animate={{ height: barH }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs text-gray-500 text-center leading-tight">{bar.name}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-1 text-right text-xs text-gray-400">kg</div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-lime-yellow/20 rounded-lg p-2 text-center border border-lime-yellow/30">
          <div className="text-xs text-gray-500 font-medium">Organic</div>
          <div className="text-sm font-bold text-lime-yellow">{organic} kg</div>
        </div>
        <div className="bg-emerald-500/20 rounded-lg p-2 text-center border border-emerald-500/30">
          <div className="text-xs text-gray-500 font-medium">Recyclable</div>
          <div className="text-sm font-bold text-emerald-600">{recyclable} kg</div>
        </div>
        <div className="bg-coral-orange/20 rounded-lg p-2 text-center border border-coral-orange/30">
          <div className="text-xs text-gray-500 font-medium">Non-Recyclable</div>
          <div className="text-sm font-bold text-coral-orange">{nonRecyclable} kg</div>
        </div>
      </div>
    </div>
  );
}
