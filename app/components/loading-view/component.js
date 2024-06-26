import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  /**
   * Quotes from: https://www.npmjs.com/package/funnies which has an MIT License
   * @property {Array} funnies
   */
  funnies: [
    'Reticulating splines...',
    'Generating witty dialog...',
    'Swapping time and space...',
    'Spinning violently around the y-axis...',
    'Tokenizing real life...',
    'Bending the spoon...',
    'Filtering morale...',
    "Don't think of purple hippos...",
    'We need a new fuse...',
    'Have a good day.',
    '640K ought to be enough for anybody',
    'The architects are still drafting',
    'The bits are breeding',
    "We're building the buildings as fast as we can",
    'Would you prefer chicken, steak, or tofu?',
    '(Pay no attention to the man behind the curtain)',
    '...and enjoy the elevator music...',
    'Please wait while the little elves draw your map',
    "Don't worry - a few bits tried to escape, but we caught them",
    'Would you like fries with that?',
    'Checking the gravitational constant in your locale...',
    'Go ahead -- hold your breath!',
    "...at least you're not on hold...",
    'Hum something loud while others stare',
    "You're not in Kansas any more",
    'The server is powered by a lemon and two electrodes.',
    'Please wait while a larger software vendor in Seattle takes over the world',
    "We're testing your patience",
    'As if you had any other choice',
    'Follow the white rabbit',
    "Why don't you order a sandwich?",
    'While the satellite moves into position',
    'The bits are flowing slowly today',
    "Dig on the 'X' for buried treasure... ARRR!",
    "It's still faster than you could draw it",
    "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
    'I should have had a V8 this morning.',
    'My other loading screen is much faster.',
    "Testing on Timmy... We're going to need another Timmy.",
    'Reconfoobling energymotron...',
    '(Insert quarter)',
    'Are we there yet?',
    'Have you lost weight?',
    'Just count to 10',
    'Why so serious?',
    "It's not you. It's me.",
    'Counting backwards from Infinity',
    "Don't panic...",
    'Embiggening Prototypes',
    'Do you come here often?',
    "Warning: Don't set yourself on fire.",
    "We're making you a cookie.",
    'Creating time-loop inversion field',
    'Spinning the wheel of fortune...',
    'Loading the enchanted bunny...',
    'Computing chance of success',
    "I'm sorry Dave, I can't do that.",
    'Looking for exact change',
    'All your web browser are belong to us',
    'Eating brownie points...',
    'Finding cat pictures...',
    'Calculating route through hyperspace...',
    'Solving for "X"...',
    'Recounting votes...',
    'Give an engineer a screwdriver, and they will conquer the world… one screw at a time.'
  ],
  /**
   * Get a random quote
   * @property {String} loadingMessage
   */
  loadingMessage: computed('funnies.length', {
    get() {
      const index = Math.floor(Math.random() * this.funnies.length);

      return this.funnies[index];
    }
  })
});
