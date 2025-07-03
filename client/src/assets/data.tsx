import { FaLaptopCode, FaChalkboardTeacher, FaCogs, FaBriefcase, FaBalanceScale, FaBrain, FaStethoscope, FaGlobe } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export type Course = {
  icon: IconType;
  course: string;
  description: string;
};

export const courseList: Course[] = [
  {
    icon: FaLaptopCode,
    course: "Information Technology",
    description: "Explore topics in AI, web development, cybersecurity, and software engineering."
  },
  {
    icon: FaChalkboardTeacher,
    course: "Education",
    description: "Generate research titles on teaching methods, curriculum, and student engagement."
  },
  {
    icon: FaCogs,
    course: "Engineering",
    description: "Discover ideas in mechanical, electrical, and civil engineering fields."
  },
  {
    icon: FaBriefcase,
    course: "Business Administration",
    description: "Create thesis topics in marketing, entrepreneurship, and business management."
  },
  {
    icon: FaBalanceScale,
    course: "Criminology",
    description: "Explore criminal justice, forensic science, and crime prevention research areas."
  },
  {
    icon: FaBrain,
    course: "Psychology",
    description: "Focus on behavioral studies, mental health, and cognitive science research."
  },
  {
    icon: FaStethoscope,
    course: "Nursing",
    description: "Get thesis ideas in patient care, clinical practices, and health promotion."
  },
  {
    icon: FaGlobe,
    course: "Tourism and Hospitality",
    description: "Find research topics in travel trends, hospitality, and sustainable tourism."
  }
];
