'use server';

import { appendRecord } from '@/lib/dataStore.js';

const EMAIL_REGEX = /.+@.+\..+/i;

export async function submitContact(prevState, formData) {
  const name = (formData.get('name') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const message = (formData.get('message') || '').toString().trim();

  if (!name || !email || !message) {
    return {
      ok: false,
      error: 'MISSING_FIELDS'
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      ok: false,
      error: 'INVALID_EMAIL'
    };
  }

  await appendRecord('contact-submissions.json', {
    name,
    email,
    message
  });

  return {
    ok: true,
    error: null
  };
}
