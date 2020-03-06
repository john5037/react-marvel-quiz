import React, { Component } from 'react';

import quizService from '../quizService';
import QuestionBox from './QuestionBox/QuestionBox';
import Result from './Result/Result';

class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };

  getQuestion = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  }

  componentDidMount() {
    this.getQuestion();
  }

  computeAnswer = (answer, correct) => {
    if (answer === correct) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 3 ? this.state.responses + 1 : 3
    });
  }

  playAgain = () => {
    this.getQuestion();
    this.setState({
      score: 0,
      responses: 0
    });
  }

  render() {
    return (
      <div className="ui center aligned header">
        <div className="ui medium header">Marvel React Qui</div>
        {this.state.questionBank.length > 0 && 
          this.state.responses < 3 &&
          this.state.questionBank.map(
            ({question, answers, correct, questionId}) => (
              <QuestionBox 
                question={question} 
                options={answers} 
                key={questionId} 
                selected={answer => this.computeAnswer(answer, correct)}
              />
            )
          )}

        {this.state.responses === 3 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
      </div>
    );
  }
}

export default App;
