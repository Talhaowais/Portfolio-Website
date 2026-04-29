import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import { contact } from "../data/contact";

import { Mail, Phone, MapPin, Globe, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionTitle
          title="Contact Me"
          subtitle="Let’s build something amazing together"
        />

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Mail size={20} />,
              label: "Email",
              value: contact.email,
              link: `mailto:${contact.email}`,
            },
            {
              icon: <Phone size={20} />,
              label: "Phone",
              value: contact.phone,
              link: `tel:${contact.phone}`,
            },
            {
              icon: <MapPin size={20} />,
              label: "Location",
              value: contact.location,
              link: null,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-3 text-white">
                  {item.icon}
                  <h3 className="font-semibold">{item.label}</h3>
                </div>

                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-400">{item.value}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Socials */}
        <motion.div
          className="flex justify-center gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href={contact.socials.github}
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <Globe size={18} />
            GitHub
          </a>

          <a
            href={contact.socials.linkedin}
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <Share2 size={18} />
            LinkedIn
          </a>
        </motion.div>

        {/* Message */}
        <motion.p
          className="text-center text-gray-500 mt-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {contact.message}
        </motion.p>
      </Container>
    </section>
  );
}