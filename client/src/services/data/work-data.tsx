import type {
  ProjectType,
  SeminarType,
  SocialType,
  MyWorkType,
  DocumentaryType,
  TopContent,
  PersonalVideoType,
  SatireType,
} from "@/types/work-type";
import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export const myWorks: MyWorkType[] = [
  {
    imageUrl: "/my-works/iamtherise_logo.jpg",
    title: "I Am The Rise",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/iamtherise/",
        icon: <FaLinkedin />,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/iamtherise/",
        icon: <FaFacebook />,
      },
    ],
  },
  {
    imageUrl: "/my-works/headlinehaalchaal_logo.jpg",
    title: "Headline Haalchaal",
    links: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/headlinehaalchaal/",
        icon: <FaFacebook />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/headlinehaalchaal/",
        icon: <FaLinkedin />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/headlinehaalchaal/#/",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    imageUrl: "/my-works/thorne_consulting1_logo.jpg",
    title: "Thorne Consulting",
    links: [
      {
        name: "Website",
        url: "https://thorneconsultingco.com/#/",
        icon: <FaGlobe />,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/thorneconsulting/",
        icon: <FaFacebook />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/thorne-consulting1/",
        icon: <FaLinkedin />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/thorne_consulting/#/",
        icon: <FaInstagram />,
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@thorneconsulting",
        icon: <FaTiktok />,
      },
    ],
  },
  {
    imageUrl: "/my-works/375867337_200748506352801_7519583050179028478_n.jpg",
    title: "GSCians Territory",
    links: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/GSCiansTerritory/",
        icon: <FaFacebook />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/gsciansterritory/",
        icon: <FaInstagram />,
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/@GSCiansTerritory",
        icon: <FaYoutube />,
      },
    ],
  },
  {
    imageUrl: "/my-works/499469348_1290242259778101_205606045381340333_n.jpg",
    title: "Govt. Science College Science Club",
    links: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/GSCSC1981.official/",
        icon: <FaFacebook />,
      },
    ],
  },
  {
    imageUrl: "/my-works/577920258_1262538062589368_7537611397331554987_n.jpg",
    title: "Govt. Science College Science Club",
    links: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/GSCPC/",
        icon: <FaFacebook />,
      },
    ],
  },
];

export const personalVideos: PersonalVideoType[] = [
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7388216588237336576",
    title: "1",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7359908830744375296",
    title: "2",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7339652841902325761",
    title: "3",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7336753764906766336",
    title: "4",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7336051615855988739",
    title: "5",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7335341975795105792",
    title: "6",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7297955620719075329",
    title: "7",
  },
];

export const documentaries: DocumentaryType[] = [
  {
    src: "https://www.youtube.com/embed/_O5-kOJk88c?si=6lTbjfkp3-8IED6O",
    title:
      "A Short Glimpse of Government Science College , Tejgaon , Dhaka - 1215 || GSC-70",
  },
  {
    src: "https://www.youtube.com/embed/qhMGi-H79xQ?si=lKGhsVDfUBSFP7nx",
    title:
      "A Short Tour of Government Science College , Tejgaon , Dhaka - 1215 || GSC BATCH-70 || HSC-24 ||",
  },
  {
    src: "https://www.youtube.com/embed/FJM9B-DYrKE?si=GguwcPz5Qayqey_P",
    title: "বৃষ্টি বিলাসে সবিক 🌸🌸",
  },
  {
    src: "https://www.youtube.com/embed/7oVkD6eK4A0?si=0drxjDf9aTT8NLYP",
    title:
      "A Short Glimpse of Government Science College , Tejgaon , Dhaka - 1215 || GSC BATCH-70 || HSC-24 ||",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1806715519794970&width=560",
    title: "দৌড়টা স্পন্দন জয় এর...",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1036732984025473&width=560",
    title: "শহরের একমাত্র প্রেমিকা 🥺",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F843285887172912&width=560",
    title:
      "Purnata By GSCians - 70 || Warfaze  || GSCians - 70 || 🎥 : Azmain Zahin Raaz",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F858423792468684&width=560",
    title:
      "Oniket Prantor By GSCians - 70 || Artcell ll || GSCians - 70 || © Azmain Zahin Raaz",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F799106648480144&width=560",
    title: "Hail GSC 💥 🎥 : Azmain Zahin Raaz",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F201879575713567&width=560",
    title: "সবিকর মুগ্ধতা🫰",
  },
];

export const topContents: TopContent[] = [
  {
    src: "https://www.instagram.com/reel/DUdH9NIkVu6/embed/",
    title: "unknown 1",
  },
  {
    src: "https://www.instagram.com/p/DSKtI3wiQp4/embed/",
    title: "Definition of a club legend, Marco Reus",
  },
  {
    src: "https://www.instagram.com/p/DSagPKLgTX3/embed/",
    title: "A devoted patriot, gone too soon.",
  },
  {
    src: "https://www.instagram.com/p/DTDc1nXjJbF/embed/",
    title:
      "Edinson Cavani has announced his retirement from professional football at the age of 38, bringing an end to a distinguished 20-year career. In a message shared on social media, the Uruguayan striker thanked his family, friends, teammates, coaches, and fans, saying he was stepping away from the game “at peace.”",
  },
  {
    src: "https://www.instagram.com/p/DTUUUXMgUku/embed/",
    title: "Indian actor and outspoken political commentator",
  },
  {
    src: "https://www.instagram.com/p/DS2vI_3jwrP/embed/",
    title:
      "A heartwarming video from the India–Bangladesh border has gone viral, showing Bengalis from both sides filming each other and sharing smiles and words. The moment highlights their shared language, food habits, and cultural identity, offering a rare glimpse of people-to-people connection beyond political boundaries.",
  },
  {
    src: "https://www.instagram.com/p/DSzrVftgZWW/embed/",
    title: "Santa basically said: 'You want a 1600? Catch these hands",
  },
  {
    src: "https://www.instagram.com/p/DSr9lhBgQDB/embed/",
    title: "Tarique Rahman Returns Home After 17 Years, BNP",
  },
  {
    src: "https://www.instagram.com/p/DSIVa-XDU1i/embed/",
    title: "unknown 1",
  },
  {
    src: "https://www.instagram.com/reel/DR2bvzyCszS/embed/",
    title: "unknown 2",
  },
  {
    src: "https://www.instagram.com/reel/DR2XpBwEj7U/embed/",
    title: "unknown 3",
  },
  {
    src: "https://www.instagram.com/reel/DRVDuBNFfGw/embed/",
    title: "unknown 4",
  },
  {
    src: "https://www.instagram.com/reel/DRSMcIQiLb9/embed/",
    title: "unknown 5",
  },
  {
    src: "https://www.instagram.com/reel/DRNDL0oDkgD/embed/",
    title: "unknown 6",
  },
  {
    src: "https://www.instagram.com/reel/DRARkmHjqXB/embed/",
    title: "unknown 7",
  },
  {
    src: "https://www.instagram.com/reel/DOEEZ1NAU5Z/embed/",
    title: "unknown 8",
  },
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%3Ffbid%3D122142327020959471%26set%3Da.122100661658959471&show_text=false&width=500",
    title: "unknown 89",
  },
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%3Ffbid%3D122142441422959471%26set%3Da.122100661658959471&show_text=false&width=500",
    title: "unknown 88",
    isImage: true,
  },
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%3Ffbid%3D122142081092959471%26set%3Da.122100661658959471&show_text=false&width=500",
    title: "unknown 90",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F25442775565324861&width=560",
    title: "unknown 9",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1948360785727216&width=560",
    title: "unknown 10",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1172664071632713&width=560",
    title: "unknown 11",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1538376297252717&width=560",
    title: "unknown 123",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4313112302342131&width=560",
    title: "unknown 91",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3872367202896893&width=560",
    title: "unknown 122",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1587129978978329&width=560",
    title: "unknown 12",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F820340934336967&width=560",
    title: "unknown 13",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1909675546424556&width=560",
    title: "unknown 14",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F26035500682708691&width=560",
    title: "unknown 15",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F937634262276181&width=560",
    title: "unknown 16",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3343814969118165&width=560",
    title: "unknown 17",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1983977248851305&width=560",
    title: "unknown 18",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3307942266019720&width=560",
    title: "unknown 19",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1902416127356842&width=560",
    title: "unknown 20",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1200455802030349&width=560",
    title: "unknown 21",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1379631783815641&width=560",
    title: "unknown 22",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2233084703849717&width=560",
    title: "unknown 23",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2062276424518524&width=560",
    title: "unknown 24",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F811758835032662&width=560",
    title: "unknown 25",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F25043135632044731&width=560",
    title: "unknown 26",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1887220625221855&width=560",
    title: "unknown 27",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1491428218796987&width=560",
    title: "unknown 28",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F658866330385234&width=560",
    title: "unknown 29",
  },
];

export const projects: ProjectType[] = [
  {
    imageUrl: "/projects/link-pic.png",
    title: "Political Dream XI",
    link: "https://pdxi.netlify.app/",
  },
];

export const satireWorks: SatireType[] = [
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F301483049191241&width=560",
    title: "unknown 1",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F320128410792666&width=560",
    title: "unknown 2",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1284736355556054&width=560",
    title: "unknown 3",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F170510049433266&width=560",
    title: "unknown 4",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1047152013324688&width=560",
    title: "unknown 5",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1480487912714280&width=560",
    title: "unknown 6",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F888858089579010&width=560",
    title: "unknown 7",
  },
];

export const seminars: SeminarType[] = [
  {
    imageUrl: "/seminar/s-1.jpg",
  },
  {
    imageUrl: "/seminar/s-2.jpg",
  },
  {
    imageUrl: "/seminar/s-3.jpg",
  },
  {
    imageUrl: "/seminar/s-4.jpg",
  },
  {
    imageUrl: "/seminar/s-5.jpg",
  },
  {
    imageUrl: "/seminar/s-6.jpg",
  },
  {
    imageUrl: "/seminar/s-7.jpg",
  },
  {
    imageUrl: "/seminar/s-8.jpg",
  },
  {
    imageUrl: "/seminar/s-9.jpg",
  },
  {
    imageUrl: "/seminar/s-10.jpg",
  },
  {
    imageUrl: "/seminar/s-11.JPG",
  },
  {
    imageUrl: "/seminar/s-12.JPG",
  },
  {
    imageUrl: "/seminar/s-13.JPG",
  },
  {
    imageUrl: "/seminar/s-14.jpeg",
  },
  {
    imageUrl: "/seminar/s-15.jpg",
  },
];

export const social: SocialType[] = [
  {
    imageUrl: "/social/1.jpg",
  },
  {
    imageUrl: "/social/2.jpg",
  },
  {
    imageUrl: "/social/3.jpg",
  },
  {
    imageUrl: "/social/4.JPG",
  },
  {
    imageUrl: "/social/5.jpg",
  },
  {
    imageUrl: "/social/6.JPG",
  },
  {
    imageUrl: "/social/7.jpg",
  },
  {
    imageUrl: "/social/8.JPG",
  },
  {
    imageUrl: "/social/9.JPG",
  },
  {
    imageUrl: "/social/10.jpg",
  },
  {
    imageUrl: "/social/11.jpg",
  },
  {
    imageUrl: "/social/12.jpg",
  },
  {
    imageUrl: "/social/13.jpg",
  },
  {
    imageUrl: "/social/14.jpg",
  },
  {
    imageUrl: "/social/15.jpg",
  },
];
