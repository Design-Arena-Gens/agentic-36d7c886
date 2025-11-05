'use client';

import { useState, useTransition } from 'react';
import { generateCompatibility } from '@/app/actions/generateCompatibility.js';
import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

function formatCompatibility(value) {
  return `${Math.round((value || 0) * 100)}%`;
}

export function CompatibilityForm() {
  const { translate } = useLanguage();
  const [state, setState] = useState({ ok: false, result: null, error: null });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(async () => {
      const response = await generateCompatibility(null, formData);
      setState(response);
    });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setState({ ok: false, result: null, error: null });
  };

  const zodiacOptions = translate('tool.zodiacOptions', []);
  const intentions = translate('tool.intentions', []);

  return (
    <div className="compatibility">
      <form className="compatibility__form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="userSign">{translate('tool.yourSign')}</label>
          <select id="userSign" name="userSign" required>
            <option value="">—</option>
            {Array.isArray(zodiacOptions) &&
              zodiacOptions.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="partnerSign">{translate('tool.partnerSign')}</label>
          <select id="partnerSign" name="partnerSign" required>
            <option value="">—</option>
            {Array.isArray(zodiacOptions) &&
              zodiacOptions.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="intention">{translate('tool.intention')}</label>
          <select id="intention" name="intention">
            <option value="">—</option>
            {Array.isArray(intentions) &&
              intentions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
        <div className="form-actions">
          <button className="button button--primary" type="submit" disabled={isPending}>
            {isPending ? '…' : translate('tool.submit')}
          </button>
          <button className="button button--ghost" type="button" onClick={handleReset}>
            {translate('tool.reset')}
          </button>
        </div>
        {state.error === 'MISSING_SIGNS' && (
          <p className="form-message form-message--error">{translate('tool.errors.missing')}</p>
        )}
        {state.ok && (
          <p className="form-message form-message--success">{translate('tool.archiveSuccess')}</p>
        )}
      </form>
      {state.ok && state.result && (
        <div className="compatibility__result">
          <h3>{translate('tool.resultTitle')}</h3>
          <p className="compatibility__score">{formatCompatibility(state.result.compatibility)}</p>
          <p>{state.result.story}</p>
          <h4>{translate('tool.ritualsTitle')}</h4>
          <ul>
            {state.result.rituals.map((ritual) => (
              <li key={ritual}>{ritual}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
