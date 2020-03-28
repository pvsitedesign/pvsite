(function($, window, document, undefined) {
'use strict';

  $(document).ready(function() {

    function toggleModal() {
      $('.modal').toggleClass('modal--show');
      $('body').toggleClass('ovh');
    }

    $('.modal__open').on('click', toggleModal);
    $('.modal__close').on('click', toggleModal);
  });

})(jQuery, window, document);
