import { useState } from 'react'
import { profile } from '@/data/profile'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LinkedInIcon, MailIcon } from '@/components/ui/Icons'

const formspreeId = import.meta.env.VITE_FORMSPREE_ID

export function Contact() {
  const [status, setStatus] = useState('idle')
  const { contact } = profile

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const organisation = String(data.get('organisation') || '').trim()
    const subject = String(data.get('subject') || 'Introduction').trim()
    const message = String(data.get('message') || '').trim()

    if (formspreeId) {
      setStatus('sending')
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        })
        if (!response.ok) throw new Error('Unable to send')
        setStatus('sent')
        form.reset()
      } catch {
        setStatus('error')
      }
      return
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : '',
      '',
      message,
    ]
      .filter((line, index, lines) => line !== '' || lines[index - 1] !== '')
      .join('\n')

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('mailto')
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <Container>
        <div className="contact__layout">
          <Reveal>
            <SectionHeading
              id="contact-heading"
              eyebrow="Contact"
              heading="Let’s connect."
              copy="Whether you would like to discuss international student recruitment, university partnerships, market engagement or a professional opportunity, feel free to get in touch."
            />

            <ul className="contact-list">
              <li>
                <span>Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <span>Location</span>
                <p>{profile.locationFull}</p>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  {contact.linkedinLabel}
                </a>
              </li>
            </ul>

            <div className="contact__actions">
              <Button href={`mailto:${contact.email}`} onDark>
                <MailIcon />
                Email Aashir
              </Button>
              <Button
                href={contact.linkedin}
                variant="secondary"
                onDark
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                Connect on LinkedIn
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form className="form" onSubmit={onSubmit}>
              <div className="form__row">
                <label>
                  Name
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" autoComplete="email" required />
                </label>
              </div>
              <div className="form__row">
                <label>
                  Organisation
                  <input name="organisation" type="text" autoComplete="organization" />
                </label>
                <label>
                  Subject
                  <input name="subject" type="text" />
                </label>
              </div>
              <label>
                Message
                <textarea name="message" required />
              </label>
              <Button type="submit" onDark disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </Button>
              <p className="form__hint">
                {formspreeId
                  ? status === 'sent'
                    ? 'Thank you. Your message has been sent.'
                    : status === 'error'
                      ? 'The message could not be sent. Please email Aashir directly.'
                      : 'Your message will be sent to Aashir.'
                  : 'This opens your email client with the message. There is no automatic form submission.'}
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
