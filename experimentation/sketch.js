// P_2_1_3_05
// 
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * changing positions of stapled circles in a grid
 *      
 * MOUSE
 * position x          : horizontal position shift
 * position y          : vertical position shift
 * left click          : random position shift
 * 
 * KEYS
 * s                   : save png
 */

var tileCountX = 10;
var tileCountY = 80;
var count = 0;
var colorStep = 6;
var endSize = 30;
var stepSize = 100;
var actRandomSeed = 0;


function setup() { 
  createCanvas(780, 780);
} 

function draw() { 
  //colorMode(HSB, 360, 100, 100); 
  smooth();
  noStroke();
  background(360); 
  randomSeed(actRandomSeed);
  stepSize = mouseY/10;
  endSize = mouseX/10;
  for (var gridX=0; gridX<= tileCountY; gridX++) {
    for (var gridY=0; gridY<= tileCountX; gridY++) {  

      // kachelgr?ssen und positionen
      var tileWidth = width/ tileCountX;
      var tileHeight = height / tileCountY;
      var posX = tileWidth*gridX;
      var posY = tileHeight*gridY;
      switch(int(random(4))) {
      case 0: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var diameter = map(i,0,stepSize,tileWidth,endSize);
          fill(255-(i*colorStep));
          ellipse(posX+i, posY, diameter,diameter);
        }
        break;
      case 1: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var diameter = map(i,0,stepSize,tileHeight,endSize);
          fill(255-(i*colorStep));
          ellipse(posX, posY+i, diameter,diameter);
        }
        break;
      case 2: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var diameter = map(i,0,stepSize,tileWidth,endSize);
          fill(255-(i*colorStep));
          ellipse(posX-i, posY, diameter,diameter);
        }
        break;
      case 3: 
        // modul
        for(var i=0; i< stepSize; i++) {
          var diameter = map(i,0,stepSize,tileHeight,endSize);
          fill(random(255),random(255),random(255),random(255));
          ellipse(posX, posY-i, diameter,diameter);
        }
       
        break;
      }
    }
  }
} 

function mousePressed() {
  actRandomSeed = int(random(1000));
  
}

function keyTyped(){
  if (key == 's' || key == 'S') save("P_2_1_3_05.png");

} 

