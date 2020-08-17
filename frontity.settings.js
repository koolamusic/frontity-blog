const settings = {
  "name": "andrew-miracle",
  "state": {
    "frontity": {
      "url": "https://andrewmiracle.com",
      "title": "Andrew",
      "description": "The Blog of Andrew Miracle"
    }
  },
  "packages": [
    {
      "name": "koolamusic-frontity-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Android",
              "/category/android/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://wp.andrewmiracle.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
