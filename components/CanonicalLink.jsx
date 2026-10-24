'use client';

import { usePathname } from 'next/navigation';

const SITE_URL = 'https://vediccitygraama.deedivinegroups.com';

export default function CanonicalLink() {
  const pathname = usePathname();
  const path = pathname && pathname !== '/' ? pathname.replace(/\/+$/, '') : '';
  return <link rel="canonical" href={`${SITE_URL}${path}`} />;
}
