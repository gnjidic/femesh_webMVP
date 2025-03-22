import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Link from "next/link";
import { ChangeEvent } from "react";
import { FaGithub, FaXTwitter, FaArrowRightLong, FaLinkedin } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { EnhancedButton } from "@/components/ui/enhanced-btn";

interface FormProps {
  name: string;
  email: string;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function CTA({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
  loading,
}: FormProps) {
  return (
    <motion.div
    className="flex w-full max-w-7xl items-center justify-between gap-8 flex-wrap lg:flex-nowrap"
    variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Side: Content & Form */}
      <div className="flex w-full lg:w-1/2 flex-col gap-4">
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-center">
            <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
              <AnimatedShinyText className="px-4 py-1">
                <span>Coming soon!</span>
              </AnimatedShinyText>
            </div>
          </div>
        </motion.div>

        <motion.img
          src="/femesh_logo.svg"
          alt="logo"
          className="mx-auto h-24 w-24"
          variants={itemVariants}
        />

        <motion.div variants={itemVariants}>
          <TextBlur
            className="text-center pt-8 text-3xl font-medium tracking-tighter sm:text-6xl"
            text="From CAD to Mesh in Minutes"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TextBlur
            className="mx-auto max-w-[30rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
            text="Upload your STEP file in Browser, define the fluid domain, assign boundaries and generate a high-quality mesh!"
            duration={0.8}
          />
        </motion.div>

        {/* Form Section (No Blur) */}
        <motion.div
          className="mt-6 flex w-full max-w-[24rem] flex-col gap-2 mx-auto"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="!backdrop-blur-none">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
              className="!backdrop-blur-none"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="!backdrop-blur-none">
            <Input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={handleEmailChange}
              className="!backdrop-blur-none"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <EnhancedButton
              variant="expandIcon"
              Icon={FaArrowRightLong}
              onClick={handleSubmit}
              iconPlacement="right"
              className="mt-2 w-full"
              disabled={loading}
            >
              {loading ? "Loading..." : "Join Waitlist!"}
            </EnhancedButton>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-4 flex w-full items-center justify-center gap-1 text-muted-foreground"
          >
            <p>For any queries, reach out at  </p>
            <Link href="https://linkedin.com/in/damjangnjidic" rel="noopener noreferrer" target="_blank">
              <FaLinkedin className="h-5 w-5 transition-all duration-200 ease-linear hover:text-yellow-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side: Image */}
      <motion.div variants={itemVariants} className="w-full lg:w-3/4">
        <img src="/11.png" alt="FEA Simulation" className="w-full h-auto rounded-lg shadow-lg" />
      </motion.div>

    </motion.div>
  );
}
