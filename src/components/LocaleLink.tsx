"use client";

import type { AnchorHTMLAttributes } from "react";
import { useI18n } from "@/lib/i18n-provider";
import { localizeHref } from "@/lib/site";

type LocaleLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function LocaleLink({ href, ...rest }: LocaleLinkProps) {
  const { lang } = useI18n();
  return <a href={localizeHref(lang, href)} {...rest} />;
}
