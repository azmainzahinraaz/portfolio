import PrimaryBtn from "@/components/ui/primary-btn";
import type { CertificateType } from "@/types/about-types";
import type { ReactNode } from "react";

export default function CertificateCard({
  certificate,
}: {
  certificate: CertificateType;
}): ReactNode {
  return (
    <div className="w-full h-full pb-7 pt-2.5 flex gap-7.5 max-xs:flex-col border-b border-gray/60 last:border-0">
      <img
        src={certificate.logoUrl}
        alt={certificate.title}
        className="w-17 h-17 rounded-md object-center object-cover"
      />
      <div className="w-full flex flex-col">
        <h3 className="text-white text-lg font-semibold">
          {certificate.title}
        </h3>
        <p className="text-sm text-white pb-2">{certificate.issuer}</p>
        <p className="text-light-gray text-sm">
          Issued: {certificate.issueDate}
        </p>
        <PrimaryBtn
          href={certificate.credentialUrl}
          className="mt-3 w-max text-sm"
          target={"_blank"}
          isLink={true}
        >
          View Certificate
        </PrimaryBtn>
      </div>
    </div>
  );
}
