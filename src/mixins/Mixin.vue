<script>
export default {
  created() {
    setTimeout(() => {
      this.breakAllTitles();
    }, 100);
  },
  methods: {
    breakAllTitles() {
      const titles = document.querySelectorAll(".title-animation");
      for (let i = 0; i < titles.length; i++) {
        const element = titles[i];
        this.createWords(element);
      }
    },
    createWords(title) {
      let titleWrapper = title;
      let sentence = titleWrapper.innerHTML;
      let words = sentence.split(" ");
      let delayValue = 0.3;
      titleWrapper.innerHTML = "";
      for (let j = 0; j < words.length; j++) {
        if (!words[j] == "") {
          let letters = words[j].split("");
          const wordWrapper = document.createElement("span");
          const wordSpaceWrapper = document.createElement("span");
          wordWrapper.style.display = "inline-block";
          const wordSpaceChar = document.createTextNode(" ");
          for (let n = 0; n < letters.length; n++) {
            const letter = letters[n];
            const letterSpan = document.createElement("span");
            const letterChar = document.createTextNode(letter);
            letterSpan.appendChild(letterChar);
            wordWrapper.appendChild(letterSpan);
            this.addDelay(letterSpan, delayValue);
            delayValue += 0.075;
          }
          wordSpaceWrapper.appendChild(wordSpaceChar);
          titleWrapper.appendChild(wordWrapper);
          titleWrapper.appendChild(wordSpaceWrapper);
        }
      }
      this.startAnimations();
    },
    addDelay(letterDiv, delayFactor) {
      letterDiv.style.transitionDelay = delayFactor + "s";
    },
    startAnimations() {
      setTimeout(() => {
        document.body.classList.add("animations--started");
      }, 500);
    }
  }
};
</script>