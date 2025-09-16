const { favicons } = require('favicons');
const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, '../public/favicon.svg');
const destination = path.resolve(__dirname, '../public');

const configuration = {
  path: "/",
  appName: "Heejra",
  appShortName: "Heejra",
  appDescription: "TechCraft Solutions - Pengembangan Web & App Kustom",
  developerName: "TechCraft Solutions",
  developerURL: "https://heejra.dev",
  dir: "auto",
  lang: "id-ID",
  background: "#ffffff",
  theme_color: "#4E5FF0",
  appleStatusBarStyle: "black-translucent",
  display: "standalone",
  orientation: "any",
  scope: "/",
  start_url: "/",
  version: "1.0",
  logging: false,
  pixel_art: false,
  loadManifestWithCredentials: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    windows: false,
    yandex: false
  }
};

(async () => {
  try {
    const response = await favicons(source, configuration);
    
    // Write the HTML meta tags to a file for reference
    fs.writeFileSync(path.resolve(__dirname, '../public/favicon-meta.html'), response.html.join('\n'));
    
    // Write all the generated files
    response.images.forEach(image => {
      fs.writeFileSync(path.resolve(destination, image.name), image.contents);
    });
    
    response.files.forEach(file => {
      fs.writeFileSync(path.resolve(destination, file.name), file.contents);
    });
    
    console.log('Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
})();