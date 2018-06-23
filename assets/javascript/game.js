// CONTENT LIST
// 1. Generate a list of words and store it in a variable
// 2. Concatenate arrays of words and generate a word at random to store in a variable
// 3. Launch game throught a window.onload function
// 3.1 Set variables to hold word (to play with) and scores
// 3.2 Generate content for empty array of Letters and display underlines in the screen
// 3.3 Display length of remaining letters in the screen
// 3.3.1 Display wins variable in the screen
// 3.4 Set onkeyup event to start game
// 3.4.1 Capture correct guesses and replace the underscore form them
// 3.4.1.1 Set conditional for wins
// 3.4.2 Capture incorrect guesses
// 3.4.2.1 Set conditional for looses

// 1. Generate a list of words and store it in a variable
var listOfWords = [
  [
    'auctioneer',
    'blacksmith',
    'cryptographer',
    'doorman',
    'entomologist',
    'firefighter',
    'gemcutter',
    'hairdresser',
    'internist',
    'jeweler',
    'karate teacher',
    'landscaper',
    'mathematician',
    'negotiator',
    'ornithologist',
    'percussionist',
    'quilter',
    'restauranteur',
    'stockbroker',
    'taxidermist',
    'undertaker',
    'vicar',
    'woodcarver',
    'xylophonist',
    'yodeler',
    'zookeeper'
  ],
  [
    ('accomplished',
    'burdensome',
    'cavernous',
    'embellished',
    'flamboyant',
    'gregarious',
    'humongous',
    'imperturbable',
    'juvenile',
    'lighthearted',
    'mountainous',
    'naughty',
    'outstanding',
    'prickly',
    'quizzical',
    'remorseful',
    'shimmering',
    'threadbare',
    'unaware',
    'voluminous',
    'warmhearted',
    'yellowish',
    'zealous')
  ]
];

// 2. Concatenate arrays of words and generate a word at random to store in a variable
var randomWord = listOfWords[0].concat(listOfWords[1]);
randomWord = randomWord[Math.floor(Math.random() * randomWord.length)];

// 3. Launch game throught a window.onload function
window.onload = function() {
  alert('Lets help Victor to guess the covered word');

  // 3.1 Set variables to hold word (to play with) and scores
  var lettersRemaining = randomWord.length;
  var ArrayOfLetters = [];
  var incorrectGuesses = [];
  var correctGuess = [];
  var wins = 0;

  // 3.2 Generate content for empty array of letters and display underlines in the screen
  var ArrayOfLetters = Array.from(randomWord);
  for (var i = 0; i < randomWord.length; i++) {
    ArrayOfLetters[i] = '_ ';
    var hideComma = ArrayOfLetters.join('');
    document.getElementById('word-space').innerHTML = hideComma;
  }

  // 3.3 Display length of remaining letters in the screen
  document.getElementById('remainingGuesses').innerHTML = lettersRemaining;

  // 3.3.1 Display wins variable in the screen
  document.getElementById('gamesWon').innerHTML = wins;

  // 3.4 Set onkeyup event to start game
  document.onkeyup = function startGame() {
    var playerGuess = event.key;
    if (event.keyCode > 64 && event.keyCode < 91) {
      document.getElementById('startGame').innerHTML = '';
    } else {
      document.getElementById('invalidLetter').innerHTML =
        'Choose a valid letter!';
    }

    // 3.4.1 Capture correct guesses and replace the underscores
    if (randomWord.includes(playerGuess)) {
      for (var j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === playerGuess) {
          ArrayOfLetters[j] = playerGuess;
        }
      }
      lettersRemaining--;
      correctGuess = true;
      document.getElementById('word-space').innerHTML = ArrayOfLetters.join(
        ' '
      );
    }

    // 3.4.1.1 Set conditionals for wins
    if (lettersRemaining <= 0 && ArrayOfLetters.includes('_ ') != true) {
      wins++;
      document.getElementById('gamesWon').innerHTML = wins;
      document.getElementById('winMessage').innerHTML =
        'Congratulations you win. Press any valid letter to start again';
      document.onkeyup = function() {
        if (event.keyCode > 64 && event.keyCode < 91) {
          window.location.reload();
        } else {
          document.getElementById('invalidLetter').innerHTML =
            'Choose a valid letter!';
        }
      };
    }

    // 3.4.2 Capture incorrect guesses
    else {
      for (var j = 0; j < randomWord.length; j++) {
        if (randomWord.indexOf(playerGuess) === -1) {
          correctGuess = false;
        }
      }
      if (
        event.keyCode > 64 &&
        event.keyCode < 91 &&
        incorrectGuesses.indexOf(playerGuess) != false
      ) {
        incorrectGuesses.push(playerGuess);
        document.getElementById(
          'guessedLetters'
        ).innerHTML = incorrectGuesses.join(', ');
        lettersRemaining--;
        document.getElementById(
          'remainingGuesses'
        ).innerHTML = lettersRemaining;
      }
    }

    // 3.4.2.1 Set conditionals for looses
    if (lettersRemaining === 0) {
      document.getElementById('loseMessage').innerHTML =
        'Your letters did not match the word.  Press any letter to start again.';
      document.onkeyup = function() {
        if (event.keyCode > 64 && event.keyCode < 91) {
          window.location.reload();
        } else {
          document.getElementById('invalidLetter').innerHTML =
            'Choose a valid letter!';
        }
      };
    }
  };
};
