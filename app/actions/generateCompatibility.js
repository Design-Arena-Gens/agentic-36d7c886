'use server';

import { appendRecord } from '@/lib/dataStore.js';
import {
  zodiacCompatibilities,
  defaultFallbackNarrative
} from '@/i18n';

function resolveNarrative(a, b) {
  const primary = zodiacCompatibilities[a]?.[b];
  if (primary) {
    return primary;
  }
  const secondary = zodiacCompatibilities[b]?.[a];
  if (secondary) {
    return secondary;
  }
  return defaultFallbackNarrative;
}

export async function generateCompatibility(prevState, formData) {
  const userSign = (formData.get('userSign') || '').toString();
  const partnerSign = (formData.get('partnerSign') || '').toString();
  const intention = (formData.get('intention') || '').toString();

  if (!userSign || !partnerSign) {
    return {
      ok: false,
      error: 'MISSING_SIGNS'
    };
  }

  const narrative = resolveNarrative(userSign, partnerSign);

  const result = {
    userSign,
    partnerSign,
    intention,
    compatibility: narrative.compatibility,
    story: narrative.story,
    rituals: narrative.rituals
  };

  await appendRecord('compatibility-records.json', result);

  return {
    ok: true,
    result,
    error: null
  };
}
