console.log('Hello Berlin!');

// Iteration 1
function goToPage(link) {
  // Goal: hide all the divs with data-page, except the right one
  // Solution 1
  $('[data-page]').hide();
  $(`[data-page='${link}']`).show();

  // Solution 2
  // $('[data-page]').each(function (index) {
  //   const page = $(this).data('page');
  //   if (page === link) {
  //     $(this).show();
  //   } else {
  //     $(this).hide();
  //   }
  // });

  // Add the class active in the navbar
  $('li.nav-item').each(function () {
    const href = $(this).find('a.nav-link').attr('href');
    console.log(href);

    if (href === link) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
}


// Go to main page
goToPage('home');

// Iteration 2: Listen for click events on <a>
// Hint: event.preventDefault

$('a').click(function (event) {
  event.preventDefault();
  const href = $(this).attr('href');
  console.log(href);
  goToPage(href);
});
