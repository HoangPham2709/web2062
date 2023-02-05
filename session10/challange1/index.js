const poll = {
    question: 'đâu là ngôn ngữ yêu thích của bạn',
    Options: ['0: JS', '1: JAVA', '2: C++', '3: PHP'],

    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.Options.join('\n')}
                \n(chọn đáp án của bạn)`
            ));
        console.log(answer);
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;


        this.displayResults();
        this.displayResults('string');

    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')} `);
        }
    },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));