import PrimaryBtn from "@/components/ui/primary-btn";
import type { PublicationType } from "@/types/about-types";
import type { ReactNode } from "react";

export default function PublicationCard({
  publication,
}: {
  publication: PublicationType;
}): ReactNode {
  return (
    <div className="w-full h-full pb-7 pt-2.5 flex gap-7.5 max-xs:flex-col border-b border-gray/60 last:border-0">
      <img
        src={publication.imageUrl}
        alt={publication.title}
        className="w-22.5 h-30 rounded-md object-center object-cover"
      />
      <div className="w-full flex flex-col">
        <h3 className="text-white text-lg font-semibold">
          {publication.title}
        </h3>
        <p className="text-sm text-white pb-2">{publication.author}</p>
        <div>
          <p className="text-light-gray text-sm">{publication.date}</p>
        </div>
        {publication.publishedOn.length == 1 ? (
          <PrimaryBtn
            href={publication.publishedOn[0].link}
            className="mt-3 w-max text-sm"
            target={"_blank"}
            isLink={true}
          >
            View the paper
          </PrimaryBtn>
        ) : (
          <div className="w-full flex gap-2">
            {publication.publishedOn.map((pub, index) => (
              <PrimaryBtn
                key={index}
                href={pub.link}
                className="mt-3 w-max text-sm flex items-center"
                target={"_blank"}
                isLink={true}
              >
                {pub.logoUrl && (
                  <img
                    src={`/images/icons/company/${pub.logoUrl}`}
                    alt={pub.name}
                    className="inline-block w-6 h-6 mr-1"
                  />
                )}{" "}
                {pub.name}
              </PrimaryBtn>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
