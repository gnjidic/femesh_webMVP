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
      className="mt-auto flex w-full items-center justify-center gap-1 border-t bg-background p-6 text-muted-foreground md:justify-start">
      <motion.div variants={itemVariants}>
        <Link href="https://github.com/gnjidic/FEMeshMVP/fork" rel="noopener noreferrer" target="_blank">
          <Button
            size="sm"
            variant="secondary"
            className="text-yellow-50 transition-all duration-150 ease-linear md:hover:text-yellow-200">
            <FaGithub className="md:mr-1.5" />
            <span className="hidden md:inline">Use this template</span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
