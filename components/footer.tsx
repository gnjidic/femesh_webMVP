import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full flex-col sm:flex-row items-center justify-between gap-4 border-t bg-background p-6 text-muted-foreground"
    >
      {/* GitHub Fork Button on the Left */}
      <motion.div variants={itemVariants} className="hidden sm:block">
        <Link
          href="https://github.com/gnjidic/femesh_webMVP/fork"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button
            size="sm"
            variant="secondary"
            className="text-yellow-50 transition-all duration-150 ease-linear md:hover:text-yellow-200"
          >
            <FaGithub className="md:mr-1.5" />
            <span className="hidden md:inline">Use this template</span>
          </Button>
        </Link>
      </motion.div>

      {/* Centered Copyright Text */}
      <motion.div variants={itemVariants} className="text-center mx-auto">
        <p>Copyright © 2025 FEmesh</p>
      </motion.div>

      {/* Empty div to balance the layout on the right side (for larger screens) */}
      <motion.div variants={itemVariants} className="hidden sm:block sm:invisible">
        <Button size="sm" variant="secondary">
          <FaGithub className="md:mr-1.5" />
          <span className="hidden md:inline">Use this template</span>
        </Button>
      </motion.div>

      {/* GitHub Fork Button (visible only on mobile) */}
      <motion.div variants={itemVariants} className="sm:hidden">
        <Link
          href="https://github.com/gnjidic/femesh_webMVP/fork"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button
            size="sm"
            variant="secondary"
            className="text-yellow-50 transition-all duration-150 ease-linear md:hover:text-yellow-200"
          >
            <FaGithub />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}