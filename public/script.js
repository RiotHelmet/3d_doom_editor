// new item({ x: 100, y: 100, z: 0 }, 20, animation_sheet);



let player = new Player(clientID);


//--------------------------------------------------

function uploadData(data) {
  
  let numberString = ""
  let points = []
  let position = { x : 0, y : 0, z : 0}
  let returnPoint = { x : 0, y : 0, z : 0}
  let height;
  let currentStyle = "Object"
  let colors = []

  for (let i = 0; i < data.length; i++) {
    const character = data[i];

    if(currentStyle == "Object"){
    if(character !== "O" && character !== "H" && character !== "," && character !== ";" && character !== "x" && character !== "y" && character !== "z") {
      numberString += character
    }

    if(character == ",") {
      returnPoint.x = Number(numberString)
      numberString = ""
    }

    if(character == ";") {
      returnPoint.y = Number(numberString)
      numberString = ""
      points.push({ x : returnPoint.x , y : returnPoint.y, z : returnPoint.z})
    }

    if(character == "x") {
      position.x = Number(numberString)
      numberString = ""
    }
    if(character == "y") {
      position.y = Number(numberString)
      numberString = ""
    }
    if(character == "z") {
      position.z = Number(numberString)
      numberString = ""
    }

    if(character == "H") {
      height = Number(numberString)
      numberString = ""
    }}

    if(character == "r") {
      colors.push(getRandomColor())
    }
    if(character == "!") {
      colors.push("none")
    }
    

    if(character == "O") {
      numberString = ""
      new object(points, { x : position.x, y : position.y, z : position.z}, height, colors)
      colors = []
      points = []
      currentStyle == "Object"
    }
  }
}

uploadData("-240,40;-240,-60;360,-105;360,-60;-240,40;499H440x-1990y1zC!!rrrrO100,75;-100,75;-100,-225;100,75;1H300x-1725y0zC!!!!rO20,180;-30,180;-30,-270;20,-270;20,180;480H5x-80y20zC!!!r!rO40,530;-60,530;-60,-795;40,-795;40,530;499H160x-1155y1zC!!!r!rO-120,20;-120,-30;180,-30;180,20;-120,20;300H1120x-2470y200zC!!!r!rO240,30;-360,30;-360,-45;240,-45;240,30;300H2210x-2780y200zCr!!!!rO20,-130;20,195;-30,195;-30,-130;20,-130;300H980x-2320y200zCr!!!!rO-75,60;-50,-90;100,-90;100,60;-75,60;480H100x-410y20zC!!!r!rO60,110;-90,110;-90,-165;60,-165;60,110;499H140x-460y1zC!!!r!rO-446.875,-106.25;-246.875,193.75;78.125,193.75;203.125,143.75;353.125,143.75;353.125,-256.25;153.125,-206.25;-446.875,-106.25;1H646.875x-1843.75y0zC!!!!!!!!rO-80,50;-80,-50;120,-50;120,0;-80,50;499H880x-2100y1zC!!!r!rO-275,16.666666666666515;-275,-33.333333333333485;200,-33.333333333333485;200,16.666666666666515;200,16.666666666666515;-275,16.666666666666515;300H1575x-2466.6666666666665y200zC!!!rrrrO-30,120;-30,-180;45,-180;45,120;-30,120;300H1805x-2570y200zC!!rrrrO-230,100;-230,-150;345,-150;345,100;-230,100;20H255x-200y0zC!r!!!rO30,190;-45,190;-45,-285;30,-285;30,190;499H445x-1365y1zCrrr!rrO-100,-30;150,-30;150,45;-100,45;-100,-30;499H575x-1620y1zCr!!!!rO120,200;-180,200;-180,-150;120,-150;120,200;200H1180x-2300y0zCr!!!!rO-100,120;-100,-180;150,-180;150,120;-100,120;200H1950x-2570y0zC!!!!!rO-20,-90;30,-90;30,135;-20,135;-20,-90;300H970x-2035y200zC!r!r!rO240,120;-110,120;-110,-180;240,-180;240,120;200H2210x-2570y0zCr!!!!rO-20,120;-20,-180;30,-180;30,120;-20,120;480H2470x-2570y20zCrrrrrrO110,330;-165,330;-165,-495;110,-495;110,330;1H365x-680y0zC!!!!!rO310,-30;310,45;-465,45;-465,-30;310,-30;480H490x130y20zC!!!r!rO335,80;-440,80;-440,-120;210,-120;335,80;20H465x20y0zC!!!!!rO-50,40;-50,-35;75,-85;75,40;-50,40;499H775x-1615y1zC!r!!!rO-20,-80;30,-80;30,120;-20,120;-20,-80;300H970x-1820y200zC!r!r!rO220,140;-330,140;-330,-210;220,-210;220,140;200H1630x-2240y0zCrrr!rrO79.16666666666663,-125;79.16666666666663,75;4.166666666666629,150;-120.83333333333337,150;-120.83333333333337,-125;79.16666666666663,-125;20H595.8333333333334x-1050y0zC!!!r!!rO-60,-50;90,-50;90,75;-60,75;-60,-50;499H910x-1650y1zCr!!!!rO20,260;-30,260;-30,-390;20,-390;20,260;480H855x565y20zC!!!r!rO50,220;-75,220;-75,-330;50,-330;50,220;20H550x-570y0zC!r!!!rO120,160;-180,160;-180,-240;120,-240;120,160;1H1180x-1860y199zCrrrrrrO-280,-20;420,-20;420,30;-280,30;-280,-20;480H1155x845y20zCr!!!!rO160,20;-240,20;-240,-30;160,-30;160,20;480H715x-1195y20zCr!!!!rO-100,140;-100,-210;150,-210;150,140;-100,140;200H1950x-2240y0zC!!r!!rO18.75,-37.5;18.75,37.5;-56.25,37.5;18.75,-37.5;480H656.25x-937.5y20zC!!r!rO-37.5,-18.75;37.5,-18.75;37.5,56.25;-37.5,-18.75;480H637.5x-156.25y20zC!!r!rO30,290;-45,290;-45,-435;30,-435;30,290;480H645x-465y20zC!r!!!rO-160,-200;240,-200;240,300;-160,300;-160,-200;20H2260x-2250y0zC!!!!!rO-20,120;-20,-180;30,-180;30,120;-20,120;300H970x-1520y200zC!!r!!rO-130,80;-130,-120;70,-120;70,80;-130,80;20H805x-1055y0zC!!!!!rO-115,-120;185,-120;160,180;-115,180;-115,-120;200H1115x-1580y0zCr!r!!rO-18.75,-37.5;56.25,37.5;-18.75,37.5;-18.75,-37.5;480H818.75x137.5y20zCr!!!rO60,200;-90,200;-90,-300;60,-300;60,200;480H2590x-2150y20zCrr!!rrO220,-160;220,240;-330,240;-330,-160;220,-160;1H1630x-1940y0zCrrrrrrO-50,20;-50,-30;75,-30;75,20;-50,20;440H925x-1195y60zC!!!r!rO20,90;-30,90;-30,-135;20,-135;20,90;360H980x-1265y140zC!!!r!rO-100,60;-100,-90;150,-90;150,60;-100,60;180H1950x-2010y20zCr!rrrrO-50,-80;75,-80;75,120;-50,120;-50,-80;40H925x-1095y20zC!!!r!rO130,20;-195,20;-195,-30;130,-30;130,20;480H870x-945y20zC!!r!!rO-280,-260;-280,390;420,390;420,-260;-280,-260;20H1155x435y0zC!!!!!rO-230,-80;-105,120;345,120;345,-80;-230,-80;20H905x-20y0zC!!!!!rO-25,120;0,-180;25,-180;25,120;-25,120;300H1300x-1520y200zCr!!!!rO-110,90;-110,-135;165,-135;165,90;-110,90;40H1110x-1265y100zC!!!r!rO235,30;-315,30;-315,-45;235,-45;235,30;480H990x-130y20zCr!!!!rO220,20;-330,20;-330,-30;220,-30;220,20;500H1630x-1670y0zC!!r!!rO-110,-80;165,-80;165,120;-110,120;-110,-80;40H1110x-1095y60zC!!!r!rO-100,100;-100,-150;150,-150;150,100;-100,100;10H1950x-1800y0zCr!!!!rO-171.42857142857133,107.14285714285711;103.57142857142867,107.14285714285711;103.57142857142867,-317.8571428571429;153.57142857142867,-317.8571428571429;153.57142857142867,157.1428571428571;-171.42857142857133,157.1428571428571;-171.42857142857133,107.14285714285711;400H1171.4285714285713x-1082.142857142857y100zCrr!!!!!rO220,-180;220,270;-330,270;-330,-180;220,-180;20H2430x-1770y0zC!!r!!rO295,-45;295,55;-405,55;-480,-20;295,-20;20H1280x120y0zC!!!!!rO80,-20;80,30;-120,30;-120,-20;80,-20;500H1970x-1680y0zC!!!rrrO-20,-250;30,-250;30,375;-20,375;-20,-250;480H1595x450y20zC!!!r!rO-20,20;-20,-30;30,-30;30,20;-20,20;500H2070x-1670y20zC!rr!rrO-20,180;-20,-270;30,-270;30,180;-20,180;480H2670x-1680y20zCr!!!!rO-20,-70;5,-70;30,130;-20,130;-20,-70;480H1270x-30y20zCrrrrrrO20,-170;20,80;-30,80;-30,-170;20,-170;480H1255x-180y20zCrrrrrrO20,150;-30,150;-30,-225;20,-225;20,150;480H1255x-575y20zC!!!rrrO40,60;-60,60;-60,-90;40,-90;40,60;480H2060x-1560y20zC!!!rrrO-104.16666666666674,-191.66666666666666;-104.16666666666674,58.33333333333334;-79.16666666666674,258.33333333333337;195.83333333333326,258.33333333333337;195.83333333333326,-191.66666666666666;-104.16666666666674,-191.66666666666666;20H1379.1666666666667x-158.33333333333334y0zC!!!!!!rO30,-30;30,45;-45,45;-45,-30;30,-30;480H1320x-395y20zCrr!rrrO260,-100;60,150;-290,150;-290,-100;260,-100;20H2390x-1400y0zC!!!!!rO70,-30;70,45;-105,45;-105,-30;70,-30;20H1455x-395y0zC!!!!!rO40,100;-60,100;-60,-150;40,-150;40,100;480H2060x-1350y20zC!!!rrrO-100,100;100,-150;150,-150;-50,100;-100,100;480H2550x-1350y20zCr!!!!rO20,-30;20,45;-30,45;-30,-30;20,-30;480H1555x-395y20zC!rrrrrO325,16.66666666666663;-175,16.66666666666663;-400,66.66666666666663;-400,-58.33333333333337;325,-58.33333333333337;325,16.66666666666663;480H1675x-866.6666666666666y20zCrr!!!!rO130,-20;130,30;-195,30;-195,-20;130,-20;480H1970x220y20zCr!!rrrO80,-210;80,315;-120,315;-120,-210;80,-210;480H1695x-115y20zCr!r!rrO-60,-40;40,-40;140,60;-60,60;-60,-40;480H1635x-385y20zCrr!rrrO140,-30;140,45;-210,45;-210,-30;140,-30;480H2310x255y20zC!!!r!rO375,-150;-225,-150;-450,-100;-450,275;375,275;375,-150;20H1725x-700y0zC!!!!!!rO-140,50;-140,-75;210,-75;210,50;-140,50;40H2240x175y-20zC!r!!!rO-50,-25;50,75;50,-25;-50,-25;20H1725x-400y0zC!!!!rO-80,-50;120,-50;120,75;-80,75;-80,-50;480H2530x150y20zCr!!r!rO140,-160;140,240;-210,240;-210,-160;140,-160;20H2310x-1090y0zC!!!!!rO-130,-250;195,-250;195,375;-130,375;-130,-250;20H1905x-175y0zC!!!!!rO40,160;-60,160;-60,-240;40,-240;40,160;480H2060x-1010y20zCr!!rrrO-20,160;-20,-240;30,-240;30,160;-20,160;480H2470x-1010y20zCr!!!!rO-20,-290;30,-290;30,435;-20,435;-20,-290;480H2670x-335y20zCr!!r!rO140,115;-210,115;-210,-410;140,-410;140,115;1H2310x-15y-20zC!!!!!rO140,-70;140,105;-210,105;-210,-70;140,-70;20H2310x-780y0zC!!!!!rO-80,-80;120,-80;120,145;-80,95;-80,-80;480H2530x-770y20zC!!rrrrO-80,-210;120,-210;120,315;-80,315;-80,-210;40H2530x-215y-20zC!!!r!rO-140,70;-140,-180;210,-180;210,70;-140,70;40H2240x-495y-20zC!!!r!rO-80,90;120,90;120,-110;-80,-160;-80,90;20H2530x-515y0zC!!!!!rO")

//--------------------------------------------------
//          Game Object
//--------------------------------------------------

const game = {
              gameID : 0,
              playing : false,
              players : players,
              objects : objects,

              render: () => { clear(), game.objects.forEach(Object => {draw3d(Object)})},

              collision: () => {
                { game.objects.forEach(Object => { if(!Object.isPlayer)  { CirclevsOBB(player, Object); } }) }
              },

              updatePlayers: () => { updatePlayerMovement() },

              orderObjects: () => { orderObjects() },

              drawEffects: () => {},


}

  game.playing = true;

  player.id = clientID;
  player.position.x = 2310
  player.position.y = -15


  editor = new Editor();
  editor.displayCamera = player

//--------------------------------------------------
//          Stress Test
//--------------------------------------------------

  let size = 0;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size; k++) {
        new object(

[            {x: -20, y: 20, z: 0},

            {x: -20, y: -30, z: 0},

            {x: 30, y: -30, z: 0},

          {x: 30, y: 20, z: 0}
,
          {x: -20, y: 20, z: 0}
]
          , {x: i * 100, y: j * 100, z: k * 100 },
          30
        );
      }
    }
  }

//--------------------------------------------------
//          Gameloop
//--------------------------------------------------

let oldDate, newDate, deltaT

function gameLoop() {
  requestAnimationFrame(gameLoop);
  if (oldDate === undefined) {
		oldDate = Date.now()
	}

	newDate = Date.now()

  deltaT = newDate - oldDate;

  if(game.playing) {
  
                  game.updatePlayers()  // Updates player positions client and server side.
                  game.collision()      // Checks for collisions between player and objects
                  game.orderObjects()   // Orders objects so that they render in the correct order
                  game.render()         // Renders objects
                
                  // draw2d()

                  ctx.drawImage(
                    gun_sprite,
                    Math.floor(shoot_step) * 99.5,
                    0,
                    99.5,
                    138,
                    screenWidth / 2 - 60,
                    0,
                    120,
                    120
                  );
                
                  healthCount.innerHTML = `Health: ${player.health}`

                  // console.log(player.position.z) 

                  deltaMouse.x = 0;
                  deltaMouse.y = 0;
                  resetPlayerAnimation();
                
                  if (justShot == true) {
                    shoot_step += 0.2;
                    if (shoot_step > 4) {
                      shoot_step = 0;
                      justShot = false;
                    }
                  }
  } else {
    editor.draw()
  }

	oldDate = Date.now()
}

gameLoop();
