﻿
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
  return 'calin <i class="fa fa-at"></i> wpc.com.tw';
}

function getPhoneStr() {
  return '+886 2 8262 4431';
}

function getAddressStr() {
  var str = '新北市土城區青雲路55號<br>';
  str += '55 Qingyun Road<br>';
  str += 'Tucheng, New Taipei<br>';
  str += 'Taiwan';
  return str;
}

function getAboutStr() {
  var str = '<p>';
  str += 'My name is Chieh-An, but people usually call me <b>Linc</b>. ';
  str += 'I am a systems engineer at <a href="http://www.wpc.com.tw/" target="_blank">WPC Systems Ltd.</a> in Taipei area in Taiwan.</li> ';
  str += 'Prior to the current appointment, I was a researcher in cosmology. ';
  str += 'Information related to my research works can be found on this website. ';
  str += 'My career path includes the UK and France where I obtained my PhD degree in 2016, ';
  str += 'advised by <a href="http://www.cosmostat.org/people/kilbinger" target="_blank">Martin Kilbinger</a>. ';
  str += '</p>';
  return str;
}

//------------------------------------------------------------------------------
//-- Function declarations - main

$(document).ready(function () {
  //-- Insert footer string
  addHtml('str_footer', getFooterStr());
  addHtml('str_email', getEMailStr());
  addHtml('str_phone', getPhoneStr());
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
