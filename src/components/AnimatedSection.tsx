import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ children, className, id }: Props) {
  const { ref, visible } = useIntersection<HTMLDivElement>();

  return (
    <div ref={ref} id={id} className={className}>
      {visible && (
        <motion.div initial="hidden" animate="visible">
          {children}
        </motion.div>
      )}
    </div>
  );
}
