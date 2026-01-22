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
  { name: "Visual Design", path: "/visual-design" },
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
      name: "John Doe",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Azmain Zahin Raaz is driven by clarity and purpose. He does not chase visibility; he focuses on building work that creates value. Whether in academics, projects, or initiatives, he approaches problems analytically and executes with discipline. His strength lies in connecting ideas with action and turning intent into outcomes. What sets Azmain apart is resilience. Growing up with limited resources, he learned to self-direct his growth and stay consistent under pressure. He works with long-term vision, prioritizing impact, integrity, and continuous improvement over short-term success.",
    },
    {
      name: "Jane Smith",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Azmain leads by doing. He steps forward when responsibility is unclear and ensures progress without dominating others. In team environments, he communicates directly, listens carefully, and keeps everyone aligned with the goal. His leadership style is calm, structured, and result-focused. He values people as much as process. Azmain supports peers, shares knowledge freely, and believes strong teams are built through trust and accountability. This balance makes him reliable in both leadership and collaborative roles.",
    },
    {
      name: "Alice Johnson",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Professionally, Azmain operates with maturity and precision. He respects deadlines, communicates clearly, and takes ownership of results. When challenges arise, he adapts quickly and focuses on solutions instead of excuses. Beyond tasks, he thinks systemically. Azmain seeks ways to improve processes, increase efficiency, and create a sustainable impact. His forward-thinking mindset makes him dependable in high-responsibility environments.",
    },
    {
      name: "Bob Brown",
      imageUrl: "/pfp-2.png",
      testimonial: `In the creative arena of Bangladesh, perhaps there has never been such a talented designer at such a young age. I mentioned Saad Al Amin, a gifted and successful young graphic designer, who, despite being just a teenager, has already achieved so much. Although Saad is equally adept as a skilled video editor and a creative producer, his journey began with graphic design. Generally, if our work is not at a professional level, we do not publish it, and therefore, Saad was initially assigned the responsibility of "Prashn" (a Bangla song). Despite his age and experience, while Prashn's work was well done, we did not consider it professional enough to publish. However, later on, our perception changed when we saw Saad's designs for the #MakeMEClose (a Bangla song). Those designs captivated all of us. So much so that we officially selected Saad's typography over the typography of three other people. And this is how Saad made his entry into the professional design world. Good news is that Saad has been solely assigned the responsibility for the complete official design of the #ShowMeTheWay (a Bangla song). Once again, Saad's competence and signature are being entrusted. Some have already been published, and more is yet to come. In the future, he will do even better, and his life will add more to his history. I pray and wish for his success. Dear Tarannum's uncle and our national little brother, Miah Saad, go far ahead!! Best wishes.`,
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
  { platform: "Email", url: "rakeshkarmaker0175@gmail.com", isLink: true },
  { platform: "Phone", url: "+880123-456-7890", isLink: true },
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
    imageUrl:
      "https://boishakhionline.com/assets/news_photos/2026/01/14/image-156584-1768402039.jpg",
    link: "https://boishakhionline.com/education/156584",
    title: "অলিম্পিয়াডে আজমাইন জাহিন রাজের সিলভার জয়",
  },
  {
    date: "January 17, 2026",
    imageUrl: "/press/iaac.jpg",
    link: "https://www.observerbd.com/news/562698#/",
    title: "From not knowing what an Olympiad was to winning silver at IAAC",
  },
  {
    date: "December 23, 2023",
    imageUrl: "/press/gsc.jpg",
    link: "https://www.facebook.com/share/p/1C8QcdyoMU/",
    title: "Breaking barriers in GSCSC history!",
  },
  {
    date: "August 13, 2025",
    imageUrl: "/press/press_4.jpg",
    link: "https://www.facebook.com/share/p/1Bqgm9rYFR/",
    title: "সেরা ১০-এর দারুণ ক্রিয়েশনস",
  },
  {
    date: "December 15, 2023",
    imageUrl: "/press/press_3.jpg",
    title:
      "From Madrasah to USA: Saad Secures 3 Crore Scholarship to Study at Knox College",
  },
  {
    date: "August 3, 2025",
    imageUrl: "/press/press_5.jpg",
    link: "https://www.facebook.com/share/p/16vsZR5js9/",
    title: "Group B (Class 9–12) Winners – BEO 2025",
  },
  {
    date: "October 20, 2025",
    imageUrl: "/press/press_6.jpg",
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
