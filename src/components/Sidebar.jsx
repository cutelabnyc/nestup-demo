
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu noOverlay disableAutoFocus disableOverlayClick width="600px">
      <h1>Nestup — The Nested Tuplet Generator</h1>
      <p>It's Nestup, a language for describing and generating musical rhythms. You can easily generate triplets, quintuplets, septuplets, and much more.</p>
      <p>Try selecting from one of the preprogrammed patterns to get a sense for how it works</p>
      <p>You can also read <a href="https://github.com/cutelabnyc/nested-tuplets#cheat-sheet">a full description of the language</a></p>
      <p>Also available as a <a href="brokenlink">Max for Live device</a> from this broken link</p>
    </Menu>
  );
};