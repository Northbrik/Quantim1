'use client';
import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

interface Props {
  /**
   * Cal.com booking link in the form `username/event-type-slug`.
   * Charu will create this when her Cal.com account is set up
   * (with Zoom + Google Calendar already connected on the Cal.com side).
   */
  calLink: string;
}

export default function BookingCalendar({ calLink }: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#2f5238',
            'cal-text': '#2a2a26',
            'cal-text-emphasis': '#1f3826',
            'cal-bg': '#f5f1e8',
            'cal-bg-emphasis': '#ece6d5',
            'cal-border': 'rgba(107,74,43,0.25)',
            'cal-border-emphasis': 'rgba(47,82,56,0.45)',
          },
          // Forced to light below, but the type requires both.
          dark: {
            'cal-brand': '#5a8a4a',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <div className="rounded-md border border-earth/20 overflow-x-auto bg-paperSoft/30">
      <Cal
        calLink={calLink}
        style={{ width: '100%', height: '100%', minWidth: 320, minHeight: 720 }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}
