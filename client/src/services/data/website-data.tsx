import type {
  FaqType,
  FeatureType,
  PressType,
  TestimonialType,
} from "@/types/global-types";
import type { ReactNode } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedal,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

export const navLinks: { name: string; path: string }[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Works", path: "/works" },
  { name: "Visual Design", path: "/visual-designs" },
  { name: "Discuss", path: "/discuss" },
  { name: "Blog", path: "/blog" },
];

export const personalInfo: { label: string; value: string }[] = [
  {
    label: "Born",
    value: `22 April 2006 (age 19)`,
  },
  {
    label: "Residence",
    value: "Dhaka, Bangladesh",
  },
  {
    label: "Nationality",
    value: "Bangladeshi",
  },
  {
    label: "Education",
    value: "Govt. Science College",
  },
  {
    label: "Religion",
    value: "Islam",
  },
  {
    label: "Parents",
    value: "Khondker Abdul Kader Razu & Mst. Arjuman Ara",
  },
];

export const testimonialData: { [type: string]: TestimonialType[] } = {
  notable: [
    {
      name: "Jamil Thorne, CEO, Thorne Consulting",
      imageUrl: "/thoughts/Jamil.jpeg",
      testimonial:
        "Azmain can simultaneously excel in execution, leadership, and advocacy, leaving a tangible impact on both the team and the wider community. He approaches each project with genuine compassion and a remarkable sense of accountability, making sure individuals with disabilities feel represented and empowered. This young man doesn't just get things done; he elevates the work of others through initiative, reliability, and respect for impact",
    },
    {
      name: "Engineer Md. Amzad Hossain, Assistant Professor & Head of ICT Department, Government Science College",
      imageUrl: "/thoughts/Amzad.png",
      testimonial:
        "For Azmain, technology is one of the languages for framing society, not an end in itself. He wants to climb, but not alone. He is building a ladder to ensure others can climb too. He is precisely the kind of person who understands that education is not a personal trophy but a collective responsibility",
    },
    {
      name: "Jinat Jahan, Assistant Professor, Department of Bangla, Government Science College",
      imageUrl: "/thoughts/Jinat.jpg",
      testimonial:
        "Azmain embodies the kind of intellectual engagement that makes teaching rewarding. His ability to ask insightful questions that deepen collective understanding and his instinct to lift others through patient guidance make him a valuable addition to any university community. One student told me, 'Azmain made me realize I wasn't stupid; I just needed someone to explain it differently.",
    },
    {
      name: "Md Salah Uddin, Associate Professor, Department of Mathematics, Government Science College",
      imageUrl: "/thoughts/Salah.jpg",
      testimonial: `Like a horizon slowly widening at dawn, I have watched Azmain's potential expand steadily over the past three years. He loves to treat knowledge as something that grows when shared. Whenever he starts something new, he considers whether it will open doors for other students from backgrounds like his. He wants to make the path visible for those who come after.`,
    },
    {
      name: "Tashdid Bin Wahid, Former President, GSC Science Club",
      imageUrl: "/thoughts/Tashdid.jpg",
      testimonial: `Azmain never treated club meetings or workshops as just another task. He attended them with a genuine sense of purpose. He brings an infectious zeal, a moral foundation, and the ability to turn any ordinary project into something profound. I've no doubt that he will grow even more in your community and leave it better than he found it.`,
    },
  ],
};

export const socialLinks: { platform: string; icon: ReactNode; url: string }[] =
  [
    {
      platform: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/azmainzahinraaz",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/azmainzahinraaz/",
    },
    {
      platform: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/azmainzahinraaz#",
    },
    {
      platform: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/azmainzahinraaz",
    },
    {
      platform: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/azmainzahinraaz/",
    },
    {
      platform: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@azmainzahinraaz#/",
    },
  ];

export const contactLinkItems = [
  { platform: "Email", url: "azmainzahinraaz@gmail.com", isLink: true },
  { platform: "Phone", url: "+880130-466-9894", isLink: true },
  { platform: "Address", url: "Mirpur, Dhaka-1216, Bangladesh", isLink: false },
];

export const faqData: FaqType[] = [
  {
    question: "Who is Azmain Zahin Raaz?",
    answer:
      "Azmain Zahin Raaz is a Bangladeshi Computer Science enthusiast, youth leader, and founder using technology and storytelling to drive social change.",
  },
  {
    question: "What is Azmain Zahin Raaz currently doing?",
    answer:
      "He is in a gap year dedicated to entrepreneurship, social impact, and independent software and research projects with global relevance.",
  },
  {
    question: "What is Azmain Zahin Raaz known for?",
    answer:
      "He is known for founding I Am The Rise, Headline Haalchaal, and for conducting research on accessibility and inclusion for students with disabilities in Bangladeshi education systems.",
  },
  {
    question: "What kind of research has Azmain Zahin Raaz conducted?",
    answer:
      "He conducted a multi-division study exposing gaps in disability accessibility in mainstream education and proposed policy-aligned, implementable solutions for inclusive learning.",
  },
  {
    question: "What impact has Azmain Zahin Raaz created?",
    answer:
      "His work has directly impacted 200+ students and reached millions through high-impact visual storytelling that reshaped how youth engage with civic and social issues.",
  },
  {
    question: "What makes Azmain Zahin Raaz’s work different?",
    answer:
      "He blends technology, data, and design to turn complex social problems into scalable, youth-driven action and awareness.",
  },
  {
    question: "What are Azmain Zahin Raaz’s career goals?",
    answer:
      "He aims to study Computer Science globally and build technology that solves real-world inequities, especially in education and accessibility",
  },
  {
    question: "How can I contact Azmain Zahin Raaz?",
    answer:
      "He can be contacted via email or through his LinkedIn and professional portfolio platforms.",
  },
];

export const pressData: PressType[] = [
  {
    date: "May 07, 2025",
    imageUrl: "/press/press_1.webp",
    link: "https://boishakhionline.com/education/156584",
    title: "অলিম্পিয়াডে আজমাইন জাহিন রাজের সিলভার জয়",
  },
  {
    date: "January 17, 2026",
    imageUrl: "/press/iaac.webp",
    link: "https://www.observerbd.com/news/562698#/",
    title: "From not knowing what an Olympiad was to winning silver at IAAC",
  },
  {
    date: "December 23, 2023",
    imageUrl: "/press/gsc.webp",
    link: "https://www.facebook.com/share/p/1C8QcdyoMU/",
    title: "Breaking barriers in GSCSC history!",
  },
  {
    date: "August 13, 2025",
    imageUrl: "/press/press_4.webp",
    link: "https://www.facebook.com/share/p/1Bqgm9rYFR/",
    title: "সেরা ১০-এর দারুণ ক্রিয়েশনস",
  },
  {
    date: "December 15, 2023",
    imageUrl: "/press/press_3.webp",
    title:
      "From Madrasah to USA: Saad Secures 3 Crore Scholarship to Study at Knox College",
  },
  {
    date: "August 3, 2025",
    imageUrl: "/press/press_5.webp",
    link: "https://www.facebook.com/share/p/16vsZR5js9/",
    title: "Group B (Class 9–12) Winners – BEO 2025",
  },
  {
    date: "October 20, 2025",
    imageUrl: "/press/press_6.webp",
    link: "https://www.facebook.com/share/p/17tGVyrYJE/",
    title:
      "এই বছরের #YouthSkillsDay উপলক্ষে আমাদের #AI4Change ক্যাম্পেইনে আমরা দেখেছি কিভাবে তরুণরা AI ব্যবহার করে গড়তে চায় এক নতুন বাংলাদেশ।",
  },
];

export const featureData: FeatureType[] = [
  {
    icon: <FaMedal />,
    title: "17M+ Digital Reach",
    description:
      "Scaled two platforms from zero through visual storytelling and strategic content creation.",
    color: "#fa8572",
  },
  {
    icon: <MdStars />,
    title: "20K+ Civic Engagement",
    description:
      "Self-taught full-stack developer earning national media coverage for gamified political participation.",
    color: "#b24968",
  },
  {
    icon: <TbRosetteDiscountCheckFilled />,
    title: "4× Top Performer",
    description:
      "Generated 5M+ impressions and 1000% LinkedIn growth, promoted to Lead Generation Intern",
    color: "#4285f4",
  },
];
