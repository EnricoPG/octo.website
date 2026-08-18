import Image from "next/image";
import { clients } from "../../content/clients";

export default function ClientStrip() {
  const repeated = [...clients, ...clients];
  return (
    <section className="client-strip section-line" aria-label="Clientes OCTO">
      <div className="client-track">
        {repeated.map((client, i) => (
          <div className="client-slot" key={`${client.label}-${i}`}>
            {client.logo ? <Image src={client.logo} alt={client.label} width={130} height={48} /> : <span>{client.label}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
