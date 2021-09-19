import dynamic from 'next/dynamic';
import React from 'react';
import useWindowSize from '../lib/useWindowSize'

const Sketch = dynamic(import('react-p5'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});

export default function PlaneSketch({ questions }) {
    let questionsDone = 0;
    let chosenAnswers = [];

    let time = 0;

    let stars = [];

    let planeX;
    let planeY;
    let deltaX = 5;
    let blastRadius = 0;

    /* 
        fly in
        time to think + answer
        blast beam + reveal colors (correct = red, others = green)
        enemy fly past
    */
    let flyInTime = 2000;
    let answerTime = 2000;
    let blastTime = 1000;
    let flyOutTime = 2000;
    let totalTime = flyInTime + answerTime + blastTime + flyOutTime;

    let size = useWindowSize();
    let countdownFinished = false;
    let midX = size.width / 2
    let midY = size.height / 2

    let enemyX;
    let enemyY = 0;
    let enemyOffset;
    let enemyWidth = 200;
    let enemyHeight = 100;

    let enemyColors;

    let plane;
    let explosion
    const preload = (p5) => {
        plane = p5.loadImage('../assets/plane.png')
        explosion = p5.loadImage("../assets/explosion.png")
    };

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(size.width, size.height - 50).parent(canvasParentRef);
        p5.ellipseMode(p5.RADIUS)

        plane.resize(100, 100)
        explosion.resize(enemyWidth, enemyHeight)

        planeX = (p5.width - plane.width) / 2;
        planeY = p5.height - plane.height;

        class Star {
            constructor() {
                this.x = p5.random(p5.width);
                this.y = p5.random(p5.height);
                this.size = p5.random(0.25, 1);
                this.t = p5.random(p5.TAU);
            }

            draw() {
                this.t += 0.1;
                var scale = this.size + Math.sin(this.t) * 2;
                p5.noStroke();
                p5.ellipse(this.x, this.y, scale, scale);
            }
        }

        for (var i = 0; i < 20; i++) {
            stars[i] = new Star();
        }
    };


    const draw = (p5) => {
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes

        p5.background(0);

        p5.fill(255);

        stars.forEach(star => star.draw())

        // in milliseconds
        time += p5.deltaTime;

        if (!countdownFinished) {
            p5.textSize(50)
            if (time <= 1000) {
                p5.text("3", midX, midY);
            }
            else if (1000 <= time && time <= 2000) {
                p5.text("2", midX, midY);
            }
            else if (2000 <= time && time <= 3000) {
                p5.text("1", midX, midY);
            }
            else if (time > 3000) {
                countdownFinished = true;
            }
        }

        if (countdownFinished) {
            let currQuestion = questions[questionsDone];

            if (questionsDone * totalTime + 3000 <= time && time <= (questionsDone + 1) * totalTime + 3000) {
                enemyX = size.width / (currQuestion.choices.length + 1);
                enemyOffset = enemyX / 2;

                // let enemies fly in
                if (questionsDone * totalTime + 3000 <= time && time <= questionsDone * totalTime + 3000 + flyInTime) {
                    enemyColors = [...Array(currQuestion.choices.length)].map((_, i) => p5.color(255, 255, 255))
                    enemyY = p5.lerp(0, 100, (time - (questionsDone * totalTime + 3000)) / flyInTime)
                }

                // let user think
                if (questionsDone * totalTime + 3000 + (flyInTime) <= time &&
                    time <= questionsDone * totalTime + 3000 + (flyInTime + answerTime)) {
                    let lerpAmt = (time - (questionsDone * totalTime + 3000 + flyInTime)) / (blastTime);
                    blastRadius = p5.lerp(0, 20, lerpAmt)
                }

                // blast beam + show colors
                if (questionsDone * totalTime + 3000 + (flyInTime + answerTime) <= time &&
                    time <= questionsDone * totalTime + 3000 + (flyInTime + answerTime + blastTime)) {
                    if (chosenAnswers.length != questionsDone + 1) {
                        chosenAnswers.push(
                            Math.floor(
                                (planeX + (plane.width / 2) - enemyOffset) / enemyX
                            )
                        )
                    }
                    p5.image(explosion, enemyX * chosenAnswers[questionsDone] + enemyOffset, enemyY)
                    p5.rect(planeX + (plane.width / 2) - 5, 0, 10, p5.height - (plane.height / 2))
                    let lerpAmt = (time - (questionsDone * totalTime + 3000 + (flyInTime + answerTime))) / (blastTime);
                    for (let i = 0; i < enemyColors.length; i++) {
                        if (i == currQuestion.correct) {
                            enemyColors[i] = p5.lerpColor(
                                p5.color(255, 255, 255), p5.color(255, 0, 0), lerpAmt
                            )
                        } else {
                            enemyColors[i] = p5.lerpColor(
                                p5.color(255, 255, 255), p5.color(0, 255, 0), lerpAmt
                            )
                        }
                    }
                }

                // fly past
                if (questionsDone * totalTime + 3000 + (flyInTime + answerTime + blastTime) <= time &&
                    time <= (questionsDone + 1) * totalTime + 3000) {
                    blastRadius = 0;

                    let lerpAmt = (time - (questionsDone * totalTime + 3000 + (flyInTime + answerTime + blastTime))) / (flyOutTime);
                    enemyY = p5.lerp(100, p5.height, lerpAmt)
                }

                p5.text(currQuestion.question, enemyOffset, enemyY - 20)

                currQuestion.choices.forEach((choice, i) => {
                    if (chosenAnswers[questionsDone] != i) {
                        p5.fill(enemyColors[i])
                        p5.rect(enemyX * i + enemyOffset, enemyY, enemyWidth, enemyHeight, 10)
                        p5.fill(0)
                        p5.text(choice, enemyX * i + enemyOffset, enemyY + enemyHeight / 2)
                        p5.fill(255);
                    }
                })
            } else {
                questionsDone += 1
                if (questionsDone == questions.length) {
                    questionsDone = questions.length - 1;

                    // game ended
                    // console.log(chosenAnswers)
                }
            }
        }

        p5.ellipse(planeX + (plane.width / 2), planeY, blastRadius, blastRadius);
        p5.image(plane, planeX, planeY);

        if (p5.keyIsDown(p5.LEFT_ARROW)) {
            planeX -= deltaX;
        } else if (p5.keyIsDown(p5.RIGHT_ARROW)) {
            planeX += deltaX;
        }
    };

    return (<Sketch preload={preload} setup={setup} draw={draw} />);
};


