"use client";

import { useI18n } from "@/lib/i18n-provider";
import type { TranslationKey } from "@/lib/i18n";

type TProps = {
  k: TranslationKey;
  className?: string;
};

export default function T({ k, className }: TProps) {
  const { translate } = useI18n();
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: translate(k) }}
    />
  );
}
