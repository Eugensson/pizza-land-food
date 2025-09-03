import Link from "next/link";

import { socialLinks } from "@/lib/data";

export const Socials = () => {
  return (
    <ul className="flex items-center gap-x-6">
      {socialLinks.map(({ icon: Icon, link, label }) => {
        return (
          <li key={label} aria-label={`${label} link`}>
            <Link href={link} target="_blank" rel="noreferrer noopener">
              <Icon size={28} className="text-white" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
