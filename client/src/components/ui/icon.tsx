import type { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

type IconProps = {
  iconName: string;
  className?: string;
};

export default function Icon({ iconName, className }: IconProps): ReactNode {
  const icons: { [key: string]: ReactNode } = {
    // social media icons
    facebook: <FaFacebook className={className} />,
    instagram: <FaInstagram className={className} />,
    email: <FaEnvelope className={className} />,
    phone: <FaPhoneAlt className={className} />,
  };

  return icons[iconName] || null;
}
