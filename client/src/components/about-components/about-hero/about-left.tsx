import type { ReactNode } from "react";

export default function AboutLeft(): ReactNode {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="w-full flex flex-col gap-1">
        <h1 className="text-4xl text-white font-semibold">Azmain Zahin Raaz</h1>
        <p className="text-lg opacity-95 text-white font-medium">
          Artist, Graphic Designer, Leader
        </p>
      </div>
      <div className="w-full h-px bg-gray-600 opacity-50" />
      <div className="w-full flex flex-col gap-6 text-[0.9rem]/[170%] text-white">
        <p>
          Saad Al Amin is a Bangladeshi artist, filmmaker and graphics designer
          born 3 August 2005 in Dhaka, Bangladesh. He is now working as a
          leading personality in tons of activities. Saad is also a very well
          known personality in Bangladesh who has been working hard to make a
          difference in Bangladesh. He is also very passionate about working
          with youth. He founded Muktir Ghonta and Videophics in 2018. Muktir
          Ghonta is an organization that helps youth to develop their potential
          through Creative Works. He has also founded Creative Youth Community -
          CYC which helps to develop the skills of the youth through arts &
          culture related activities.
        </p>
        <p>
          At present, he is also serving as Campus Ambassador at English
          Olympiad and as Photography & Design Artist at 100 Million Mindset. As
          a Graphics Design Artist he has worked on more than 300 projects with
          international Companies & Individuals. He has been recognized for his
          work both nationally and internationally. He was chosen as one of the
          top six finalists of the Glocal Teen Hero Award as an Artist in 2022
          and he was also awarded the Elan Record USA Best Designer Award in
          2020.
        </p>
      </div>
    </div>
  );
}
