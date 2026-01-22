import type {
  PodcastType,
  ProjectType,
  PhotographyType,
  DesignType,
  SeminarType,
  SocialType,
  MusicVideoType,
  MyWorkType,
  DocumentaryType,
  TopContent,
} from "@/types/work-type";
import { FaLinkedin } from "react-icons/fa";

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
    ],
  },
  {
    imageUrl: "/my-works/headlinehaalchaal_logo.jpg",
    title: "Headline Haalchaal",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/headlinehaalchaal/",
        icon: <FaLinkedin />,
      },
    ],
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
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F363040082778258&width=560",
    title:
      "Neshar Bojha - Popeye Bangladesh - Covered by Government Science College Cultural Club",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1036732984025473&width=560",
    title: "শহরের একমাত্র প্রেমিকা 🥺",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F700169898318958&width=560",
    title: "heaven for us !!",
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
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F777924507256276&width=560",
    title: "Is this the place, we used to love? 🎥 : Azmain Zahin Raaz",
  },
];

export const topContents: TopContent[] = [
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

export const musicVideos: MusicVideoType[] = [
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fmusicvideos%2Fnibedon.jpeg?alt=media&token=48751f69-6fa7-4807-b8cd-6dd8c7615917",
    title: "Nibedon - Official Music Video",
    link: "https://www.youtube.com/watch?v=0yD8Lvs-JYE",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fmusicvideos%2Framjan.jpg?alt=media&token=90745905-bde2-4f13-a08f-ffbbfa380134",
    title: "Ramjan - Official Music Video",
    link: "https://www.youtube.com/watch?v=Z4bWcX1bUuI",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fmusicvideos%2Ftarkothavebe.jpeg?alt=media&token=c3816004-8e76-4609-8bf1-72e90264e293",
    title: "Tarkotha Vebe - Official Music Video",
    link: "https://www.youtube.com/watch?v=EJXhY7bX4oM",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fmusicvideos%2Frojarbarta.jpeg?alt=media&token=f745ed9d-bdcd-469e-978a-2a75c32c483e",
    title: "Rojar Barta - Official Music Video",
    link: "https://www.youtube.com/watch?v=1KXJc1W6b0I",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fmusicvideos%2Fshadinota.jpg?alt=media&token=fec8dd4d-6ff1-43d7-9ad6-d45aec3026d5",
    title: "Shadinota - Official Music Video",
    link: "https://www.youtube.com/watch?v=1nQ1jz1j4xI",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fmusicvideos%2Fdishehara.jpeg?alt=media&token=de1920df-d087-4617-b7db-6e20aa24f9a0",
    title: "Dishehara - Official Music Video",
    link: "https://www.youtube.com/watch?v=1pXU1b0k8bE",
  },
];

export const podcasts: PodcastType[] = [
  {
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F301483049191241&width=560",
    title: "Saad Al Amin Podcast 1",
  },
  {
    src: "https://www.youtube.com/embed/KuhqoBdmjzA?si=zCFegP-iXTGL5JvN",
    title: "Saad Al Amin Podcast 2",
  },
];

export const projects: ProjectType[] = [
  { src: "https://www.youtube.com/embed/uj60JrZcvts", title: "uj60JrZcvts" },
  { src: "https://www.youtube.com/embed/8BwhciEvKsI", title: "8BwhciEvKsI" },
  { src: "https://www.youtube.com/embed/Oqywer0ejjU", title: "Oqywer0ejjU" },
  { src: "https://www.youtube.com/embed/6ghDK8BLlB4", title: "6ghDK8BLlB4" },
  { src: "https://www.youtube.com/embed/wcW1zMyCCRM", title: "wcW1zMyCCRM" },
  { src: "https://www.youtube.com/embed/CfIsU1N3_A8", title: "CfIsU1N3_A8" },
  { src: "https://www.youtube.com/embed/ngVipGUL8_o", title: "ngVipGUL8_o" },
  { src: "https://www.youtube.com/embed/VKr6g4tLhTA", title: "VKr6g4tLhTA" },
  { src: "https://www.youtube.com/embed/iYrbqV9NZRk", title: "iYrbqV9NZRk" },
  { src: "https://www.youtube.com/embed/pR393ERBV38", title: "pR393ERBV38" },
  { src: "https://www.youtube.com/embed/54mSnqleMp0", title: "54mSnqleMp0" },
  {
    src: "https://www.youtube.com/embed/t-eEGaxhhCk",
    title: "Abu Adam - Lost | Official Nasheed Video (Vocals Only)",
  },
];

export const photography: PhotographyType[] = [
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC02539.jpg?alt=media&token=49527fbe-1aeb-4e84-bb12-f6f707122793",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC00122.jpg?alt=media&token=dc36cd56-d879-4323-8b92-22aa0cabc068",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2F7.jpg?alt=media&token=11002a1f-6521-42e5-b3ed-3e8546bcd948",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2F1.jpg?alt=media&token=724b4d92-8524-42da-882d-cf7ff7ab20f7",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC00432.jpg?alt=media&token=ae70a1f5-ecab-4e89-afc3-d40d08b2e7bf",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC02741.jpg?alt=media&token=e927c884-756f-4dc1-bdff-2bf293ee98a9",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC0993.jpg?alt=media&token=f4b40f28-8e7f-4d49-9edb-8eadfc7b072d",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC00867.jpg?alt=media&token=ddf74481-3398-45a6-b765-33b18fa3dc20",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC00908.jpg?alt=media&token=5f3bcc73-4633-4ef6-8173-5c8e27f70a24",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fphotography%2FDSC01338.jpg?alt=media&token=4610ab3e-b697-49a6-bf18-40d3d9d3db39",
  },
];

export const designs: DesignType[] = [
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F1.jpg?alt=media&token=63f1bd0a-e9e3-4ec6-b522-acb046e374be",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F2.jpg?alt=media&token=9d65b3a6-5290-438a-9e53-ea431c4f5ec9",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F3.jpg?alt=media&token=8477fb19-d376-492b-ad17-ae9659341af7",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F4.jpg?alt=media&token=09025930-f8eb-46a0-8ca3-6e7bf733a5de",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F5.jpg?alt=media&token=803488f2-1f05-42da-b44a-c616dbc8e1e7",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F11.jpg?alt=media&token=23eb6707-7940-4c5f-ae4e-96e69e0b7da9",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F7.jpg?alt=media&token=ee246940-9ffc-4473-b11f-895701c17ac5",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F8.jpg?alt=media&token=9f36508e-3814-4743-92b7-cc6505a35504",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F9.jpg?alt=media&token=1c1df5b6-b803-4c66-a1f5-317a29260537",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F10.jpg?alt=media&token=9b5fe7de-874d-428f-a67f-4c0dbbb263e7",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fdesign%2F6.jpg?alt=media&token=bf3bbce7-d859-4041-bb7c-c269cfa3197b",
  },
];

export const seminars: SeminarType[] = [
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsaadalamin0%2Fposts%2Fpfbid02B596uxb5mr4FQYJk4kfHnoQTBMG46khWCKGWvZYFpENVEVb1gYKDNKkfUe8d13SWl&show_text=false&width=500",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsaadalamin04%2Fvideos%2F1228096624518711%2F&show_text=false&width=267&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1070534523723163%26set%3Da.228624607914163%26type%3D3&show_text=false&width=500",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsaadalamin0%2Fvideos%2F523173459991807%2F&show_text=false&width=560&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsaadalamin0%2Fvideos%2F1378693929368500%2F&show_text=false&width=560&t=0",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsaadalamin0%2Fvideos%2F909133580096670%2F&show_text=false&width=560&t=0",
  },
];

export const social: SocialType[] = [
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F1.jpg?alt=media&token=31f160f1-7148-473d-97cf-3e0a06fe0b3c",
    title: "After Working at Ramadan Iftar Donation Project 2022",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F2.jpg?alt=media&token=4fb86d1a-e5ce-4680-9a9d-2d8ded3774fc",
    title: "After Working at Ramadan Iftar Donation Project 2022",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F3.jpg?alt=media&token=0b95f4cb-da28-457b-b45b-a03dad7b25cb",
    title: "After Working at Ramadan Iftar Donation Project 2022",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F4.jpg?alt=media&token=f722c59b-9382-4dba-b59e-6cc5d20a1af9",
    title: "After Working at Ramadan Iftar Donation Project 2022",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F5.jpg?alt=media&token=3325d778-33c4-4713-a3af-547f094ed5eb",
    title: "After Working at Ramadan Iftar Donation Project 2022",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F6.jpg?alt=media&token=0794d2f0-c622-4311-a66e-0c60eb7a85cf",
    title: "After Working at Ramadan Iftar Donation Project 2022",
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/saadalamindev.appspot.com/o/works%2Fsocial%2F7.jpg?alt=media&token=725131e8-e7dc-4e70-a572-f8b2e382206b",
    title: "After Working at Ramadan Iftar Donation Project 2022",
  },
];
