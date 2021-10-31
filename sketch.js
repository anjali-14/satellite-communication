function preload() {
satelitteImg= loadImage("other/satellite.png");
  
  groundStationLeftImg= loadImage("other/gstation1.png");
  groundStationRightImg= loadImage("other/gstation2.png");
  
  earthImg= loadAnimation("other/earth1.png");
  
  upLinkLeftImg= loadAnimation("leftu/upleft1.png","leftu/upleft2.png","leftu/upleft3.png","leftu/upleft4.png","leftu/upleft5.png","leftu/upleft6.png","leftu/upleft7.png","leftu/upleft8.png");
  
  upLinkRightImg= loadAnimation("rightu/upright1.png","rightu/upright2.png","rightu/upright3.png","rightu/upright4.png","rightu/upright5.png","rightu/upright6.png","rightu/upright7.png","rightu/upright8.png")
  
  downLinkLeftImg= loadAnimation("leftd/dleft1.png","leftd/dleft2.png","leftd/dleft3.png","leftd/dleft4.png","leftd/dleft5.png","leftd/dleft6.png","leftd/dleft7.png","leftd/dleft8.png")
  
  downLinkRightImg= loadAnimation("rightd/dright1.png","rightd/dright2.png","rightd/dright3.png","rightd/dright4.png","rightd/dright5.png","rightd/dright6.png","rightd/dright7.png","rightd/dright8.png")
}

function draw() {
  background(220);
}