soundtrack:  https://www.youtube.com/watch?v=L_XJ_s5IsQc



Lets make some art using classes
Lets create lots of circles in different sizes and colors on a webpage!

In HTML5 there is an elements called canvas. It works just like a real canvas. You can paint elements like lines, circles and much more to the canvas.

Paint a circle to a canvas element
First add the canvas element to your html. Now draw a circle on the canvas using js. Google is your friend here :)

When you have added a normal circle, try filling it out so it has a color. Again google time!

Class creation time!
Lets create a class called Circle. The circle should be used like this:

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();
Where the constructor should look like this: constructor(x, y, r, startAngle, endAngle, fillColor)

The circle should have one method: draw that draws the circle to the canvas. That means that creating an instance of the circle class will not draw the circle. Drawing the circle first happens when we call the draw method.

Test if the new class works by creating a circle and drawing it to the canvas. Try some different radiuses, positions and fill colors.

Now lets make art!
Every 100ms create a new circle instance and draw that to the canvas.

The circle should have random x, y, radius and color. For giving the circle a random color what should we do?? We should google off course!

What if we wanted the canvas to have the same width and height of the screen?

Follow the mouse - optional
Instead of the circles just randomly appearing on the screen, make them appear around the cursor.