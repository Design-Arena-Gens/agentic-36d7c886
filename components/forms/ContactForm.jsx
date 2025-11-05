'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { submitContact } from '@/app/actions/submitContact.js';
import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

const initialState = { ok: false, error: null };

export function ContactForm() {
  const formRef = useRef(null);
  const { translate } = useLanguage();
  const [state, setState] = useState(initialState);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (state?.ok && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      const response = await submitContact(initialState, formData);
      setState(response);
    });
  };

  const errorMessage =
    state?.error === 'INVALID_EMAIL'
      ? translate('contact.failures.generic')
      : state?.error === 'MISSING_FIELDS'
        ? translate('contact.failures.generic')
        : null;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <div className="form-field">
        <label htmlFor="name">{translate('contact.form.name')}</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="email">{translate('contact.form.email')}</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="message">{translate('contact.form.message')}</label>
        <textarea id="message" name="message" rows="5" required />
      </div>
      <button type="submit" className="button button--primary" disabled={isPending}>
        {isPending ? '…' : translate('contact.form.submit')}
      </button>
      {errorMessage && <p className="form-message form-message--error">{errorMessage}</p>}
      {state?.ok && !errorMessage && (
        <p className="form-message form-message--success">{translate('contact.success')}</p>
      )}
    </form>
  );
}
