import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight,
  Box,
  Check,
  ChevronDown,
  ClipboardList,
  Clock3,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Sofa,
  Truck,
  X,
} from 'lucide-react'
import './styles.css'

type FormStatus = 'idle' | 'error' | 'success'

type FormData = {
  name: string
  email: string
  phone: string
  origin: string
  destination: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  origin: '',
  destination: '',
  message: '',
}

const services = [
  {
    number: '01',
    icon: Box,
    title: 'Mudanzas de hogar',
    description: 'Organizamos cada etapa para que tu casa llegue a destino con el mismo cuidado con el que la preparaste.',
    accent: 'sun',
  },
  {
    number: '02',
    icon: Sofa,
    title: 'Muebles y objetos especiales',
    description: 'Protección, carga y transporte atento para piezas delicadas, voluminosas o con un valor especial.',
    accent: 'ink',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Traslados coordinados',
    description: 'Una ruta clara, comunicación directa y un equipo preparado para que todo encaje en el momento adecuado.',
    accent: 'sand',
  },
]

const faqs = [
  {
    question: '¿Cómo solicito un presupuesto?',
    answer: 'Cuéntanos desde dónde y hacia dónde te mudas, qué necesitas trasladar y la fecha aproximada. Con esa información podremos valorar tu caso y preparar una orientación personalizada.',
  },
  {
    question: '¿Puedo pedir ayuda solo con la carga?',
    answer: 'Sí. Podemos adaptar el servicio a la parte del proceso en la que necesites apoyo: preparación, carga, traslado, descarga o coordinación completa.',
  },
  {
    question: '¿Trabajáis con objetos delicados?',
    answer: 'Planificamos la protección y manipulación de cada pieza según sus características. En la solicitud, indícanos qué objetos requieren una atención especial.',
  },
  {
    question: '¿Qué ocurre después de enviar el formulario?',
    answer: 'Revisaremos la información de tu solicitud y nos pondremos en contacto contigo para conocer mejor el traslado y los siguientes pasos.',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const [form, setForm] = useState<FormData>(initialForm)
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMenuOpen(false)
  }

  const updateField = (field: keyof FormData, value: string) => {
    setFormStatus('idle')
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const emailIsValid = /^\S+@\S+\.\S+$/.test(form.email)
    const requiredFields = [form.name, form.email, form.phone, form.origin, form.destination]

    if (requiredFields.some((field) => !field.trim()) || !emailIsValid) {
      setFormStatus('error')
      return
    }

    setFormStatus('success')
  }

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>Servicio cercano para cada nuevo comienzo</span>
          <a href="#solicitud" onClick={() => scrollTo('solicitud')}>
            Solicitar presupuesto <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => scrollTo('inicio')} aria-label="Volver al inicio">
            <span className="brand-mark"><MoveRight size={19} strokeWidth={3} /></span>
            <span className="brand-word">MUDANZA<span>.</span></span>
          </button>

          <nav className={isMenuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
            <button onClick={() => scrollTo('servicios')}>Servicios</button>
            <button onClick={() => scrollTo('proceso')}>Cómo trabajamos</button>
            <button onClick={() => scrollTo('preguntas')}>Preguntas</button>
            <button onClick={() => scrollTo('solicitud')}>Contacto</button>
          </nav>

          <div className="header-actions">
            <a className="contact-link" href="mailto:tu-correo@empresa.com">
              <Mail size={16} />
              <span>Escríbenos</span>
            </a>
            <button className="button button-small button-dark" onClick={() => scrollTo('solicitud')}>
              Pedir presupuesto <ArrowUpRight size={15} />
            </button>
          </div>

          <button className="menu-toggle" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-label="Abrir menú">
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Mudanzas con intención</div>
              <h1>Tu nuevo espacio empieza con <em>calma.</em></h1>
              <p className="hero-lede">Movemos tus cosas. Cuidamos tu momento. Un equipo atento para que cambiar de lugar se sienta más sencillo.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo('solicitud')}>Cuéntanos tu mudanza <ArrowUpRight size={17} /></button>
                <button className="text-link" onClick={() => scrollTo('proceso')}>Ver cómo trabajamos <MoveRight size={17} /></button>
              </div>
              <div className="hero-footnote"><ShieldCheck size={16} /> Planificación clara antes de mover la primera caja</div>
            </div>

            <div className="hero-visual" role="img" aria-label="Persona preparando una mudanza en un espacio luminoso">
              <div className="hero-image" />
              <div className="hero-image-wash" />
              <div className="visual-note visual-note-top"><Sparkles size={15} /> Cuidado en cada detalle</div>
              <div className="visual-card">
                <span className="visual-card-kicker">Tu mudanza, a tu medida</span>
                <strong>De la primera caja<br />al último detalle.</strong>
                <span className="visual-card-line" />
              </div>
              <div className="visual-number">01<span>/04</span></div>
            </div>
          </div>
          <div className="hero-stamp"><span>servicio</span><strong>que<br />se nota</strong><ArrowUpRight size={20} /></div>
        </section>

        <section className="signal-bar" aria-label="Valores del servicio">
          <div className="container signal-inner">
            <span>Planifica</span><span className="signal-star">✳</span><span>Protege</span><span className="signal-star">✳</span><span>Traslada</span><span className="signal-star">✳</span><span>Disfruta tu nuevo comienzo</span>
          </div>
        </section>

        <section className="intro section" id="proceso">
          <div className="container intro-grid">
            <div className="section-label"><span>01</span><span className="label-line" /><span>El proceso</span></div>
            <div className="intro-content">
              <h2>Una mudanza no es solo mover cosas. Es <span>abrir una nueva etapa.</span></h2>
              <p className="intro-text">Por eso empezamos escuchando. Entendemos lo que necesitas, ordenamos el camino y cuidamos cada paso para que tú puedas concentrarte en llegar.</p>
              <div className="steps-grid">
                <div className="step"><span className="step-number">01</span><ClipboardList size={23} /><h3>Hablamos</h3><p>Conocemos tu situación y tus prioridades.</p></div>
                <div className="step"><span className="step-number">02</span><Box size={23} /><h3>Preparamos</h3><p>Definimos la mejor forma de proteger y trasladar.</p></div>
                <div className="step"><span className="step-number">03</span><Check size={23} /><h3>Llegamos</h3><p>Coordinamos el día para que todo fluya.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="servicios">
          <div className="container">
            <div className="section-heading-row">
              <div><div className="section-label"><span>02</span><span className="label-line" /><span>Lo que hacemos</span></div><h2>Elige el apoyo que <span>necesitas.</span></h2></div>
              <p>Una solución flexible para cada tipo de traslado, con la claridad y el cuidado que esperas desde el primer contacto.</p>
            </div>
            <div className="service-grid">
              {services.map(({ number, icon: Icon, title, description, accent }) => (
                <article className={`service-card ${accent}`} key={title}>
                  <div className="service-top"><span className="service-number">{number}</span><Icon size={25} strokeWidth={1.8} /></div>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <button className="circle-arrow" onClick={() => scrollTo('solicitud')} aria-label={`Solicitar información sobre ${title}`}><ArrowUpRight size={18} /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-section section">
          <div className="container quote-box">
            <div className="quote-mark">“</div>
            <div><p className="quote-text">Las cosas importantes merecen un traslado a la altura.</p><p className="quote-caption">Desde tu primera pregunta hasta que cierras la última caja.</p></div>
            <button className="button button-light" onClick={() => scrollTo('solicitud')}>Empezar conversación <ArrowUpRight size={17} /></button>
          </div>
        </section>

        <section className="request section" id="solicitud">
          <div className="container request-grid">
            <div className="request-copy">
              <div className="section-label"><span>03</span><span className="label-line" /><span>Tu próximo paso</span></div>
              <h2>Cuéntanos dónde empieza y dónde <span>quieres llegar.</span></h2>
              <p>Déjanos unos datos básicos y prepararemos una primera orientación para tu mudanza. Sin compromiso y sin letra pequeña.</p>
              <div className="contact-details">
                <div><span className="detail-icon"><Mail size={17} /></span><div><small>Correo de contacto</small><strong>tu-correo@empresa.com</strong></div></div>
                <div><span className="detail-icon"><Clock3 size={17} /></span><div><small>Atención</small><strong>Respondemos a tu solicitud</strong></div></div>
                <div><span className="detail-icon"><MapPin size={17} /></span><div><small>Zona de servicio</small><strong>Añade aquí tu ciudad o región</strong></div></div>
              </div>
            </div>

            <form className="request-form" onSubmit={handleSubmit} noValidate>
              <div className="form-heading"><span>Solicitud de presupuesto</span><span className="form-required">* campos obligatorios</span></div>
              <div className="form-fields">
                <label>Nombre y apellidos *<input value={form.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Tu nombre" /></label>
                <label>Email *<input type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder="tu@email.com" /></label>
                <label>Teléfono *<input type="tel" value={form.phone} onChange={(event) => updateField('phone', event.target.value)} placeholder="Para poder localizarte" /></label>
                <div className="form-two-col"><label>Desde *<input value={form.origin} onChange={(event) => updateField('origin', event.target.value)} placeholder="Ciudad de origen" /></label><label>Hasta *<input value={form.destination} onChange={(event) => updateField('destination', event.target.value)} placeholder="Ciudad de destino" /></label></div>
                <label>Cuéntanos un poco más<textarea value={form.message} onChange={(event) => updateField('message', event.target.value)} placeholder="Fecha aproximada, volumen, objetos especiales..." rows={4} /></label>
              </div>
              {formStatus === 'error' && <p className="form-feedback form-error" role="alert">Revisa los campos obligatorios y escribe un email válido para continuar.</p>}
              {formStatus === 'success' && <div className="form-feedback form-success" role="status"><Check size={17} /><span>Hemos recibido tus datos en esta demo. Para recibir solicitudes reales, sustituye el correo provisional por el de tu empresa.</span></div>}
              <button className="button button-primary form-submit" type="submit">Enviar solicitud <ArrowUpRight size={17} /></button>
              <p className="form-legal">Al enviar aceptas que usemos estos datos únicamente para responder a tu solicitud. Añade y revisa tus textos legales antes de publicar.</p>
            </form>
          </div>
        </section>

        <section className="faq section" id="preguntas">
          <div className="container faq-grid">
            <div><div className="section-label"><span>04</span><span className="label-line" /><span>Preguntas frecuentes</span></div><h2>Antes de empezar, <span>resolvemos.</span></h2><p className="faq-intro">Si no encuentras lo que buscas, escríbenos y hablamos de tu caso concreto.</p><button className="text-link" onClick={() => scrollTo('solicitud')}>Hacer otra pregunta <MoveRight size={17} /></button></div>
            <div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${activeFaq === index ? 'is-active' : ''}`} key={faq.question}><button className="faq-question" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}><span>{faq.question}</span><ChevronDown size={18} /></button>{activeFaq === index && <p className="faq-answer">{faq.answer}</p>}</div>)}</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main"><div><button className="brand brand-footer" onClick={() => scrollTo('inicio')}><span className="brand-mark"><MoveRight size={19} strokeWidth={3} /></span><span className="brand-word">MUDANZA<span>.</span></span></button><p className="footer-tagline">Mover lo que importa.<br />Cuidar cómo llegas.</p></div><div className="footer-links"><div><span>Explora</span><button onClick={() => scrollTo('servicios')}>Servicios</button><button onClick={() => scrollTo('proceso')}>Cómo trabajamos</button><button onClick={() => scrollTo('preguntas')}>Preguntas</button></div><div><span>Hablemos</span><a href="mailto:tu-correo@empresa.com">tu-correo@empresa.com</a><button onClick={() => scrollTo('solicitud')}>Solicitar presupuesto</button></div></div></div>
        <div className="container footer-bottom"><span>© 2026 MUDANZA. Marca y datos pendientes de personalización.</span><span>Diseñado para empezar con buen pie.</span></div>
      </footer>
    </div>
  )
}

export default App

createRoot(document.getElementById('root')!).render(<App />)
