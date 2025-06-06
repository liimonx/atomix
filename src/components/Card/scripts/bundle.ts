import Card from './index';
import { 
  applyHoverEffect, 
  applyFocusEffect, 
  makeCardClickable, 
  initializeAllCards,
  applyElevationEffect,
  applyFlipEffect
} from './cardInteractions';

// Expose to global scope
declare global {
  interface Window {
    Atomix: Record<string, any>;
  }
}

// Initialize global namespace if not exists
window.Atomix = window.Atomix || {};

// Add Card to global namespace
window.Atomix.Card = Card;
window.Atomix.applyCardHoverEffect = applyHoverEffect;
window.Atomix.applyCardFocusEffect = applyFocusEffect;
window.Atomix.makeCardClickable = makeCardClickable;
window.Atomix.initializeAllCards = initializeAllCards;
window.Atomix.applyCardElevationEffect = applyElevationEffect;
window.Atomix.applyCardFlipEffect = applyFlipEffect;

export default Card; 