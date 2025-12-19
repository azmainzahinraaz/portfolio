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

export const pressData: PressType[] = [
  {
    date: "May 19, 2025",
    imageUrl: "",
    link: "",
    title:
      "DhakaTribune: From quiet in classrooms to creative triumphs - the story of Saad Al Amin",
  },
  {
    date: "07 May 2025",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/posts%2Fpress%2F45.jpg?alt=media&token=ebb4bc55-b4bd-458e-90ed-50b0badcf48e",
    link: "https://thedailycampus.com/success-story/181765/",
    title:
      "The Daily Campus: ৩ কোটি টাকার স্কলারশিপে যুক্তরাষ্ট্র পড়তে যাচ্ছেন তা’মীরুল মিল্লাতের সাদ ",
  },
  {
    date: "07 May 2025",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/posts%2Fpress%2Fsaad-al-amin.webp?alt=media&token=07c199de-68e2-4e61-a21d-cbc2cbd8d8c5",
    link: "https://bongowiki.com/saad-secures-scholarship-usa/",
    title:
      "Madrasa Student Saad Secures BDT 3 Crore Scholarship to Study in USA",
  },
  {
    date: "07 May 2025",
    iframe:
      '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finsightstodayy%2Fposts%2Fpfbid02cAHsyMqiheppHYTWizct9hFVm3KJhw114CsrLdg3kAVqPHx3K6J2z6dSLCPueTVal&width=560&show_text=false&appId=992880515259603&height=314" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="web-share"></iframe>',
    title:
      "From Madrasah to USA: Saad Secures 3 Crore Scholarship to Study at Knox College",
  },
];

export const featureData: FeatureType[] = [
  {
    icon: <FaMedal />,
    title: "7+ Years Experience",
    description:
      "Founded Muktir Ghonta, Videophics. Worked as a Campus Ambassador at DMFF.",
    color: "#fa8572",
  },
  {
    icon: <MdStars />,
    title: "Top Six Finalist",
    description:
      "Glocal Teen Hero Top Six Finalist 2022, Best Designer Award by Elan Records.",
    color: "#b24968",
  },
  {
    icon: <TbRosetteDiscountCheckFilled />,
    title: "Google Verified",
    description:
      "He is verified by Google as a film-maker, musical artist and graphic designer",
    color: "#4285f4",
  },
];
