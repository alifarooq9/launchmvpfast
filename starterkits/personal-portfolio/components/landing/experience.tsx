import {
  SectionContent,
  SectionHeader,
  SectionHeading,
} from "@/components/section-header";
import { siteConfig } from "@/config/site";
import { Variants } from "motion";
import * as m from "motion/react-m";

const variants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Experience() {
  return (
    <SectionHeader className="w-full">
      <SectionHeading
        motion
        variants={variants}
        whileInView="animate"
        initial="initial"
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {siteConfig.experience?.title}
      </SectionHeading>
      <SectionContent className="w-full">
        <ul className="grid grid-cols-1 gap-2 w-full">
          {siteConfig.experience?.experiences.map((item, index) => (
            <m.li
              key={index}
              className="flex items-center bg-card justify-between gap-4 border rounded-md w-full p-4"
              variants={variants}
              initial="initial"
              whileInView="animate"
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-1">
                <h4 className="font-medium">{item.position}</h4>
                <p className="text-muted-foreground text-sm">{item.company}</p>
              </div>
              <p className="text-muted-foreground text-sm">{item.duration}</p>
            </m.li>
          ))}
        </ul>
      </SectionContent>
    </SectionHeader>
  );
}
