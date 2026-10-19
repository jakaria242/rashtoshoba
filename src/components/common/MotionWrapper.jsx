import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fade";

export default function MotionWrapper({
  children,
  className = "",
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}