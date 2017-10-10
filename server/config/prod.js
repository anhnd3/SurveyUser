module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID || '367059602287-koncvtge9vclkjm18vq724abmfa10usj.apps.googleusercontent.com',
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || 'Fh-esreVEr7NVANBU_gXFZF1',
    mongoURI: process.env.MONGO_URI || 'mongodb://waeprod:waepassword@ds125994.mlab.com:25994/emaily-production',
    cookieKey: process.env.COOKIE_KEY || 'waeauth',
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY
};