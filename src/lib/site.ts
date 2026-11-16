import site from '../content/settings/site.json';

export { site };

export const addressLines = [
  site.address.line1,
  site.address.line2,
  site.address.locality,
  `${site.address.city} ${site.address.pincode}`,
];

export const addressOneLine = `${site.address.line1}, ${site.address.line2}, ${site.address.locality}, ${site.address.city} ${site.address.pincode}`;

export function waLink(topic?: string) {
  const text = topic ? `${site.whatsappMessage} ${topic}.` : site.whatsappMessage;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const primaryPhone = site.phones[0];

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }) {
  return new Date(iso + 'T00:00:00+05:30').toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', ...opts });
}
