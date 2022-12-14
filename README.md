# Decode

Link to deployed URL - [Decode](https://decoding.surge.sh/) & [Backend API](https://pseudo-x.herokuapp.com/redoc)

[Decode](https://decoding.surge.sh/) is a platform which converts code into easy to understand language.

![Decode architecture](mockups/flow.png)

## Project Description

Sometimes we write some code or we copy the code from some resource but we can’t interpret the working/logic behind the code. While writing the code when we get stuck in some problem, we directly redirect to StackOverflow or GitHub but from there we don’t get in-depth knowledge about the code.

To solve the particular problem we have to build a website to interpret the complex code easily. Through this website, we are targeting to deliver a comprehensive analysis of the code with the help of machine learning. With the help of machine learning, we are planning to add automatic generation of pseudocode based on the user's input.

While writing code you will also get real-time recommendations to improve your code quality as per industry standards.

We are also providing the translation of pseudocode in 118 global languages because people from non-English speaking countries find it difficult to understand the pseudocode in English, So we decided to extend our helping hand to them.

The automatically generated pseudo code will act as a blueprint and will help our users to understand the code better. Apart from this, we have given flow chart generation which will help the user to comprehend the code better because visual things have a much greater impact on the human brain as compared to textual format.

You can share your code by clicking just a button. It will give a unique URL to your code to share with your friends, colleagues, or teachers.

Test and Compile feature is available on this website so that users can cross-check his / her output based on the input.

User will also get insight to memory and time consumption of the program.

## Mockups

![ss1](mockups/decode1.png)
![ss2](mockups/decode2.png)
![ss3](mockups/decode3.png)
![ss4](mockups/decode4.png)
![ss5](mockups/decode5.png)

## Presentation

[PPT](https://docs.google.com/presentation/d/1R767ack-2fZx-W1FVFHRi0XrrJph0PCmLfz5FjJ0Zzk/edit#slide=id.gc6f980f91_0_0)

## Video

[Video Presentation](https://vimeo.com/544099612)

## Instructions

1. Clone the repository into your local system
2. For running backend, `cd backend` and then run `pipenv shell`.
3. For installing the packages do `pipenv install`. Then run `python main.py`
4. For running the website `cd website` .
5. Installation of node modules to be done by `yarn` or `npm install`
6. Run the website by `yarn start` or `npm start`

## Tech Stack

Python, ReactJS, TailwindCSS, Pylint, FastAPI, GoogleTranslator, Hackerearth API, FlowChartJS, Sqlite3.

## Contributors

- [Adit Patel](https://github.com/aditpatel01)
- [Aryamaan Pandey](https://github.com/Aryamaan23)
