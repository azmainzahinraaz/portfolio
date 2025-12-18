import type { FaqType, TestimonialType } from "@/types/global-types";
import type { ReactNode } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const navLinks: { name: string; path: string }[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Works", path: "/works" },
  { name: "Contents", path: "/contents" },
  { name: "Discuss", path: "/discuss" },
  { name: "Blog", path: "/blog" },
];

export const personalInfo: { label: string; value: string }[] = [
  {
    label: "Born",
    value: `3 August 2005 (age ${new Date().getFullYear() - 2005})`, // dynamically calculate age
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
    value: "Tamirul Millat Kamil Madrasha",
  },
  {
    label: "Religion",
    value: "Islam",
  },
  {
    label: "Parents",
    value: "Alhaj Md. Saiful Islam & Mosammat Rokeya Sultana",
  },
];

export const testimonialData: { [type: string]: TestimonialType[] } = {
  notable: [
    {
      name: "John Doe",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Azmain is an exceptional developer with a keen eye for detail. His dedication to his craft is evident in every project he undertakes.",
    },
    {
      name: "Jane Smith",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Working with Azmain has been a transformative experience. His innovative approach and problem-solving skills are truly commendable.",
    },
    {
      name: "Alice Johnson",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Azmain's ability to seamlessly integrate design and functionality sets him apart in the tech industry. A true professional!",
    },
    {
      name: "Bob Brown",
      imageUrl: "/pfp-2.png",
      testimonial: `In the creative arena of Bangladesh, perhaps there has never been such a talented designer at such a young age. I mentioned Saad Al Amin, a gifted and successful young graphic designer, who, despite being just a teenager, has already achieved so much. Although Saad is equally adept as a skilled video editor and a creative producer, his journey began with graphic design. Generally, if our work is not at a professional level, we do not publish it, and therefore, Saad was initially assigned the responsibility of "Prashn" (a Bangla song). Despite his age and experience, while Prashn's work was well done, we did not consider it professional enough to publish. However, later on, our perception changed when we saw Saad's designs for the #MakeMEClose (a Bangla song). Those designs captivated all of us. So much so that we officially selected Saad's typography over the typography of three other people. And this is how Saad made his entry into the professional design world. Good news is that Saad has been solely assigned the responsibility for the complete official design of the #ShowMeTheWay (a Bangla song). Once again, Saad's competence and signature are being entrusted. Some have already been published, and more is yet to come. In the future, he will do even better, and his life will add more to his history. I pray and wish for his success. Dear Tarannum's uncle and our national little brother, Miah Saad, go far ahead!! Best wishes.`,
    },
  ],
  general: [
    {
      name: "Charlie Davis",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Azmain's collaborative spirit and positive attitude make him a joy to work with. He consistently goes above and beyond to ensure project success.",
    },
    {
      name: "Diana Evans",
      imageUrl: "/pfp-2.png",
      testimonial:
        "The quality of Azmain's work is unparalleled. His commitment to excellence and continuous learning is truly inspiring.",
    },
    {
      name: "Frank Green",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Azmain has a unique ability to understand client needs and translate them into effective solutions. His communication skills are top-notch.",
    },
    {
      name: "Grace Harris",
      imageUrl: "/pfp-2.png",
      testimonial:
        "I highly recommend Azmain for any development project. His expertise, professionalism, and dedication make him an invaluable asset to any team.",
    },
    {
      name: "Henry Wilson",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Azmain's innovative mindset and technical prowess have significantly contributed to the success of our projects. He is a true asset to any organization.",
    },
    {
      name: "Isabella Martinez",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Working with Azmain has been a game-changer for our team. His ability to think outside the box and deliver creative solutions is truly impressive.",
    },
    {
      name: "Jack Lee",
      imageUrl: "/pfp-2.png",
      testimonial:
        "Azmain's dedication to his work and his passion for technology are evident in everything he does. He is a reliable and talented developer.",
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
      url: "https://www.linkedin.com/in/azmaincodes/",
    },
    {
      platform: "Facebook",
      icon: <FaFacebook />,
      url: "#",
    },
    {
      platform: "Twitter",
      icon: <FaTwitter />,
      url: "#",
    },
    {
      platform: "Instagram",
      icon: <FaInstagram />,
      url: "#",
    },
    {
      platform: "YouTube",
      icon: <FaYoutube />,
      url: "#",
    },
  ];

export const faqData: FaqType[] = [
  {
    question: "What services do you offer?",
    answer:
      "I offer web development, content creation, and digital marketing services tailored to your needs.",
  },
  {
    question: "How can I contact you for a project?",
    answer:
      "You can reach out to me via the contact form on my website or email me directly at",
  },
  {
    question: "What is your development process?",
    answer:
      "My development process includes requirement analysis, design, development, testing, and deployment to ensure a high-quality product.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, I offer maintenance and support services to ensure your project remains up-to-date and functional.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies such as React, Node.js, and Python, among others.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "Absolutely! I provide SEO optimization and digital marketing strategies to help increase your online presence.",
  },
  {
    question: "What are your rates for services?",
    answer:
      "My rates vary depending on the scope and complexity of the project. Please contact me for a detailed quote.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The timeline for a project depends on its requirements. I will provide an estimated timeline after discussing your needs.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, I collaborate with clients from around the world and am comfortable working across different time zones.",
  },
  {
    question: "Can you provide examples of your previous work?",
    answer:
      "Certainly! You can find my portfolio on my website, showcasing various projects I've completed for clients.",
  },
  {
    question: "What sets you apart from other developers?",
    answer:
      "My commitment to quality, attention to detail, and personalized approach to each project ensure that I deliver exceptional results tailored to my clients' needs.",
  },
  {
    question: "How do you handle project revisions?",
    answer:
      "I offer a set number of revisions based on the project scope to ensure the final product meets your expectations.",
  },
  {
    question: "What is your preferred method of communication?",
    answer:
      "I am flexible with communication methods, including email, video calls, and instant messaging, depending on your preference.",
  },
];
