import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

// "BentoGridItem" just chage in this data item
 
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function Features() {
  return (
    <section className="max-w-4xl mx-auto py-8">
      <h2 className="text-center text-4xl font-bold mb-6">FEATURES</h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <a href={item.link || "#"} className="block">
                {item.header}
              </a>
            }
            icon={item.icon}
            className="transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-neutral-100 rounded-lg p-4"/>
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    title: "Guidance and Mentorship",
    description: "empower growth by providing wisdom, support, and direction for success.",
    header: <img src="/2.png" alt="Header Image" className="cursor-pointer" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "/events", 
  },
  {
    title: "Internship Opportunities",
    description: "provide hands-on experience, skill development, and a pathway to career success.",
    header: <img src="/3.png" alt="Header Image" className="your-image-class" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "/exam-prep",
  },
  {
    title: "Community Building",
    description: "fosters connections, collaboration, and shared growth through meaningful interactions.",
    header: <img src="/7.png" alt="Header Image" className="your-image-class" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/community",
  },
  {
    title: "Hackathons & Competitions",
    description:
      "ignite innovation, creativity, and problem-solving through intense, goal-driven challenges.",
    header: <img src="/1.png" alt="Header Image" className="cursor-pointer" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500 " />,
    link: "/hackathons",
  },
  {
    title: "Bootcamps",
    description: "provide valuable insights and in-depth knowledge from industry leaders and specialists.",
    header:  <img src="/4.png" alt="Header Image" className="your-image-class" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "/courses",
  },
  {
    title: "Expert Lectures",
    description: "Key information and essential reminders to help you stay on track and succeed.",
    header: <img src="/6.png" alt="Header Image" className="your-image-class" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "/notes", 
  },
  
];
