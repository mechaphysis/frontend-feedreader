/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test will loop through each feed
         * in the allFeeds object and ensure it has a URL defined
         * and that the URL is not empty.
         * For doing this we wrap the expects of Jasmine inside
         * a for...of loop that goes through every feed in allFeeds:
         */
        it('URL are defined', function() {
          for (let feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          };
        });

        /* This last test in 'RSS feeds' suite will loop through
         * each feed in the allFeeds object and ensure it has
         * a name defined and that the name is not empty.
         * For achieving that we wrap the Jasmine expects inside
         * a for...of loop like before:
         */
        it('names are defined', function() {
          for(let feed of allFeeds) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          };
        });
    });


    describe('The menu', function() {
    /* This is the second suite. It will test elements and
     * functionality regarding the Menu
     */

      /* This test ensures that the menu element is
      * hidden by default. The menu element is within the body tag
      * and it has a class 'menu-hidden' which in CSS corresponds
      * to hiding its visibility by default.
      * So we expect .hasClass('menu-hidden') to be true.
      * If we change even a bit the parameter for .hassClass
      * - for example, 'menu-hiddens' -  we can check
      * that the test will fail.
      */
      it('Menu element is hidden', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);

      })

      /* This second test ensures that the menu changes
      * visibility when the menu icon is clicked. This test
      * has two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */
      it('Menu changes visibility', function() {
        $('.menu-icon-link').trigger('click');
        /* First expect: upon triggering the click event we expect the 'menu-hidden'
         * class to be toggled off:
         */
        expect($('body').hasClass('menu-hidden')).toBe(false);
        $('.menu-icon-link').trigger('click');
        /* Second expect: triggering a click event again should toggle back on the
         *'menu-hidden' class
         */
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
