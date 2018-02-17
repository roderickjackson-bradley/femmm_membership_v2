module.exports = {

  db: process.env.MONGODB || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/stripe-membership',

  sessionSecret: process.env.SESSION_SECRET || 'tomtom',

  mailgun: {
    apiKey: process.env.MAILGUN_API_KEY || 'key-4926fe008187aba2cf087f46b1a9a529',
    domain: process.env.MAILGUN_DOMAIN || 'sandbox9bf39c4de37249a89765d3687473d98f.mailgun.org'
  },

  stripeOptions: {
    apiKey: process.env.STRIPE_KEY || 'sk_test_IX88054HRDF3g4BXFzlq96vh',
    stripePubKey: process.env.STRIPE_PUB_KEY || 'pk_test_geA79qcLNlzvIRhDwCcbLbKK',
    defaultPlan: 'free',
    plans: ['free', 'silver', 'gold', 'platinum'],
    planData: {
      'free': {
        name: 'Free',
        price: 0
      },
      'silver': {
        name: 'Silver',
        price: 9
      },
      'gold': {
        name: 'Gold',
        price: 19
      },
      'platinum': {
        name: 'Platinum',
        price: 29
      }
    }
  },

  googleAnalytics: process.env.GOOGLE_ANALYTICS || ''
};
