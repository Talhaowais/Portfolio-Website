import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { contact } from "../data/contact";

import { Mail, Phone, MapPin, Globe, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-[#0a0a0a] text-white px-4 sm:px-6"
    >
      <Container>
        <SectionTitle
          title="Contact Me"
          subtitle="Let’s build something amazing together"
        />

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mt-10">
          {[
            {
              icon: <Mail className="text-purple-400" size={20} />,
              label: "Email",
              value: contact.email,
              link: `mailto:${contact.email}`,
            },
            {
              icon: <Phone className="text-green-400" size={20} />,
              label: "Phone",
              value: contact.phone,
              link: `tel:${contact.phone}`,
            },
            {
              icon: <MapPin className="text-cyan-400" size={20} />,
              label: "Location",
              value: contact.location,
              link: null,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              {/* SOFT GLOW */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-green-500/10 opacity-0 group-hover:opacity-30 blur-md transition duration-500" />

              {/* CARD */}
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-md transition duration-300 group-hover:border-white/20 h-full">
                
                {/* ICON + LABEL */}
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    {item.label}
                  </h3>
                </div>

                {/* VALUE */}
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-gray-200 transition text-sm break-words"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-400 text-sm break-words">
                    {item.value}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SOCIALS */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 sm:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href={contact.socials.github}
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
          >
            <Globe size={18} className="text-purple-400" />
            GitHub
          </a>

          <a
            href={contact.socials.linkedin}
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
          >
            <Share2 size={18} className="text-cyan-400" />
            LinkedIn
          </a>
        </motion.div>

        {/* MESSAGE */}
        <motion.p
          className="text-center text-gray-500 mt-8 sm:mt-10 max-w-xl mx-auto text-sm px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {contact.message}
        </motion.p>
      </Container>
    </section>
  );
}