import { siteContent } from "../content/site";
import { buildWhatsAppUrl } from "../lib/whatsapp";

export default function WhatsAppFloat() {
  const { contact } = siteContent;
  const whatsappUrl = buildWhatsAppUrl(contact.whatsappNumber, contact.whatsappGeneralMessage);

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.2c-7.07 0-12.8 5.48-12.8 12.25 0 2.38.71 4.6 1.94 6.48L3 29l7.43-1.97a13.3 13.3 0 0 0 5.57 1.21c7.07 0 12.8-5.48 12.8-12.24C28.8 8.68 23.07 3.2 16 3.2Zm0 22.95c-1.75 0-3.45-.46-4.94-1.34l-.35-.2-4.41 1.17 1.18-4.08-.23-.35a9.74 9.74 0 0 1-1.53-5.25C5.72 10.41 10.33 6 16 6s10.28 4.41 10.28 9.84S21.67 26.15 16 26.15Zm5.63-7.44c-.31-.15-1.82-.86-2.1-.96-.28-.1-.49-.15-.69.15-.2.29-.79.96-.97 1.16-.18.2-.36.22-.67.07-.31-.15-1.3-.46-2.48-1.47a9.17 9.17 0 0 1-1.72-2.05c-.18-.29-.02-.44.13-.58.14-.14.31-.36.46-.54.15-.17.2-.29.31-.49.1-.19.05-.36-.03-.51-.08-.15-.69-1.59-.95-2.18-.25-.58-.5-.5-.69-.51h-.59c-.2 0-.54.07-.82.36-.28.29-1.08 1.01-1.08 2.47 0 1.46 1.11 2.87 1.26 3.07.15.19 2.18 3.2 5.29 4.49.74.31 1.31.49 1.76.63.74.22 1.42.19 1.95.12.6-.09 1.82-.71 2.08-1.4.26-.68.26-1.27.18-1.39-.08-.12-.28-.19-.59-.34Z"/>
      </svg>
    </a>
  );
}
