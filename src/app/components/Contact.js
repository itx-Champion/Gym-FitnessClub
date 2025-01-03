export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-secondary text-text-color">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ textShadow: 'var(--neon-glow)' }}>Contactez-nous</h2>
          <p className="mb-6">Have questions? Feel free to contact us using the form below.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-text-color text-secondary" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg bg-text-color text-secondary" />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-lg bg-text-color text-secondary"></textarea>
            <button className="px-6 py-3 bg-primary-color text-secondary font-bold rounded-full">Envoyer</button>
          </form>
        </div>
      </section>
    );
  }