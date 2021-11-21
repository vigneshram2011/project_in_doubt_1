array_1 = ["pen", "paper", "book", "bottle", "apple", "hand", "burger", "ice-cream", "triangle", "square", "smiley-face emoji", "ladder"];
random_number = Math.floor((Math.random() * array_1.length) + 1);
console.log(array_1[random_number]);
sketch = array_1[random_number];

document.getElementById("sketch_to_draw").innerHTML = "Sketch to be Drawn : " + sketch;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function updateCanvas() {
    background("white");
}

function setup() {
}

function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}
