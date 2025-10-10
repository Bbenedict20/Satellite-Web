module.exports = {
    name: "Satellite Web Agency LLC",
    email: "Brad@Satellite-web.com",
    phoneForTel: "603-845-9940",
    phoneFormatted: "(603)-845-9940",
    address: {
        lineOne: "1295 Dunlin Drive",
        lineTwo: "302",
        city: "Melbourne",
        state: "FL",
        zip: "32934",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.satellite-web.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
