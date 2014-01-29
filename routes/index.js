
/*
 * GET home page.
 */

exports.index = function(req, res){
  var info = {
    title: 'juanpaulogutierrez.com',
    backgroundUrl: 'http://farm8.staticflickr.com/7033/6668797013_bb1dc44269_b.jpg',
    domain: 'juanpaulogutierrez',
    tld: '.com',
    message: 'Launching soon!',
    snsLinks: [
      { url: "http://www.facebook.com/juanpaulogutierrez", iconClass: "fa-facebook" },
      { url: "http://plus.google.com/+JuanPauloGutierrez/about", iconClass: "fa-google-plus" },
      { url: "http://jp.linkedin.com/pub/juan-paulo-gutierrez/2b/b06/284/", iconClass: "fa-linkedin" },
      { url: "http://github.com/juanpaulo", iconClass: "fa-github" },
      { url: "http://twitter.com/jp_gutierrez17", iconClass: "fa-twitter" },
      { url: "http://www.flickr.com/photos/juan_paulo/", iconClass: "fa-flickr" },
      { url: "http://instagram.com/juanpaulo", iconClass: "fa-instagram" }
    ],
    launchDate: 'April 17, 2014 00:00:00'
  }
  res.render('index', info);
};