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
            className={i === 3 || i === 6 ? "" : ""} />
        ))}
      </BentoGrid>
    </section>
  );
}


const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Events",
    description: "Enhance your knowledge through engaging and hands-on sessions.",
    header: <img src="/event1.jpg" alt="Header Image" className="your-image-class" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "/events", 
  },
  {
    title: "Exam Prep",
    description: "Prepare effectively with resources, tips, and practice materials to ace your exams.",
    header: <img src="/e1.jpg" alt="Header Image" className="your-image-class" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "/exam-prep",
  },
  {
    title: "Community Building",
    description: "Participate in exclusive events and activities for members.",
    header: <img src="/c3.jpg" alt="Header Image" className="your-image-class" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/community",
  },
  {
    title: "Hackathons & Competitions",
    description:
      "Demonstrate your talents and earn amazing rewards.",
    header: <img src="/h1.jpg" alt="Header Image" className="" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "/hackathons",
  },
  {
    title: "Our Recommended Courses",
    description: "Discover handpicked courses designed to help you master new skills and advance your career. ",
    header:  <img src="/r1.jpg" alt="Header Image" className="your-image-class" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "/courses",
  },
  {
    title: "Important Notes",
    description: "Key information and essential reminders to help you stay on track and succeed.",
    header: <img src="/im1.jpg" alt="Header Image" className="your-image-class" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "/notes", 
  },
  
];
