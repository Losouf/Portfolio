let particles = [];
let numParticles;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    let canvas = createCanvas(windowWidth, windowHeight);

    // Déterminer le nombre de particules en fonction de la taille de l'écran
    if (windowWidth <= 768) {
        numParticles = 20; // Moins de particules pour les petits écrans
    } else {
        numParticles = 100; // Nombre par défaut de particules
    }
    
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background('#d2d2d2');
    for (let particle of particles) {
        particle.update();
        particle.show();
        particle.connect(particles);
    }
}

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-0.25, 0.25), random(-0.25, 0.25)); // Vitesse réduite
        this.size = 4;
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    show() {
        noStroke();
        fill(0);
        circle(this.pos.x, this.pos.y, this.size);
    }

    edges() {
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x *= -1;
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.vel.y *= -1;
        }
    }

    connect(particles) {
        for (let particle of particles) {
            let d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < 120) {
                stroke(0);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    
    // Recalculer le nombre de particules lors du redimensionnement de la fenêtre
    particles = [];
    if (windowWidth <= 768) {
        numParticles = 50; // Moins de particules pour les petits écrans
    } else {
        numParticles = 100; // Nombre par défaut de particules
    }
    
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
}
