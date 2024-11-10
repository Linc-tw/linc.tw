
/*=============================================================
    Authour URL: www.designbootstrap.com

    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */


//------------------------------------------------------------------------------
//-- Function declarations - html content

//-- Insert plain text
function addStr(id, string) {
  var node = document.getElementById(id)
  if (null !== node) {
    node.textContent = '';
    node.appendChild(document.createTextNode(string));
  }
}

//-- Insert html
function addHtml(id, string) {
  var node = document.getElementById(id)
  if (null !== node) {
    node.textContent = '';
    node.innerHTML = string;
  }
}

//------------------------------------------------------------------------------
//-- Function declarations - get string

function getFooterStr() {
  var current = new Date();
  var separator = ' \u00A0 | \u00A0 ';
  var str = '2014-' + current.getFullYear();
  str += separator;
  str += "<a href='https://linc.tw/'>linc.tw</a>";
  str += separator;
  str += 'Template by DesignBootstrap';
  return str;
}

function getEMailStr() {
  return 'linc <i class="fa fa-at"></i> radiantnuclear.com';
}

function getGitHubStr() {
  return 'Linc-tw';
}

function getAddressStr() {
  var str = '1921 E Maple Ave<br>';
  str += 'El Segundo, CA 90245<br>';
  str += 'USA';
  return str;
}

function getAboutStr() {
  var str = '<p>';
  str += 'My name is Chieh-An, but people usually call me <b>Linc</b>. ';
  str += 'I am a senior software engineer at <a href="http://www.radiantnuclear.com/" target="_blank">Radiant Industries, Inc.</a> in Southern California. ';
  str += '</p>';
  str += '<p> ';
  str += 'Prior to the current appointment, I conducted scientific research in cosmology and developed embedded software for real-time systems. ';
  str += 'My career journey has taken me across France, the UK, Taiwan, and the USA. ';
  str += 'For more information, please take a moment to explore this website.';
  str += '</p>';
  return str;
}

//------------------------------------------------------------------------------
//-- Function declarations - main

$(document).ready(function () {
  //-- Insert footer string
  addHtml('str_footer', getFooterStr());
  addHtml('str_email', getEMailStr());
  addHtml('str_github', getGitHubStr());
  addHtml('str_address', getAddressStr());
  addHtml('str_about', getAboutStr());

  // SCROLL SCRIPTS 
  $('.scroll-me a').bind('click', function (event) { //just pass scroll-me class and start scrolling
  var $anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
  }, 1000, 'easeInOutQuad');
  event.preventDefault();
  });
              
  // BACKGROUND VIDEO SCRIPTS
  $(function () {
      $(".player").mb_YTPlayer(); // .player - class to add for playing video ( see the div above to understand)
  });

  //FANCY BOX PLUGIN SCRIPT FOR POPUP IMAGE
  $('.fancybox-media').fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic',
      helpers: {
          title: {
              type: 'inside'
          }
      }
  });
});

//-- End of file
//------------------------------------------------------------------------------
