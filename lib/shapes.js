class Circle {
    constructor(radius, color, textColor, text) {
        this.radius = radius;
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    render() {
        return `<svg width="300" height="200">
        <circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="20px">${this.text}</text>
      </svg>`;
    }
}

class Square {
    constructor(side, color, textColor, text) {
        this.side = side;
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
    getArea() {
        return this.side ** 2;
    }
    render() {
        return `<svg width="300" height="200">
        <rect width="100%" height="100%" style="fill:${this.color};stroke-width:1;stroke:rgb(0,0,0)" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="20px">${this.text}</text>
      </svg>`;
    }
}

class Triangle {
    constructor(base, height, color, textColor, text) {
        this.base = base;
        this.height = height;
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
    render() {
        return `<svg width="300" height="200">
        <polygon points="150,0 300,200 0,200" style="fill:${this.color};stroke:purple;stroke-width:1" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="20px">${this.text}</text>
      </svg>`;
    
    }
}

module.exports = { Circle, Square, Triangle };