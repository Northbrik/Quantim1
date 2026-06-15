import { config, fields, singleton } from '@keystatic/core'

export default config({
  storage:
    process.env.KEYSTATIC_GITHUB_CLIENT_ID
      ? {
          kind: 'github',
          repo: { owner: 'Northbrik', name: 'Quantim1' },
        }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Quantum View' },
  },

  singletons: {
    home: singleton({
      label: 'Home Page',
      path: 'content/home/',
      schema: {
        heroSubtitle: fields.text({
          label: 'Hero subtitle (below "Quantum View")',
        }),
        introText: fields.text({
          label: 'Introduction paragraph (the "Quantum (R) Evolution" link is added automatically at the end)',
          multiline: true,
        }),
        moreInfoText: fields.text({
          label: 'More information paragraph',
          multiline: true,
        }),
        pricingText: fields.text({
          label: 'Pricing — main line (e.g. "A session costs £70.")',
        }),
        pricingNote: fields.text({
          label: 'Pricing — note (e.g. "Concessionary rate available.")',
        }),
        aboutBio: fields.text({
          label: 'About Charu — bio text',
          multiline: true,
        }),
      },
    }),

    aboutTherapy: singleton({
      label: 'About the Therapy',
      path: 'content/about-therapy/',
      schema: {
        whatIsQuantumTherapy: fields.text({
          label: 'What is Quantum Therapy?',
          multiline: true,
        }),
        whyTakeAsSession: fields.text({
          label: 'Why take it as a therapy session?',
          multiline: true,
        }),
        typicalSession: fields.text({
          label: 'What does a typical session look like?',
          multiline: true,
        }),
        howManySessions: fields.text({
          label: 'How many sessions?',
          multiline: true,
        }),
        howLong: fields.text({
          label: 'How long does a session last?',
          multiline: true,
        }),
        finally: fields.text({
          label: 'Finally',
          multiline: true,
        }),
        aboutCofounder: fields.text({
          label: 'About the co-founder (Ekta Bouderlique)',
          multiline: true,
        }),
      },
    }),
  },
})
