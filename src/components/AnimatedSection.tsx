import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";
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
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          {children}
        </motion.div>
      )}
    </div>
  );
}
