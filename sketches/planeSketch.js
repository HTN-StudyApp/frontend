import dynamic from 'next/dynamic';
import useWindowSize from '../lib/useWindowSize'

const Sketch = dynamic(import('react-p5'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});

let planeX;
let planeY;
let deltaX;
let time = 0;
export default function PlaneSketch({ questions }) {
    let questionsLeft = questions;

    let size = useWindowSize();

    let plane;
    const preload = (p5) => {
        plane = p5.loadImage('../plane.png')
    };

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(size.width, size.height - 50).parent(canvasParentRef);
        plane.resize(100, 100)

        planeX = (p5.width - plane.width)/2;
        planeY = p5.height - plane.height;

        // deltaX = (size.width/(questions[0].choices.length+1));
        // planeX = deltaX*3/4;
        deltaX = 5
    };

    /* 
        3 2 1 countdown
        let question fly in
        10 seconds wait
        let question fly in
        10 seconds wait
    */

    const draw = (p5) => {
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes

        p5.background(0);
        p5.image(plane, planeX, planeY);

        // time += p5.deltaTime;
        // while (questionsLeft.length > 0) {

        // }

        if (p5.keyIsDown(p5.LEFT_ARROW)) {
            planeX -= deltaX;
        } else if (p5.keyIsDown(p5.RIGHT_ARROW)) {
            planeX += deltaX;
        }
    };

    return (<Sketch preload={preload} setup={setup} draw={draw} />);
};