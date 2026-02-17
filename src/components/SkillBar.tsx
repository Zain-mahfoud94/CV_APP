import { motion } from "framer-motion";

interface Props {
  label: string;
  percent: number;
  color: string;
}

export default function SkillBar({ label, percent, color }: Props) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{label}</span>
        <span className="text-sm opacity-70">{percent}%</span>
      </div>

      <div className="w-full h-3 bg-base-300 rounded">
        <motion.div
          className="h-3 rounded"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
