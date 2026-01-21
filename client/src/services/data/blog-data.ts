export type BlogType = {
  _id: string;
  imageUrl: string;
  date: string;
  publisher: string;
  title: string;
  link: string;
};

export const blogs: BlogType[] = [
  {
    _id: "1",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*5t1hWGbo0QrogrGkHGHTJg.png",
    date: "December 23, 2025",
    publisher: "Medium",
    title: "A Balcony in Bloom: My Family’s Garden of Love",
    link: "https://medium.com/@azmainzahinraaz/a-balcony-in-bloom-my-familys-garden-of-love-c721200f46fa",
  },
  {
    _id: "2",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*2FUjITGz2dfWzrN-ncQAlg.png",
    date: "October 30, 2025",
    publisher: "Medium",
    title: "The Power of Positive Influence",
    link: "https://medium.com/@azmainzahinraaz/the-power-of-positive-influence-751b1f76ba8b",
  },
];
